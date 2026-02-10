"use client";

/* ═══════════════════════════════════════════════════════════════════════════
   AUXITE GLOBAL — INSTITUTIONAL SOLUTIONS PAGE
   Custody, allocation, reporting - institutional client services
   ═══════════════════════════════════════════════════════════════════════════ */

export default function SolutionsPage() {
  return (
    <div className="bg-midnight min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-20 border-b border-border">
        <div className="container-institutional">
          <div className="max-w-4xl">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
              Institutional Services
            </p>
            <h1 className="text-hero font-display text-text-primary mb-8">
              Solutions Designed for<br />
              <span className="text-gold">Institutional Requirements</span>
            </h1>
            <p className="text-body-lg text-text-secondary max-w-3xl">
              Comprehensive precious metals infrastructure supporting custody,
              allocation, and reporting needs for institutional clients
              with fiduciary obligations.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-8 border-b border-border bg-midnight-50">
        <div className="container-institutional">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <span className="text-sm text-text-secondary">Segregated Custody</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="text-sm text-text-secondary">Structured Allocation</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-sm text-text-secondary">Institutional Reporting</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="section">
        <div className="container-institutional">
          <div className="max-w-3xl mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Core Services
            </p>
            <h2 className="text-section font-display text-text-primary mb-6">
              Institutional-Grade Infrastructure
            </h2>
            <p className="text-body text-text-secondary">
              Purpose-built services designed to meet the rigorous requirements
              of institutional investors, family offices, and fiduciaries
              with precious metals allocation mandates.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Custody Solution */}
            <div className="card-institutional p-8">
              <div className="w-14 h-14 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-display text-text-primary mb-4">
                Segregated Custody
              </h3>
              <p className="text-text-muted mb-6">
                Physical precious metals held in segregated storage within
                LBMA-aligned facilities. No commingling. Full chain of custody
                documentation with independent verification.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-emerald flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-text-secondary">Allocated storage</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-emerald flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-text-secondary">Third-party verification</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-emerald flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-text-secondary">Insurance coverage</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-emerald flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-text-secondary">Audit trail documentation</span>
                </div>
              </div>

              <div className="gold-line mb-4"></div>
              <p className="text-xs text-text-faint italic">
                LBMA-aligned vaulting standards
              </p>
            </div>

            {/* Allocation Solution */}
            <div className="card-institutional p-8">
              <div className="w-14 h-14 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-display text-text-primary mb-4">
                Structured Allocation
              </h3>
              <p className="text-text-muted mb-6">
                Strategic precious metals allocation designed for portfolio
                diversification and capital preservation. Customizable
                allocation frameworks aligned with investment mandates.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-emerald flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-text-secondary">Multi-metal allocation</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-emerald flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-text-secondary">Rebalancing support</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-emerald flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-text-secondary">Mandate alignment</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-emerald flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-text-secondary">Execution optimization</span>
                </div>
              </div>

              <div className="gold-line mb-4"></div>
              <p className="text-xs text-text-faint italic">
                Customizable allocation frameworks
              </p>
            </div>

            {/* Reporting Solution */}
            <div className="card-institutional p-8">
              <div className="w-14 h-14 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-display text-text-primary mb-4">
                Institutional Reporting
              </h3>
              <p className="text-text-muted mb-6">
                Comprehensive reporting infrastructure designed for fiduciary
                documentation, regulatory compliance, and investment committee
                presentations.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-emerald flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-text-secondary">Custody statements</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-emerald flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-text-secondary">Performance analytics</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-emerald flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-text-secondary">Regulatory documentation</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-emerald flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-text-secondary">API integration</span>
                </div>
              </div>

              <div className="gold-line mb-4"></div>
              <p className="text-xs text-text-faint italic">
                Fiduciary-grade documentation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section border-t border-border">
        <div className="container-institutional">
          <div className="max-w-3xl mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Client Profiles
            </p>
            <h2 className="text-section font-display text-text-primary mb-6">
              Who We Serve
            </h2>
            <p className="text-body text-text-secondary">
              Auxite infrastructure is designed for institutional investors
              and fiduciaries with specific precious metals allocation requirements
              and governance obligations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-midnight-50 border border-border rounded-sm p-8">
              <h3 className="text-xl font-display text-text-primary mb-4">
                Family Offices
              </h3>
              <p className="text-text-muted mb-6">
                Multi-generational wealth preservation through tangible asset
                allocation with institutional custody and governance standards.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                  Wealth Preservation
                </span>
                <span className="px-3 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                  Succession Planning
                </span>
                <span className="px-3 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                  Governance Documentation
                </span>
              </div>
            </div>

            <div className="bg-midnight-50 border border-border rounded-sm p-8">
              <h3 className="text-xl font-display text-text-primary mb-4">
                Institutional Investors
              </h3>
              <p className="text-text-muted mb-6">
                Portfolio diversification and inflation hedging through
                physically-backed precious metals with institutional reporting.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                  Portfolio Diversification
                </span>
                <span className="px-3 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                  Inflation Hedging
                </span>
                <span className="px-3 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                  Compliance Reporting
                </span>
              </div>
            </div>

            <div className="bg-midnight-50 border border-border rounded-sm p-8">
              <h3 className="text-xl font-display text-text-primary mb-4">
                Endowments & Foundations
              </h3>
              <p className="text-text-muted mb-6">
                Long-term capital preservation aligned with fiduciary obligations
                and institutional governance requirements.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                  Capital Preservation
                </span>
                <span className="px-3 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                  Fiduciary Compliance
                </span>
                <span className="px-3 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                  Investment Committee
                </span>
              </div>
            </div>

            <div className="bg-midnight-50 border border-border rounded-sm p-8">
              <h3 className="text-xl font-display text-text-primary mb-4">
                Corporate Treasuries
              </h3>
              <p className="text-text-muted mb-6">
                Balance sheet diversification and reserve management through
                tangible asset allocation with enterprise reporting integration.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                  Reserve Management
                </span>
                <span className="px-3 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                  Balance Sheet
                </span>
                <span className="px-3 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                  Enterprise Integration
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Process */}
      <section className="section border-t border-border">
        <div className="container-institutional">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Engagement Process
            </p>
            <h2 className="text-section font-display text-text-primary mb-6">
              Institutional Onboarding
            </h2>
            <p className="text-body text-text-secondary">
              A structured engagement process designed to ensure alignment
              between institutional requirements and Auxite capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-gold font-display text-lg font-semibold">1</span>
              </div>
              <h3 className="text-lg font-display text-text-primary mb-2">
                Initial Inquiry
              </h3>
              <p className="text-sm text-text-muted">
                Preliminary discussion of requirements and institutional context
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-gold font-display text-lg font-semibold">2</span>
              </div>
              <h3 className="text-lg font-display text-text-primary mb-2">
                Due Diligence
              </h3>
              <p className="text-sm text-text-muted">
                Comprehensive review of governance, custody, and operational frameworks
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-gold font-display text-lg font-semibold">3</span>
              </div>
              <h3 className="text-lg font-display text-text-primary mb-2">
                Structuring
              </h3>
              <p className="text-sm text-text-muted">
                Custom solution design aligned with mandate and governance requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-gold font-display text-lg font-semibold">4</span>
              </div>
              <h3 className="text-lg font-display text-text-primary mb-2">
                Activation
              </h3>
              <p className="text-sm text-text-muted">
                Account establishment, reporting integration, and ongoing relationship
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section border-t border-border">
        <div className="container-institutional">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-section font-display text-text-primary mb-6">
              Ready to Explore Institutional Solutions?
            </h2>
            <p className="text-body text-text-secondary mb-10">
              Schedule a consultation to discuss your institutional requirements
              and how Auxite infrastructure can support your precious metals
              allocation mandate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact?type=institutional-inquiry" className="btn-institutional">
                Schedule Consultation
              </a>
              <a href="/infrastructure" className="btn-institutional-outline">
                Review Infrastructure
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
