"use client";

/* ═══════════════════════════════════════════════════════════════════════════
   AUXITE GLOBAL — INSIGHTS & RESEARCH PAGE

   Institutional Research - NOT a blog

   ❌ NEVER: "Gold price prediction", "Why silver is hot", "Top metals to buy"
   ✅ ALWAYS: infrastructure, governance, custody, structural risk, capital protection

   FORMULA:
   1. Macro Observation (financial world is changing...)
   2. Structural Problem (counterparty risk...)
   3. Infrastructure Thesis (allocation solves...)
   4. Auxite Positioning (Auxite was designed...)
   ═══════════════════════════════════════════════════════════════════════════ */

export default function InsightsPage() {
  const insights = [
    {
      slug: "structural-risk-digital-asset-platforms",
      category: "Structural Analysis",
      title: "Structural Risk in Digital Asset Platforms — and How Allocation Changes the Equation",
      excerpt: "Many digital asset platforms expose investors to layers of structural risk, including rehypothecation, opaque custody chains, and counterparty dependency. Allocation fundamentally alters this equation. When assets are individually assigned, legally segregated, and operationally verifiable, investor exposure shifts from platform solvency toward asset ownership.",
      date: "February 2026",
      readTime: "6 min read",
      tags: ["Structural Risk", "Allocation", "Custody"],
    },
    {
      slug: "multi-jurisdiction-infrastructure",
      category: "Infrastructure",
      title: "Why Multi-Jurisdiction Infrastructure Has Become a Requirement — Not a Preference",
      excerpt: "Institutional capital increasingly evaluates not only the asset itself but the legal environments surrounding it. A multi-jurisdiction structure distributes operational risk, enhances regulatory flexibility, and supports long-term resilience. Auxite Global operates across strategically selected financial centers to ensure structural durability and governance continuity.",
      date: "January 2026",
      readTime: "5 min read",
      tags: ["Multi-Jurisdiction", "Governance", "Regulatory"],
    },
    {
      slug: "bankruptcy-remote-asset-design",
      category: "Governance",
      title: "Bankruptcy-Remote Asset Design: The Growing Institutional Demand",
      excerpt: "The most important question in asset protection is rarely asked during stable markets: What happens if the operator fails? Bankruptcy-remote design addresses this question directly by ensuring that client assets remain insulated from corporate liabilities.",
      date: "December 2025",
      readTime: "7 min read",
      tags: ["Bankruptcy Remote", "Legal Structure", "Asset Protection"],
    },
  ];

  return (
    <div className="bg-midnight min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-20 border-b border-border">
        <div className="container-institutional">
          <div className="max-w-4xl">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
              Institutional Research
            </p>
            <h1 className="text-hero font-display text-text-primary mb-8">
              Insights &<br />
              <span className="text-gold">Research</span>
            </h1>
            <p className="text-body-lg text-text-secondary max-w-3xl">
              Structural analysis, infrastructure perspectives, and governance frameworks
              for institutional investors navigating precious metals allocation.
            </p>
            <p className="text-sm text-text-muted mt-6 italic">
              We are infrastructure, not a trading venue.
            </p>
          </div>
        </div>
      </section>

      {/* Featured / Hero Article */}
      <section className="section border-b border-border">
        <div className="container-institutional">
          <div className="bg-midnight-50 border border-border rounded-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-3 p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-gold/10 border border-gold/30 text-xs text-gold rounded-sm">
                    Featured Research
                  </span>
                  <span className="text-xs text-text-faint">February 2026</span>
                  <span className="text-xs text-text-faint">•</span>
                  <span className="text-xs text-text-faint">8 min read</span>
                </div>

                <h2 className="text-2xl lg:text-3xl font-display text-text-primary mb-6 leading-tight">
                  The Institutional Case for Fully Allocated Digital Precious Metals
                </h2>

                <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-4">
                  Why allocation integrity and legal segregation define the next generation of reserve assets.
                </p>

                <p className="text-text-muted mb-8 leading-relaxed">
                  As global markets transition toward digitally native infrastructure, investors
                  increasingly demand assets that combine technological efficiency with traditional
                  safeguards. Fully allocated precious metals — legally segregated and independently
                  verifiable — represent a structural evolution in capital preservation.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 bg-midnight border border-border text-xs text-text-muted rounded-sm">
                    Allocation vs Pooled Exposure
                  </span>
                  <span className="px-3 py-1 bg-midnight border border-border text-xs text-text-muted rounded-sm">
                    Bankruptcy Remoteness
                  </span>
                  <span className="px-3 py-1 bg-midnight border border-border text-xs text-text-muted rounded-sm">
                    Custodial Clarity
                  </span>
                  <span className="px-3 py-1 bg-midnight border border-border text-xs text-text-muted rounded-sm">
                    Verification Frameworks
                  </span>
                </div>

                <a href="/insights/institutional-case-fully-allocated" className="btn-institutional inline-flex">
                  Read Full Analysis
                </a>
              </div>

              <div className="lg:col-span-2 bg-midnight border-t lg:border-t-0 lg:border-l border-border p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <p className="text-xs tracking-[0.2em] uppercase text-text-faint mb-2">
                    Institutional Research
                  </p>
                  <p className="text-sm text-text-muted">
                    Reserve Asset Analysis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Articles */}
      <section className="section">
        <div className="container-institutional">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-display text-text-primary">
              Recent Research
            </h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-sm bg-gold/10 border border-gold/30 text-gold rounded-sm">
                All
              </button>
              <button className="px-4 py-2 text-sm border border-border text-text-muted hover:text-text-primary hover:border-border/80 rounded-sm transition-colors">
                Infrastructure
              </button>
              <button className="px-4 py-2 text-sm border border-border text-text-muted hover:text-text-primary hover:border-border/80 rounded-sm transition-colors">
                Governance
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {insights.map((insight, index) => (
              <article key={index} className="card-institutional p-8 group">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-2 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                        {insight.category}
                      </span>
                      <span className="text-xs text-text-faint">{insight.date}</span>
                      <span className="text-xs text-text-faint">•</span>
                      <span className="text-xs text-text-faint">{insight.readTime}</span>
                    </div>

                    <h3 className="text-xl font-display text-text-primary mb-4 group-hover:text-gold transition-colors">
                      {insight.title}
                    </h3>

                    <p className="text-sm text-text-muted leading-relaxed mb-4">
                      {insight.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {insight.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-midnight border border-border text-xs text-text-faint rounded-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-1 flex items-center justify-end">
                    <a href={`/insights/${insight.slug}`} className="text-sm text-gold hover:underline flex items-center gap-2">
                      Read Analysis
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Section */}
      <section className="section border-t border-border">
        <div className="container-institutional">
          <div className="bg-gold/5 border border-gold/20 rounded-sm p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4">
                  Coming Q2 2026
                </p>
                <h3 className="text-2xl font-display text-text-primary mb-4">
                  Auxite Global Reserve Asset Outlook 2026
                </h3>
                <p className="text-text-muted">
                  A comprehensive analysis of precious metals allocation frameworks,
                  institutional custody trends, and structural considerations for
                  reserve asset positioning.
                </p>
              </div>
              <div className="text-center lg:text-right">
                <a href="/contact?type=research-subscription" className="btn-institutional inline-flex">
                  Request Early Access
                </a>
                <p className="text-xs text-text-faint mt-4">
                  Available to qualified institutional investors
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="section border-t border-border">
        <div className="container-institutional">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-section font-display text-text-primary mb-6">
              Institutional Research Access
            </h2>
            <p className="text-body text-text-secondary mb-8">
              Receive structural analysis and infrastructure perspectives directly.
              Reserved for qualified institutional investors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact?type=research-subscription" className="btn-institutional">
                Request Research Access
              </a>
            </div>
            <p className="text-xs text-text-faint mt-6">
              Available to qualified institutional investors only.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
