import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ContractorCFO | Financial Tools & Guides for Contractors",
  description:
    "Free calculators, guides, and resources to help contractors manage cash flow, job costing, and profitability. Built by finance professionals who understand construction.",
  keywords: [
    "contractor finance",
    "construction job costing",
    "contractor cash flow",
    "construction profit margin",
    "contractor CFO",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
