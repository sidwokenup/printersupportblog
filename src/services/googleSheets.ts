import { google } from "googleapis";

export async function appendToGoogleSheet(leadData: Record<string, string | undefined>) {
  try {
    const credentials = {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      project_id: process.env.GOOGLE_PROJECT_ID,
    };
    
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (!credentials.client_email || !credentials.private_key || !spreadsheetId) {
      console.warn("Google Sheets configuration missing. Skipped appending lead.");
      return;
    }

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Date Time Name Phone Email Page URL UTM Source UTM Campaign Device Status
    const values = [
      [
        new Date().toLocaleDateString(),
        new Date().toLocaleTimeString(),
        leadData.fullName,
        leadData.phone,
        leadData.email,
        leadData.pageUrl || "",
        leadData.utmSource || leadData.source || "Organic",
        leadData.utmCampaign || "",
        leadData.device || "Unknown",
        "New",
      ],
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:J", // Assuming 'Sheet1' is the name of the first tab
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    });

    console.log("Lead successfully added to Google Sheets.");
  } catch (error) {
    console.error("Error appending to Google Sheets:", error);
  }
}
