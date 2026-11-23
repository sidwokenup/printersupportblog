import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface RouteProps {
  params: Promise<{ slug: string }>;
}

export async function GET(request: NextRequest, { params }: RouteProps) {
  const { slug } = await params;
  
  const cleanSlug = slug.replace(/\.html$/, "");
  
  if (cleanSlug === "printer-help") {
    return new NextResponse("Diagnostic Guide Not Found", { status: 404 });
  }
  const publicLpDir = path.join(process.cwd(), "public", "lp");
  
  const filePath = path.join(publicLpDir, `${cleanSlug}.html`);
  const indexPath = path.join(publicLpDir, cleanSlug, "index.html");

  let htmlContent = "";
  if (fs.existsSync(filePath)) {
    htmlContent = fs.readFileSync(filePath, "utf-8");
  } else if (fs.existsSync(indexPath)) {
    htmlContent = fs.readFileSync(indexPath, "utf-8");
  } else {
    return new NextResponse("Diagnostic Guide Not Found", { status: 404 });
  }

  const isIsolatedLandingPage = cleanSlug === "printer-tips" || cleanSlug === "printer-solution" || cleanSlug === "printer-solutions";
  const robotsTag = isIsolatedLandingPage ? "noindex, nofollow" : "index, follow";

  return new NextResponse(htmlContent, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Disposition": "inline",
      "X-Robots-Tag": robotsTag,
      "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400",
    },
  });
}
