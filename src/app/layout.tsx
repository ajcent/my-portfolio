import "./globals.css";

import { DM_Sans } from "next/font/google";
import type { Metadata } from "next";

import TopNavigation from "@/components/top-navigation";
import Footer from "@/components/footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "John Lloyd Centeno | Web Developer Portfolio",
  description:
    "Explore the portfolio of John Lloyd Centeno; a full-stack web developer specializing in modern JavaScript, React, and Node.js. See projects, skills, and contact info.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.className} antialiased`}>
        <TopNavigation />

        {children}
        <Footer />
      </body>
    </html>
  );
}
