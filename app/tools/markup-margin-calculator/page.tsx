"use client";

import { useState } from "react";
import Link from "next/link";

// Formula sources:
// - Basic accounting: Margin = Profit / Selling Price, Markup = Profit / Cost
// - Conversion: Margin = Markup / (1 + Markup), Markup = Margin / (1 - Margin)

const COMMON_MARKUPS = [
  { markup: 10, margin: 9.09 },
  { markup: 15, margin: 13.04 },
  { markup: 20, margin: 16.67 },
  { markup: 25, margin: 20.0 },
  { markup: 30, margin: 23.08 },
  { markup: 35, margin: 25.93 },
  { markup: 40, margin: 28.57 },
  { markup: 50, margin: 33.33 },
];

export default function MarkupMarginCalculator() {
  const [mode, setMode] = useState<"markup" | "margin">("markup");
  const [cost, setCost] = useState<string>("1000");
  const [percentage, setPercentage] = useState<string>("25");

  const costValue = parseFloat(cost) || 0;
  const pctValue = parseFloat(percentage) || 0;

  let sellingPrice = 0;
  let profit = 0;
  let effectiveMarkup = 0;
  let effectiveMargin = 0;

  if (mode === "markup") {
    // User enters markup percentage
    sellingPrice = costValue * (1 + pctValue / 100);
    profit = sellingPrice - costValue;
    effectiveMarkup = pctValue;
    effectiveMargin = sellingPrice > 0 ? (profit / sellingPrice) * 100 : 0;
  } else {
    // User enters margin percentage
    if (pctValue < 100) {
      sellingPrice = costValue / (1 - pctValue / 100);
      profit = sellingPrice - costValue;
      effectiveMargin = pctValue;
      effectiveMarkup = costValue > 0 ? (profit / costValue) * 100 : 0;
    }
  }

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/tools"
            className="text-[var(--muted)] hover:text-[var(--text)] text-sm mb-4 inline-block"
          >
            &larr; All Calculators
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
            Markup vs Margin Calculator
          </h1>
          <p className="text-xl text-[var(--muted)]">
            Understand the difference between markup and margin, and calculate
            your selling price using either method.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-[var(--panel)]/50 border border-white/5">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-4">
                  Calculate From
                </h2>
                <div className="flex gap-2 mb-6">
                  <button
                    onClick={() => setMode("markup")}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                      mode === "markup"
                        ? "bg-[var(--teal)] text-black"
                        : "bg-[var(--bg)] text-[var(--muted)] border border-white/10"
                    }`}
                  >
                    Markup %
                  </button>
                  <button
                    onClick={() => setMode("margin")}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                      mode === "margin"
                        ? "bg-[var(--teal)] text-black"
                        : "bg-[var(--bg)] text-[var(--muted)] border border-white/10"
                    }`}
                  >
                    Margin %
                  </button>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-[var(--muted)] mb-1">
                      Cost ($)
                    </label>
                    <input
                      type="number"
                      value={cost}
                      onChange={(e) => setCost(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg bg-[var(--bg)] border border-white/10 text-[var(--text)] focus:border-[var(--teal)] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[var(--muted)] mb-1">
                      {mode === "markup" ? "Markup %" : "Margin %"}
                    </label>
                    <input
                      type="number"
                      value={percentage}
                      onChange={(e) => setPercentage(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg bg-[var(--bg)] border border-white/10 text-[var(--text)] focus:border-[var(--teal)] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Explanation */}
              <div className="p-6 rounded-2xl bg-[var(--panel)]/50 border border-white/5">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-4">
                  What&apos;s the Difference?
                </h2>
                <div className="space-y-4 text-sm text-[var(--muted)]">
                  <div>
                    <p className="font-medium text-[var(--text)]">Markup</p>
                    <p>
                      Percentage added to <strong>cost</strong> to get selling
                      price.
                    </p>
                    <p className="text-[var(--teal)] mt-1">
                      Markup = (Profit ÷ Cost) × 100
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-[var(--text)]">Margin</p>
                    <p>
                      Percentage of <strong>selling price</strong> that is
                      profit.
                    </p>
                    <p className="text-[var(--teal)] mt-1">
                      Margin = (Profit ÷ Selling Price) × 100
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-[var(--bg)] border border-white/10">
                    <p className="text-[var(--text)]">
                      <strong>Example:</strong> A 25% markup on $100 cost = $125
                      selling price.
                    </p>
                    <p>But the margin is only 20% ($25 ÷ $125).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[var(--teal)]/10 to-[var(--violet-start)]/10 border border-[var(--teal)]/20">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-4">
                  Results
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-[var(--muted)]">Cost</span>
                    <span className="text-[var(--text)]">
                      {formatCurrency(costValue)}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-[var(--muted)]">Profit</span>
                    <span className="text-[var(--text)]">
                      {formatCurrency(profit)}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5 font-medium">
                    <span className="text-[var(--text)]">Selling Price</span>
                    <span className="text-[var(--teal)]">
                      {formatCurrency(sellingPrice)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[var(--panel)]/50 border border-white/5 text-center">
                  <p className="text-sm text-[var(--muted)] mb-1">
                    Effective Markup
                  </p>
                  <p className="text-2xl font-bold text-[var(--text)]">
                    {effectiveMarkup.toFixed(1)}%
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[var(--panel)]/50 border border-white/5 text-center">
                  <p className="text-sm text-[var(--muted)] mb-1">
                    Effective Margin
                  </p>
                  <p className="text-2xl font-bold text-[var(--text)]">
                    {effectiveMargin.toFixed(1)}%
                  </p>
                </div>
              </div>

              {/* Quick Reference Table */}
              <div className="p-6 rounded-2xl bg-[var(--panel)]/50 border border-white/5">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-4">
                  Quick Reference
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-[var(--muted)] border-b border-white/10">
                        <th className="text-left py-2">Markup %</th>
                        <th className="text-right py-2">= Margin %</th>
                      </tr>
                    </thead>
                    <tbody>
                      {COMMON_MARKUPS.map((row) => (
                        <tr
                          key={row.markup}
                          className="border-b border-white/5"
                        >
                          <td className="py-2 text-[var(--text)]">
                            {row.markup}%
                          </td>
                          <td className="py-2 text-right text-[var(--teal)]">
                            {row.margin.toFixed(2)}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sources Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-[var(--teal)]/10 border border-[var(--teal)]/20">
            <h2 className="text-lg font-semibold text-[var(--text)] mb-2">
              Formula Sources
            </h2>
            <p className="text-sm text-[var(--muted)]">
              These are standard accounting formulas used across industries. For
              construction-specific markup guidelines, see the{" "}
              <a
                href="https://www.cfma.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--teal)]"
              >
                CFMA Annual Financial Survey
              </a>{" "}
              which reports that residential contractors typically use 20-35%
              markup, while commercial contractors often use 10-20% due to
              competitive bidding. The{" "}
              <a
                href="https://www.sba.gov/business-guide/manage-your-business/manage-your-finances"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--teal)]"
              >
                SBA
              </a>{" "}
              provides general guidance on pricing strategy for small
              businesses.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[var(--teal)]/10 to-[var(--violet-start)]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[var(--text)] mb-4">
            Track Your Actual Margins in Real-Time
          </h2>
          <p className="text-[var(--muted)] mb-6">
            A Command Advisor monitors your QuickBooks data and alerts you when
            job margins slip below target.
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
    </>
  );
}
