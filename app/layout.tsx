import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jason Jiang Portfolio",
  description: "Software Developer & Game Programmer at USC Viterbi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.ico?v=2" type="image/x-icon" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}