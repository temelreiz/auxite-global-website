"use client";

/* ═══════════════════════════════════════════════════════════════════════════
   AUXITE GLOBAL — INFRASTRUCTURE PAGE
   Bu sayfa sitenin en kritik sayfası.
   "Custody", "Operational Layers", "Technology Architecture" burada açıklanır.
   ═══════════════════════════════════════════════════════════════════════════ */

export default function InfrastructurePage() {
  return (
    <div className="bg-midnight min-h-screen">
      {/* ═══════════════════════════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="pt-40 pb-20 border-b border-border">
        <div className="container-institutional">
          <div className="max-w-4xl">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
              Operational Architecture
            </p>
            <h1 className="text-hero font-display text-text-primary mb-8">
              Infrastructure Built for<br />
              <span className="text-gold">Institutional Permanence</span>
            </h1>
            <p className="text-body-lg text-text-secondary max-w-3xl">
              Multi-layered operational architecture designed to support custody integrity,
              asset segregation, and long-term capital preservation across regulated jurisdictions.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          TRUST STRIP
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-8 border-b border-border bg-midnight-50">
        <div className="container-institutional">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm text-text-secondary">Segregated Custody</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="text-sm text-text-secondary">Multi-Entity Architecture</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-sm text-text-secondary">Operational Independence</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-sm text-text-secondary">Regulatory Alignment</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CUSTODY INFRASTRUCTURE
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="section">
        <div className="container-institutional">
          <div className="max-w-3xl mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Custody Layer
            </p>
            <h2 className="text-section font-display text-text-primary mb-6">
              Sovereign-Grade Custody Architecture
            </h2>
            <p className="text-body text-text-secondary">
              Physical precious metals are held in segregated storage within LBMA-aligned
              vaulting facilities. Each asset class maintains independent custody protocols
              with third-party verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Custody Card 1 */}
            <div className="card-institutional p-8">
              <div className="w-12 h-12 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-display text-text-primary mb-3">
                Segregated Vaulting
              </h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                Client assets are held in segregated accounts within LBMA-aligned facilities.
                No commingling of holdings. Full chain of custody documentation.
              </p>
              <div className="gold-line"></div>
              <p className="text-xs text-text-faint mt-4 italic">
                Institutional custody standard
              </p>
            </div>

            {/* Custody Card 2 */}
            <div className="card-institutional p-8">
              <div className="w-12 h-12 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-display text-text-primary mb-3">
                Independent Verification
              </h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                Third-party auditors verify physical holdings against digital representations.
                Regular attestation cycles ensure ongoing integrity.
              </p>
              <div className="gold-line"></div>
              <p className="text-xs text-text-faint mt-4 italic">
                Continuous assurance framework
              </p>
            </div>

            {/* Custody Card 3 */}
            <div className="card-institutional p-8">
              <div className="w-12 h-12 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-display text-text-primary mb-3">
                Insurance Coverage
              </h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                Comprehensive insurance protection for stored assets covering theft,
                damage, and operational risks within custody facilities.
              </p>
              <div className="gold-line"></div>
              <p className="text-xs text-text-faint mt-4 italic">
                Lloyd's-grade coverage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          OPERATIONAL LAYERS
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="section border-t border-border">
        <div className="container-institutional">
          <div className="max-w-3xl mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Operational Architecture
            </p>
            <h2 className="text-section font-display text-text-primary mb-6">
              Multi-Layer Operational Design
            </h2>
            <p className="text-body text-text-secondary">
              Each operational layer maintains independence while supporting the overall
              governance structure. This separation ensures no single point of failure
              and supports long-term institutional resilience.
            </p>
          </div>

          {/* Operational Layers Diagram */}
          <div className="space-y-6">
            {/* Layer 1 */}
            <div className="bg-midnight-50 border border-border rounded-sm p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-display text-xl font-semibold">01</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display text-text-primary mb-3">
                    Governance Layer
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Strategic oversight, policy development, and fiduciary responsibility.
                    The governance layer sets operational boundaries and ensures alignment
                    with institutional principles.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                      Policy Framework
                    </span>
                    <span className="px-3 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                      Risk Oversight
                    </span>
                    <span className="px-3 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                      Strategic Direction
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Layer 2 */}
            <div className="bg-midnight-50 border border-border rounded-sm p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-display text-xl font-semibold">02</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display text-text-primary mb-3">
                    Custody Layer
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Physical asset storage, segregation protocols, and verification processes.
                    The custody layer operates independently from trading and technology functions.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                      Segregated Storage
                    </span>
                    <span className="px-3 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                      Verification
                    </span>
                    <span className="px-3 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                      Insurance
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Layer 3 */}
            <div className="bg-midnight-50 border border-border rounded-sm p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-display text-xl font-semibold">03</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display text-text-primary mb-3">
                    Operations Layer
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Day-to-day execution, client services, and operational compliance.
                    This layer handles transaction processing and regulatory reporting.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                      Transaction Processing
                    </span>
                    <span className="px-3 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                      Compliance
                    </span>
                    <span className="px-3 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                      Reporting
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Layer 4 */}
            <div className="bg-midnight-50 border border-border rounded-sm p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-display text-xl font-semibold">04</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display text-text-primary mb-3">
                    Technology Layer
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Digital infrastructure, platform development, and security protocols.
                    Technology serves the operational layers while maintaining independence.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                      Platform Infrastructure
                    </span>
                    <span className="px-3 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                      Security
                    </span>
                    <span className="px-3 py-1 bg-gold/5 border border-gold/20 text-xs text-gold rounded-sm">
                      Integration
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          TECHNOLOGY ARCHITECTURE
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="section border-t border-border">
        <div className="container-institutional">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Technology Architecture
              </p>
              <h2 className="text-section font-display text-text-primary mb-6">
                Purpose-Built Digital Infrastructure
              </h2>
              <p className="text-body text-text-secondary mb-8">
                Technology infrastructure designed to support institutional requirements
                for security, scalability, and regulatory compliance. No experimental
                protocols—only proven, auditable systems.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-emerald/10 border border-emerald/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-text-primary font-medium mb-1">Bank-Grade Security</h4>
                    <p className="text-sm text-text-muted">
                      Multi-layer encryption, hardware security modules, and institutional
                      access controls throughout the platform.
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
                    <h4 className="text-text-primary font-medium mb-1">Auditable Architecture</h4>
                    <p className="text-sm text-text-muted">
                      Complete transaction history with immutable audit trails.
                      Third-party verification at every layer.
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
                    <h4 className="text-text-primary font-medium mb-1">Regulatory Integration</h4>
                    <p className="text-sm text-text-muted">
                      Built-in compliance reporting, KYC/AML integration, and
                      jurisdiction-specific regulatory alignment.
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
                    <h4 className="text-text-primary font-medium mb-1">Operational Resilience</h4>
                    <p className="text-sm text-text-muted">
                      Redundant systems, disaster recovery protocols, and
                      99.99% uptime commitment for institutional clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Stack Visual */}
            <div className="bg-midnight-50 border border-border rounded-sm p-8">
              <h3 className="text-lg font-display text-text-primary mb-6">
                Technology Stack
              </h3>

              <div className="space-y-4">
                <div className="p-4 bg-midnight border border-border rounded-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-text-primary">Client Interface</span>
                    <span className="text-xs text-gold">Layer 1</span>
                  </div>
                  <p className="text-xs text-text-muted">
                    Secure web and mobile platforms with institutional-grade authentication
                  </p>
                </div>

                <div className="flex justify-center">
                  <svg className="w-4 h-4 text-border" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>

                <div className="p-4 bg-midnight border border-border rounded-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-text-primary">API Gateway</span>
                    <span className="text-xs text-gold">Layer 2</span>
                  </div>
                  <p className="text-xs text-text-muted">
                    Rate-limited, authenticated access with comprehensive logging
                  </p>
                </div>

                <div className="flex justify-center">
                  <svg className="w-4 h-4 text-border" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>

                <div className="p-4 bg-midnight border border-border rounded-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-text-primary">Core Services</span>
                    <span className="text-xs text-gold">Layer 3</span>
                  </div>
                  <p className="text-xs text-text-muted">
                    Transaction processing, portfolio management, compliance engine
                  </p>
                </div>

                <div className="flex justify-center">
                  <svg className="w-4 h-4 text-border" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>

                <div className="p-4 bg-midnight border border-gold/30 rounded-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gold">Custody Integration</span>
                    <span className="text-xs text-gold">Layer 4</span>
                  </div>
                  <p className="text-xs text-text-muted">
                    Secure connection to physical vaulting and verification systems
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-xs text-text-faint italic text-center">
                  Architecture designed for institutional permanence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECURITY FRAMEWORK
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="section border-t border-border">
        <div className="container-institutional">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Security Framework
            </p>
            <h2 className="text-section font-display text-text-primary mb-6">
              Institutional Security Standards
            </h2>
            <p className="text-body text-text-secondary">
              Security architecture aligned with institutional requirements for
              asset protection, access control, and operational continuity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-midnight-50 border border-border rounded-sm">
              <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-display text-text-primary mb-2">Encryption</h3>
              <p className="text-sm text-text-muted">
                AES-256 encryption for data at rest, TLS 1.3 for data in transit
              </p>
            </div>

            <div className="text-center p-6 bg-midnight-50 border border-border rounded-sm">
              <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h3 className="text-lg font-display text-text-primary mb-2">Access Control</h3>
              <p className="text-sm text-text-muted">
                Multi-factor authentication, role-based permissions, audit logging
              </p>
            </div>

            <div className="text-center p-6 bg-midnight-50 border border-border rounded-sm">
              <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-display text-text-primary mb-2">Monitoring</h3>
              <p className="text-sm text-text-muted">
                24/7 security monitoring, anomaly detection, incident response
              </p>
            </div>

            <div className="text-center p-6 bg-midnight-50 border border-border rounded-sm">
              <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-display text-text-primary mb-2">Recovery</h3>
              <p className="text-sm text-text-muted">
                Disaster recovery, business continuity, geographic redundancy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CTA SECTION
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="section border-t border-border">
        <div className="container-institutional">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-section font-display text-text-primary mb-6">
              Infrastructure Built for Institutional Requirements
            </h2>
            <p className="text-body text-text-secondary mb-10">
              Schedule a technical briefing to understand how Auxite's infrastructure
              can support your institutional custody and operational requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact?type=technical-briefing" className="btn-institutional">
                Request Technical Briefing
              </a>
              <a href="/trust-governance" className="btn-institutional-outline">
                Review Governance Framework
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
