import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "src", "data", "settings.json");

export async function GET() {
  try {
    const fileContents = fs.readFileSync(dataFilePath, "utf8");
    const settings = JSON.parse(fileContents);
    return NextResponse.json({ securityQuestion: settings.securityQuestion });
  } catch (error) {
    return NextResponse.json({ error: "Failed to load settings" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const fileContents = fs.readFileSync(dataFilePath, "utf8");
    const settings = JSON.parse(fileContents);

    if (password === settings.password) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Failed to verify login" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const { securityAnswer, newPassword } = await request.json();
    const fileContents = fs.readFileSync(dataFilePath, "utf8");
    const settings = JSON.parse(fileContents);

    if (securityAnswer.toLowerCase().trim() === settings.securityAnswer.toLowerCase().trim()) {
      settings.password = newPassword;
      fs.writeFileSync(dataFilePath, JSON.stringify(settings, null, 2), "utf8");
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: "Incorrect security answer" }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Failed to reset password" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const { securityQuestion, securityAnswer } = await request.json();
    if (!securityQuestion || !securityAnswer) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const fileContents = fs.readFileSync(dataFilePath, "utf8");
    const settings = JSON.parse(fileContents);

    settings.securityQuestion = securityQuestion;
    settings.securityAnswer = securityAnswer;
    
    fs.writeFileSync(dataFilePath, JSON.stringify(settings, null, 2), "utf8");
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update security settings" }, { status: 500 });
  }
}
