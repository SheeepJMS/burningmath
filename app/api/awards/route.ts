import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

/**
 * Awards API: Auto-discovers certificate/award images from public/assets/awards.
 * Drop images (.png, .jpg, .jpeg, .webp) into public/assets/awards/ — no manual listing needed.
 *
 * Deployment note (Render, Vercel, etc.): Images must be committed to the repo.
 * The folder is read at request time from the deployed filesystem.
 */
const AWARDS_DIR = "public/assets/awards";
const ALLOWED_EXT = [".png", ".jpg", ".jpeg", ".webp"];

export async function GET() {
  try {
    const basePath = path.join(process.cwd(), AWARDS_DIR);
    if (!fs.existsSync(basePath)) {
      return NextResponse.json([]);
    }
    const files = fs.readdirSync(basePath);
    const images = files
      .filter((f) => ALLOWED_EXT.includes(path.extname(f).toLowerCase()))
      .map((f) => `/assets/awards/${f}`);
    return NextResponse.json(images);
  } catch {
    return NextResponse.json([]);
  }
}
