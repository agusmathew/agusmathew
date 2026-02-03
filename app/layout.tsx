import type { Metadata } from "next";
import { Newsreader, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agus Mathew Portfolio",
  description:
    "Portfolio website of Agus Mathew, a software developer specializing in web development and open-source projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${newsreader.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
