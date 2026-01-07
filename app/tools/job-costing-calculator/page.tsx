"use client";

import { useState } from "react";
import Link from "next/link";

// Labor burden rate sources:
// - IRS Publication 15 (Employer's Tax Guide): FICA 7.65%, FUTA 0.6%
// - BLS: Workers' comp varies by state, typically 1-10% for construction
// - CFMA Annual Financial Survey: Average labor burden 25-40% for contractors

const SOURCES = [
  {
    name: "IRS Publication 15",
    url: "https://www.irs.gov/publications/p15",
    description: "Employer's Tax Guide - FICA rates (7.65%)",
  },
  {
    name: "Bureau of Labor Statistics",
    url: "https://www.bls.gov/news.release/ecec.nr0.htm",
    description: "Employer Costs for Employee Compensation",
  },
  {
    name: "CFMA Annual Financial Survey",
    url: "https://www.cfma.org/",
    description: "Construction industry labor burden benchmarks",
  },
];

export default function JobCostingCalculator() {
  const [laborHours, setLaborHours] = useState<string>("40");
  const [hourlyRate, setHourlyRate] = useState<string>("35");
  const [laborBurdenPercent, setLaborBurdenPercent] = useState<string>("35");
  const [materialsCost, setMaterialsCost] = useState<string>("2000");
  const [subcontractorCost, setSubcontractorCost] = useState<string>("0");
  const [equipmentCost, setEquipmentCost] = useState<string>("500");
  const [overheadPercent, setOverheadPercent] = useState<string>("15");
  const [profitPercent, setProfitPercent] = useState<string>("10");

  // Calculate values
  const hours = parseFloat(laborHours) || 0;
  const rate = parseFloat(hourlyRate) || 0;
  const burdenPct = parseFloat(laborBurdenPercent) || 0;
  const materials = parseFloat(materialsCost) || 0;
  const subs = parseFloat(subcontractorCost) || 0;
  const equipment = parseFloat(equipmentCost) || 0;
  const overheadPct = parseFloat(overheadPercent) || 0;
  const profitPct = parseFloat(profitPercent) || 0;

  const baseLaborCost = hours * rate;
  const laborBurden = baseLaborCost * (burdenPct / 100);
  const totalLaborCost = baseLaborCost + laborBurden;
  const directCosts = totalLaborCost + materials + subs + equipment;
  const overhead = directCosts * (overheadPct / 100);
  const costBeforeProfit = directCosts + overhead;
  const profit = costBeforeProfit * (profitPct / 100);
  const totalJobPrice = costBeforeProfit + profit;
  const effectiveMargin = totalJobPrice > 0 ? (profit / totalJobPrice) * 100 : 0;

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
            Job Costing Calculator
          </h1>
          <p className="text-xl text-[var(--muted)]">
            Calculate the true cost and recommended price for a job, including
            labor burden, overhead, and profit margin.
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
                  Labor Costs
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-[var(--muted)] mb-1">
                      Total Labor Hours
                    </label>
                    <input
                      type="number"
                      value={laborHours}
                      onChange={(e) => setLaborHours(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg bg-[var(--bg)] border border-white/10 text-[var(--text)] focus:border-[var(--teal)] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[var(--muted)] mb-1">
                      Hourly Rate ($)
                    </label>
                    <input
                      type="number"
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg bg-[var(--bg)] border border-white/10 text-[var(--text)] focus:border-[var(--teal)] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[var(--muted)] mb-1">
                      Labor Burden Rate (%)
                      <span className="text-xs text-[var(--teal)] ml-2">
                        Typical: 25-40%
                      </span>
                    </label>
                    <input
                      type="number"
                      value={laborBurdenPercent}
                      onChange={(e) => setLaborBurdenPercent(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg bg-[var(--bg)] border border-white/10 text-[var(--text)] focus:border-[var(--teal)] focus:outline-none"
                    />
                    <p className="text-xs text-[var(--muted)] mt-1">
                      Includes FICA, FUTA, workers&apos; comp, benefits
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--panel)]/50 border border-white/5">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-4">
                  Other Direct Costs
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-[var(--muted)] mb-1">
                      Materials ($)
                    </label>
                    <input
                      type="number"
                      value={materialsCost}
                      onChange={(e) => setMaterialsCost(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg bg-[var(--bg)] border border-white/10 text-[var(--text)] focus:border-[var(--teal)] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[var(--muted)] mb-1">
                      Subcontractors ($)
                    </label>
                    <input
                      type="number"
                      value={subcontractorCost}
                      onChange={(e) => setSubcontractorCost(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg bg-[var(--bg)] border border-white/10 text-[var(--text)] focus:border-[var(--teal)] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[var(--muted)] mb-1">
                      Equipment/Rentals ($)
                    </label>
                    <input
                      type="number"
                      value={equipmentCost}
                      onChange={(e) => setEquipmentCost(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg bg-[var(--bg)] border border-white/10 text-[var(--text)] focus:border-[var(--teal)] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--panel)]/50 border border-white/5">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-4">
                  Overhead & Profit
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-[var(--muted)] mb-1">
                      Overhead Rate (%)
                      <span className="text-xs text-[var(--teal)] ml-2">
                        Typical: 10-20%
                      </span>
                    </label>
                    <input
                      type="number"
                      value={overheadPercent}
                      onChange={(e) => setOverheadPercent(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg bg-[var(--bg)] border border-white/10 text-[var(--text)] focus:border-[var(--teal)] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[var(--muted)] mb-1">
                      Profit Markup (%)
                      <span className="text-xs text-[var(--teal)] ml-2">
                        Typical: 8-15%
                      </span>
                    </label>
                    <input
                      type="number"
                      value={profitPercent}
                      onChange={(e) => setProfitPercent(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg bg-[var(--bg)] border border-white/10 text-[var(--text)] focus:border-[var(--teal)] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[var(--teal)]/10 to-[var(--violet-start)]/10 border border-[var(--teal)]/20">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-4">
                  Job Cost Breakdown
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-[var(--muted)]">Base Labor</span>
                    <span className="text-[var(--text)]">
                      {formatCurrency(baseLaborCost)}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-[var(--muted)]">
                      + Labor Burden ({burdenPct}%)
                    </span>
                    <span className="text-[var(--text)]">
                      {formatCurrency(laborBurden)}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5 font-medium">
                    <span className="text-[var(--text)]">Total Labor</span>
                    <span className="text-[var(--teal)]">
                      {formatCurrency(totalLaborCost)}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-[var(--muted)]">Materials</span>
                    <span className="text-[var(--text)]">
                      {formatCurrency(materials)}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-[var(--muted)]">Subcontractors</span>
                    <span className="text-[var(--text)]">
                      {formatCurrency(subs)}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-[var(--muted)]">Equipment</span>
                    <span className="text-[var(--text)]">
                      {formatCurrency(equipment)}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5 font-medium">
                    <span className="text-[var(--text)]">Direct Costs</span>
                    <span className="text-[var(--teal)]">
                      {formatCurrency(directCosts)}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-[var(--muted)]">
                      + Overhead ({overheadPct}%)
                    </span>
                    <span className="text-[var(--text)]">
                      {formatCurrency(overhead)}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-[var(--muted)]">
                      + Profit ({profitPct}%)
                    </span>
                    <span className="text-[var(--text)]">
                      {formatCurrency(profit)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--teal)]/20 border border-[var(--teal)]/40">
                <div className="text-center">
                  <p className="text-sm text-[var(--muted)] mb-1">
                    Recommended Job Price
                  </p>
                  <p className="text-4xl font-bold text-[var(--teal)]">
                    {formatCurrency(totalJobPrice)}
                  </p>
                  <p className="text-sm text-[var(--muted)] mt-2">
                    Effective Margin: {effectiveMargin.toFixed(1)}%
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[var(--panel)]/50 border border-white/5">
                <p className="text-xs text-[var(--muted)]">
                  <strong className="text-[var(--text)]">Note:</strong> This
                  calculator uses standard cost-plus pricing. Your actual
                  overhead rate should be calculated from your annual operating
                  expenses divided by direct costs. See the{" "}
                  <a
                    href="https://www.cfma.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--teal)]"
                  >
                    CFMA Annual Financial Survey
                  </a>{" "}
                  for industry benchmarks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sources Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-[var(--text)] mb-6">
            Sources & Methodology
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {SOURCES.map((source) => (
              <a
                key={source.name}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[var(--panel)]/50 border border-white/5 hover:border-[var(--teal)]/30 transition-all hover:no-underline"
              >
                <h3 className="font-medium text-[var(--text)] mb-1">
                  {source.name}
                </h3>
                <p className="text-sm text-[var(--muted)]">
                  {source.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[var(--teal)]/10 to-[var(--violet-start)]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[var(--text)] mb-4">
            Want This Calculated Automatically?
          </h2>
          <p className="text-[var(--muted)] mb-6">
            A Command Advisor connects to your QuickBooks and monitors job
            profitability in real-time.
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
