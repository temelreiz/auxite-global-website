"use client";

import Link from "next/link";

/* ═══════════════════════════════════════════════════════════════════════════
   AUXITE GLOBAL — RESEARCH ARTICLE

   Multi-Jurisdiction Infrastructure
   Why geographic diversification has become a core component of modern asset protection
   ═══════════════════════════════════════════════════════════════════════════ */

export default function MultiJurisdictionArticle() {
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
              <span className="text-text-muted">Infrastructure</span>
            </div>

            {/* Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-gold/10 border border-gold/30 text-xs text-gold rounded-sm">
                Infrastructure
              </span>
              <span className="text-sm text-text-faint">January 2026</span>
              <span className="text-sm text-text-faint">•</span>
              <span className="text-sm text-text-faint">5 min read</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-display text-text-primary mb-6 leading-tight">
              Multi-Jurisdiction Infrastructure
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              Why geographic diversification has become a core component of modern asset protection.
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
                The End of Single-Jurisdiction Comfort
              </h2>

              <div className="prose-institutional">
                <p>
                  For decades, investors often relied on a single financial center for custody,
                  execution, and legal protection.
                </p>

                <p className="my-6">
                  Globalization — combined with regulatory divergence — has altered that comfort.
                </p>

                <p className="text-gold font-medium my-6">
                  Today, concentration risk is no longer theoretical.
                </p>

                <p className="text-text-primary font-medium">
                  It is measurable.
                </p>

                <p className="mt-6">
                  A resilient reserve strategy increasingly considers <span className="text-gold">where</span> assets
                  are governed as carefully as <span className="text-gold">what</span> assets are held.
                </p>
              </div>
            </div>

            {/* Section Divider */}
            <div className="gold-line mb-16"></div>

            {/* Jurisdiction as Risk Variable */}
            <div className="mb-16">
              <h2 className="text-2xl font-display text-text-primary mb-6">
                Jurisdiction as a Risk Variable
              </h2>

              <div className="prose-institutional">
                <p className="mb-4">Every jurisdiction introduces a unique matrix of:</p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-gold">→</span>
                    <span>Legal interpretation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold">→</span>
                    <span>Regulatory posture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold">→</span>
                    <span>Political stability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold">→</span>
                    <span>Enforcement predictability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold">→</span>
                    <span>Financial infrastructure</span>
                  </li>
                </ul>

                <p>
                  When assets are concentrated within one framework, investors implicitly accept
                  that jurisdiction's full risk profile.
                </p>

                <p className="text-gold font-medium mt-6">
                  Diversification, therefore, is not merely geographic — it is legal.
                </p>
              </div>
            </div>

            {/* Section Divider */}
            <div className="gold-line mb-16"></div>

            {/* Operational Flexibility */}
            <div className="mb-16">
              <h2 className="text-2xl font-display text-text-primary mb-6">
                Operational Flexibility in a Fragmented World
              </h2>

              <div className="prose-institutional">
                <p className="text-gold font-medium mb-6">
                  Financial regulation is becoming more regionally distinct.
                </p>

                <p>
                  Platforms operating across multiple jurisdictions gain structural flexibility,
                  enabling them to adapt without compromising client asset integrity.
                </p>

                <p className="my-6 mb-4">Benefits typically include:</p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Reduced regulatory dependency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Continuity of operations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Broader institutional compatibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Enhanced risk dispersion</span>
                  </li>
                </ul>

                <p className="text-text-primary font-medium">
                  Multi-jurisdiction architecture is less about expansion — and more about resilience.
                </p>
              </div>
            </div>

            {/* Section Divider */}
            <div className="gold-line mb-16"></div>

            {/* Governance Across Borders */}
            <div className="mb-16">
              <h2 className="text-2xl font-display text-text-primary mb-6">
                Governance Across Borders
              </h2>

              <div className="prose-institutional">
                <p className="text-gold font-medium mb-6">
                  Operating globally requires disciplined governance.
                </p>

                <p>
                  Without centralized oversight, geographic diversification can introduce complexity
                  rather than protection.
                </p>

                <p className="my-6 mb-4">Effective models maintain:</p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Unified risk standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Consistent custody principles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Transparent reporting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Clearly defined entity roles</span>
                  </li>
                </ul>

                <p className="text-gold font-medium">
                  Structure must scale alongside geography.
                </p>
              </div>
            </div>

            {/* Section Divider */}
            <div className="gold-line mb-16"></div>

            {/* Auxite Global */}
            <div className="mb-16">
              <h2 className="text-2xl font-display text-text-primary mb-6">
                Auxite Global — A Distributed Operating Model
              </h2>

              <div className="prose-institutional">
                <p className="mb-8">
                  Auxite Global's architecture reflects this distributed philosophy:
                </p>

                {/* Entity Cards */}
                <div className="space-y-4 mb-8">
                  <div className="bg-midnight-50 border border-border rounded-sm p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-display text-text-primary">
                        Aurum Ledger Ltd.
                      </h4>
                      <span className="px-3 py-1 bg-gold/10 border border-gold/30 text-xs text-gold rounded-sm">
                        Hong Kong
                      </span>
                    </div>
                    <p className="text-sm text-text-muted">
                      Governance and platform development within one of the world's leading financial hubs.
                    </p>
                  </div>

                  <div className="bg-midnight-50 border border-border rounded-sm p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-display text-text-primary">
                        Auxite Precious Metals LLC
                      </h4>
                      <span className="px-3 py-1 bg-gold/10 border border-gold/30 text-xs text-gold rounded-sm">
                        Dubai
                      </span>
                    </div>
                    <p className="text-sm text-text-muted">
                      Operations and custody positioned within a rapidly expanding global bullion corridor.
                    </p>
                  </div>

                  <div className="bg-midnight-50 border border-border rounded-sm p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-display text-text-primary">
                        Auxite Kıymetli Metaller Ticaret A.Ş.
                      </h4>
                      <span className="px-3 py-1 bg-gold/10 border border-gold/30 text-xs text-gold rounded-sm">
                        Türkiye
                      </span>
                    </div>
                    <p className="text-sm text-text-muted">
                      Strategic direction and group oversight within a historically significant precious metals economy.
                    </p>
                  </div>
                </div>

                <p className="text-gold font-medium">
                  Together, this structure promotes jurisdictional balance rather than dependency.
                </p>
              </div>
            </div>

            {/* Section Divider */}
            <div className="gold-line mb-16"></div>

            {/* Strategic Direction */}
            <div className="mb-16">
              <h2 className="text-2xl font-display text-text-primary mb-6">
                The Strategic Direction of Reserve Infrastructure
              </h2>

              <div className="prose-institutional">
                <p>
                  As capital becomes increasingly mobile, infrastructure must remain adaptable.
                </p>

                <p className="my-6">
                  Multi-jurisdiction frameworks are evolving from optional sophistication to
                  institutional expectation.
                </p>

                <p className="text-text-secondary italic my-6">
                  The objective is not regulatory arbitrage.
                </p>

                <p className="text-gold font-medium">
                  It is operational continuity under diverse conditions.
                </p>
              </div>
            </div>

            {/* Section Divider */}
            <div className="gold-line mb-16"></div>

            {/* Conclusion */}
            <div className="mb-16">
              <h2 className="text-2xl font-display text-text-primary mb-6">
                Conclusion — Geography as Protection
              </h2>

              <div className="prose-institutional">
                <p className="text-gold font-medium mb-6">
                  Reserve asset design is entering a phase where geographic strategy plays a defining role.
                </p>

                <p>
                  Investors are recognizing that true protection is rarely singular.
                </p>

                <p className="text-text-primary font-medium my-6">
                  It is layered — legally, operationally, and geographically.
                </p>

                <p className="text-text-secondary italic my-6">
                  In that context, jurisdiction is no longer administrative detail.
                </p>

                <p className="text-gold font-medium text-lg">
                  It is part of the risk framework.
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
              Explore Our Group Structure
            </h2>
            <p className="text-text-secondary mb-8">
              Learn how Auxite's multi-entity architecture supports institutional resilience
              across jurisdictions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/group-structure" className="btn-institutional">
                View Group Structure
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
