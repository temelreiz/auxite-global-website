"use client";

import Link from "next/link";

/* ═══════════════════════════════════════════════════════════════════════════
   AUXITE GLOBAL — RESEARCH ARTICLE

   Structural Risk in Digital Asset Platforms
   Why infrastructure — not innovation alone — determines institutional survivability
   ═══════════════════════════════════════════════════════════════════════════ */

export default function StructuralRiskArticle() {
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
              <span className="text-text-muted">Structural Analysis</span>
            </div>

            {/* Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-gold/10 border border-gold/30 text-xs text-gold rounded-sm">
                Structural Analysis
              </span>
              <span className="text-sm text-text-faint">February 2026</span>
              <span className="text-sm text-text-faint">•</span>
              <span className="text-sm text-text-faint">6 min read</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-display text-text-primary mb-6 leading-tight">
              Structural Risk in Digital Asset Platforms
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              Why infrastructure — not innovation alone — determines institutional survivability.
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
                Introduction — Innovation Without Structure Is Fragile
              </h2>

              <div className="prose-institutional">
                <p>
                  The rapid expansion of digital asset platforms has reshaped financial access,
                  transaction speed, and global participation. Yet alongside innovation, recent
                  market disruptions have revealed a persistent truth:
                </p>

                <p className="text-gold font-medium my-6">
                  Technology alone does not mitigate structural risk.
                </p>

                <p>
                  For institutional allocators, survivability is determined less by product
                  velocity and more by infrastructure discipline.
                </p>

                <p className="text-text-primary font-medium mt-6">
                  The question is no longer whether a platform is technologically advanced —
                  but whether it is structurally sound.
                </p>
              </div>
            </div>

            {/* Section Divider */}
            <div className="gold-line mb-16"></div>

            {/* Understanding Structural Risk */}
            <div className="mb-16">
              <h2 className="text-2xl font-display text-text-primary mb-6">
                Understanding Structural Risk
              </h2>

              <div className="prose-institutional">
                <p>
                  Structural risk refers to vulnerabilities embedded within the operational
                  and legal architecture of a financial platform.
                </p>

                <p className="my-6">
                  These risks often remain invisible during stable market conditions but become
                  acute during periods of liquidity stress or counterparty failure.
                </p>

                <p className="mb-4">Common sources include:</p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-gold">→</span>
                    <span>Asset commingling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold">→</span>
                    <span>Balance sheet dependency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold">→</span>
                    <span>Unclear custody chains</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold">→</span>
                    <span>Rehypothecation practices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold">→</span>
                    <span>Jurisdictional concentration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold">→</span>
                    <span>Governance opacity</span>
                  </li>
                </ul>

                <p className="text-gold font-medium">
                  When these elements converge, investors may discover that exposure does not equate to ownership.
                </p>
              </div>
            </div>

            {/* Section Divider */}
            <div className="gold-line mb-16"></div>

            {/* The Custody Illusion */}
            <div className="mb-16">
              <h2 className="text-2xl font-display text-text-primary mb-6">
                The Custody Illusion
              </h2>

              <div className="prose-institutional">
                <p className="text-gold font-medium mb-6">
                  One of the most misunderstood aspects of digital finance is custody.
                </p>

                <p>
                  Many platforms operate under models where client assets are technically held
                  by the platform itself or through layered intermediaries. While operationally
                  efficient, such structures can blur the boundary between client property and
                  corporate assets.
                </p>

                <p className="text-text-primary font-medium my-6">
                  Institutional capital increasingly rejects this ambiguity.
                </p>

                <p className="mb-4">True custody architecture demands:</p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Clear legal title</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Segregated holdings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Independent oversight</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Transparent recordkeeping</span>
                  </li>
                </ul>

                <p className="text-gold font-medium">
                  Without these safeguards, custody becomes a promise rather than a structure.
                </p>
              </div>
            </div>

            {/* Section Divider */}
            <div className="gold-line mb-16"></div>

            {/* Governance as Risk Infrastructure */}
            <div className="mb-16">
              <h2 className="text-2xl font-display text-text-primary mb-6">
                Governance as Risk Infrastructure
              </h2>

              <div className="prose-institutional">
                <p>
                  Governance is often discussed as a regulatory requirement. In practice,
                  it functions as risk infrastructure.
                </p>

                <p className="my-6 mb-4">Well-governed platforms demonstrate:</p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Defined operational mandates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Separation of duties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Auditability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Policy transparency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Decision accountability</span>
                  </li>
                </ul>

                <p className="text-text-primary font-medium my-6">
                  Governance does not slow innovation — it stabilizes it.
                </p>

                <p>
                  For long-horizon investors, governance quality frequently outweighs platform novelty.
                </p>
              </div>
            </div>

            {/* Section Divider */}
            <div className="gold-line mb-16"></div>

            {/* Liquidity Events */}
            <div className="mb-16">
              <h2 className="text-2xl font-display text-text-primary mb-6">
                Liquidity Events Reveal Architecture
              </h2>

              <div className="prose-institutional">
                <p className="text-gold font-medium mb-6">
                  Periods of market stress act as structural audits.
                </p>

                <p>
                  When liquidity contracts, the resilience of a platform is determined by how
                  assets were structured before the crisis — not how they are explained afterward.
                </p>

                <p className="my-6">Historically, platforms with:</p>

                <div className="bg-midnight-50 border border-border rounded-sm p-6 my-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-gold">✔</span>
                      <span className="text-text-secondary">segregated assets</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gold">✔</span>
                      <span className="text-text-secondary">conservative leverage</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gold">✔</span>
                      <span className="text-text-secondary">transparent custody</span>
                    </div>
                  </div>
                </div>

                <p>have demonstrated greater operational continuity.</p>

                <p className="text-gold font-medium mt-6">
                  Architecture is tested precisely when confidence is scarce.
                </p>
              </div>
            </div>

            {/* Section Divider */}
            <div className="gold-line mb-16"></div>

            {/* Designing for Institutional Participation */}
            <div className="mb-16">
              <h2 className="text-2xl font-display text-text-primary mb-6">
                Designing for Institutional Participation
              </h2>

              <div className="prose-institutional">
                <p className="text-text-primary font-medium mb-6">
                  Institutional investors do not simply evaluate yield or access.
                </p>

                <p className="text-gold font-medium mb-6">
                  They assess survivability.
                </p>

                <p className="mb-4">
                  Infrastructure capable of supporting institutional participation typically incorporates:
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Legal asset segregation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Bankruptcy-remote structures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Independent custodial environments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Multi-layer verification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Jurisdictional flexibility</span>
                  </li>
                </ul>

                <p className="text-text-primary font-medium">
                  These elements transform a platform from a transactional venue into a financial infrastructure provider.
                </p>
              </div>
            </div>

            {/* Section Divider */}
            <div className="gold-line mb-16"></div>

            {/* Auxite Global */}
            <div className="mb-16">
              <h2 className="text-2xl font-display text-text-primary mb-6">
                Auxite Global — Infrastructure Before Scale
              </h2>

              <div className="prose-institutional">
                <p>
                  Auxite Global was designed with the recognition that structural resilience
                  must precede growth.
                </p>

                <p className="my-6 mb-4">Its framework emphasizes:</p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Fully allocated metals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Legal separation from operating entities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Independent storage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Transparent governance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Digitally supported verification</span>
                  </li>
                </ul>

                <p className="text-text-primary font-medium">
                  The objective is not merely operational efficiency — but structural durability across market cycles.
                </p>
              </div>
            </div>

            {/* Section Divider */}
            <div className="gold-line mb-16"></div>

            {/* Conclusion */}
            <div className="mb-16">
              <h2 className="text-2xl font-display text-text-primary mb-6">
                Conclusion — The Institutional Filter
              </h2>

              <div className="prose-institutional">
                <p className="text-gold font-medium mb-6">
                  As digital markets mature, capital is becoming more selective.
                </p>

                <p className="mb-4">
                  Platforms will increasingly be evaluated through an institutional filter that prioritizes:
                </p>

                <div className="bg-midnight-50 border border-border rounded-sm p-6 my-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gold">✔ structure</span>
                      <span className="text-text-faint">over</span>
                      <span className="text-text-muted">speed</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gold">✔ governance</span>
                      <span className="text-text-faint">over</span>
                      <span className="text-text-muted">expansion</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gold">✔ ownership clarity</span>
                      <span className="text-text-faint">over</span>
                      <span className="text-text-muted">synthetic exposure</span>
                    </div>
                  </div>
                </div>

                <p className="text-text-secondary italic my-6">
                  In this environment, infrastructure is no longer background architecture.
                </p>

                <p className="text-gold font-medium text-lg">
                  It is the investment thesis.
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
              Explore Auxite Infrastructure
            </h2>
            <p className="text-text-secondary mb-8">
              Learn how our governance framework supports institutional precious metals allocation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/trust-governance" className="btn-institutional">
                View Governance Framework
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

            <Link href="/insights/multi-jurisdiction-infrastructure" className="card-institutional p-6 group">
              <span className="px-2 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                Infrastructure
              </span>
              <h4 className="text-lg font-display text-text-primary mt-4 mb-2 group-hover:text-gold transition-colors">
                Why Multi-Jurisdiction Infrastructure Has Become a Requirement
              </h4>
              <p className="text-sm text-text-muted">
                From preference to necessity in institutional capital deployment.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
