'use client';
import { useState, useEffect } from "react";
import {
  Noto_Kufi_Arabic as NotoKufiArabic,
  Poppins,
} from "next/font/google";
import "./globals.css";
import Loader from '@/components/Loader';

const notoKufiArabic = NotoKufiArabic({
  variable: "--font-noto-kufi",
  subsets: ["arabic", "latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${notoKufiArabic.variable} ${poppins.variable} antialiased`}
      >
        {loading ? <Loader /> : children}
      </body>
    </html>
  );
}