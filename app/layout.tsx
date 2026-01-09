import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

// Organization structured data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ContractorCFO",
  url: "https://contractorcfo.org",
  logo: "https://contractorcfo.org/favicon.png",
  description:
    "Free calculators, guides, and resources to help contractors manage cash flow, job costing, and profitability.",
};

// WebSite structured data (for sitelinks search)
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ContractorCFO",
  url: "https://contractorcfo.org",
  description:
    "Financial tools and guides for construction contractors",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://contractorcfo.org/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

// ItemList for tools/calculators
const toolsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Contractor Finance Calculators",
  description: "Free financial calculators for construction businesses",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "SoftwareApplication",
        name: "Job Costing Calculator",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        url: "https://contractorcfo.org/tools/job-costing-calculator",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "SoftwareApplication",
        name: "Markup vs Margin Calculator",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        url: "https://contractorcfo.org/tools/markup-margin-calculator",
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://contractorcfo.org"),
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
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ContractorCFO",
    title: "ContractorCFO",
    description: "Financial Tools & Guides for Contractors",
  },
  twitter: {
    card: "summary_large_image",
    title: "ContractorCFO",
    description: "Financial Tools & Guides for Contractors",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(toolsSchema),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
