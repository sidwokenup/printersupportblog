import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect("https://www.livefeedreviews.com/lp/printer-help", 301);
}
