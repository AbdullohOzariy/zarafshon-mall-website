import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zarafshon Mall — Savdo va Ko'ngilochar Markazi",
  description:
    "Zarafshon shahridagi 4 qavatli zamonaviy savdo markazi. B2B hamkorlik va ijara joylari bo'yicha murojaat qiling.",
  keywords: "Zarafshon Mall, savdo markazi, ijara, B2B, Zarafshon shahri",
  openGraph: {
    title: "Zarafshon Mall",
    description: "Zarafshon shahridagi premium savdo va ko'ngilochar markazi",
    url: "https://zarafshonmall.uz",
    siteName: "Zarafshon Mall",
    locale: "uz_UZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" suppressHydrationWarning className="h-full">
      <body className={`${inter.className} min-h-full`}>{children}</body>
    </html>
  );
}
