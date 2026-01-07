import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Job Costing Fundamentals for Contractors | ContractorCFO",
  description:
    "Master the basics of job costing to know your true costs on every project. Learn about labor burden, overhead allocation, and how to price jobs profitably.",
  keywords: [
    "job costing",
    "construction job costing",
    "contractor pricing",
    "labor burden",
    "overhead allocation",
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
    name: "IRS Publication 15",
    url: "https://www.irs.gov/publications/p15",
    citation:
      "Internal Revenue Service. Employer's Tax Guide - employer tax obligations including FICA.",
  },
  {
    id: 3,
    name: "Bureau of Labor Statistics",
    url: "https://www.bls.gov/news.release/ecec.nr0.htm",
    citation:
      "U.S. Bureau of Labor Statistics. Employer Costs for Employee Compensation.",
  },
  {
    id: 4,
    name: "AGC Contractor's Guide",
    url: "https://www.agc.org/",
    citation:
      "Associated General Contractors of America. Financial management resources for contractors.",
  },
];

export default function JobCostingBasicsGuide() {
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
                Profitability
              </span>
              <span className="text-xs text-[var(--muted)]">15 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
              Job Costing Fundamentals
            </h1>
            <p className="text-xl text-[var(--muted)]">
              Job costing is how contractors know whether they made money on a
              project. Without accurate job costing, you&apos;re guessing — and
              guessing leads to pricing mistakes that kill profitability.
            </p>
          </header>

          <div className="prose prose-invert max-w-none">
            {/* Key Stat */}
            <div className="p-6 rounded-2xl bg-[var(--teal)]/10 border border-[var(--teal)]/20 mb-8 not-prose">
              <p className="text-lg text-[var(--text)] font-medium">
                Contractors who implement formal job costing systems see an
                average 3-5% improvement in gross margins within the first year.
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
              What Is Job Costing?
            </h2>
            <p className="text-[var(--muted)] mb-6">
              Job costing is a method of tracking all costs associated with a
              specific project or job. Unlike process costing (used in
              manufacturing), job costing treats each project as unique, with
              its own set of costs and revenue.
            </p>
            <p className="text-[var(--muted)] mb-6">
              For contractors, job costing answers a critical question:{" "}
              <strong className="text-[var(--text)]">
                Did we make money on this job, and if so, how much?
              </strong>
            </p>

            <h2 className="text-2xl font-bold text-[var(--text)] mt-12 mb-4">
              The Three Categories of Job Costs
            </h2>

            <h3 className="text-xl font-semibold text-[var(--text)] mt-8 mb-3">
              1. Direct Labor
            </h3>
            <p className="text-[var(--muted)] mb-4">
              Direct labor includes wages paid to workers who physically work on
              the job. But here&apos;s where most contractors make their first
              mistake: they only count the hourly wage.
            </p>
            <p className="text-[var(--muted)] mb-6">
              The true cost of labor includes the{" "}
              <strong className="text-[var(--text)]">labor burden</strong> —
              additional costs the employer pays beyond the wage:
            </p>

            <div className="p-6 rounded-2xl bg-[var(--panel)]/50 border border-white/5 mb-8 not-prose">
              <h4 className="font-semibold text-[var(--text)] mb-4">
                Labor Burden Components
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-[var(--muted)]">
                    FICA (Social Security + Medicare)
                  </span>
                  <span className="text-[var(--text)]">
                    7.65%<sup>[2]</sup>
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-[var(--muted)]">FUTA (Federal Unemployment)</span>
                  <span className="text-[var(--text)]">
                    0.6%<sup>[2]</sup>
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-[var(--muted)]">SUTA (State Unemployment)</span>
                  <span className="text-[var(--text)]">2-5% (varies)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-[var(--muted)]">Workers&apos; Compensation</span>
                  <span className="text-[var(--text)]">
                    3-15%<sup>[3]</sup>
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-[var(--muted)]">Health Insurance</span>
                  <span className="text-[var(--text)]">8-12% (if provided)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-[var(--muted)]">Paid Time Off</span>
                  <span className="text-[var(--text)]">4-8% (if provided)</span>
                </div>
                <div className="flex justify-between py-2 font-medium">
                  <span className="text-[var(--text)]">Typical Total Burden</span>
                  <span className="text-[var(--teal)]">
                    25-40%<sup>[1]</sup>
                  </span>
                </div>
              </div>
            </div>

            <p className="text-[var(--muted)] mb-6">
              <strong className="text-[var(--text)]">Example:</strong> If you
              pay a worker $30/hour, the true cost is $30 × 1.35 = $40.50/hour
              (assuming 35% burden). Pricing jobs at $30/hour means you&apos;re
              losing $10.50/hour before you even account for overhead or profit.
            </p>

            <h3 className="text-xl font-semibold text-[var(--text)] mt-8 mb-3">
              2. Direct Materials
            </h3>
            <p className="text-[var(--muted)] mb-6">
              Direct materials are supplies and materials that become part of
              the finished project. This includes lumber, concrete, pipe,
              fixtures, etc. The key is that these costs can be directly traced
              to a specific job.
            </p>
            <p className="text-[var(--muted)] mb-6">
              Don&apos;t forget to include:
            </p>
            <ul className="space-y-2 text-[var(--muted)] mb-8">
              <li>• Freight and delivery charges</li>
              <li>• Sales tax (if not exempt)</li>
              <li>• Waste factor (typically 5-15% depending on material)</li>
              <li>• Returns and credits (subtract these)</li>
            </ul>

            <h3 className="text-xl font-semibold text-[var(--text)] mt-8 mb-3">
              3. Other Direct Costs
            </h3>
            <p className="text-[var(--muted)] mb-6">
              These are costs that can be traced to a specific job but
              aren&apos;t labor or materials:
            </p>
            <ul className="space-y-2 text-[var(--muted)] mb-8">
              <li>• Subcontractor costs</li>
              <li>• Equipment rentals</li>
              <li>• Permits and fees</li>
              <li>• Job-specific insurance (bonds, builder&apos;s risk)</li>
              <li>• Travel and per diem (if job-specific)</li>
            </ul>

            <h2 className="text-2xl font-bold text-[var(--text)] mt-12 mb-4">
              Overhead Allocation
            </h2>
            <p className="text-[var(--muted)] mb-6">
              Overhead includes all the costs of running your business that
              can&apos;t be traced to a specific job: rent, utilities, office
              staff, insurance, vehicles, accounting, etc.
            </p>
            <p className="text-[var(--muted)] mb-6">
              These costs are real and must be recovered through your jobs.
              According to CFMA data, overhead rates for contractors typically
              range from 10-25% of direct costs, with the median around
              15%.<sup>[1]</sup>
            </p>

            <div className="p-6 rounded-2xl bg-[var(--panel)]/50 border border-white/5 mb-8 not-prose">
              <h4 className="font-semibold text-[var(--text)] mb-4">
                Calculating Your Overhead Rate
              </h4>
              <p className="text-sm text-[var(--muted)] mb-4">
                Take your annual overhead costs and divide by your annual direct
                costs:
              </p>
              <div className="p-4 rounded-lg bg-[var(--bg)] border border-white/10">
                <p className="text-[var(--teal)] font-mono">
                  Overhead Rate = Annual Overhead ÷ Annual Direct Costs
                </p>
              </div>
              <p className="text-sm text-[var(--muted)] mt-4">
                <strong className="text-[var(--text)]">Example:</strong> If your
                annual overhead is $150,000 and your annual direct costs are
                $1,000,000, your overhead rate is 15%.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-[var(--text)] mt-12 mb-4">
              The Job Cost Formula
            </h2>
            <p className="text-[var(--muted)] mb-6">
              Putting it all together, here&apos;s how to calculate the total
              cost of a job:
            </p>

            <div className="p-6 rounded-2xl bg-[var(--teal)]/10 border border-[var(--teal)]/20 mb-8 not-prose">
              <div className="space-y-2 font-mono text-sm">
                <p className="text-[var(--muted)]">Direct Labor (with burden)</p>
                <p className="text-[var(--muted)]">+ Direct Materials</p>
                <p className="text-[var(--muted)]">+ Other Direct Costs</p>
                <p className="text-[var(--muted)] border-t border-white/10 pt-2">
                  = Total Direct Costs
                </p>
                <p className="text-[var(--muted)]">+ Overhead Allocation</p>
                <p className="text-[var(--muted)] border-t border-white/10 pt-2">
                  = Total Job Cost
                </p>
                <p className="text-[var(--muted)]">+ Profit Margin</p>
                <p className="text-[var(--teal)] font-bold border-t border-white/10 pt-2">
                  = Job Price
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[var(--text)] mt-12 mb-4">
              Common Job Costing Mistakes
            </h2>

            <div className="space-y-6 mb-8">
              <div className="p-4 rounded-xl bg-[var(--panel)]/50 border border-white/5">
                <h4 className="font-semibold text-[var(--text)] mb-2">
                  1. Forgetting Labor Burden
                </h4>
                <p className="text-sm text-[var(--muted)]">
                  Using the wage rate instead of the fully burdened rate
                  understates labor costs by 25-40%.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--panel)]/50 border border-white/5">
                <h4 className="font-semibold text-[var(--text)] mb-2">
                  2. Not Tracking Time Accurately
                </h4>
                <p className="text-sm text-[var(--muted)]">
                  Workers who estimate hours at the end of the week underreport
                  by 10-15% on average. Use daily time tracking.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--panel)]/50 border border-white/5">
                <h4 className="font-semibold text-[var(--text)] mb-2">
                  3. Ignoring Overhead
                </h4>
                <p className="text-sm text-[var(--muted)]">
                  Pricing jobs based only on direct costs means overhead comes
                  out of your profit — or worse, you operate at a loss.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--panel)]/50 border border-white/5">
                <h4 className="font-semibold text-[var(--text)] mb-2">
                  4. Using Last Year&apos;s Numbers
                </h4>
                <p className="text-sm text-[var(--muted)]">
                  Material prices, labor rates, and overhead change. Review your
                  rates quarterly.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--panel)]/50 border border-white/5">
                <h4 className="font-semibold text-[var(--text)] mb-2">
                  5. Not Reviewing Completed Jobs
                </h4>
                <p className="text-sm text-[var(--muted)]">
                  Compare estimated costs to actual costs on every job. This is
                  how you improve your estimating accuracy.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[var(--text)] mt-12 mb-4">
              Implementing Job Costing
            </h2>
            <p className="text-[var(--muted)] mb-6">
              To implement job costing in your business:
            </p>
            <ol className="space-y-3 text-[var(--muted)] mb-8">
              <li className="flex items-start gap-3">
                <span className="text-[var(--teal)] font-bold">1.</span>
                <span>
                  <strong className="text-[var(--text)]">
                    Set up job codes in your accounting system
                  </strong>{" "}
                  — Every expense should be tagged to a job (or to overhead).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--teal)] font-bold">2.</span>
                <span>
                  <strong className="text-[var(--text)]">
                    Calculate your labor burden rate
                  </strong>{" "}
                  — Include all employer costs, not just wages.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--teal)] font-bold">3.</span>
                <span>
                  <strong className="text-[var(--text)]">
                    Calculate your overhead rate
                  </strong>{" "}
                  — Review and update quarterly.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--teal)] font-bold">4.</span>
                <span>
                  <strong className="text-[var(--text)]">
                    Track time daily
                  </strong>{" "}
                  — Don&apos;t rely on weekly estimates.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--teal)] font-bold">5.</span>
                <span>
                  <strong className="text-[var(--text)]">
                    Review job profitability monthly
                  </strong>{" "}
                  — Compare estimates to actuals while the job is fresh.
                </span>
              </li>
            </ol>

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
            Calculate Your Job Costs Now
          </h2>
          <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto">
            Use our free Job Costing Calculator to apply these concepts to your
            next estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/job-costing-calculator"
              className="px-8 py-4 bg-[#0A0D1E] text-[var(--teal)] font-semibold rounded-xl border border-[var(--teal)] hover:no-underline hover:bg-[var(--teal)] hover:text-black transition-all"
            >
              Open Job Costing Calculator
            </Link>
            <a
              href="https://go.omnyra.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#0A0D1E] border border-[var(--teal)]/40 text-[var(--text)] font-semibold rounded-xl hover:no-underline hover:border-[var(--teal)] transition-all"
            >
              Get Automated Tracking
            </a>
          </div>
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
              href="/tools/markup-margin-calculator"
              className="p-4 rounded-xl bg-[var(--panel)]/50 border border-white/5 hover:border-[var(--teal)]/30 transition-all hover:no-underline group"
            >
              <h3 className="font-medium text-[var(--text)] group-hover:text-[var(--teal)]">
                Markup vs Margin Calculator
              </h3>
              <p className="text-sm text-[var(--muted)]">
                Make sure you understand the difference when setting prices.
              </p>
            </Link>
            <Link
              href="/guides/cash-flow-management"
              className="p-4 rounded-xl bg-[var(--panel)]/50 border border-white/5 hover:border-[var(--teal)]/30 transition-all hover:no-underline group"
            >
              <h3 className="font-medium text-[var(--text)] group-hover:text-[var(--teal)]">
                Cash Flow Management
              </h3>
              <p className="text-sm text-[var(--muted)]">
                Profitable jobs don&apos;t help if you run out of cash first.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
