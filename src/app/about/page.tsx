"use client";

/* ═══════════════════════════════════════════════════════════════════════════
   AUXITE GLOBAL — ABOUT PAGE
   Company story, mission, leadership philosophy
   ═══════════════════════════════════════════════════════════════════════════ */

export default function AboutPage() {
  return (
    <div className="bg-midnight min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-20 border-b border-border">
        <div className="container-institutional">
          <div className="max-w-4xl">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
              About Auxite
            </p>
            <h1 className="text-hero font-display text-text-primary mb-8">
              Building Infrastructure<br />
              <span className="text-gold">for Permanence</span>
            </h1>
            <p className="text-body-lg text-text-secondary max-w-3xl">
              Auxite was founded on a simple premise: institutional precious metals
              infrastructure should be built for permanence, not convenience.
              Every structural decision reflects this foundational principle.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container-institutional">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Our Mission
              </p>
              <h2 className="text-section font-display text-text-primary mb-6">
                Why We Exist
              </h2>
              <p className="text-body text-text-secondary mb-6">
                Precious metals have served as stores of value for millennia.
                Yet institutional-grade infrastructure for precious metals custody
                and allocation remains fragmented, often prioritizing operational
                convenience over structural integrity.
              </p>
              <p className="text-body text-text-secondary mb-6">
                Auxite exists to provide institutional investors with infrastructure
                that matches the permanence of the assets it supports. Our
                multi-entity architecture, segregated custody framework, and
                governance-led approach reflect this commitment.
              </p>
              <p className="text-body text-text-secondary">
                We don't optimize for growth. We optimize for trust.
              </p>
            </div>

            <div className="bg-midnight-50 border border-border rounded-sm p-8">
              <h3 className="text-lg font-display text-text-primary mb-6">
                Foundational Principles
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-display text-sm font-semibold">1</span>
                  </div>
                  <div>
                    <h4 className="text-text-primary font-medium mb-1">Structure Over Speed</h4>
                    <p className="text-sm text-text-muted">
                      We prioritize structural integrity over operational convenience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-display text-sm font-semibold">2</span>
                  </div>
                  <div>
                    <h4 className="text-text-primary font-medium mb-1">Governance First</h4>
                    <p className="text-sm text-text-muted">
                      Every decision is evaluated through the lens of fiduciary responsibility.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-display text-sm font-semibold">3</span>
                  </div>
                  <div>
                    <h4 className="text-text-primary font-medium mb-1">Transparency Always</h4>
                    <p className="text-sm text-text-muted">
                      Clear reporting, verifiable custody, and accessible documentation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-display text-sm font-semibold">4</span>
                  </div>
                  <div>
                    <h4 className="text-text-primary font-medium mb-1">Long-Term Orientation</h4>
                    <p className="text-sm text-text-muted">
                      Built for decades, not quarters.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section border-t border-border">
        <div className="container-institutional">
          <div className="max-w-3xl mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Our Philosophy
            </p>
            <h2 className="text-section font-display text-text-primary mb-6">
              What We Believe
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-institutional p-8">
              <h3 className="text-xl font-display text-text-primary mb-4">
                Trust is Structural
              </h3>
              <p className="text-text-muted">
                Trust cannot be claimed—it must be built through structure.
                Our multi-entity architecture, segregated custody, and
                independent oversight create the conditions for trust to emerge
                organically from verifiable practices.
              </p>
            </div>

            <div className="card-institutional p-8">
              <h3 className="text-xl font-display text-text-primary mb-4">
                Complexity Serves Clarity
              </h3>
              <p className="text-text-muted">
                Our multi-jurisdictional structure may appear complex, but it
                serves a simple purpose: clear separation of governance, custody,
                and operations. Complexity in structure creates simplicity in
                accountability.
              </p>
            </div>

            <div className="card-institutional p-8">
              <h3 className="text-xl font-display text-text-primary mb-4">
                Permanence Over Performance
              </h3>
              <p className="text-text-muted">
                We don't optimize for short-term metrics or rapid growth.
                Our infrastructure is designed to function reliably across
                market cycles, regulatory changes, and generational transitions.
              </p>
            </div>

            <div className="card-institutional p-8">
              <h3 className="text-xl font-display text-text-primary mb-4">
                Independence Ensures Integrity
              </h3>
              <p className="text-text-muted">
                Each entity, function, and oversight mechanism maintains
                independence. This structural independence prevents conflicts
                of interest and ensures that client interests remain primary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline / History */}
      <section className="section border-t border-border">
        <div className="container-institutional">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Our Journey
              </p>
              <h2 className="text-section font-display text-text-primary mb-6">
                Building Foundations
              </h2>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                    <span className="text-gold font-display text-sm font-semibold">2023</span>
                  </div>
                  <div className="w-px h-full bg-border"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-display text-text-primary mb-2">
                    Foundation
                  </h3>
                  <p className="text-text-muted">
                    Establishment of Auxite Holdings Limited in Hong Kong as the
                    group governance entity. Initial framework development for
                    multi-entity architecture.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                    <span className="text-gold font-display text-sm font-semibold">2023</span>
                  </div>
                  <div className="w-px h-full bg-border"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-display text-text-primary mb-2">
                    Operations Launch
                  </h3>
                  <p className="text-text-muted">
                    Establishment of Auxite DMCC in Dubai Multi Commodities Centre.
                    Custody infrastructure development and vaulting partnerships.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                    <span className="text-gold font-display text-sm font-semibold">2024</span>
                  </div>
                  <div className="w-px h-full bg-border"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-display text-text-primary mb-2">
                    Technology Development
                  </h3>
                  <p className="text-text-muted">
                    Establishment of Auxite Teknoloji A.Ş. in Istanbul.
                    Platform development and security infrastructure deployment.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gold border border-gold flex items-center justify-center">
                    <span className="text-midnight font-display text-sm font-semibold">Now</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-display text-text-primary mb-2">
                    Institutional Operations
                  </h3>
                  <p className="text-text-muted">
                    Full institutional infrastructure operational. Serving
                    family offices, institutional investors, and fiduciaries
                    across multiple jurisdictions.
                  </p>
                </div>
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
              Built for Long-Term Confidence
            </h2>
            <p className="text-body text-text-secondary mb-10">
              Discover how Auxite's institutional infrastructure can support
              your precious metals allocation requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-institutional">
                Contact Institutional Team
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
