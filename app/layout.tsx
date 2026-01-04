import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Pastikan ini tetap ada agar Tailwind jalan

// 1. IMPORT LIBRARY VERCEL
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Full-Stack Developer",
  description: "Portfolio profesional menampilkan proyek e-commerce, data analytics, dan web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Konten Website Utama */}
        {children}

        {/* 2. KOMPONEN PEMANTAU (Tidak akan terlihat di layar, tapi bekerja di background) */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}