/* ═══════════════════════════════════════════════════════════════════════════
   AUXITE GLOBAL — INSTITUTIONAL HOMEPAGE

   FINAL INSTITUTIONAL COPY - "These people look too serious to fail."

   ❌ NEVER USE: revolutionary, cutting edge, next generation, game changing
   ✅ ALWAYS: infrastructure, structure, governance, custody, architecture

   This is not a crypto site. This is not a fintech site.
   This is custody / asset infrastructure.
   ═══════════════════════════════════════════════════════════════════════════ */

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ═══════════════════════════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(198, 161, 91, 0.4) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-midnight to-transparent"></div>

        <div className="container-institutional relative">
          <div className="max-w-5xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-8 animate-fade-up">
              <div className="gold-line"></div>
              <span className="text-xs tracking-[0.25em] uppercase text-gold font-medium">
                Institutional Infrastructure
              </span>
            </div>

            {/* HEADLINE */}
            <h1 className="text-hero font-display text-text-primary mb-8 animate-fade-up delay-100">
              Global Institutional Infrastructure<br />
              for <span className="text-gold">Digital Precious Metals</span>
            </h1>

            {/* SUBHEADLINE */}
            <p className="text-body-lg text-text-secondary max-w-2xl mb-6 animate-fade-up delay-200 leading-relaxed">
              Built to meet institutional standards for sovereign-grade custody, structured allocation,
              and long-term capital preservation across multiple jurisdictions.
            </p>

            {/* POWER STATEMENT */}
            <p className="text-sm text-gold font-medium mb-12 animate-fade-up delay-250">
              Built for institutions prioritizing asset protection over speculation.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
              <Link href="/trust-governance" className="btn-institutional">
                View Governance
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/group-structure" className="btn-institutional-solid">
                Explore Structure
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in delay-500">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-text-faint tracking-widest uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          TRUST STRIP (Hero altına - ZORUNLU)
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-8 bg-midnight-50 border-y border-border">
        <div className="container-institutional">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-text-secondary">Fully Allocated</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-text-secondary">Bankruptcy Remote</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-text-secondary">Independent Custody</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-text-secondary">Multi-Jurisdictional Structure</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-text-secondary">Verifiable Ownership</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          POSITIONING SECTION
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="section border-b border-border">
        <div className="container-institutional">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Statement */}
            <p className="text-h3 font-display text-text-primary leading-relaxed mb-8">
              Built with{" "}
              <span className="text-gold">Structural Integrity</span>,{" "}
              <span className="text-gold">Operational Discipline</span>, and{" "}
              <span className="text-gold">Long-Term Orientation</span>.
            </p>

            {/* Body Copy */}
            <div className="space-y-6 text-text-secondary text-body-lg leading-relaxed">
              <p>
                Auxite Global delivers institutional-grade infrastructure designed for investors,
                family offices, funds, and financial partners seeking secure exposure to physically
                backed precious metals through a digitally native framework.
              </p>
              <p>
                Our architecture prioritizes transparency, legal clarity, and custodial resilience —
                ensuring capital is protected not only by technology, but by structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          GROUP STRUCTURE
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="section-lg bg-midnight-50 border-b border-border">
        <div className="container-institutional">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="gold-line"></div>
              <span className="text-xs tracking-[0.2em] uppercase text-gold">
                Multi-Entity Architecture
              </span>
              <div className="gold-line"></div>
            </div>
            <h2 className="text-h2 font-display text-text-primary mb-6">
              Group Structure
            </h2>
            <p className="text-text-secondary max-w-3xl mx-auto text-body-lg">
              A multi-entity architecture designed to separate governance, infrastructure,
              and physical metals operations — reducing counterparty risk while enhancing
              regulatory alignment.
            </p>
          </div>

          {/* Entity Cards */}
          <div className="max-w-5xl mx-auto space-y-6">
            {/* Auxite Foundation */}
            <div className="card-institutional border-l-4 border-l-gold">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-xs tracking-[0.15em] uppercase text-gold mb-2">
                    Governance Layer
                  </div>
                  <h3 className="text-h4 font-display text-text-primary">
                    Auxite Foundation
                  </h3>
                  <p className="text-sm text-text-muted mt-1">Cayman Islands</p>
                </div>
              </div>
              <p className="text-text-secondary mb-4">
                Token governance and structural oversight.
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                The Foundation safeguards protocol integrity, supervises issuance frameworks,
                and ensures that digital representations of physical metals remain aligned with
                allocation principles. Its mandate is long-term: stability, neutrality, and
                structural continuity.
              </p>
            </div>

            {/* Aurum Ledger Ltd */}
            <div className="card-institutional">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-xs tracking-[0.15em] uppercase text-gold mb-2">
                    Governance & Platform Development
                  </div>
                  <h3 className="text-h4 font-display text-text-primary">
                    Aurum Ledger Ltd.
                  </h3>
                  <p className="text-sm text-text-muted mt-1">Hong Kong</p>
                </div>
                <span className="text-2xl">🇭🇰</span>
              </div>
              <p className="text-text-secondary mb-4">
                Governance oversight, strategic direction, and digital infrastructure
                development supporting group operations.
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                Aurum Ledger provides governance and develops the technological backbone enabling
                verifiable ownership, structured allocation, and lifecycle transparency.
              </p>
            </div>

            {/* Dubai Entity */}
            <div className="card-institutional">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-xs tracking-[0.15em] uppercase text-gold mb-2">
                    Operations & Custody
                  </div>
                  <h3 className="text-h4 font-display text-text-primary">
                    Auxite Precious Metals LLC
                  </h3>
                  <p className="text-sm text-text-muted mt-1">Meydan Free Zone, Dubai</p>
                </div>
                <span className="text-2xl">🇦🇪</span>
              </div>
              <p className="text-text-secondary mb-4">
                Execution and sourcing hub for investment-grade precious metals.
              </p>
              <div className="text-sm text-text-muted leading-relaxed">
                <p className="mb-3">Responsibilities include:</p>
                <ul className="space-y-1 ml-4">
                  <li>• Institutional sourcing</li>
                  <li>• Vault coordination</li>
                  <li>• Logistics oversight</li>
                  <li>• Wholesale trading relationships</li>
                </ul>
                <p className="mt-3">
                  Dubai provides strategic access to global bullion flows and liquidity corridors.
                </p>
              </div>
            </div>

            {/* Istanbul Entity */}
            <div className="card-institutional">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-xs tracking-[0.15em] uppercase text-gold mb-2">
                    Strategic Direction
                  </div>
                  <h3 className="text-h4 font-display text-text-primary">
                    Auxite Kıymetli Metaller Ticaret A.Ş.
                  </h3>
                  <p className="text-sm text-text-muted mt-1">Istanbul, Türkiye</p>
                </div>
                <span className="text-2xl">🇹🇷</span>
              </div>
              <p className="text-text-secondary mb-4">
                Strategic direction, policy coordination, and group oversight
                across key growth markets.
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                Operates within one of the world's most historically significant precious
                metals corridors.
              </p>
            </div>
          </div>

          {/* Trust Line */}
          <div className="mt-12 text-center">
            <p className="text-sm text-text-secondary italic">
              Regulated operating environments. Structurally separated responsibilities.
              Unified governance philosophy.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <Link href="/group-structure" className="btn-institutional">
              View Full Structure
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CORE PRINCIPLES
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="section border-b border-border">
        <div className="container-institutional">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="gold-line"></div>
              <span className="text-xs tracking-[0.2em] uppercase text-gold">
                Foundation
              </span>
              <div className="gold-line"></div>
            </div>
            <h2 className="text-h2 font-display text-text-primary">
              Core Principles
            </h2>
          </div>

          {/* Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Fiduciary Discipline */}
            <div className="card-institutional">
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Fiduciary Discipline
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Capital protection is a design requirement — not a marketing promise.
              </p>
            </div>

            {/* Structural Integrity */}
            <div className="card-institutional">
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Structural Integrity
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Legal architecture is intentionally layered to enhance resilience
                and reduce operational concentration risk.
              </p>
            </div>

            {/* Custodial Independence */}
            <div className="card-institutional">
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Custodial Independence
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Physical metals are held within independent vaulting frameworks
                designed to support client asset segregation.
              </p>
            </div>

            {/* Transparency by Design */}
            <div className="card-institutional">
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Transparency by Design
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                From allocation records to lifecycle events, verifiability is
                embedded into the system architecture.
              </p>
            </div>

            {/* Operational Governance */}
            <div className="card-institutional lg:col-span-2">
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Operational Governance
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Clearly defined roles across entities ensure accountability at
                every stage of the asset lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          MULTI-JURISDICTIONAL PRESENCE
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="section bg-midnight-50 border-b border-border">
        <div className="container-institutional">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="gold-line"></div>
              <span className="text-xs tracking-[0.2em] uppercase text-gold">
                Global Presence
              </span>
              <div className="gold-line"></div>
            </div>
            <h2 className="text-h2 font-display text-text-primary mb-6">
              Multi-Jurisdictional Presence
            </h2>
            <p className="text-text-secondary max-w-3xl mx-auto text-body-lg">
              Auxite Global operates across strategically selected financial centers —
              combining regulatory access, metals liquidity, and infrastructure depth.
            </p>
            <p className="text-text-muted mt-4">
              This geographic distribution enhances operational redundancy while supporting
              global investor participation.
            </p>
          </div>

          {/* Location Cards */}
          <div className="max-w-5xl mx-auto">
            {/* Connection Line Visual */}
            <div className="hidden lg:flex items-center justify-center mb-8">
              <div className="flex items-center gap-0">
                <div className="w-4 h-4 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                </div>
                <div className="w-32 h-px bg-gradient-to-r from-gold/60 to-gold/30"></div>
                <div className="w-4 h-4 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                </div>
                <div className="w-32 h-px bg-gradient-to-r from-gold/30 to-gold/60"></div>
                <div className="w-4 h-4 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                </div>
              </div>
            </div>

            {/* Three Location Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Hong Kong */}
              <div className="card-institutional text-center group hover:border-gold/40 transition-all duration-300">
                <div className="mb-4">
                  <span className="text-4xl">🇭🇰</span>
                </div>
                <h3 className="text-xl font-display text-gold mb-2">Hong Kong</h3>
                <p className="text-xs tracking-[0.15em] uppercase text-text-muted mb-4">
                  Governance & Platform Development
                </p>
                <div className="border-t border-border pt-4 mt-4">
                  <p className="text-sm text-text-secondary font-medium">Aurum Ledger Ltd.</p>
                  <p className="text-xs text-text-faint mt-1">Est. 2025</p>
                </div>
              </div>

              {/* Dubai */}
              <div className="card-institutional text-center group hover:border-gold/40 transition-all duration-300">
                <div className="mb-4">
                  <span className="text-4xl">🇦🇪</span>
                </div>
                <h3 className="text-xl font-display text-gold mb-2">Dubai</h3>
                <p className="text-xs tracking-[0.15em] uppercase text-text-muted mb-4">
                  Operations & Custody
                </p>
                <div className="border-t border-border pt-4 mt-4">
                  <p className="text-sm text-text-secondary font-medium">Auxite Precious Metals LLC</p>
                  <p className="text-xs text-text-faint mt-1">Est. 2025</p>
                </div>
              </div>

              {/* Istanbul */}
              <div className="card-institutional text-center group hover:border-gold/40 transition-all duration-300">
                <div className="mb-4">
                  <span className="text-4xl">🇹🇷</span>
                </div>
                <h3 className="text-xl font-display text-gold mb-2">Istanbul</h3>
                <p className="text-xs tracking-[0.15em] uppercase text-text-muted mb-4">
                  Strategic Direction
                </p>
                <div className="border-t border-border pt-4 mt-4">
                  <p className="text-sm text-text-secondary font-medium">Auxite Kıymetli Metaller Ticaret A.Ş.</p>
                  <p className="text-xs text-text-faint mt-1">Est. 2024</p>
                </div>
              </div>
            </div>

            {/* Connecting Philosophy */}
            <div className="mt-10 text-center">
              <div className="inline-flex items-center gap-4 px-6 py-3 bg-midnight border border-border rounded-sm">
                <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-text-secondary">
                  Three jurisdictions. Unified governance. Distributed resilience.
                </span>
              </div>
            </div>
          </div>

          {/* Trust Line */}
          <div className="mt-10 text-center">
            <p className="text-sm text-text-secondary italic">
              Geographic diversification is a structural advantage — not an expansion strategy.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          INSTITUTIONAL ARCHITECTURE
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="section border-b border-border">
        <div className="container-institutional">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="gold-line"></div>
              <span className="text-xs tracking-[0.2em] uppercase text-gold">
                Infrastructure
              </span>
              <div className="gold-line"></div>
            </div>
            <h2 className="text-h2 font-display text-text-primary mb-6">
              Institutional Architecture
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Designed to meet the expectations of sophisticated investors
              and institutional counterparties.
            </p>
          </div>

          {/* Architecture Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card-institutional">
              <div className="w-10 h-10 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                Fully Allocated Framework
              </h3>
              <p className="text-sm text-text-muted">
                Each unit corresponds to physically backed metal held within
                controlled custody environments.
              </p>
            </div>

            <div className="card-institutional">
              <div className="w-10 h-10 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                Bankruptcy-Remote Design
              </h3>
              <p className="text-sm text-text-muted">
                Structural separation aims to insulate client assets from
                operating entity liabilities.
              </p>
            </div>

            <div className="card-institutional">
              <div className="w-10 h-10 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                Independent Custody
              </h3>
              <p className="text-sm text-text-muted">
                Vaulting partners operate under established security
                and audit protocols.
              </p>
            </div>

            <div className="card-institutional">
              <div className="w-10 h-10 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                Lifecycle Transparency
              </h3>
              <p className="text-sm text-text-muted">
                Issuance, allocation, and verification events follow
                defined procedural standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          STRUCTURAL TRUST SIGNALS
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="section bg-midnight-50 border-b border-border">
        <div className="container-institutional">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-h2 font-display text-text-primary mb-10">
              Structural Trust Signals
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              <div className="p-4 border border-border rounded-sm bg-midnight">
                <span className="text-sm text-text-secondary">Fully allocated precious metals</span>
              </div>
              <div className="p-4 border border-border rounded-sm bg-midnight">
                <span className="text-sm text-text-secondary">Independent vaulting frameworks</span>
              </div>
              <div className="p-4 border border-border rounded-sm bg-midnight">
                <span className="text-sm text-text-secondary">Multi-entity legal architecture</span>
              </div>
              <div className="p-4 border border-border rounded-sm bg-midnight">
                <span className="text-sm text-text-secondary">Verifiable ownership records</span>
              </div>
              <div className="p-4 border border-border rounded-sm bg-midnight">
                <span className="text-sm text-text-secondary">Governance-driven issuance</span>
              </div>
              <div className="p-4 border border-border rounded-sm bg-midnight">
                <span className="text-sm text-text-secondary">Operational role separation</span>
              </div>
            </div>

            <p className="text-lg text-gold font-display italic">
              Trust is engineered through structure.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          WHO WE SERVE
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="section border-b border-border">
        <div className="container-institutional">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-h2 font-display text-text-primary mb-4">
                Institutional by Design
              </h2>
              <p className="text-text-secondary">
                Auxite Global supports:
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              <div className="card-institutional text-center py-6">
                <span className="text-text-primary font-medium">Asset Managers</span>
              </div>
              <div className="card-institutional text-center py-6">
                <span className="text-text-primary font-medium">Family Offices</span>
              </div>
              <div className="card-institutional text-center py-6">
                <span className="text-text-primary font-medium">Private Wealth Platforms</span>
              </div>
              <div className="card-institutional text-center py-6">
                <span className="text-text-primary font-medium">Institutional Allocators</span>
              </div>
              <div className="card-institutional text-center py-6">
                <span className="text-text-primary font-medium">Treasury Managers</span>
              </div>
              <div className="card-institutional text-center py-6">
                <span className="text-text-primary font-medium">Strategic Partners</span>
              </div>
            </div>

            <p className="text-center text-text-muted">
              Infrastructure capable of supporting both direct allocation and integrated
              financial workflows.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CUSTODY MODEL — AT A GLANCE
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="section bg-midnight-50 border-b border-border">
        <div className="container-institutional">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="gold-line"></div>
                <span className="text-xs tracking-[0.2em] uppercase text-gold">
                  Asset Protection
                </span>
                <div className="gold-line"></div>
              </div>
              <h2 className="text-h2 font-display text-text-primary mb-4">
                Custody Model — At a Glance
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                No single operating entity controls governance, custody, and client allocation simultaneously.
              </p>
            </div>

            {/* Custody Model Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-midnight border border-border rounded-sm p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-text-primary mb-2">Independent Vault Providers</h3>
                <p className="text-xs text-text-muted">Third-party custody infrastructure</p>
              </div>

              <div className="bg-midnight border border-border rounded-sm p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-text-primary mb-2">Fully Allocated Metals</h3>
                <p className="text-xs text-text-muted">No pooled or synthetic exposure</p>
              </div>

              <div className="bg-midnight border border-border rounded-sm p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-text-primary mb-2">Legal Segregation</h3>
                <p className="text-xs text-text-muted">Client assets held separately</p>
              </div>

              <div className="bg-midnight border border-border rounded-sm p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-text-primary mb-2">Audit-Ready Structure</h3>
                <p className="text-xs text-text-muted">Designed for verification</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/asset-protection" className="btn-institutional">
                View Asset Protection Framework
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          WHO WE ARE NOT (Strategic Clarity)
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="section border-b border-border">
        <div className="container-institutional">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* What We Are NOT */}
              <div>
                <h3 className="text-lg font-display text-text-primary mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                  Auxite is NOT
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-text-muted">
                    <span className="text-red-400/60 mt-1">✕</span>
                    <span>A retail trading application</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-muted">
                    <span className="text-red-400/60 mt-1">✕</span>
                    <span>A speculative crypto issuer</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-muted">
                    <span className="text-red-400/60 mt-1">✕</span>
                    <span>A leveraged investment platform</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-muted">
                    <span className="text-red-400/60 mt-1">✕</span>
                    <span>A high-frequency trading venue</span>
                  </li>
                </ul>
              </div>

              {/* What We ARE */}
              <div>
                <h3 className="text-lg font-display text-text-primary mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                    <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Auxite IS
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-text-secondary">
                    <span className="text-gold mt-1">✓</span>
                    <span>Infrastructure for institutional precious metals</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary">
                    <span className="text-gold mt-1">✓</span>
                    <span>Governance-led and structurally separated</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary">
                    <span className="text-gold mt-1">✓</span>
                    <span>Allocation-focused with verifiable ownership</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary">
                    <span className="text-gold mt-1">✓</span>
                    <span>Long-term oriented with fiduciary discipline</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          WHAT MAKES AUXITE DIFFERENT
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="section bg-midnight-50 border-b border-border">
        <div className="container-institutional">
          <div className="max-w-3xl mx-auto text-center">
            <div className="gold-line-lg mx-auto mb-8"></div>

            <h2 className="text-h2 font-display text-text-primary mb-8">
              Built for Long-Term Confidence
            </h2>

            <div className="space-y-6 text-text-secondary text-body-lg leading-relaxed">
              <p>
                Auxite Global was not designed as a trading venue — but as a structural
                bridge between physical precious metals and modern financial infrastructure.
              </p>
              <p>
                Our approach emphasizes durability over velocity, governance over convenience,
                and clarity over complexity.
              </p>
              <p className="text-gold font-medium">
                We believe institutional adoption requires more than tokenization —
                it demands architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CTA SECTION
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="section">
        <div className="container-institutional">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-h2 font-display text-text-primary mb-6">
              Built for Institutions.<br />
              <span className="text-gold">Accessible Globally.</span>
            </h2>

            <p className="text-text-secondary text-body-lg mb-10">
              Whether you are evaluating digital metals infrastructure, seeking strategic
              partnership, or exploring allocation frameworks — our institutional team
              is available.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-institutional-solid">
                Contact Institutional Team
              </Link>
              <Link href="/infrastructure" className="btn-institutional">
                Explore Infrastructure
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
