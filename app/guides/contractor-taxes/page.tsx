import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contractor Tax Planning Guide | ContractorCFO",
  description:
    "Essential tax strategies for contractors: quarterly estimated payments, common deductions, entity structure, and year-end planning. Sources from IRS and tax professionals.",
  keywords: [
    "contractor taxes",
    "construction tax deductions",
    "quarterly estimated taxes",
    "contractor tax planning",
    "self-employment tax",
  ],
};

const sources = [
  {
    id: 1,
    name: "IRS Publication 505",
    url: "https://www.irs.gov/publications/p505",
    citation:
      "Internal Revenue Service. Tax Withholding and Estimated Tax.",
  },
  {
    id: 2,
    name: "IRS Publication 334",
    url: "https://www.irs.gov/publications/p334",
    citation:
      "Internal Revenue Service. Tax Guide for Small Business.",
  },
  {
    id: 3,
    name: "IRS Publication 946",
    url: "https://www.irs.gov/publications/p946",
    citation:
      "Internal Revenue Service. How To Depreciate Property (Section 179 and bonus depreciation).",
  },
  {
    id: 4,
    name: "IRS Self-Employment Tax",
    url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes",
    citation:
      "Internal Revenue Service. Self-Employment Tax (Social Security and Medicare Taxes).",
  },
  {
    id: 5,
    name: "SBA Tax Resources",
    url: "https://www.sba.gov/business-guide/manage-your-business/pay-taxes",
    citation:
      "U.S. Small Business Administration. Pay and File Business Taxes.",
  },
];

