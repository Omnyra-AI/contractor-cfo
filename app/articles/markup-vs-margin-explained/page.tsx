import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Markup vs Margin: Why Contractors Lose Money on 'Profitable' Jobs | ContractorCFO",
  description:
    "A 20% markup is only a 16.7% margin. This confusion causes contractors to underprice jobs every day. Learn the difference.",
  keywords: [
    "markup vs margin",
    "contractor pricing",
    "construction markup",
    "profit margin calculation",
  ],
};

export default function MarkupVsMarginArticle() {
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
              Pricing
            </span>
            <span className="text-xs text-[var(--muted)]">4 min read</span>
            <span className="text-xs text-[var(--muted)]">January 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
            Markup vs Margin: Why Contractors Lose Money on
            &ldquo;Profitable&rdquo; Jobs
          </h1>
          <p className="text-xl text-[var(--muted)]">
            A 20% markup is only a 16.7% margin. This single confusion causes
            contractors to underprice jobs every single day.
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
              The $100,000 Mistake
            </h2>
            <p className="text-[var(--muted)] mb-4">
              A contractor bids a job at $100,000. His costs are $80,000. He
              thinks he&apos;s making 20% profit. But is he?
            </p>
            <p className="text-[var(--muted)] mb-4">
              If he calculated using <strong>markup</strong> (adding 20% to his
              costs), his math was: $80,000 × 1.20 = $96,000. He actually bid
              too low.
            </p>
            <p className="text-[var(--muted)] mb-4">
              If he wanted a 20% <strong>margin</strong> (keeping 20% of the
              selling price as profit), the correct price is: $80,000 ÷ 0.80 =
              $100,000.
            </p>
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 my-6">
              <p className="text-[var(--text)] font-medium mb-2">The Problem</p>
              <p className="text-[var(--muted)]">
                When you add 20% markup to your costs, you only get a{" "}
                <strong className="text-red-400">16.7% margin</strong>. If your
                overhead is 15% and you need 5% net profit, a 20% markup leaves
                you with almost nothing.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
              Definitions: Markup vs. Margin
            </h2>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="p-4 rounded-xl bg-[var(--panel)]/50 border border-white/5">
                <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
                  Markup
                </h3>
                <p className="text-[var(--muted)] text-sm mb-3">
                  The percentage added TO your cost
                </p>
                <div className="font-mono text-sm text-[var(--muted)]">
                  <p>Markup = (Price - Cost) ÷ Cost</p>
                  <p className="mt-2">Price = Cost × (1 + Markup%)</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[var(--panel)]/50 border border-white/5">
                <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
                  Margin
                </h3>
                <p className="text-[var(--muted)] text-sm mb-3">
                  The percentage OF your selling price that&apos;s profit
                </p>
                <div className="font-mono text-sm text-[var(--muted)]">
                  <p>Margin = (Price - Cost) ÷ Price</p>
                  <p className="mt-2">Price = Cost ÷ (1 - Margin%)</p>
                </div>
              </div>
            </div>

            <p className="text-[var(--muted)] mb-4">
              The key difference: markup is based on{" "}
              <strong className="text-[var(--text)]">cost</strong>, margin is
              based on <strong className="text-[var(--text)]">price</strong>.
              Since price is always larger than cost, the same dollar amount
              represents a smaller percentage of the price than of the cost.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
              The Conversion Table Every Contractor Needs
            </h2>
            <p className="text-[var(--muted)] mb-4">
              This table shows the relationship between markup and margin. Print
              it out and put it where you do estimates:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 text-[var(--text)]">
                      If Your Markup Is:
                    </th>
                    <th className="text-center py-3 text-[var(--text)]">
                      Your Actual Margin Is:
                    </th>
                    <th className="text-right py-3 text-[var(--text)]">
                      Example ($1,000 Cost)
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[var(--muted)]">
                  <tr className="border-b border-white/5">
                    <td className="py-3">10%</td>
                    <td className="text-center">9.1%</td>
                    <td className="text-right">Price: $1,100 | Profit: $100</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">15%</td>
                    <td className="text-center">13.0%</td>
                    <td className="text-right">Price: $1,150 | Profit: $150</td>
                  </tr>
                  <tr className="border-b border-white/5 bg-red-500/5">
                    <td className="py-3">20%</td>
                    <td className="text-center font-semibold text-red-400">
                      16.7%
                    </td>
                    <td className="text-right">Price: $1,200 | Profit: $200</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">25%</td>
                    <td className="text-center">20.0%</td>
                    <td className="text-right">Price: $1,250 | Profit: $250</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">30%</td>
                    <td className="text-center">23.1%</td>
                    <td className="text-right">Price: $1,300 | Profit: $300</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">35%</td>
                    <td className="text-center">25.9%</td>
                    <td className="text-right">Price: $1,350 | Profit: $350</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">40%</td>
                    <td className="text-center">28.6%</td>
                    <td className="text-right">Price: $1,400 | Profit: $400</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">50%</td>
                    <td className="text-center">33.3%</td>
                    <td className="text-right">Price: $1,500 | Profit: $500</td>
                  </tr>
                  <tr className="border-b border-white/5 bg-[var(--teal)]/5">
                    <td className="py-3">67%</td>
                    <td className="text-center font-semibold text-[var(--teal)]">
                      40.0%
                    </td>
                    <td className="text-right">Price: $1,670 | Profit: $670</td>
                  </tr>
                  <tr>
                    <td className="py-3">100%</td>
                    <td className="text-center">50.0%</td>
                    <td className="text-right">
                      Price: $2,000 | Profit: $1,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 rounded-xl bg-[var(--teal)]/10 border border-[var(--teal)]/20 my-6">
              <p className="text-[var(--text)] font-medium mb-2">Key Insight</p>
              <p className="text-[var(--muted)]">
                To achieve a 40% gross margin (which many healthy contractors
                target), you need a{" "}
                <strong className="text-[var(--teal)]">67% markup</strong>—not
                40%. This is why &ldquo;doubling your money&rdquo; (100% markup)
                only gives you 50% margin.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
              Why This Matters for Your Overhead
            </h2>
            <p className="text-[var(--muted)] mb-4">
              According to the Construction Financial Management Association
              (CFMA), typical contractor overhead runs 15-25% of revenue. This
              includes:
            </p>
            <ul className="list-disc pl-6 text-[var(--muted)] space-y-2 mb-4">
              <li>Office rent and utilities</li>
              <li>Administrative salaries</li>
              <li>Insurance premiums</li>
              <li>Vehicle costs</li>
              <li>Marketing and business development</li>
              <li>Software and equipment</li>
            </ul>
            <p className="text-[var(--muted)] mb-4">
              If your overhead is 20% and you&apos;re using a 20% markup
              (thinking you&apos;ll make 20%), here&apos;s what actually
              happens:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 text-[var(--text)]">
                      Line Item
                    </th>
                    <th className="text-right py-3 text-[var(--text)]">
                      Amount
                    </th>
                    <th className="text-right py-3 text-[var(--text)]">
                      % of Revenue
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[var(--muted)]">
                  <tr className="border-b border-white/5">
                    <td className="py-3">Job Revenue</td>
                    <td className="text-right">$120,000</td>
                    <td className="text-right">100%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Direct Costs</td>
                    <td className="text-right">($100,000)</td>
                    <td className="text-right">83.3%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Gross Profit</td>
                    <td className="text-right">$20,000</td>
                    <td className="text-right">16.7%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Overhead (20% of revenue)</td>
                    <td className="text-right">($24,000)</td>
                    <td className="text-right">20%</td>
                  </tr>
                  <tr className="font-bold text-red-400 border-t border-white/20">
                    <td className="py-3">Net Profit (Loss)</td>
                    <td className="text-right">($4,000)</td>
                    <td className="text-right">-3.3%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-[var(--muted)] mb-4">
              You thought you were making money. You actually{" "}
              <strong className="text-red-400">lost $4,000</strong> on a job you
              considered profitable.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
              The Correct Way to Price Jobs
            </h2>

            <h3 className="text-xl font-semibold text-[var(--text)] mb-3 mt-6">
              Step 1: Know Your Required Gross Margin
            </h3>
            <p className="text-[var(--muted)] mb-4">
              Your gross margin must cover overhead AND produce net profit.
              Formula:
            </p>
            <div className="p-4 rounded-xl bg-[var(--panel)]/50 border border-white/5 my-4 font-mono text-sm">
              <p className="text-[var(--muted)]">
                Required Gross Margin = Overhead % + Desired Net Profit %
              </p>
              <p className="text-[var(--muted)] mt-2">
                Example: 20% overhead + 10% net profit = 30% required gross
                margin
              </p>
            </div>

            <h3 className="text-xl font-semibold text-[var(--text)] mb-3 mt-6">
              Step 2: Calculate the Markup Needed
            </h3>
            <p className="text-[var(--muted)] mb-4">
              Use the conversion formula to find your required markup:
            </p>
            <div className="p-4 rounded-xl bg-[var(--panel)]/50 border border-white/5 my-4 font-mono text-sm">
              <p className="text-[var(--muted)]">
                Required Markup = Margin ÷ (1 - Margin)
              </p>
              <p className="text-[var(--muted)] mt-2">
                For 30% margin: 0.30 ÷ 0.70 = 42.9% markup
              </p>
            </div>

            <h3 className="text-xl font-semibold text-[var(--text)] mb-3 mt-6">
              Step 3: Apply to Your Estimates
            </h3>
            <p className="text-[var(--muted)] mb-4">
              When your direct costs are $100,000 and you need 30% margin:
            </p>
            <div className="p-4 rounded-xl bg-[var(--teal)]/10 border border-[var(--teal)]/20 my-4 font-mono text-sm">
              <p className="text-[var(--muted)]">
                Price = $100,000 ÷ (1 - 0.30) = $142,857
              </p>
              <p className="text-[var(--muted)] mt-2">Gross profit = $42,857</p>
              <p className="text-[var(--muted)]">Overhead (20%) = $28,571</p>
              <p className="text-[var(--muted)]">Net profit = $14,286 (10%)</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
              Common Industry Markups
            </h2>
            <p className="text-[var(--muted)] mb-4">
              According to industry data from the National Association of Home
              Builders (NAHB) and CFMA, here are typical markups by project
              type:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 text-[var(--text)]">
                      Project Type
                    </th>
                    <th className="text-center py-3 text-[var(--text)]">
                      Typical Markup
                    </th>
                    <th className="text-center py-3 text-[var(--text)]">
                      Resulting Margin
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[var(--muted)]">
                  <tr className="border-b border-white/5">
                    <td className="py-3">Residential Remodeling</td>
                    <td className="text-center">50-67%</td>
                    <td className="text-center">33-40%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Custom Home Building</td>
                    <td className="text-center">15-25%</td>
                    <td className="text-center">13-20%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Commercial Construction</td>
                    <td className="text-center">10-20%</td>
                    <td className="text-center">9-17%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Service/Repair Work</td>
                    <td className="text-center">75-150%</td>
                    <td className="text-center">43-60%</td>
                  </tr>
                  <tr>
                    <td className="py-3">Specialty Trades</td>
                    <td className="text-center">35-50%</td>
                    <td className="text-center">26-33%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[var(--muted)]">
              Source: NAHB Cost of Doing Business Study, CFMA Annual Financial
              Survey
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
              Key Takeaways
            </h2>
            <ul className="list-disc pl-6 text-[var(--muted)] space-y-2">
              <li>
                Markup and margin are NOT the same—never use them
                interchangeably
              </li>
              <li>
                Margin is the more useful metric because overhead is a
                percentage of revenue
              </li>
              <li>
                A 20% markup only gives you a 16.7% margin—not enough for most
                contractors
              </li>
              <li>
                Calculate your required margin first (overhead + desired
                profit), then convert to markup
              </li>
              <li>
                When in doubt, use the formula: Price = Cost ÷ (1 - Margin%)
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
                  href="https://www.cfma.org/publications"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--teal)] hover:underline"
                >
                  CFMA Annual Financial Survey
                </a>
                <span className="text-[var(--muted)]">
                  {" "}
                  — Industry-wide construction financial benchmarks and overhead
                  statistics
                </span>
              </li>
              <li>
                <a
                  href="https://www.nahb.org/advocacy/industry-issues/economics/cost-of-doing-business-study"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--teal)] hover:underline"
                >
                  NAHB Cost of Doing Business Study
                </a>
                <span className="text-[var(--muted)]">
                  {" "}
                  — Home builder financial performance benchmarks
                </span>
              </li>
              <li>
                <a
                  href="https://www.sba.gov/business-guide/manage-your-business/manage-your-finances"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--teal)] hover:underline"
                >
                  SBA: Managing Your Business Finances
                </a>
                <span className="text-[var(--muted)]">
                  {" "}
                  — Small business pricing and profitability guidance
                </span>
              </li>
              <li>
                <a
                  href="https://www.agc.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--teal)] hover:underline"
                >
                  Associated General Contractors of America
                </a>
                <span className="text-[var(--muted)]">
                  {" "}
                  — Construction industry standards and best practices
                </span>
              </li>
            </ul>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-[var(--teal)]/10 to-[var(--violet-start)]/10 border border-[var(--teal)]/20">
          <h3 className="text-xl font-semibold text-[var(--text)] mb-2">
            Convert Markup and Margin Instantly
          </h3>
          <p className="text-[var(--muted)] mb-4">
            Use our free calculator to convert between markup and margin, and
            ensure you&apos;re pricing jobs for actual profitability.
          </p>
          <Link
            href="/tools/markup-margin-calculator"
            className="inline-block px-6 py-3 bg-[#0A0D1E] text-[var(--teal)] font-semibold rounded-xl border border-[var(--teal)] hover:no-underline hover:bg-[var(--teal)] hover:text-black transition-all"
          >
            Try the Markup/Margin Calculator
          </Link>
        </div>
      </div>
    </article>
  );
}
