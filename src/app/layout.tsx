import type { Metadata } from "next";
import { Sora, Figtree } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Suraj Adhikrao Gurav — CTO & AI Engineer",
  description:
    "CTO at VPTech building EliteMx Healthcare Platform. 5.5+ years across software engineering, data engineering, AI, DevOps, and technology leadership. Based in Brisbane, Australia.",
  keywords: [
    "Suraj Gurav", "CTO", "AI Engineer", "Software Engineer", "Data Engineer",
    "VPTech", "EliteMx", "Healthcare Technology", "Brisbane", "Australia",
    "Next.js", "React", "AWS", "Pentaho BI", "Full Stack Developer",
  ],
  authors: [{ name: "Suraj Adhikrao Gurav" }],
  creator: "Suraj Adhikrao Gurav",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://surajgurav.com",
    title: "Suraj Adhikrao Gurav — CTO & AI Engineer",
    description:
      "CTO at VPTech building EliteMx Healthcare Platform. AI Engineer, Full Stack Developer, Data Engineer.",
    siteName: "Suraj Gurav Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suraj Adhikrao Gurav — CTO & AI Engineer",
    description: "CTO at VPTech | AI Engineer | 5.5+ years experience | Brisbane, Australia",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${figtree.variable} dark`} suppressHydrationWarning>
      <body className="min-h-dvh flex flex-col antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
