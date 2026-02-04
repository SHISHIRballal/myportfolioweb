import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SHISHIR KRISHNA S BALLALA | AI & Full-Stack Developer",
  description: "Portfolio showcasing skills in AI, Machine Learning, and MERN stack development. BE in Artificial Intelligence and Data Science.",
  keywords: ["portfolio", "AI", "machine learning", "MERN stack", "full-stack", "data science"],
  authors: [{ name: "SHISHIR KRISHNA S BALLALA" }],
  openGraph: {
    title: "SHISHIR KRISHNA S BALLALA | AI & Full-Stack Developer",
    description: "Portfolio showcasing skills in AI, Machine Learning, and MERN stack development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="forest">
      <body className={inter.className}>
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
