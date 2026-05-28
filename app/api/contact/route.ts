import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, phone, category, area, message } = await req.json();

  const text = [
    `🏪 <b>Yangi ariza — Zarafshon Mall</b>`,
    ``,
    `👤 <b>Kompaniya:</b> ${name}`,
    `📱 <b>Telefon:</b> ${phone}`,
    category ? `🏷 <b>Faoliyat turi:</b> ${category}` : null,
    area ? `📐 <b>Kerakli maydon:</b> ${area} m²` : null,
    message ? `💬 <b>Izoh:</b> ${message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatIds = (process.env.TELEGRAM_CHAT_IDS ?? "").split(",").map((s) => s.trim()).filter(Boolean);

  if (!token || chatIds.length === 0) {
    return NextResponse.json({ ok: false, error: "Bot token yoki chat ID topilmadi" }, { status: 500 });
  }

  await Promise.all(
    chatIds.map((chatId) =>
      fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
      })
    )
  );

  return NextResponse.json({ ok: true });
}
