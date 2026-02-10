"use client";

/* ═══════════════════════════════════════════════════════════════════════════
   AUXITE GLOBAL — GROUP STRUCTURE PAGE
   Multi-entity architecture, jurisdiction breakdown, entity relationships
   ═══════════════════════════════════════════════════════════════════════════ */

export default function GroupStructurePage() {
  return (
    <div className="bg-midnight min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-20 border-b border-border">
        <div className="container-institutional">
          <div className="max-w-4xl">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
              Corporate Architecture
            </p>
            <h1 className="text-hero font-display text-text-primary mb-8">
              Multi-Entity Structure<br />
              <span className="text-gold">Designed for Permanence</span>
            </h1>
            <p className="text-body-lg text-text-secondary max-w-3xl">
              A deliberately structured group architecture separating governance,
              custody, and operations across multiple jurisdictions to ensure
              institutional resilience and regulatory clarity.
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-sm text-text-secondary">3 Operating Jurisdictions</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm text-text-secondary">Functional Separation</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-text-secondary">Global Coordination</span>
            </div>
          </div>
        </div>
      </section>

      {/* Structure Overview */}
      <section className="section">
        <div className="container-institutional">
          <div className="max-w-3xl mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Architectural Philosophy
            </p>
            <h2 className="text-section font-display text-text-primary mb-6">
              Why Multi-Entity Architecture
            </h2>
            <p className="text-body text-text-secondary">
              The multi-entity structure is not incidental—it is a deliberate
              architectural choice designed to separate critical functions,
              ensure regulatory clarity, and protect client interests through
              structural independence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="card-institutional p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-display text-text-primary mb-3">
                Risk Isolation
              </h3>
              <p className="text-sm text-text-muted">
                Operational, regulatory, and financial risks are contained
                within their respective entities, preventing contagion across
                the group structure.
              </p>
            </div>

            <div className="card-institutional p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-lg font-display text-text-primary mb-3">
                Regulatory Clarity
              </h3>
              <p className="text-sm text-text-muted">
                Each entity operates under clear regulatory frameworks
                appropriate to its function and jurisdiction, eliminating
                regulatory ambiguity.
              </p>
            </div>

            <div className="card-institutional p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-display text-text-primary mb-3">
                Operational Focus
              </h3>
              <p className="text-sm text-text-muted">
                Each entity specializes in its designated function,
                allowing for operational excellence without conflicting
                priorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Entity Details */}
      <section className="section border-t border-border">
        <div className="container-institutional">
          <div className="max-w-3xl mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Operating Entities
            </p>
            <h2 className="text-section font-display text-text-primary mb-6">
              Group Architecture
            </h2>
            <p className="text-body text-text-secondary">
              Each entity within the Auxite Group maintains independent legal
              status while operating under coordinated governance standards.
            </p>
          </div>

          <div className="space-y-8">
            {/* Hong Kong Entity */}
            <div className="bg-midnight-50 border border-border rounded-sm overflow-hidden">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-gold mb-2">
                      Governance & Strategy
                    </p>
                    <h3 className="text-2xl font-display text-text-primary">
                      Auxite Holdings Limited
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="px-3 py-1 bg-gold/10 border border-gold/30 text-xs text-gold rounded-sm">
                      Hong Kong
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <p className="text-xs text-text-faint uppercase tracking-wider mb-1">Headquarters</p>
                    <p className="text-sm text-text-secondary">Hong Kong SAR</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-faint uppercase tracking-wider mb-1">Established</p>
                    <p className="text-sm text-text-secondary">2023</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-faint uppercase tracking-wider mb-1">Function</p>
                    <p className="text-sm text-text-secondary">Group Governance</p>
                  </div>
                </div>

                <p className="text-text-muted mb-6">
                  The holding company provides strategic direction, governance oversight,
                  and coordinates group-wide policies. Hong Kong's common law framework
                  and established financial infrastructure support institutional governance
                  standards.
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-midnight border border-border text-xs text-text-muted rounded-sm">
                    Strategic Direction
                  </span>
                  <span className="px-3 py-1 bg-midnight border border-border text-xs text-text-muted rounded-sm">
                    Policy Coordination
                  </span>
                  <span className="px-3 py-1 bg-midnight border border-border text-xs text-text-muted rounded-sm">
                    Group Oversight
                  </span>
                </div>
              </div>
            </div>

            {/* Dubai Entity */}
            <div className="bg-midnight-50 border border-border rounded-sm overflow-hidden">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-gold mb-2">
                      Operations & Custody
                    </p>
                    <h3 className="text-2xl font-display text-text-primary">
                      Auxite DMCC
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="px-3 py-1 bg-gold/10 border border-gold/30 text-xs text-gold rounded-sm">
                      Dubai
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <p className="text-xs text-text-faint uppercase tracking-wider mb-1">Headquarters</p>
                    <p className="text-sm text-text-secondary">Dubai Multi Commodities Centre</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-faint uppercase tracking-wider mb-1">Established</p>
                    <p className="text-sm text-text-secondary">2023</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-faint uppercase tracking-wider mb-1">Function</p>
                    <p className="text-sm text-text-secondary">Precious Metals Operations</p>
                  </div>
                </div>

                <p className="text-text-muted mb-6">
                  The operational entity manages precious metals custody, client
                  services, and day-to-day operations. Dubai's position as a global
                  commodities hub and DMCC's specialized infrastructure provide
                  optimal conditions for precious metals operations.
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-midnight border border-border text-xs text-text-muted rounded-sm">
                    Custody Management
                  </span>
                  <span className="px-3 py-1 bg-midnight border border-border text-xs text-text-muted rounded-sm">
                    Client Services
                  </span>
                  <span className="px-3 py-1 bg-midnight border border-border text-xs text-text-muted rounded-sm">
                    Operational Execution
                  </span>
                </div>
              </div>
            </div>

            {/* Türkiye Entity */}
            <div className="bg-midnight-50 border border-border rounded-sm overflow-hidden">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-gold mb-2">
                      Technology & Development
                    </p>
                    <h3 className="text-2xl font-display text-text-primary">
                      Auxite Teknoloji A.Ş.
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="px-3 py-1 bg-gold/10 border border-gold/30 text-xs text-gold rounded-sm">
                      Türkiye
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <p className="text-xs text-text-faint uppercase tracking-wider mb-1">Headquarters</p>
                    <p className="text-sm text-text-secondary">Istanbul</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-faint uppercase tracking-wider mb-1">Established</p>
                    <p className="text-sm text-text-secondary">2024</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-faint uppercase tracking-wider mb-1">Function</p>
                    <p className="text-sm text-text-secondary">Technology Development</p>
                  </div>
                </div>

                <p className="text-text-muted mb-6">
                  The technology entity develops and maintains the digital
                  infrastructure supporting group operations. Istanbul's
                  growing technology ecosystem and engineering talent pool
                  support continuous platform development.
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-midnight border border-border text-xs text-text-muted rounded-sm">
                    Platform Development
                  </span>
                  <span className="px-3 py-1 bg-midnight border border-border text-xs text-text-muted rounded-sm">
                    Security Infrastructure
                  </span>
                  <span className="px-3 py-1 bg-midnight border border-border text-xs text-text-muted rounded-sm">
                    Integration Services
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inter-Entity Relationships */}
      <section className="section border-t border-border">
        <div className="container-institutional">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Coordination Framework
            </p>
            <h2 className="text-section font-display text-text-primary mb-6">
              Inter-Entity Relationships
            </h2>
            <p className="text-body text-text-secondary">
              While each entity maintains legal and operational independence,
              coordinated governance standards ensure consistent client experience
              and regulatory compliance across the group.
            </p>
          </div>

          <div className="bg-midnight-50 border border-border rounded-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-gold font-display text-lg font-semibold">1</span>
                </div>
                <h3 className="text-lg font-display text-text-primary mb-2">
                  Governance Standards
                </h3>
                <p className="text-sm text-text-muted">
                  Unified policies and procedures coordinated through the
                  holding company
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-gold font-display text-lg font-semibold">2</span>
                </div>
                <h3 className="text-lg font-display text-text-primary mb-2">
                  Service Agreements
                </h3>
                <p className="text-sm text-text-muted">
                  Arm's length service contracts defining inter-entity
                  relationships
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-gold font-display text-lg font-semibold">3</span>
                </div>
                <h3 className="text-lg font-display text-text-primary mb-2">
                  Independent Operations
                </h3>
                <p className="text-sm text-text-muted">
                  Each entity maintains separate management, compliance,
                  and operations
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
              Structure Built for Institutional Confidence
            </h2>
            <p className="text-body text-text-secondary mb-10">
              Request detailed documentation on group structure, entity
              relationships, and governance frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact?type=structure-inquiry" className="btn-institutional">
                Request Structure Documentation
              </a>
              <a href="/infrastructure" className="btn-institutional-outline">
                View Infrastructure Details
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
