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
        parse_mode: "Markdown",
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
  return `🚨 *NEW LEAD RECEIVED*

👤 *Name:*
${lead.fullName}

📞 *Phone:*
${lead.phone}

📧 *Email:*
[${lead.email}](mailto:${lead.email})

🌐 *Page:*
${lead.pageUrl || 'Direct'}

🕒 *Time:*
${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} (EST)

📱 *Device:*
${lead.device || 'Unknown'}

🔍 *Source:*
${lead.source || 'Organic'}
  `;
}
