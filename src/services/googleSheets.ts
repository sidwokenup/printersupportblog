import { google } from "googleapis";

export async function appendToGoogleSheet(leadData: Record<string, string | undefined>) {
  try {
    // Safely parse environment variables (in case they were pasted with quotes in Vercel)
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL?.replace(/^"|"$/g, '');
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/^"|"$/g, '')?.replace(/\\n/g, "\n");
    const projectId = process.env.GOOGLE_PROJECT_ID?.replace(/^"|"$/g, '');
    const spreadsheetId = process.env.GOOGLE_SHEET_ID?.replace(/^"|"$/g, '');

    if (!clientEmail || !privateKey || !spreadsheetId) {
      console.warn("Google Sheets configuration missing. Skipped appending lead.");
      return;
    }

    const credentials = {
      client_email: clientEmail,
      private_key: privateKey,
      project_id: projectId,
    };

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Dynamically fetch the first sheet's name so it doesn't break if the user renamed "Sheet1"
    const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
    const firstSheetName = spreadsheet.data.sheets?.[0]?.properties?.title || "Sheet1";
    const range = `${firstSheetName}!A:J`;

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
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    });

    console.log("Lead successfully added to Google Sheets.");
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const err = error as any;
    console.error("Error appending to Google Sheets:", err?.message || err);
  }
}