export default function ContractorTaxesGuide() {
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
                Taxes
              </span>
              <span className="text-xs text-[var(--muted)]">10 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
              Contractor Tax Planning
            </h1>
            <p className="text-xl text-[var(--muted)]">
              Tax planning isn&apos;t something you do once a year — it&apos;s
              an ongoing process that affects your cash flow, business
              decisions, and bottom line. This guide covers the essentials every
              contractor needs to know.
            </p>
          </header>

          <div className="prose prose-invert max-w-none">
            {/* Disclaimer */}
            <div className="p-6 rounded-2xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 mb-8 not-prose">
              <p className="text-sm text-[var(--muted)]">
                <strong className="text-[var(--text)]">Disclaimer:</strong> This
                guide provides general information only. Tax situations vary,
                and you should consult a qualified tax professional for advice
                specific to your situation. All information is based on current
                IRS guidelines as of the publication date.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-[var(--text)] mt-12 mb-4">
              Quarterly Estimated Taxes
            </h2>
            <p className="text-[var(--muted)] mb-6">
              If you expect to owe $1,000 or more in taxes for the year, you&apos;re
              required to make quarterly estimated tax payments. Missing these
              payments results in penalties and interest.<sup>[1]</sup>
            </p>

            <div className="p-6 rounded-2xl bg-[var(--panel)]/50 border border-white/5 mb-8 not-prose">
              <h4 className="font-semibold text-[var(--text)] mb-4">
                2024-2025 Quarterly Due Dates
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-[var(--muted)]">Q1 (Jan-Mar)</span>
                  <span className="text-[var(--text)]">April 15</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-[var(--muted)]">Q2 (Apr-May)</span>
                  <span className="text-[var(--text)]">June 15</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-[var(--muted)]">Q3 (Jun-Aug)</span>
                  <span className="text-[var(--text)]">September 15</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-[var(--muted)]">Q4 (Sep-Dec)</span>
                  <span className="text-[var(--text)]">January 15 (following year)</span>
                </div>
              </div>
              <p className="text-xs text-[var(--muted)] mt-4">
                Source:{" "}
                <a
                  href="https://www.irs.gov/publications/p505"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--teal)]"
                >
                  IRS Publication 505
                </a>
              </p>
            </div>

            <h3 className="text-xl font-semibold text-[var(--text)] mt-8 mb-3">
              How Much to Pay
            </h3>
            <p className="text-[var(--muted)] mb-6">
              The IRS offers two safe harbors to avoid underpayment penalties:<sup>[1]</sup>
            </p>
            <ul className="space-y-3 text-[var(--muted)] mb-8">
              <li className="flex items-start gap-3">
                <span className="text-[var(--teal)] mt-1">1.</span>
                <span>
                  <strong className="text-[var(--text)]">
                    100% of last year&apos;s tax
                  </strong>{" "}
                  (110% if your AGI was over $150,000) — Pay at least this much
                  in quarterly payments and you won&apos;t owe penalties, even if
                  you owe more at tax time.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--teal)] mt-1">2.</span>
                <span>
                  <strong className="text-[var(--text)]">
                    90% of current year&apos;s tax
                  </strong>{" "}
                  — If you can accurately estimate your current year tax, pay at
                  least 90% quarterly.
                </span>
              </li>
            </ul>
            <p className="text-[var(--muted)] mb-6">
              Most contractors use the &quot;100% of last year&quot; method because
              income can be unpredictable.
            </p>

            <h2 className="text-2xl font-bold text-[var(--text)] mt-12 mb-4">
              Self-Employment Tax
            </h2>
            <p className="text-[var(--muted)] mb-6">
              As a contractor, you pay both the employer and employee portions
              of Social Security and Medicare taxes — a combined 15.3% on net
              self-employment income up to the Social Security wage base
              ($168,600 in 2024), plus 2.9% Medicare on income above that.<sup>[4]</sup>
            </p>

            <div className="p-6 rounded-2xl bg-[var(--teal)]/10 border border-[var(--teal)]/20 mb-8 not-prose">
              <h4 className="font-semibold text-[var(--text)] mb-2">
                Self-Employment Tax Rates (2024)
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[var(--muted)]">Social Security</span>
                  <span className="text-[var(--text)]">12.4% (on first $168,600)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--muted)]">Medicare</span>
                  <span className="text-[var(--text)]">2.9% (all income)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--muted)]">Additional Medicare</span>
                  <span className="text-[var(--text)]">0.9% (income over $200K single/$250K married)</span>
                </div>
              </div>
              <p className="text-xs text-[var(--muted)] mt-4">
                You can deduct half of self-employment tax from your income tax.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-[var(--text)] mt-12 mb-4">
              Common Contractor Deductions
            </h2>
            <p className="text-[var(--muted)] mb-6">
              The IRS allows you to deduct &quot;ordinary and necessary&quot; business
              expenses. For contractors, common deductions include:<sup>[2]</sup>
            </p>

            <div className="grid md:grid-cols-2 gap-4 not-prose mb-8">
              <div className="p-4 rounded-xl bg-[var(--panel)]/50 border border-white/5">
                <h4 className="font-semibold text-[var(--text)] mb-2">
                  Vehicle Expenses
                </h4>
                <p className="text-sm text-[var(--muted)]">
                  Standard mileage rate (67¢/mile in 2024) or actual expenses.
                  Keep a mileage log.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--panel)]/50 border border-white/5">
                <h4 className="font-semibold text-[var(--text)] mb-2">
                  Tools & Equipment
                </h4>
                <p className="text-sm text-[var(--muted)]">
                  Section 179 allows immediate deduction up to $1.16M (2024).
                  <sup>[3]</sup>
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--panel)]/50 border border-white/5">
                <h4 className="font-semibold text-[var(--text)] mb-2">
                  Home Office
                </h4>
                <p className="text-sm text-[var(--muted)]">
                  Simplified method: $5/sq ft up to 300 sq ft ($1,500 max). Must
                  be exclusive use.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--panel)]/50 border border-white/5">
                <h4 className="font-semibold text-[var(--text)] mb-2">
                  Insurance Premiums
                </h4>
                <p className="text-sm text-[var(--muted)]">
                  Liability, workers&apos; comp, and health insurance (if
                  self-employed) are deductible.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--panel)]/50 border border-white/5">
                <h4 className="font-semibold text-[var(--text)] mb-2">
                  Subcontractor Payments
                </h4>
                <p className="text-sm text-[var(--muted)]">
                  Fully deductible. Issue 1099s for payments over $600/year.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--panel)]/50 border border-white/5">
                <h4 className="font-semibold text-[var(--text)] mb-2">
                  Professional Services
                </h4>
                <p className="text-sm text-[var(--muted)]">
                  Accounting, legal, and consulting fees are deductible business
                  expenses.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[var(--text)] mt-12 mb-4">
              Entity Structure Considerations
            </h2>
            <p className="text-[var(--muted)] mb-6">
              Your business structure affects how you&apos;re taxed. Common options
              for contractors:
            </p>

            <div className="space-y-6 mb-8">
              <div className="p-4 rounded-xl bg-[var(--panel)]/50 border border-white/5">
                <h4 className="font-semibold text-[var(--text)] mb-2">
                  Sole Proprietorship / Single-Member LLC
                </h4>
                <p className="text-sm text-[var(--muted)]">
                  Simplest structure. All income passes through to your personal
                  return. You pay self-employment tax on all net income.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--panel)]/50 border border-white/5">
                <h4 className="font-semibold text-[var(--text)] mb-2">
                  S Corporation
                </h4>
                <p className="text-sm text-[var(--muted)]">
                  Can reduce self-employment tax by paying yourself a
                  &quot;reasonable salary&quot; and taking remaining profits as
                  distributions (not subject to SE tax). Requires more
                  administration. Generally beneficial when net income exceeds
                  $60-80K.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--panel)]/50 border border-white/5">
                <h4 className="font-semibold text-[var(--text)] mb-2">
                  C Corporation
                </h4>
                <p className="text-sm text-[var(--muted)]">
                  Rarely optimal for contractors due to double taxation. May
                  make sense for very large operations or specific planning
                  scenarios.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[var(--text)] mt-12 mb-4">
              Year-End Tax Planning Checklist
            </h2>
            <p className="text-[var(--muted)] mb-6">
              Review these items before December 31:
            </p>
            <ul className="space-y-2 text-[var(--muted)] mb-8">
              <li className="flex items-start gap-2">
                <span className="text-[var(--teal)]">☐</span>
                <span>Estimate your total income and tax liability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--teal)]">☐</span>
                <span>
                  Consider accelerating deductions (buy equipment, prepay
                  expenses)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--teal)]">☐</span>
                <span>
                  Defer income if possible (delay invoicing until January)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--teal)]">☐</span>
                <span>Max out retirement contributions (SEP-IRA, Solo 401k)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--teal)]">☐</span>
                <span>Review Section 179 equipment purchases</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--teal)]">☐</span>
                <span>Gather receipts and documentation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--teal)]">☐</span>
                <span>Verify subcontractor information for 1099s</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--teal)]">☐</span>
                <span>Review entity structure for next year</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[var(--text)] mt-12 mb-4">
              Retirement Account Options
            </h2>
            <p className="text-[var(--muted)] mb-6">
              Self-employed contractors have excellent retirement savings
              options that also reduce taxable income:
            </p>

            <div className="p-6 rounded-2xl bg-[var(--panel)]/50 border border-white/5 mb-8 not-prose">
              <div className="space-y-4 text-sm">
                <div className="pb-4 border-b border-white/5">
                  <h4 className="font-semibold text-[var(--text)]">SEP-IRA</h4>
                  <p className="text-[var(--muted)]">
                    Contribute up to 25% of net self-employment income, max
                    $69,000 (2024). Simple to set up, deadline is tax filing
                    date.
                  </p>
                </div>
                <div className="pb-4 border-b border-white/5">
                  <h4 className="font-semibold text-[var(--text)]">Solo 401(k)</h4>
                  <p className="text-[var(--muted)]">
                    Higher contribution limits than SEP-IRA if income is under
                    ~$350K. Allows employee + employer contributions. More
                    complex to administer.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--text)]">SIMPLE IRA</h4>
                  <p className="text-[var(--muted)]">
                    Lower limits ($16,000 employee + 3% match in 2024) but
                    easier if you have employees.
                  </p>
                </div>
              </div>
            </div>

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
            Track Your Income in Real-Time
          </h2>
          <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto">
            A Command Advisor monitors your QuickBooks data and helps you stay
            on top of quarterly estimates and deduction opportunities.
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
              href="/guides/cash-flow-management"
              className="p-4 rounded-xl bg-[var(--panel)]/50 border border-white/5 hover:border-[var(--teal)]/30 transition-all hover:no-underline group"
            >
              <h3 className="font-medium text-[var(--text)] group-hover:text-[var(--teal)]">
                Cash Flow Management
              </h3>
              <p className="text-sm text-[var(--muted)]">
                Quarterly tax payments affect cash flow — plan accordingly.
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
                Accurate job costing gives you better income estimates for tax
                planning.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
