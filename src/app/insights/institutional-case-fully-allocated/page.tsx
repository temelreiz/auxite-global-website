"use client";

import Link from "next/link";

/* ═══════════════════════════════════════════════════════════════════════════
   AUXITE GLOBAL — FEATURED RESEARCH ARTICLE

   The Institutional Case for Fully Allocated Digital Precious Metals
   Why allocation integrity and legal segregation define the next generation
   of reserve assets.
   ═══════════════════════════════════════════════════════════════════════════ */

export default function InstitutionalCaseArticle() {
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
              <span className="text-text-muted">Featured Research</span>
            </div>

            {/* Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-gold/10 border border-gold/30 text-xs text-gold rounded-sm">
                Featured Research
              </span>
              <span className="text-sm text-text-faint">February 2026</span>
              <span className="text-sm text-text-faint">•</span>
              <span className="text-sm text-text-faint">8 min read</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-display text-text-primary mb-6 leading-tight">
              The Institutional Case for Fully Allocated Digital Precious Metals
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              Why allocation integrity and legal segregation define the next generation of reserve assets.
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
                Introduction — The Structural Shift in Capital Preservation
              </h2>

              <div className="prose-institutional">
                <p>
                  Global financial markets are undergoing a foundational transformation. As infrastructure
                  becomes increasingly digital, institutional investors are reassessing how reserve assets
                  are held, verified, and protected.
                </p>

                <p className="text-gold font-medium my-6">
                  Efficiency alone is no longer sufficient.
                </p>

                <p>
                  The events of recent market cycles have demonstrated that true capital preservation
                  depends not only on asset quality, but on the legal and operational structures
                  surrounding ownership.
                </p>

                <p>
                  This shift has led to renewed interest in fully allocated precious metals — enhanced
                  by digitally native verification frameworks that improve transparency without
                  compromising the safeguards historically associated with physical ownership.
                </p>

                <p className="text-text-secondary italic my-6">
                  Fully allocated metals are no longer viewed simply as a defensive asset class.
                </p>

                <p className="text-gold font-medium">
                  They are emerging as core components of structurally resilient portfolios.
                </p>
              </div>
            </div>

            {/* Section Divider */}
            <div className="gold-line mb-16"></div>

            {/* Allocation vs Exposure */}
            <div className="mb-16">
              <h2 className="text-2xl font-display text-text-primary mb-6">
                Allocation vs. Exposure — A Structural Distinction
              </h2>

              <div className="prose-institutional">
                <p className="text-gold font-medium mb-6">
                  Not all precious metal exposure is equivalent.
                </p>

                <p>
                  Many investment vehicles provide price participation without direct ownership.
                  These structures often rely on pooled reserves, layered custodial relationships,
                  or intermediary balance sheet exposure.
                </p>

                <p>
                  While operationally efficient, such models introduce structural dependencies
                  that may only become visible during periods of financial stress.
                </p>

                <p className="text-text-primary font-medium my-6">
                  Fully allocated ownership fundamentally alters this risk profile.
                </p>

                <p className="mb-4">When each unit of metal is:</p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Individually assigned</span>
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
                    <span>Independently verifiable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Held outside intermediary balance sheets</span>
                  </li>
                </ul>

                <p>
                  the investor's relationship shifts from counterparty reliance to asset-level ownership.
                </p>

                <p className="text-gold font-medium mt-6">
                  This distinction is not semantic — it is structural.
                </p>
              </div>
            </div>

            {/* Section Divider */}
            <div className="gold-line mb-16"></div>

            {/* Legal Segregation */}
            <div className="mb-16">
              <h2 className="text-2xl font-display text-text-primary mb-6">
                Legal Segregation and Bankruptcy Remoteness
              </h2>

              <div className="prose-institutional">
                <p className="text-gold font-medium mb-6">
                  Institutional capital increasingly prioritizes legal clarity.
                </p>

                <p>
                  Segregated structures are designed to ensure that client assets remain insulated
                  from operational liabilities, creditor claims, or corporate restructuring scenarios.
                </p>

                <p className="my-6">In practical terms, this means:</p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Allocated metals are not treated as corporate assets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>They are not subject to rehypothecation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>They cannot be encumbered without explicit authorization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ownership remains continuously attributable</span>
                  </li>
                </ul>

                <p>
                  Such architecture supports what institutions describe as <span className="text-gold">bankruptcy remoteness</span> —
                  a foundational requirement for long-term reserve holdings.
                </p>

                <p className="mt-6">
                  As regulatory expectations evolve globally, structures that clearly separate
                  operational entities from client assets are becoming not merely advantageous,
                  but essential.
                </p>
              </div>
            </div>

            {/* Section Divider */}
            <div className="gold-line mb-16"></div>

            {/* Verification */}
            <div className="mb-16">
              <h2 className="text-2xl font-display text-text-primary mb-6">
                The Role of Verification in Modern Reserve Assets
              </h2>

              <div className="prose-institutional">
                <p>
                  Historically, confidence in precious metals relied heavily on physical audits
                  and custodial reputation.
                </p>

                <p className="my-6">
                  Today, verification is increasingly complemented by digital infrastructure capable
                  of enhancing transparency while preserving operational discipline.
                </p>

                <p className="mb-4">Modern investors expect the ability to validate:</p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>That assets exist</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>That they are properly allocated</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>That custody arrangements are intact</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>That records remain consistent</span>
                  </li>
                </ul>

                <p className="text-gold font-medium my-6">
                  Verification is no longer a periodic exercise.
                </p>

                <p className="text-text-primary font-medium">
                  It is becoming an ongoing expectation.
                </p>

                <p className="mt-6 text-text-secondary italic">
                  This evolution does not replace traditional safeguards — it strengthens them.
                </p>
              </div>
            </div>

            {/* Section Divider */}
            <div className="gold-line mb-16"></div>

            {/* Multi-Jurisdiction */}
            <div className="mb-16">
              <h2 className="text-2xl font-display text-text-primary mb-6">
                Multi-Jurisdiction Infrastructure as a Risk Framework
              </h2>

              <div className="prose-institutional">
                <p>
                  Reserve asset design must also consider geopolitical and regulatory concentration risk.
                </p>

                <p className="my-6">
                  Operating across multiple financial centers introduces structural flexibility
                  and reduces dependency on any single jurisdiction.
                </p>

                <p className="mb-4">When properly governed, a multi-jurisdiction model supports:</p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Legal diversification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Operational continuity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Regulatory adaptability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Enhanced resilience</span>
                  </li>
                </ul>

                <p>
                  For institutions deploying long-duration capital, such characteristics are
                  increasingly evaluated alongside asset fundamentals.
                </p>

                <p className="text-gold font-medium my-6">
                  Infrastructure is no longer invisible.
                </p>

                <p className="text-text-primary font-medium">
                  It is part of the investment thesis.
                </p>
              </div>
            </div>

            {/* Section Divider */}
            <div className="gold-line mb-16"></div>

            {/* Infrastructure-Defined Ownership */}
            <div className="mb-16">
              <h2 className="text-2xl font-display text-text-primary mb-6">
                From Commodity Exposure to Infrastructure-Defined Ownership
              </h2>

              <div className="prose-institutional">
                <p>
                  The market is moving beyond simple commodity participation toward
                  infrastructure-defined ownership models.
                </p>

                <p className="my-6">Investors are asking deeper questions:</p>

                <ul className="space-y-3 mb-6 text-text-secondary">
                  <li className="flex items-start gap-3">
                    <span className="text-gold">→</span>
                    <span>Who controls the asset?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold">→</span>
                    <span>Where is it held?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold">→</span>
                    <span>Under what legal framework?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold">→</span>
                    <span>Can ownership be independently validated?</span>
                  </li>
                </ul>

                <p>
                  In this context, allocation integrity is emerging as a defining feature
                  of next-generation reserve assets.
                </p>

                <p className="text-text-secondary italic my-6">
                  The objective is no longer access alone.
                </p>

                <p className="text-gold font-medium">
                  It is structural certainty.
                </p>
              </div>
            </div>

            {/* Section Divider */}
            <div className="gold-line mb-16"></div>

            {/* Auxite Global */}
            <div className="mb-16">
              <h2 className="text-2xl font-display text-text-primary mb-6">
                Auxite Global — Infrastructure by Design
              </h2>

              <div className="prose-institutional">
                <p>Auxite Global was established around a single premise:</p>

                <p className="text-gold font-medium text-xl my-6">
                  Reserve-grade assets require reserve-grade infrastructure.
                </p>

                <p className="mb-4">Its operating model integrates:</p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Fully allocated precious metals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Legal segregation frameworks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Multi-jurisdiction operational architecture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Independent custody environments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Digitally supported verification systems</span>
                  </li>
                </ul>

                <p>
                  This structure is designed to align technological capability with institutional
                  expectations for governance, transparency, and asset protection.
                </p>

                <p className="text-text-secondary italic my-6">
                  Auxite Global does not position precious metals as a speculative instrument.
                </p>

                <p>
                  Rather, it views them as strategic reserve components within a modern financial architecture.
                </p>
              </div>
            </div>

            {/* Section Divider */}
            <div className="gold-line mb-16"></div>

            {/* Looking Forward */}
            <div className="mb-16">
              <h2 className="text-2xl font-display text-text-primary mb-6">
                Looking Forward — The Repricing of Structural Integrity
              </h2>

              <div className="prose-institutional">
                <p className="text-gold font-medium mb-6">
                  As markets mature, structural integrity is likely to be repriced.
                </p>

                <p className="mb-4">Investors are increasingly distinguishing between:</p>

                <div className="bg-midnight-50 border border-border rounded-sm p-6 my-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-text-muted">✔ price exposure</span>
                    <span className="text-text-faint">and</span>
                    <span className="text-gold">✔ ownership certainty</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted">✔ access</span>
                    <span className="text-text-faint">and</span>
                    <span className="text-gold">✔ protection</span>
                  </div>
                </div>

                <p className="text-text-primary font-medium my-6">
                  The next generation of capital preservation will not be defined solely by
                  what is owned — but by how it is owned.
                </p>

                <p>
                  Fully allocated digital precious metals sit at the intersection of tradition
                  and infrastructure innovation.
                </p>

                <p className="text-gold font-medium mt-6">
                  For institutions navigating an era of heightened systemic awareness,
                  that intersection is becoming increasingly difficult to ignore.
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
              Learn how our multi-jurisdiction architecture supports institutional
              precious metals allocation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/infrastructure" className="btn-institutional">
                View Infrastructure
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
            <Link href="#" className="card-institutional p-6 group">
              <span className="px-2 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                Structural Analysis
              </span>
              <h4 className="text-lg font-display text-text-primary mt-4 mb-2 group-hover:text-gold transition-colors">
                Structural Risk in Digital Asset Platforms
              </h4>
              <p className="text-sm text-text-muted">
                How allocation changes the equation for institutional investors.
              </p>
            </Link>

            <Link href="#" className="card-institutional p-6 group">
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
