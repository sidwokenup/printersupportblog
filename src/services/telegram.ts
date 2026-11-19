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

export function formatLeadMessage(lead: Record<string, any>) {
  const isPromo = lead.leadType === "promotions";
  const headerIcon = isPromo ? "🎁 <b>NEW PROMOTIONAL DEALS OPT-IN</b>" : "📞 <b>PRIORITY CALLBACK REQUEST</b>";

  return `${headerIcon}

👤 <b>Name:</b> ${lead.fullName || 'Valued Visitor'}
📞 <b>Phone:</b> <code>${lead.phone}</code>
📧 <b>Email:</b> ${lead.email ? `<a href="mailto:${lead.email}">${lead.email}</a>` : 'Not provided'}

🎯 <b>Inquiry / Request:</b>
${lead.issueFacing || (isPromo ? 'Wants promotional discounts and deal notifications' : 'Hardware buying advice & callback')}

🖨️ <b>Category / Series:</b> ${lead.printerSeries || lead.interestCategory || 'All Printers'}
⏰ <b>Preferred Callback Window:</b> ${lead.preferredTime || 'As soon as possible'}
🔔 <b>Marketing & SMS Consent:</b> ${lead.promotionalOptIn ? '✅ Opted-in for SMS & Email Deals' : '❌ Callback only'}

🌐 <b>Landing Page:</b> ${lead.pageUrl || 'Direct'}
📱 <b>Device:</b> ${lead.device || 'Desktop'}
🔍 <b>Source:</b> ${lead.source || 'Website'}
🕒 <b>Time:</b> ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} EST`;
}
