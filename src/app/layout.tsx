import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeProvider from "@/components/ui/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Syed Fahad Ali — Frontend Developer & Software Engineer",
  description:
    "Portfolio of Syed Fahad Ali, a Frontend Developer specializing in high-efficiency, reliable, and user-focused web applications with over 3 years of experience.",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Software Engineer"],
  authors: [{ name: "Syed Fahad Ali" }],
  openGraph: {
    title: "Syed Fahad Ali — Frontend Developer",
    description: "Building high-efficiency web applications with React, Next.js, and TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-gray-950 transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
