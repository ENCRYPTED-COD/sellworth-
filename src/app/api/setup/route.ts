import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const srcDir = 'C:/Users/ANIKET/.gemini/antigravity/brain/fe424cad-e66a-43de-b734-682112eba490';
    const destDir = path.join(process.cwd(), 'public');

    const files = fs.readdirSync(srcDir);
    const mediaFiles = files.filter(f => f.startsWith('media__17845499'));

    mediaFiles.forEach((file, index) => {
      const ext = path.extname(file);
      const destName = `puri-aravallis-${index + 1}${ext}`;
      fs.copyFileSync(path.join(srcDir, file), path.join(destDir, destName));
    });

    return NextResponse.json({ success: true, copied: mediaFiles });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
