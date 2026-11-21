# Google Ads & GA4 Tracking Verification Guide

This guide details the exact step-by-step procedure to verify that all 3 conversion actions and engagement tags fire accurately across the 13 printer landing pages on `https://www.livefeedreviews.com`.

---

## 1. Overview of Installed Tracking Infrastructure
Every landing page on `https://www.livefeedreviews.com/lp/*` contains the unified Google Global Site Tag (`gtag.js`):
- **Google Analytics 4 Measurement ID**: `G-PRINTER2026` (replace with your active GA4 property ID)
- **Google Ads Conversion ID**: `AW-11488920150` (replace with your active Google Ads tag ID)

### The 3 Conversions Tracked:
1. **`Chat_Click` (Primary Action)**:
   - **Trigger**: Fired instantly whenever a user clicks any "Chat Now", "Chat With An Expert", or "Start Live Chat Now" button on any landing page.
   - **Destination**: Directs to `https://care.tellepsis.shop` with enriched UTM parameters (`utm_source=google`, `utm_medium=cpc`, `utm_campaign=printer_help`, `utm_content={adgroup}`).
   - **Tag Event**: `gtag('event', 'Chat_Click', { 'event_category': 'Conversion', 'send_to': 'AW-11488920150/Chat_Click' })`.

2. **`Page_Engagement_60s` (Secondary / Observation Action)**:
   - **Trigger**: Fired automatically after 60 seconds of dwell time on any `/lp/*` page.
   - **Purpose**: Signals deep visitor engagement to Google Ads bidding algorithms, elevating Quality Scores and lowering average CPCs.
   - **Tag Event**: `gtag('event', 'Page_Engagement_60s', { 'event_category': 'Engagement', 'value': 60 })`.

3. **`Chat_Start` (Primary Action on Care Portal)**:
   - **Trigger**: Fired on `care.tellepsis.shop` when the live chat window initializes or the visitor submits their initial query.
   - **Implementation**: Embedded in the chat application initiation callback.

---

## 2. Step-by-Step Verification Using Google Tag Assistant

1. **Open Google Tag Assistant**:
   - Navigate to [https://tagassistant.google.com](https://tagassistant.google.com).
   - Click **Add Domain**.
   - Enter `https://www.livefeedreviews.com/lp/printer-help`.
   - Ensure "Include debug signal in the URL" is checked.
   - Click **Connect**.

2. **Verify Global Site Tag Connection**:
   - In the Tag Assistant debug window, verify the status pill indicates **Connected** (green).
   - In the left sidebar summary, confirm:
     - Container `G-PRINTER2026` is loaded.
     - Container `AW-11488920150` is loaded.
     - Event `Page View` fired once on DOM load.

3. **Verify `Chat_Click` Conversion Event**:
   - In the connected target browser tab, click the green hero button: **Chat With An Expert Now**.
   - Switch back to the Tag Assistant tab.
   - In the left event history, inspect the latest event: `Chat_Click`.
   - Verify the event payload includes:
     - `event_category`: `Conversion`
     - `send_to`: `AW-11488920150/Chat_Click`
     - `event_label`: `https://care.tellepsis.shop?...`

4. **Verify `Page_Engagement_60s` Event**:
   - Leave the connected browser tab open and active for 61 seconds.
   - Return to Tag Assistant and verify that the `Page_Engagement_60s` event appears in the timeline.

---

## 3. Step-by-Step Verification in GA4 DebugView

1. Open your **Google Analytics 4** property.
2. In the left navigation, click **Admin** (gear icon) > **Data display** > **DebugView**.
3. In the debug device selector, select your active browser session.
4. Watch the real-time event vertical stream:
   - Immediately upon page load: `page_view`, `session_start`, and `first_visit` appear.
   - When a chat button is clicked: `Chat_Click` appears with parameters `page_location` and `event_label`.
   - After 60 seconds: `Page_Engagement_60s` appears.

---

## 4. Configuring Conversions in Google Ads UI

1. Open **Google Ads** > **Goals** > **Conversions** > **Summary**.
2. Click **+ New Conversion Action** > **Website**.
3. Enter your domain: `https://www.livefeedreviews.com`.
4. Click **Scan**.
5. Under **Create conversion actions manually using code**:
   - **Conversion Name**: `Chat_Click`
   - **Category**: `Submit lead form` or `Outbound click`
   - **Value**: Use the same value for each conversion (e.g., $15.00) or don't use a value.
   - **Count**: `One` (per click session)
   - **Click-through conversion window**: 30 days
   - **Attribution model**: Data-driven
6. Repeat for `Page_Engagement_60s` (set as **Secondary action** so it observes Quality Score without skewing smart bidding).
7. Link your GA4 property under **Admin > Linked accounts > Google Analytics (GA4)** and import the web conversions.
