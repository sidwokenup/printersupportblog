export async function sendTelegramNotification(message: string) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.warn("Telegram configuration missing. Notification skipped.");
    return;
  }

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

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
      console.error("Failed to send Telegram notification", await response.text());
    }
  } catch (error) {
    console.error("Error sending Telegram notification:", error);
  }
}

export function formatLeadMessage(lead: Record<string, string | undefined>) {
  return `🚨 <b>NEW LEAD RECEIVED</b>

👤 <b>Name:</b>
${lead.fullName}

📞 <b>Phone:</b>
${lead.phone}

📧 <b>Email:</b>
<a href="mailto:${lead.email}">${lead.email}</a>

🌐 <b>Page:</b>
${lead.pageUrl || 'Direct'}

🕒 <b>Time:</b>
${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} (EST)

📱 <b>Device:</b>
${lead.device || 'Unknown'}

🔍 <b>Source:</b>
${lead.source || 'Organic'}`;
}
