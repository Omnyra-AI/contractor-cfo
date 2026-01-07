import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ContractorCFO | Free Financial Tools for Contractors",
  description:
    "Free calculators, guides, and resources to help contractors manage job costing, cash flow, and profitability. Built by finance professionals who understand construction.",
};

const tools = [
  {
    title: "Job Costing Calculator",
    description:
      "Calculate true job costs including labor burden, materials, overhead, and profit margin.",
    href: "/tools/job-costing-calculator",
  },
  {
    title: "Markup vs Margin Calculator",
    description:
      "Understand the difference between markup and margin, and calculate both accurately.",
    href: "/tools/markup-margin-calculator",
  },
  {
    title: "Break-Even Calculator",
    description:
      "Find out how much revenue you need to cover your fixed and variable costs.",
    href: "/tools/break-even-calculator",
  },
];

const guides = [
  {
    title: "Cash Flow Management for Contractors",
    description:
      "Learn how to manage cash flow timing, handle retainage, and avoid cash crunches.",
    href: "/guides/cash-flow-management",
  },
  {
    title: "Job Costing Fundamentals",
    description:
      "Master the basics of job costing to know your true costs on every project.",
    href: "/guides/job-costing-basics",
  },
  {
    title: "Contractor Tax Planning",
    description:
      "Essential tax strategies for contractors, including quarterly estimates and deductions.",
    href: "/guides/contractor-taxes",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1 mb-6 text-sm font-medium text-[var(--teal)] bg-[var(--teal)]/10 rounded-full border border-[var(--teal)]/20">
            Free Tools for Contractors
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--text)] mb-6 leading-tight">
            Financial Tools Built for{" "}
            <span className="text-[var(--teal)]">Contractors</span>
          </h1>
          <p className="text-xl text-[var(--muted)] max-w-3xl mx-auto mb-10">
            Free calculators, guides, and resources to help you manage job
            costing, cash flow, and profitability. No signup required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools"
              className="px-8 py-4 bg-[#0A0D1E] text-[var(--teal)] font-semibold rounded-xl border border-[var(--teal)] hover:no-underline hover:bg-[var(--teal)] hover:text-black transition-all"
            >
              Browse Calculators
            </Link>
            <Link
              href="/guides"
              className="px-8 py-4 bg-[#0A0D1E] border border-[var(--teal)]/40 text-[var(--text)] font-semibold rounded-xl hover:no-underline hover:border-[var(--teal)] transition-all"
            >
              Read Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-[var(--panel)]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Free Calculators
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              Industry-standard formulas with sources cited. No guesswork.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="p-6 rounded-2xl bg-[var(--bg)] border border-white/5 hover:border-[var(--teal)]/30 transition-all hover:no-underline group"
              >
                <h3 className="text-xl font-semibold text-[var(--text)] mb-2 group-hover:text-[var(--teal)]">
                  {tool.title}
                </h3>
                <p className="text-[var(--muted)] text-sm">{tool.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/tools"
              className="text-[var(--teal)] hover:underline"
            >
              View all calculators &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Contractor Finance Guides
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              In-depth guides on the financial topics that matter most to
              contractors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="p-6 rounded-2xl bg-[var(--panel)]/50 border border-white/5 hover:border-[var(--teal)]/30 transition-all hover:no-underline group"
              >
                <h3 className="text-xl font-semibold text-[var(--text)] mb-2 group-hover:text-[var(--teal)]">
                  {guide.title}
                </h3>
                <p className="text-[var(--muted)] text-sm">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/guides" className="text-[var(--teal)] hover:underline">
              View all guides &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--teal)]/10 to-[var(--violet-start)]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-6">
            Want Real-Time Financial Monitoring?
          </h2>
          <p className="text-[var(--muted)] mb-8 max-w-2xl mx-auto">
            These tools give you a snapshot. A Command Advisor gives you 24/7
            monitoring of your QuickBooks data with monthly strategy calls.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://command-advisors.com/what-is-a-command-advisor"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#0A0D1E] text-[var(--teal)] font-semibold rounded-xl border border-[var(--teal)] hover:no-underline hover:bg-[var(--teal)] hover:text-black transition-all"
            >
              What is a Command Advisor?
            </a>
            <a
              href="https://go.omnyra.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#0A0D1E] border border-[var(--teal)]/40 text-[var(--text)] font-semibold rounded-xl hover:no-underline hover:border-[var(--teal)] transition-all"
            >
              Book a Free Call
            </a>
          </div>
        </div>
      </section>

      {/* Sources Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-semibold text-[var(--text)] mb-4">
            Trusted Sources
          </h3>
          <p className="text-[var(--muted)] text-sm max-w-2xl mx-auto">
            Our calculators and guides are based on industry standards from the{" "}
            <a
              href="https://www.irs.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--teal)]"
            >
              IRS
            </a>
            ,{" "}
            <a
              href="https://www.sba.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--teal)]"
            >
              SBA
            </a>
            ,{" "}
            <a
              href="https://www.cfma.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--teal)]"
            >
              CFMA
            </a>
            , and{" "}
            <a
              href="https://www.agc.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--teal)]"
            >
              AGC
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
