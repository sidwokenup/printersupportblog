export async function sendTelegramNotification(message: string) {
  // Safely parse environment variables (in case they were pasted with quotes in Vercel)
  const botToken = process.env.TELEGRAM_BOT_TOKEN?.replace(/^"|"$/g, '');
  const chatIdsString = process.env.TELEGRAM_CHAT_ID?.replace(/^"|"$/g, '');

  if (!botToken || !chatIdsString) {
    console.warn("Telegram configuration missing. Notification skipped.");
    return;
  }

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  
  // Support multiple chat IDs separated by commas
  const chatIds = chatIdsString.split(',').map(id => id.trim()).filter(Boolean);

  const sendPromises = chatIds.map(async (chatId) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "HTML",
        }),
      });

      if (!response.ok) {
        console.error(`Failed to send Telegram notification to ${chatId}`, await response.text());
      } else {
        console.log(`Lead successfully sent to Telegram chat: ${chatId}`);
      }
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const err = error as any;
      console.error(`Error sending Telegram notification to ${chatId}:`, err?.message || err);
    }
  });

  // Wait for all messages to finish sending
  await Promise.allSettled(sendPromises);
}

export function formatLeadMessage(lead: Record<string, string | undefined>) {
  return `🚨 <b>NEW LEAD RECEIVED</b>

🖨️ <b>Printer Series:</b>
${lead.printerSeries || 'N/A'}

⚠️ <b>Issue Facing:</b>
${lead.issueFacing || 'N/A'}

💻 <b>OS:</b>
${lead.operatingSystem || 'N/A'}

📞 <b>Phone:</b>
${lead.phone}

📧 <b>Email:</b>
${lead.email ? `<a href="mailto:${lead.email}">${lead.email}</a>` : 'N/A'}

🌐 <b>Page:</b>
${lead.pageUrl || 'Direct'}

🕒 <b>Time:</b>
${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} (EST)

📱 <b>Device:</b>
${lead.device || 'Unknown'}

🔍 <b>Source:</b>
${lead.source || 'Organic'}`;
}
