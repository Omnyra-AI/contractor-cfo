import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cash Flow Management for Contractors | ContractorCFO",
  description:
    "Learn how to manage cash flow timing, handle retainage, and avoid the cash crunches that kill construction businesses. Includes industry benchmarks and actionable strategies.",
  keywords: [
    "contractor cash flow",
    "construction cash flow management",
    "retainage management",
    "contractor finance",
  ],
};

const sources = [
  {
    id: 1,
    name: "CFMA Annual Financial Survey",
    url: "https://www.cfma.org/",
    citation:
      "Construction Financial Management Association. Annual Financial Survey of the Construction Industry.",
  },
  {
    id: 2,
    name: "SBA Cash Flow Guide",
    url: "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances",
    citation:
      "U.S. Small Business Administration. Managing Your Business Finances.",
  },
  {
    id: 3,
    name: "AGC Construction Economics",
    url: "https://www.agc.org/",
    citation:
      "Associated General Contractors of America. Construction Economics Research.",
  },
  {
    id: 4,
    name: "Levelset Payment Report",
    url: "https://www.levelset.com/research/",
    citation:
      "Levelset. Construction Payment Report - industry payment timing data.",
  },
];

export default function CashFlowGuide() {
  return (
    <>
      <article className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/guides"
            className="text-[var(--muted)] hover:text-[var(--text)] text-sm mb-4 inline-block"
          >
            &larr; All Guides
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs text-[var(--teal)] font-medium uppercase tracking-wider">
                Cash Flow
              </span>
              <span className="text-xs text-[var(--muted)]">12 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
              Cash Flow Management for Contractors
            </h1>
            <p className="text-xl text-[var(--muted)]">
              Cash flow problems kill more construction businesses than lack of
              work. This guide covers the unique cash flow challenges
              contractors face and proven strategies to manage them.
            </p>
          </header>

          <div className="prose prose-invert max-w-none">
            {/* Key Stat */}
            <div className="p-6 rounded-2xl bg-[var(--teal)]/10 border border-[var(--teal)]/20 mb-8 not-prose">
              <p className="text-lg text-[var(--text)] font-medium">
                82% of construction business failures are attributed to cash
                flow problems, not lack of profitability.
              </p>
              <p className="text-sm text-[var(--muted)] mt-2">
                Source:{" "}
                <a
                  href="https://www.cfma.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--teal)]"
                >
                  CFMA Annual Financial Survey
                </a>
                <sup>[1]</sup>
              </p>
            </div>

            <h2 className="text-2xl font-bold text-[var(--text)] mt-12 mb-4">
              Why Contractor Cash Flow Is Different
            </h2>
            <p className="text-[var(--muted)] mb-6">
              Contractors face unique cash flow challenges that other businesses
              don&apos;t encounter:
            </p>
            <ul className="space-y-3 text-[var(--muted)] mb-8">
              <li className="flex items-start gap-3">
                <span className="text-[var(--teal)] mt-1">1.</span>
                <span>
                  <strong className="text-[var(--text)]">
                    Front-loaded costs
                  </strong>{" "}
                  — You pay for labor and materials before you get paid for the
                  work.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--teal)] mt-1">2.</span>
                <span>
                  <strong className="text-[var(--text)]">Retainage</strong> —
                  5-10% of every invoice is held back until project completion,
                  sometimes for months or years.
                  <sup>[1]</sup>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--teal)] mt-1">3.</span>
                <span>
                  <strong className="text-[var(--text)]">
                    Long payment cycles
                  </strong>{" "}
                  — Average days to payment in construction is 83 days,
                  according to Levelset research.
                  <sup>[4]</sup>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--teal)] mt-1">4.</span>
                <span>
                  <strong className="text-[var(--text)]">Seasonality</strong> —
                  Many contractors see 60-70% of revenue in 6 months but fixed
                  costs year-round.
                </span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[var(--text)] mt-12 mb-4">
              Key Cash Flow Metrics to Track
            </h2>
            <p className="text-[var(--muted)] mb-6">
              The CFMA recommends contractors track these metrics weekly, not
              monthly:
              <sup>[1]</sup>
            </p>

            <div className="grid md:grid-cols-2 gap-4 not-prose mb-8">
              <div className="p-4 rounded-xl bg-[var(--panel)]/50 border border-white/5">
                <h3 className="font-semibold text-[var(--text)] mb-2">
                  Cash Runway
                </h3>
                <p className="text-sm text-[var(--muted)]">
                  Cash on hand ÷ monthly burn rate. Healthy contractors maintain
                  3-6 months runway.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--panel)]/50 border border-white/5">
                <h3 className="font-semibold text-[var(--text)] mb-2">
                  Days Sales Outstanding
                </h3>
                <p className="text-sm text-[var(--muted)]">
                  Average days to collect payment. Industry average is 45-60
                  days; top performers under 35.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--panel)]/50 border border-white/5">
                <h3 className="font-semibold text-[var(--text)] mb-2">
                  Retainage Receivable
                </h3>
                <p className="text-sm text-[var(--muted)]">
                  Total retainage outstanding. Should be tracked separately from
                  regular AR.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--panel)]/50 border border-white/5">
                <h3 className="font-semibold text-[var(--text)] mb-2">
                  Work in Progress (WIP)
                </h3>
                <p className="text-sm text-[var(--muted)]">
                  Costs incurred vs. billings to date. Underbillings tie up
                  cash; overbillings create liability.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[var(--text)] mt-12 mb-4">
              Strategies to Improve Cash Flow
            </h2>

            <h3 className="text-xl font-semibold text-[var(--text)] mt-8 mb-3">
              1. Bill More Frequently
            </h3>
            <p className="text-[var(--muted)] mb-6">
              If your contract allows, bill weekly instead of monthly. Even
              billing twice monthly can improve cash flow by 15-20 days. The SBA
              recommends negotiating billing frequency during contract
              negotiations, not after.
              <sup>[2]</sup>
            </p>

            <h3 className="text-xl font-semibold text-[var(--text)] mt-8 mb-3">
              2. Negotiate Better Payment Terms
            </h3>
            <p className="text-[var(--muted)] mb-6">
              Standard construction payment terms are Net 30, but many GCs
              extend to Net 45 or Net 60. According to AGC data, subcontractors
              who negotiate payment terms at bid time are paid an average of 12
              days faster than those who accept standard terms.
              <sup>[3]</sup>
            </p>

            <h3 className="text-xl font-semibold text-[var(--text)] mt-8 mb-3">
              3. Manage Retainage Actively
            </h3>
            <p className="text-[var(--muted)] mb-6">
              Track retainage as a separate receivable and bill for retainage
              release immediately upon project completion. Many contractors
              leave retainage on the table simply because they don&apos;t have a
              system to track it.
            </p>

            <h3 className="text-xl font-semibold text-[var(--text)] mt-8 mb-3">
              4. Align Payables with Receivables
            </h3>
            <p className="text-[var(--muted)] mb-6">
              Negotiate supplier terms that match your collection timing. If you
              collect in 45 days, push for Net 45 with suppliers. Many suppliers
              offer 2% discounts for paying in 10 days — only take these if your
              cash position allows.
              <sup>[2]</sup>
            </p>

            <h3 className="text-xl font-semibold text-[var(--text)] mt-8 mb-3">
              5. Build a Cash Reserve
            </h3>
            <p className="text-[var(--muted)] mb-6">
              The CFMA recommends contractors maintain cash reserves equal to at
              least 10% of annual revenue. This buffer protects against slow
              pays and seasonal dips.
              <sup>[1]</sup>
            </p>

            <h2 className="text-2xl font-bold text-[var(--text)] mt-12 mb-4">
              Warning Signs of Cash Flow Problems
            </h2>
            <p className="text-[var(--muted)] mb-6">
              Watch for these early indicators:
            </p>
            <ul className="space-y-2 text-[var(--muted)] mb-8">
              <li>• DSO increasing over 3 consecutive months</li>
              <li>• Retainage receivable growing faster than revenue</li>
              <li>• Frequently delaying supplier payments</li>
              <li>• Using credit lines for operating expenses</li>
              <li>• Underbilling on WIP reports</li>
            </ul>

            {/* Sources Section */}
            <div className="mt-16 pt-8 border-t border-white/10 not-prose">
              <h2 className="text-xl font-semibold text-[var(--text)] mb-6">
                Sources
              </h2>
              <div className="space-y-4">
                {sources.map((source) => (
                  <div key={source.id} className="flex gap-3 text-sm">
                    <span className="text-[var(--teal)]">[{source.id}]</span>
                    <div>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--teal)] hover:underline"
                      >
                        {source.name}
                      </a>
                      <p className="text-[var(--muted)]">{source.citation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[var(--teal)]/10 to-[var(--violet-start)]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[var(--text)] mb-4">
            Want Automated Cash Flow Monitoring?
          </h2>
          <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto">
            A Command Advisor connects to your QuickBooks and monitors cash
            runway, DSO, and AR aging automatically — alerting you before
            problems become critical.
          </p>
          <a
            href="https://go.omnyra.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#0A0D1E] text-[var(--teal)] font-semibold rounded-xl border border-[var(--teal)] hover:no-underline hover:bg-[var(--teal)] hover:text-black transition-all"
          >
            Get Real-Time Monitoring
          </a>
        </div>
      </section>

      {/* Related */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-[var(--text)] mb-6">
            Related Tools & Guides
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/tools/job-costing-calculator"
              className="p-4 rounded-xl bg-[var(--panel)]/50 border border-white/5 hover:border-[var(--teal)]/30 transition-all hover:no-underline group"
            >
              <h3 className="font-medium text-[var(--text)] group-hover:text-[var(--teal)]">
                Job Costing Calculator
              </h3>
              <p className="text-sm text-[var(--muted)]">
                Make sure you&apos;re pricing jobs to maintain positive cash
                flow.
              </p>
            </Link>
            <Link
              href="/guides/job-costing-basics"
              className="p-4 rounded-xl bg-[var(--panel)]/50 border border-white/5 hover:border-[var(--teal)]/30 transition-all hover:no-underline group"
            >
              <h3 className="font-medium text-[var(--text)] group-hover:text-[var(--teal)]">
                Job Costing Fundamentals
              </h3>
              <p className="text-sm text-[var(--muted)]">
                Accurate job costing is the foundation of healthy cash flow.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
