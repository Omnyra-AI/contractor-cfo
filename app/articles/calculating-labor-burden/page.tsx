import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The True Cost of an Employee: Calculating Labor Burden | ContractorCFO",
  description:
    "Your $25/hour employee actually costs $33-35/hour. Here's how to calculate the real cost and price jobs correctly.",
  keywords: [
    "labor burden calculation",
    "true employee cost",
    "contractor labor costs",
    "construction payroll burden",
  ],
};

export default function CalculatingLaborBurdenArticle() {
  return (
    <article className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Link
              href="/articles"
              className="text-[var(--teal)] hover:underline text-sm"
            >
              ← Back to Articles
            </Link>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs text-[var(--teal)] font-medium uppercase tracking-wider">
              Job Costing
            </span>
            <span className="text-xs text-[var(--muted)]">5 min read</span>
            <span className="text-xs text-[var(--muted)]">January 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
            The True Cost of an Employee: Calculating Labor Burden
          </h1>
          <p className="text-xl text-[var(--muted)]">
            Your $25/hour employee actually costs $33-35/hour. If you&apos;re
            not accounting for this, you&apos;re losing money on every job.
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
              What Is Labor Burden?
            </h2>
            <p className="text-[var(--muted)] mb-4">
              Labor burden is the total cost of employing someone beyond their
              base wage. It includes all the mandatory taxes, benefits, and
              associated costs that come with having an employee on payroll.
            </p>
            <p className="text-[var(--muted)] mb-4">
              When you price jobs using only the hourly wage, you&apos;re
              guaranteed to lose money. A $25/hour carpenter doesn&apos;t cost
              you $25/hour—they cost you somewhere between $32.50 and $37.50
              depending on your specific burden rate.
            </p>
            <div className="p-4 rounded-xl bg-[var(--panel)]/50 border border-white/5 my-6">
              <p className="text-[var(--text)] font-medium mb-2">
                Industry Standard
              </p>
              <p className="text-[var(--muted)]">
                According to the Construction Financial Management Association
                (CFMA), labor burden typically ranges from{" "}
                <strong className="text-[var(--text)]">30% to 50%</strong> of
                base wages for construction workers, depending on benefits
                offered and state requirements.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
              Components of Labor Burden
            </h2>
            <p className="text-[var(--muted)] mb-4">
              Let&apos;s break down exactly what makes up your labor burden.
              These percentages are based on 2024-2025 rates:
            </p>

            <h3 className="text-xl font-semibold text-[var(--text)] mb-3 mt-6">
              Mandatory Employer Taxes
            </h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 text-[var(--text)]">Tax</th>
                    <th className="text-right py-3 text-[var(--text)]">Rate</th>
                    <th className="text-right py-3 text-[var(--text)]">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[var(--muted)]">
                  <tr className="border-b border-white/5">
                    <td className="py-3">Social Security (FICA)</td>
                    <td className="text-right">6.2%</td>
                    <td className="text-right">Up to $168,600 (2024)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Medicare</td>
                    <td className="text-right">1.45%</td>
                    <td className="text-right">No wage cap</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Federal Unemployment (FUTA)</td>
                    <td className="text-right">0.6%</td>
                    <td className="text-right">
                      First $7,000 (with state credit)
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">State Unemployment (SUTA)</td>
                    <td className="text-right">1-6%</td>
                    <td className="text-right">Varies by state and history</td>
                  </tr>
                  <tr className="font-semibold text-[var(--text)]">
                    <td className="py-3">Subtotal: Taxes</td>
                    <td className="text-right">9.25-14.25%</td>
                    <td className="text-right"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[var(--muted)] mb-4">
              Source: IRS Publication 15 (Circular E) and IRS Publication 15-A
              for current tax rates
            </p>

            <h3 className="text-xl font-semibold text-[var(--text)] mb-3 mt-6">
              Insurance Requirements
            </h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 text-[var(--text)]">
                      Insurance
                    </th>
                    <th className="text-right py-3 text-[var(--text)]">
                      Typical Rate
                    </th>
                    <th className="text-right py-3 text-[var(--text)]">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[var(--muted)]">
                  <tr className="border-b border-white/5">
                    <td className="py-3">Workers&apos; Compensation</td>
                    <td className="text-right">3-15%</td>
                    <td className="text-right">Varies by trade and state</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">General Liability</td>
                    <td className="text-right">1-3%</td>
                    <td className="text-right">Portion allocated to labor</td>
                  </tr>
                  <tr className="font-semibold text-[var(--text)]">
                    <td className="py-3">Subtotal: Insurance</td>
                    <td className="text-right">4-18%</td>
                    <td className="text-right"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[var(--muted)] mb-4">
              Source: National Council on Compensation Insurance (NCCI) rate
              filings
            </p>

            <h3 className="text-xl font-semibold text-[var(--text)] mb-3 mt-6">
              Benefits (If Offered)
            </h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 text-[var(--text)]">
                      Benefit
                    </th>
                    <th className="text-right py-3 text-[var(--text)]">
                      Typical Cost
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[var(--muted)]">
                  <tr className="border-b border-white/5">
                    <td className="py-3">Health Insurance</td>
                    <td className="text-right">$400-800/month per employee</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Paid Time Off</td>
                    <td className="text-right">4-8% of wages</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Retirement Match</td>
                    <td className="text-right">3-6% of wages</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Training & Certifications</td>
                    <td className="text-right">1-2% of wages</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[var(--muted)] mb-4">
              Source: Bureau of Labor Statistics Employer Costs for Employee
              Compensation
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
              Real Example: $25/Hour Carpenter
            </h2>
            <p className="text-[var(--muted)] mb-4">
              Let&apos;s calculate the actual cost of a carpenter earning
              $25/hour in a typical scenario:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 text-[var(--text)]">
                      Component
                    </th>
                    <th className="text-right py-3 text-[var(--text)]">Rate</th>
                    <th className="text-right py-3 text-[var(--text)]">
                      Cost/Hour
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[var(--muted)]">
                  <tr className="border-b border-white/5">
                    <td className="py-3">Base Wage</td>
                    <td className="text-right">100%</td>
                    <td className="text-right">$25.00</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">FICA + Medicare</td>
                    <td className="text-right">7.65%</td>
                    <td className="text-right">$1.91</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">FUTA + SUTA</td>
                    <td className="text-right">3.0%</td>
                    <td className="text-right">$0.75</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Workers&apos; Comp</td>
                    <td className="text-right">8.0%</td>
                    <td className="text-right">$2.00</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">General Liability</td>
                    <td className="text-right">2.0%</td>
                    <td className="text-right">$0.50</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Health Insurance</td>
                    <td className="text-right">—</td>
                    <td className="text-right">$3.46</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Paid Time Off (10 days)</td>
                    <td className="text-right">4.0%</td>
                    <td className="text-right">$1.00</td>
                  </tr>
                  <tr className="font-bold text-[var(--text)] border-t border-white/20">
                    <td className="py-3">Total Burdened Cost</td>
                    <td className="text-right">~35%</td>
                    <td className="text-right">$34.62</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 my-6">
              <p className="text-[var(--text)] font-medium mb-2">
                The Hidden Loss
              </p>
              <p className="text-[var(--muted)]">
                If you quote jobs using the $25/hour wage, you&apos;re losing{" "}
                <strong className="text-red-400">$9.62 per hour</strong> on
                labor before you even account for overhead or profit. On a
                40-hour job, that&apos;s $385 gone.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
              How to Calculate Your Burden Rate
            </h2>
            <p className="text-[var(--muted)] mb-4">Follow these steps:</p>

            <ol className="list-decimal pl-6 text-[var(--muted)] space-y-4 mb-6">
              <li>
                <strong className="text-[var(--text)]">
                  Add up annual payroll taxes
                </strong>{" "}
                — FICA, Medicare, FUTA, SUTA for all employees
              </li>
              <li>
                <strong className="text-[var(--text)]">
                  Add insurance premiums
                </strong>{" "}
                — Workers&apos; comp, liability portion, health insurance
              </li>
              <li>
                <strong className="text-[var(--text)]">Add benefits costs</strong>{" "}
                — PTO, retirement match, training, uniforms, tools provided
              </li>
              <li>
                <strong className="text-[var(--text)]">
                  Divide by total wages
                </strong>{" "}
                — This gives you your burden rate as a percentage
              </li>
            </ol>

            <div className="p-4 rounded-xl bg-[var(--panel)]/50 border border-white/5 my-6 font-mono text-sm">
              <p className="text-[var(--text)] mb-2">Formula:</p>
              <p className="text-[var(--muted)]">
                Burden Rate = (Taxes + Insurance + Benefits) ÷ Total Wages × 100
              </p>
              <p className="text-[var(--muted)] mt-4">
                Burdened Hourly Rate = Base Wage × (1 + Burden Rate)
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
              Burden Rates by Trade
            </h2>
            <p className="text-[var(--muted)] mb-4">
              Different trades have different burden rates, primarily due to
              workers&apos; compensation variations:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 text-[var(--text)]">Trade</th>
                    <th className="text-right py-3 text-[var(--text)]">
                      Typical WC Rate
                    </th>
                    <th className="text-right py-3 text-[var(--text)]">
                      Total Burden
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[var(--muted)]">
                  <tr className="border-b border-white/5">
                    <td className="py-3">Office/Admin</td>
                    <td className="text-right">0.5-1%</td>
                    <td className="text-right">25-30%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Electrician</td>
                    <td className="text-right">3-5%</td>
                    <td className="text-right">28-35%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Plumber</td>
                    <td className="text-right">4-6%</td>
                    <td className="text-right">30-38%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Carpenter</td>
                    <td className="text-right">6-10%</td>
                    <td className="text-right">32-42%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Roofer</td>
                    <td className="text-right">15-25%</td>
                    <td className="text-right">40-55%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[var(--muted)]">
              Source: NCCI rate filings and CFMA industry benchmarks
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
              Key Takeaways
            </h2>
            <ul className="list-disc pl-6 text-[var(--muted)] space-y-2">
              <li>
                Always use burdened labor rates when estimating jobs—never base
                wages
              </li>
              <li>
                Calculate your actual burden rate annually using real numbers
                from your books
              </li>
              <li>
                Different employees may have different burden rates based on
                their benefits
              </li>
              <li>
                Review your workers&apos; comp classification codes—you might be
                overpaying
              </li>
              <li>
                Factor in non-productive time (meetings, travel, cleanup) when
                estimating
              </li>
            </ul>
          </section>

          {/* Sources */}
          <section className="mt-12 pt-8 border-t border-white/10">
            <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
              Sources & Further Reading
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://www.irs.gov/publications/p15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--teal)] hover:underline"
                >
                  IRS Publication 15 (Circular E)
                </a>
                <span className="text-[var(--muted)]">
                  {" "}
                  — Employer&apos;s Tax Guide with current FICA, Medicare, and
                  FUTA rates
                </span>
              </li>
              <li>
                <a
                  href="https://www.irs.gov/publications/p15a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--teal)] hover:underline"
                >
                  IRS Publication 15-A
                </a>
                <span className="text-[var(--muted)]">
                  {" "}
                  — Employer&apos;s Supplemental Tax Guide
                </span>
              </li>
              <li>
                <a
                  href="https://www.bls.gov/news.release/ecec.toc.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--teal)] hover:underline"
                >
                  BLS: Employer Costs for Employee Compensation
                </a>
                <span className="text-[var(--muted)]">
                  {" "}
                  — National statistics on total compensation costs
                </span>
              </li>
              <li>
                <a
                  href="https://www.ncci.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--teal)] hover:underline"
                >
                  National Council on Compensation Insurance (NCCI)
                </a>
                <span className="text-[var(--muted)]">
                  {" "}
                  — Workers&apos; compensation rate information by state and
                  classification
                </span>
              </li>
              <li>
                <a
                  href="https://www.cfma.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--teal)] hover:underline"
                >
                  Construction Financial Management Association
                </a>
                <span className="text-[var(--muted)]">
                  {" "}
                  — Industry benchmarks and financial best practices
                </span>
              </li>
            </ul>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-[var(--teal)]/10 to-[var(--violet-start)]/10 border border-[var(--teal)]/20">
          <h3 className="text-xl font-semibold text-[var(--text)] mb-2">
            Calculate Your True Job Costs
          </h3>
          <p className="text-[var(--muted)] mb-4">
            Our job costing calculator includes labor burden calculations to
            help you price jobs profitably.
          </p>
          <Link
            href="/tools/job-costing-calculator"
            className="inline-block px-6 py-3 bg-[#0A0D1E] text-[var(--teal)] font-semibold rounded-xl border border-[var(--teal)] hover:no-underline hover:bg-[var(--teal)] hover:text-black transition-all"
          >
            Try the Job Costing Calculator
          </Link>
        </div>
      </div>
    </article>
  );
}
