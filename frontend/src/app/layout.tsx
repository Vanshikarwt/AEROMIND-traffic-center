import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AeroMind Traffic Center — Intelligent Command Center",
  description: "AeroMind Traffic Center: AI-powered Smart City real-time traffic monitoring, adaptive signal control, YOLOv8 object detection, and emergency green corridor management.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark bg-[#090d16] text-[#f9fafb]">
      <body className={`${inter.className} min-h-screen overflow-x-hidden antialiased`}>
        {children}
      </body>
    </html>
  );
}
