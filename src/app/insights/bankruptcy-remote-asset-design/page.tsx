"use client";

import Link from "next/link";

/* ═══════════════════════════════════════════════════════════════════════════
   AUXITE GLOBAL — RESEARCH ARTICLE

   Bankruptcy-Remote Asset Design
   The growing institutional demand for legal insulation in reserve structures
   ═══════════════════════════════════════════════════════════════════════════ */

export default function BankruptcyRemoteArticle() {
  return (
    <div className="bg-midnight min-h-screen">
      {/* Article Header */}
      <section className="pt-40 pb-16 border-b border-border">
        <div className="container-institutional">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-text-faint mb-8">
              <Link href="/insights" className="hover:text-gold transition-colors">
                Insights & Research
              </Link>
              <span>/</span>
              <span className="text-text-muted">Governance</span>
            </div>

            {/* Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-gold/10 border border-gold/30 text-xs text-gold rounded-sm">
                Governance
              </span>
              <span className="text-sm text-text-faint">December 2025</span>
              <span className="text-sm text-text-faint">•</span>
              <span className="text-sm text-text-faint">7 min read</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-display text-text-primary mb-6 leading-tight">
              Bankruptcy-Remote Asset Design
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              The growing institutional demand for legal insulation in reserve structures.
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 pt-6 border-t border-border">
              <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-text-primary">Auxite Research Desk</p>
                <p className="text-xs text-text-muted">Institutional Strategy Group</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="section">
        <div className="container-institutional">
          <div className="max-w-3xl mx-auto">
            {/* Introduction */}
            <div className="mb-16">
              <h2 className="text-2xl font-display text-text-primary mb-6">
                Ownership Must Survive the Operator
              </h2>

              <div className="prose-institutional">
                <p>
                  Perhaps the most important question in asset protection is rarely asked during
                  stable markets:
                </p>

                <p className="text-gold font-medium text-xl my-8 text-center">
                  What happens if the operator fails?
                </p>

                <p>
                  Bankruptcy-remote design addresses this question directly by ensuring that client
                  assets remain insulated from corporate liabilities.
                </p>

                <p className="text-text-secondary italic my-6">
                  For institutional capital, this is not a feature.
                </p>

                <p className="text-gold font-medium">
                  It is a prerequisite.
                </p>
              </div>
            </div>

            {/* Section Divider */}
            <div className="gold-line mb-16"></div>

            {/* Defining Bankruptcy Remoteness */}
            <div className="mb-16">
              <h2 className="text-2xl font-display text-text-primary mb-6">
                Defining Bankruptcy Remoteness
              </h2>

              <div className="prose-institutional">
                <p className="mb-4">
                  A bankruptcy-remote structure is engineered so that client assets:
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Are not recorded as corporate property</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cannot be seized by creditors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Are shielded from restructuring processes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Maintain identifiable ownership</span>
                  </li>
                </ul>

                <p className="text-gold font-medium">
                  The objective is continuity of ownership regardless of operational disruption.
                </p>
              </div>
            </div>

            {/* Section Divider */}
            <div className="gold-line mb-16"></div>

            {/* Legal Architecture */}
            <div className="mb-16">
              <h2 className="text-2xl font-display text-text-primary mb-6">
                Legal Architecture Over Operational Promises
              </h2>

              <div className="prose-institutional">
                <p className="text-gold font-medium mb-6">
                  Financial history repeatedly demonstrates that promises of separation are
                  insufficient without enforceable legal frameworks.
                </p>

                <p className="mb-4">True insulation requires:</p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Segregated asset records</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Clear beneficial ownership</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Independent custody</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Transparent legal agreements</span>
                  </li>
                </ul>

                <p className="text-text-primary font-medium">
                  Protection must exist in structure — not messaging.
                </p>
              </div>
            </div>

            {/* Section Divider */}
            <div className="gold-line mb-16"></div>

            {/* Institutional Perspective */}
            <div className="mb-16">
              <h2 className="text-2xl font-display text-text-primary mb-6">
                The Institutional Perspective
              </h2>

              <div className="prose-institutional">
                <p>
                  Large allocators increasingly treat bankruptcy remoteness as foundational
                  to fiduciary duty.
                </p>

                <p className="my-6 mb-4">
                  Capital preservation mandates demand structures that minimize exposure to:
                </p>

                <div className="bg-midnight-50 border border-border rounded-sm p-6 my-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-gold">✔</span>
                      <span className="text-text-secondary">counterparty failure</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gold">✔</span>
                      <span className="text-text-secondary">operational insolvency</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gold">✔</span>
                      <span className="text-text-secondary">balance sheet contagion</span>
                    </div>
                  </div>
                </div>

                <p className="text-gold font-medium">
                  As a result, platforms unable to demonstrate legal separation may find themselves
                  structurally excluded from institutional portfolios.
                </p>
              </div>
            </div>

            {/* Section Divider */}
            <div className="gold-line mb-16"></div>

            {/* Auxite Global */}
            <div className="mb-16">
              <h2 className="text-2xl font-display text-text-primary mb-6">
                Auxite Global — Separation by Design
              </h2>

              <div className="prose-institutional">
                <p className="mb-6">
                  Auxite Global's operating philosophy centers on structural clarity.
                </p>

                <p className="mb-4">Client metals are designed to remain:</p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Fully allocated</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Legally segregated</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Independently stored</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Continuously attributable</span>
                  </li>
                </ul>

                <p className="text-gold font-medium">
                  This architecture supports ownership continuity independent of operating entities.
                </p>
              </div>
            </div>

            {/* Section Divider */}
            <div className="gold-line mb-16"></div>

            {/* Future of Reserve Confidence */}
            <div className="mb-16">
              <h2 className="text-2xl font-display text-text-primary mb-6">
                The Future of Reserve Confidence
              </h2>

              <div className="prose-institutional">
                <p className="text-gold font-medium mb-6">
                  Confidence is evolving.
                </p>

                <p>
                  It is no longer derived solely from brand reputation or scale — but from
                  legal engineering.
                </p>

                <p className="my-6">
                  Investors increasingly favor platforms where asset protection is embedded
                  at the structural level.
                </p>

                <p className="text-text-primary font-medium">
                  Bankruptcy remoteness is becoming one of the defining characteristics of
                  modern reserve infrastructure.
                </p>
              </div>
            </div>

            {/* Section Divider */}
            <div className="gold-line mb-16"></div>

            {/* Conclusion */}
            <div className="mb-16">
              <h2 className="text-2xl font-display text-text-primary mb-6">
                Conclusion — Protection That Outlives the Platform
              </h2>

              <div className="prose-institutional">
                <p>
                  Resilient asset design assumes that institutions, like markets, are not
                  immune to disruption.
                </p>

                <p className="my-6">
                  The measure of protection is therefore simple:
                </p>

                <p className="text-gold font-medium text-xl my-8 text-center">
                  Does ownership endure beyond the operator?
                </p>

                <p>
                  Where the answer is yes, reserve assets approach their intended purpose —
                  <span className="text-gold"> long-term capital preservation</span>.
                </p>
              </div>
            </div>

            {/* Article Footer */}
            <div className="border-t border-border pt-12 mt-16">
              <div className="text-center">
                <p className="text-xs tracking-[0.2em] uppercase text-gold mb-2">
                  Auxite Global Research
                </p>
                <p className="text-sm text-text-muted">
                  Institutional Infrastructure for Digital Precious Metals
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="section border-t border-border">
        <div className="container-institutional">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-display text-text-primary mb-6">
              Explore Our Governance Framework
            </h2>
            <p className="text-text-secondary mb-8">
              Learn how Auxite's structural design supports bankruptcy remoteness and
              ownership continuity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/trust-governance" className="btn-institutional">
                View Trust & Governance
              </Link>
              <Link href="/contact" className="btn-institutional-outline">
                Contact Institutional Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Research */}
      <section className="section border-t border-border">
        <div className="container-institutional">
          <h3 className="text-xl font-display text-text-primary mb-8">
            Related Research
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/insights/institutional-case-fully-allocated" className="card-institutional p-6 group">
              <span className="px-2 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                Featured Research
              </span>
              <h4 className="text-lg font-display text-text-primary mt-4 mb-2 group-hover:text-gold transition-colors">
                The Institutional Case for Fully Allocated Digital Precious Metals
              </h4>
              <p className="text-sm text-text-muted">
                Why allocation integrity and legal segregation define the next generation of reserve assets.
              </p>
            </Link>

            <Link href="/insights/structural-risk-digital-asset-platforms" className="card-institutional p-6 group">
              <span className="px-2 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                Structural Analysis
              </span>
              <h4 className="text-lg font-display text-text-primary mt-4 mb-2 group-hover:text-gold transition-colors">
                Structural Risk in Digital Asset Platforms
              </h4>
              <p className="text-sm text-text-muted">
                Why infrastructure — not innovation alone — determines institutional survivability.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
