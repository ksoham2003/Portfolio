import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "SOHAM | Frontend & Full Stack Developer",
  description: "Portfolio of Soham - Premium Frontend & Full Stack Developer specializing in highly interactive, state-of-the-art web experiences and scalable backends.",
  keywords: ["Frontend Developer", "Full Stack Developer", "Next.js Portfolio", "React Developer", "Creative Developer"],
  authors: [{ name: "Soham" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body>
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
