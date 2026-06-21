import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "Deepa Tigalannavar | Python Developer & Data Analyst",
  description:
    "Portfolio of Deepa Tigalannavar — Python Developer, Data Analyst, and AI & Machine Learning Enthusiast. Explore projects in ML, NLP, and Business Intelligence.",
  keywords: [
    "Deepa Tigalannavar",
    "Python Developer",
    "Data Analyst",
    "Machine Learning",
    "AI Engineer",
    "Portfolio",
    "NLP",
    "Power BI",
    "Streamlit",
  ],
  authors: [{ name: "Deepa Tigalannavar" }],
  creator: "Deepa Tigalannavar",
  openGraph: {
    title: "Deepa Tigalannavar | Python Developer & Data Analyst",
    description:
      "Explore the portfolio of Deepa Tigalannavar — building intelligent, data-driven applications.",
    type: "website",
    locale: "en_US",
    siteName: "Deepa Tigalannavar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepa Tigalannavar | Python Developer & Data Analyst",
    description: "Python Developer, Data Analyst, AI & ML Enthusiast",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
