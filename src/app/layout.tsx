import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ネクストの練習中です",
  description: "ネクストの練習中ですネクストの練習中ですネクストの練習中です",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <header className="bg-blue-200 p-4">Rootヘッダー</header>
        {children}
      </body>
    </html>
  );
}
