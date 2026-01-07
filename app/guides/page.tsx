import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contractor Finance Guides | ContractorCFO",
  description:
    "In-depth guides on cash flow management, job costing, tax planning, and more for contractors and construction businesses.",
  keywords: [
    "contractor finance guide",
    "construction cash flow",
    "contractor tax planning",
    "job costing guide",
  ],
};

const guides = [
  {
    title: "Cash Flow Management for Contractors",
    description:
      "Learn how to manage cash flow timing, handle retainage, and avoid the cash crunches that kill construction businesses.",
    href: "/guides/cash-flow-management",
    readTime: "12 min",
    category: "Cash Flow",
  },
  {
    title: "Job Costing Fundamentals",
    description:
      "Master the basics of job costing to know your true costs on every project. Includes labor burden, overhead allocation, and more.",
    href: "/guides/job-costing-basics",
    readTime: "15 min",
    category: "Profitability",
  },
  {
    title: "Contractor Tax Planning",
    description:
      "Essential tax strategies for contractors, including quarterly estimates, common deductions, and entity structure considerations.",
    href: "/guides/contractor-taxes",
    readTime: "10 min",
    category: "Taxes",
  },
];

export default function GuidesPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
            Contractor Finance Guides
          </h1>
          <p className="text-xl text-[var(--muted)] mb-8">
            In-depth guides on the financial topics that matter most to
            contractors. All guides include source citations from industry
            organizations.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="block p-6 rounded-2xl bg-[var(--panel)]/50 border border-white/5 hover:border-[var(--teal)]/30 transition-all hover:no-underline group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-[var(--teal)] font-medium uppercase tracking-wider">
                        {guide.category}
                      </span>
                      <span className="text-xs text-[var(--muted)]">
                        {guide.readTime} read
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-[var(--text)] mb-2 group-hover:text-[var(--teal)]">
                      {guide.title}
                    </h2>
                    <p className="text-[var(--muted)]">{guide.description}</p>
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
              About Our Guides
            </h3>
            <p className="text-[var(--muted)] text-sm">
              All guides on ContractorCFO are written with input from
              construction finance professionals and cite authoritative sources
              including the{" "}
              <a
                href="https://www.cfma.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--teal)]"
              >
                CFMA
              </a>
              ,{" "}
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
              , and academic research.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
