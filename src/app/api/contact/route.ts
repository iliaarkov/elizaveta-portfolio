import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, contact, message } = await req.json();
  
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  
  const text = `🚀 Новый лид с портфолио!\n\n👤 Имя: ${name}\n📱 Контакт: ${contact}\n✉️ Сообщение: ${message}`;

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}