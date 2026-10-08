import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. Ubah metadata agar sesuai dengan nama startup
export const metadata: Metadata = {
  title: "Nalar Labs | Agentic Reasoning Workflows",
  description: "Nalar Labs develops orchestration primitives and reliable reasoning pipelines for complex operational data.",
  icons: {
    icon: "/favicon.ico",
  },
};

// 2. Gunakan standar React.ReactNode untuk mencegah error TypeScript
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0c0d0e] text-zinc-100">
        {children}
      </body>
    </html>
  );
}