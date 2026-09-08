import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nosta Sauna Lounge — Mission Viejo Private Sauna Ritual",
  description:
    "A private traditional Finnish sauna experience in Mission Viejo. Shape the heat, steam, scent, and quiet. First session $30.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Sora:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
