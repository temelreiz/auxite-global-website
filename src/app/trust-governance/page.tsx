"use client";

/* ═══════════════════════════════════════════════════════════════════════════
   AUXITE GLOBAL — TRUST & GOVERNANCE PAGE
   Fiduciary principles, governance framework, accountability structures
   ═══════════════════════════════════════════════════════════════════════════ */

export default function TrustGovernancePage() {
  return (
    <div className="bg-midnight min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-20 border-b border-border">
        <div className="container-institutional">
          <div className="max-w-4xl">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
              Governance Framework
            </p>
            <h1 className="text-hero font-display text-text-primary mb-8">
              Trust Through<br />
              <span className="text-gold">Structural Discipline</span>
            </h1>
            <p className="text-body-lg text-text-secondary max-w-3xl">
              Institutional governance designed to protect client interests through
              clear accountability, independent oversight, and fiduciary alignment.
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
              <span className="text-sm text-text-secondary">Fiduciary Standards</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm text-text-secondary">Independent Oversight</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-sm text-text-secondary">Transparent Reporting</span>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Principles */}
      <section className="section">
        <div className="container-institutional">
          <div className="max-w-3xl mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Core Principles
            </p>
            <h2 className="text-section font-display text-text-primary mb-6">
              Fiduciary-First Governance
            </h2>
            <p className="text-body text-text-secondary">
              Every governance decision is evaluated through the lens of client protection
              and long-term institutional integrity. This principle guides policy
              development, operational design, and strategic direction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-institutional p-8">
              <div className="w-12 h-12 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-display text-text-primary mb-3">
                Client Interest Primacy
              </h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                Client interests take precedence in all governance decisions.
                No operational convenience justifies compromising client protection
                or asset security.
              </p>
              <div className="gold-line"></div>
            </div>

            <div className="card-institutional p-8">
              <div className="w-12 h-12 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3 className="text-lg font-display text-text-primary mb-3">
                Structural Independence
              </h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                Governance, custody, and operations maintain structural separation.
                No single function controls the entire asset lifecycle,
                ensuring checks and balances at every stage.
              </p>
              <div className="gold-line"></div>
            </div>

            <div className="card-institutional p-8">
              <div className="w-12 h-12 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-display text-text-primary mb-3">
                Transparency Commitment
              </h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                Clear reporting, accessible documentation, and verifiable processes.
                Institutional clients receive comprehensive visibility into
                custody status and operational activities.
              </p>
              <div className="gold-line"></div>
            </div>

            <div className="card-institutional p-8">
              <div className="w-12 h-12 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-display text-text-primary mb-3">
                Long-Term Orientation
              </h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                Governance designed for permanence, not quarterly optimization.
                Decisions favor institutional durability over short-term
                operational efficiency.
              </p>
              <div className="gold-line"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Oversight Structure */}
      <section className="section border-t border-border">
        <div className="container-institutional">
          <div className="max-w-3xl mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Oversight Structure
            </p>
            <h2 className="text-section font-display text-text-primary mb-6">
              Multi-Layer Accountability
            </h2>
            <p className="text-body text-text-secondary">
              Each layer of oversight maintains independence while contributing
              to the overall governance framework. No single point of authority
              controls critical functions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-midnight-50 border border-border rounded-sm p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-display text-xl font-semibold">01</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display text-text-primary mb-3">
                    Board Oversight
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Strategic direction, policy approval, and fiduciary supervision.
                    The board maintains ultimate accountability for institutional
                    integrity and client protection.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                      Strategic Direction
                    </span>
                    <span className="px-3 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                      Policy Approval
                    </span>
                    <span className="px-3 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                      Risk Oversight
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-midnight-50 border border-border rounded-sm p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-display text-xl font-semibold">02</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display text-text-primary mb-3">
                    Risk Committee
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Independent risk assessment, operational monitoring, and
                    compliance verification. The risk committee reports directly
                    to the board with unrestricted access.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                      Risk Assessment
                    </span>
                    <span className="px-3 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                      Compliance
                    </span>
                    <span className="px-3 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                      Monitoring
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-midnight-50 border border-border rounded-sm p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-display text-xl font-semibold">03</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display text-text-primary mb-3">
                    External Audit
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Third-party verification of financial statements, custody holdings,
                    and operational controls. External auditors maintain complete
                    independence from management.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                      Financial Audit
                    </span>
                    <span className="px-3 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                      Custody Verification
                    </span>
                    <span className="px-3 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                      Controls Testing
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Framework */}
      <section className="section border-t border-border">
        <div className="container-institutional">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Compliance Framework
              </p>
              <h2 className="text-section font-display text-text-primary mb-6">
                Regulatory Alignment
              </h2>
              <p className="text-body text-text-secondary mb-8">
                Each operating entity maintains compliance with applicable
                regulatory frameworks in its jurisdiction. The group compliance
                function coordinates cross-border requirements and ensures
                consistent standards.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-emerald/10 border border-emerald/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-text-primary font-medium mb-1">KYC/AML Standards</h4>
                    <p className="text-sm text-text-muted">
                      Comprehensive client verification aligned with FATF
                      recommendations and local regulatory requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-emerald/10 border border-emerald/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-text-primary font-medium mb-1">Transaction Monitoring</h4>
                    <p className="text-sm text-text-muted">
                      Real-time transaction surveillance with automated
                      suspicious activity detection and reporting.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-emerald/10 border border-emerald/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-text-primary font-medium mb-1">Regulatory Reporting</h4>
                    <p className="text-sm text-text-muted">
                      Timely and accurate regulatory filings in each
                      operating jurisdiction with audit trail documentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-midnight-50 border border-border rounded-sm p-8">
              <h3 className="text-lg font-display text-text-primary mb-6">
                Jurisdictional Compliance
              </h3>

              <div className="space-y-4">
                <div className="p-4 bg-midnight border border-border rounded-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-text-primary">Hong Kong</span>
                    <span className="text-xs text-emerald">Active</span>
                  </div>
                  <p className="text-xs text-text-muted">
                    SFC regulatory framework, AMLO compliance
                  </p>
                </div>

                <div className="p-4 bg-midnight border border-border rounded-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-text-primary">Dubai (DIFC)</span>
                    <span className="text-xs text-emerald">Active</span>
                  </div>
                  <p className="text-xs text-text-muted">
                    DFSA regulatory framework, UAE Central Bank alignment
                  </p>
                </div>

                <div className="p-4 bg-midnight border border-border rounded-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-text-primary">Türkiye</span>
                    <span className="text-xs text-emerald">Active</span>
                  </div>
                  <p className="text-xs text-text-muted">
                    CMB regulatory framework, MASAK compliance
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-xs text-text-faint italic text-center">
                  Regulatory status as of current reporting period
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section border-t border-border">
        <div className="container-institutional">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-section font-display text-text-primary mb-6">
              Governance Designed for Long-Term Confidence
            </h2>
            <p className="text-body text-text-secondary mb-10">
              Request our governance documentation to understand the structural
              protections built into every layer of Auxite's operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact?type=governance-inquiry" className="btn-institutional">
                Request Governance Documentation
              </a>
              <a href="/group-structure" className="btn-institutional-outline">
                View Group Structure
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
