import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// ensure this API runs on Node (so fs works on Vercel)
export const runtime = "nodejs";

export async function GET() {
  try {
    const imagesDir = path.join(process.cwd(), "public", "images");
    const files = fs.readdirSync(imagesDir);

    const allowed = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);
    const list = files
      .filter((f) => {
        const ext = path.extname(f).toLowerCase();
        const isImage = allowed.has(ext);
        const isHidden = f.startsWith(".");
        const isHero = f.toLowerCase() === "villa-hero.jpg";
        return isImage && !isHidden && !isHero;
      })
      .sort();

    return NextResponse.json({ images: list });
  } catch {
    // note: no `e` variable, so no lint error
    return NextResponse.json({ images: [] }, { status: 200 });
  }
}
