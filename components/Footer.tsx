import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold text-[var(--text)] hover:no-underline"
            >
              Contractor<span className="text-[var(--teal)]">CFO</span>
            </Link>
            <p className="mt-4 text-[var(--muted)] text-sm max-w-md">
              Free financial tools and guides built specifically for contractors
              and construction businesses.
            </p>
            <p className="mt-4 text-[var(--muted)] text-sm">
              Powered by{" "}
              <a
                href="https://omnyra.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--teal)]"
              >
                Omnyra
              </a>
            </p>
          </div>

          {/* Tools */}
          <div>
            <h4 className="font-semibold text-[var(--text)] mb-4">
              Calculators
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/tools/job-costing-calculator"
                  className="text-[var(--muted)] hover:text-[var(--text)]"
                >
                  Job Costing Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/markup-margin-calculator"
                  className="text-[var(--muted)] hover:text-[var(--text)]"
                >
                  Markup vs Margin
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/break-even-calculator"
                  className="text-[var(--muted)] hover:text-[var(--text)]"
                >
                  Break-Even Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h4 className="font-semibold text-[var(--text)] mb-4">Guides</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/guides/cash-flow-management"
                  className="text-[var(--muted)] hover:text-[var(--text)]"
                >
                  Cash Flow Management
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/job-costing-basics"
                  className="text-[var(--muted)] hover:text-[var(--text)]"
                >
                  Job Costing Basics
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/contractor-taxes"
                  className="text-[var(--muted)] hover:text-[var(--text)]"
                >
                  Contractor Tax Planning
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-[var(--text)] mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://command-advisors.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted)] hover:text-[var(--text)]"
                >
                  What is a Command Advisor?
                </a>
              </li>
              <li>
                <a
                  href="https://go.omnyra.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted)] hover:text-[var(--text)]"
                >
                  Get Financial Monitoring
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 text-center text-sm text-[var(--muted)]">
          <p>
            &copy; {new Date().getFullYear()} ContractorCFO. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
