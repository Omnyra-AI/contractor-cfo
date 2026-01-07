import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contractor Finance Articles | ContractorCFO",
  description:
    "Expert articles on contractor finance, cash flow, job costing, taxes, and business management. Practical advice with cited sources.",
  keywords: [
    "contractor finance articles",
    "construction business tips",
    "contractor cash flow",
    "construction accounting",
  ],
};

const articles = [
  {
    title: "Why 82% of Construction Failures Are Cash Flow Problems",
    description:
      "It's not lack of work that kills contractors—it's running out of cash. Learn why cash flow is the #1 killer and what to do about it.",
    href: "/articles/construction-cash-flow-failures",
    date: "January 2026",
    readTime: "6 min",
    category: "Cash Flow",
  },
  {
    title: "The True Cost of an Employee: Calculating Labor Burden",
    description:
      "Your $25/hour employee actually costs $33-35/hour. Here's how to calculate the real cost and price jobs correctly.",
    href: "/articles/calculating-labor-burden",
    date: "January 2026",
    readTime: "5 min",
    category: "Job Costing",
  },
  {
    title: "Markup vs Margin: Why Contractors Lose Money on 'Profitable' Jobs",
    description:
      "A 20% markup is only a 16.7% margin. This confusion causes contractors to underprice jobs every day.",
    href: "/articles/markup-vs-margin-explained",
    date: "January 2026",
    readTime: "4 min",
    category: "Pricing",
  },
];

export default function ArticlesPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
            Contractor Finance Articles
          </h1>
          <p className="text-xl text-[var(--muted)] mb-8">
            Practical finance advice for contractors. Short reads with
            actionable takeaways and cited sources.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="block p-6 rounded-2xl bg-[var(--panel)]/50 border border-white/5 hover:border-[var(--teal)]/30 transition-all hover:no-underline group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-[var(--teal)] font-medium uppercase tracking-wider">
                        {article.category}
                      </span>
                      <span className="text-xs text-[var(--muted)]">
                        {article.readTime} read
                      </span>
                      <span className="text-xs text-[var(--muted)]">
                        {article.date}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-[var(--text)] mb-2 group-hover:text-[var(--teal)]">
                      {article.title}
                    </h2>
                    <p className="text-[var(--muted)]">{article.description}</p>
                  </div>
                  <span className="text-[var(--teal)] text-2xl ml-4">
                    &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[var(--teal)]/10 to-[var(--violet-start)]/10 border border-[var(--teal)]/20 text-center">
            <h3 className="text-xl font-semibold text-[var(--text)] mb-2">
              Want More In-Depth Content?
            </h3>
            <p className="text-[var(--muted)] mb-4">
              Check out our comprehensive guides for deeper dives into
              contractor finance topics.
            </p>
            <Link
              href="/guides"
              className="inline-block px-6 py-3 bg-[#0A0D1E] text-[var(--teal)] font-semibold rounded-xl border border-[var(--teal)] hover:no-underline hover:bg-[var(--teal)] hover:text-black transition-all"
            >
              Browse Guides
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
