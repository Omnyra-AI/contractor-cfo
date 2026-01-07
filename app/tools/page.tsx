import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Contractor Calculators | ContractorCFO",
  description:
    "Free financial calculators for contractors: job costing, markup vs margin, break-even analysis, and more. Industry-standard formulas with sources cited.",
  keywords: [
    "contractor calculator",
    "job costing calculator",
    "markup calculator",
    "construction profit calculator",
  ],
};

const tools = [
  {
    title: "Job Costing Calculator",
    description:
      "Calculate true job costs including labor burden, materials, overhead, and profit margin. Based on CFMA guidelines.",
    href: "/tools/job-costing-calculator",
    category: "Profitability",
  },
  {
    title: "Markup vs Margin Calculator",
    description:
      "Convert between markup and margin percentages. Understand why a 20% markup is only a 16.7% margin.",
    href: "/tools/markup-margin-calculator",
    category: "Pricing",
  },
  {
    title: "Break-Even Calculator",
    description:
      "Calculate how much revenue you need to cover fixed costs. Essential for pricing decisions.",
    href: "/tools/break-even-calculator",
    category: "Planning",
  },
];

export default function ToolsPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
            Free Contractor Calculators
          </h1>
          <p className="text-xl text-[var(--muted)] mb-8">
            Industry-standard financial calculators built specifically for
            contractors. All formulas are sourced from CFMA, AGC, and other
            trusted industry organizations.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="block p-6 rounded-2xl bg-[var(--panel)]/50 border border-white/5 hover:border-[var(--teal)]/30 transition-all hover:no-underline group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs text-[var(--teal)] font-medium uppercase tracking-wider">
                      {tool.category}
                    </span>
                    <h2 className="text-xl font-semibold text-[var(--text)] mt-1 mb-2 group-hover:text-[var(--teal)]">
                      {tool.title}
                    </h2>
                    <p className="text-[var(--muted)]">{tool.description}</p>
                  </div>
                  <span className="text-[var(--teal)] text-2xl">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-[var(--teal)]/10 border border-[var(--teal)]/20">
            <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
              About Our Calculators
            </h3>
            <p className="text-[var(--muted)] text-sm">
              All calculators on ContractorCFO use industry-standard formulas
              from trusted sources including the{" "}
              <a
                href="https://www.cfma.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--teal)]"
              >
                Construction Financial Management Association (CFMA)
              </a>
              ,{" "}
              <a
                href="https://www.agc.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--teal)]"
              >
                Associated General Contractors of America (AGC)
              </a>
              , and the{" "}
              <a
                href="https://www.sba.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--teal)]"
              >
                U.S. Small Business Administration (SBA)
              </a>
              . Each calculator includes source citations so you can verify the
              methodology.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
