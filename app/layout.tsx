import type { Metadata } from "next";
import {
  Noto_Kufi_Arabic as NotoKufiArabic,
  Poppins,
} from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "مكتب فقيه للاستشارات الهندسية",
  description:
    "حلول هندسية متكاملة في التصميم، التخطيط، الإشراف وإدارة المشاريع وفق أعلى معايير الجودة.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${notoKufiArabic.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
