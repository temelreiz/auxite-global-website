/* ═══════════════════════════════════════════════════════════════════════════
   AUXITE GLOBAL — ASSET PROTECTION FRAMEWORK

   This page is the institutional trust cornerstone.
   Risk officers, compliance teams, and CIOs look here first.

   ❌ NEVER USE: revolutionary, cutting edge, next generation, game changing
   ✅ ALWAYS: infrastructure, structure, governance, custody, architecture
   ═══════════════════════════════════════════════════════════════════════════ */

import Link from "next/link";

export default function AssetProtectionPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="container-institutional mb-20">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8">
            <div className="gold-line"></div>
            <span className="text-xs tracking-[0.25em] uppercase text-gold font-medium">
              Structural Trust Architecture
            </span>
          </div>

          <h1 className="text-h1 font-display text-text-primary mb-6">
            Engineered for Client Asset Protection
          </h1>

          <p className="text-body-lg text-text-secondary max-w-3xl leading-relaxed mb-6">
            Auxite's infrastructure is designed around a singular principle: client assets must
            remain protected regardless of what happens to the operating entities. This is not
            a marketing promise — it is an architectural requirement.
          </p>

          {/* Structural Trust Signals */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            <div className="bg-midnight border border-gold/30 rounded-sm px-4 py-3 text-center">
              <span className="text-xs text-gold font-medium">✓ Fully Allocated</span>
            </div>
            <div className="bg-midnight border border-gold/30 rounded-sm px-4 py-3 text-center">
              <span className="text-xs text-gold font-medium">✓ Legally Segregated</span>
            </div>
            <div className="bg-midnight border border-gold/30 rounded-sm px-4 py-3 text-center">
              <span className="text-xs text-gold font-medium">✓ Bankruptcy Remote</span>
            </div>
            <div className="bg-midnight border border-gold/30 rounded-sm px-4 py-3 text-center">
              <span className="text-xs text-gold font-medium">✓ Independently Custodied</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-text-muted">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Structural Separation
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Legal Insulation
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Independent Custody
            </span>
          </div>
        </div>
      </section>

      {/* Core Framework */}
      <section className="bg-midnight-50 border-y border-border py-20 mb-20">
        <div className="container-institutional">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-display text-text-primary mb-4">
              Five Pillars of Protection
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto mb-6">
              Each pillar represents a distinct layer of structural protection
              designed to safeguard client assets.
            </p>
            {/* Critical Single Point Statement */}
            <div className="inline-block bg-midnight border border-gold/40 rounded-sm px-6 py-3">
              <p className="text-sm text-gold font-medium">
                No single entity controls governance, custody, and client assets simultaneously.
              </p>
            </div>
          </div>

          {/* Five Pillars */}
          <div className="max-w-5xl mx-auto space-y-6">
            {/* Pillar 1: Bankruptcy Remoteness */}
            <div className="card-institutional border-l-4 border-l-gold">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-display text-gold">01</span>
                </div>
                <div>
                  <h3 className="text-h4 font-display text-text-primary mb-3">
                    Bankruptcy Remoteness
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Client metals are structured to exist outside the balance sheet of operating entities.
                    In the event of corporate distress, client assets are not available to creditors of
                    the operating company.
                  </p>
                  <div className="bg-midnight/50 border border-border rounded-sm p-4">
                    <p className="text-sm text-text-muted italic">
                      "Client assets are held in trust structures and are not recorded as corporate assets
                      of the operating entities."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 2: Legal Segregation */}
            <div className="card-institutional border-l-4 border-l-gold">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-display text-gold">02</span>
                </div>
                <div>
                  <h3 className="text-h4 font-display text-text-primary mb-3">
                    Legal Segregation
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Each client allocation is identifiable and traceable within the custody framework.
                    Assets are not commingled with house positions or pooled with other client holdings
                    in ways that would compromise individual ownership claims.
                  </p>
                  <div className="bg-midnight/50 border border-border rounded-sm p-4">
                    <p className="text-sm text-text-muted italic">
                      "Allocated metals remain identifiable to each client within the custody structure."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 3: Custody Independence */}
            <div className="card-institutional border-l-4 border-l-gold">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-display text-gold">03</span>
                </div>
                <div>
                  <h3 className="text-h4 font-display text-text-primary mb-3">
                    Custody Independence
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Physical metals are held with independent third-party vault providers.
                    The operating entities do not have unilateral access to client metals
                    without proper authorization protocols.
                  </p>
                  <div className="bg-midnight/50 border border-border rounded-sm p-4">
                    <p className="text-sm text-text-muted italic">
                      "Vaulting partners operate under established security and audit protocols
                      independent of Auxite operating entities."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 4: Governance Oversight */}
            <div className="card-institutional border-l-4 border-l-gold">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-display text-gold">04</span>
                </div>
                <div>
                  <h3 className="text-h4 font-display text-text-primary mb-3">
                    Governance Oversight
                  </h3>
                  <p className="text-text-secondary mb-4">
                    No single entity or individual controls all three critical functions: governance,
                    custody, and allocation. This separation of duties is designed to prevent
                    concentration of operational risk.
                  </p>
                  <div className="bg-midnight/50 border border-border rounded-sm p-4">
                    <p className="text-sm text-text-muted italic">
                      "Multi-entity architecture ensures no single point of control over client assets."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 5: Operational Separation */}
            <div className="card-institutional border-l-4 border-l-gold">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-display text-gold">05</span>
                </div>
                <div>
                  <h3 className="text-h4 font-display text-text-primary mb-3">
                    Operational Separation
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Different functions are performed by different entities across multiple jurisdictions.
                    This geographic and legal distribution enhances operational resilience and
                    reduces single-jurisdiction risk.
                  </p>
                  <div className="bg-midnight/50 border border-border rounded-sm p-4">
                    <p className="text-sm text-text-muted italic">
                      "Hong Kong, Dubai, and Istanbul entities each serve distinct operational roles
                      within a unified governance framework."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Architecture */}
      <section className="container-institutional mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-display text-text-primary mb-4">
              Protection Architecture
            </h2>
            <p className="text-text-secondary">
              Structural separation is designed to protect client assets at every operational layer.
            </p>
          </div>

          {/* Architecture Diagram */}
          <div className="bg-midnight border border-border rounded-sm p-8">
            <div className="space-y-4">
              {/* Client Layer */}
              <div className="flex items-center gap-4">
                <div className="w-40 text-right">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-gold font-medium">Client Layer</span>
                </div>
                <div className="flex-1 bg-gold/10 border border-gold/30 rounded-sm p-4 text-center">
                  <span className="text-sm font-medium text-gold">Client Capital</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-4">
                <div className="w-40"></div>
                <div className="flex-1 flex justify-center">
                  <svg className="w-6 h-6 text-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              {/* Governance Layer */}
              <div className="flex items-center gap-4">
                <div className="w-40 text-right">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-text-muted font-medium">Governance Layer</span>
                </div>
                <div className="flex-1 bg-midnight-50 border border-border rounded-sm p-4 text-center">
                  <span className="text-sm font-medium text-text-primary">Aurum Ledger Ltd. (Hong Kong)</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-4">
                <div className="w-40"></div>
                <div className="flex-1 flex justify-center">
                  <svg className="w-6 h-6 text-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              {/* Custody Layer */}
              <div className="flex items-center gap-4">
                <div className="w-40 text-right">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-text-muted font-medium">Custody Layer</span>
                </div>
                <div className="flex-1 bg-midnight-50 border border-border rounded-sm p-4 text-center">
                  <span className="text-sm font-medium text-text-primary">Auxite Precious Metals Trading LLC (Dubai)</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-4">
                <div className="w-40"></div>
                <div className="flex-1 flex justify-center">
                  <svg className="w-6 h-6 text-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              {/* Vault Layer */}
              <div className="flex items-center gap-4">
                <div className="w-40 text-right">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-text-muted font-medium">Physical Layer</span>
                </div>
                <div className="flex-1 bg-midnight-50 border border-border rounded-sm p-4 text-center">
                  <span className="text-sm font-medium text-text-primary">Independent Third-Party Vault Infrastructure</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-4">
                <div className="w-40"></div>
                <div className="flex-1 flex justify-center">
                  <svg className="w-6 h-6 text-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              {/* Audit Layer */}
              <div className="flex items-center gap-4">
                <div className="w-40 text-right">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-emerald font-medium">Verification Layer</span>
                </div>
                <div className="flex-1 bg-emerald/10 border border-emerald/30 rounded-sm p-4 text-center">
                  <span className="text-sm font-medium text-emerald">Independent Audit & Verification</span>
                </div>
              </div>
            </div>

            {/* Diagram Legend */}
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs text-text-muted text-center">
                Precious metals are held within independent custody structures separate from operating entities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Questions Answered */}
      <section className="bg-midnight-50 border-y border-border py-20 mb-20">
        <div className="container-institutional">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-h2 font-display text-text-primary mb-4">
                Institutional Questions — Answered
              </h2>
              <p className="text-text-secondary">
                The questions risk officers and compliance teams ask first.
              </p>
            </div>

            <div className="space-y-6">
              {/* Q1 */}
              <div className="card-institutional">
                <h3 className="text-lg font-semibold text-gold mb-3">
                  "What happens to my assets if the company fails?"
                </h3>
                <p className="text-text-secondary">
                  Client metals are structured as client property, not company assets. They are designed
                  to be bankruptcy-remote and would not be available to creditors in the event of
                  operating entity distress.
                </p>
              </div>

              {/* Q2 */}
              <div className="card-institutional">
                <h3 className="text-lg font-semibold text-gold mb-3">
                  "Who actually holds the physical metal?"
                </h3>
                <p className="text-text-secondary">
                  Physical metals are held with independent third-party vault providers operating under
                  established custody and security protocols. Auxite operating entities coordinate
                  allocation but do not physically custody client metals.
                </p>
              </div>

              {/* Q3 */}
              <div className="card-institutional">
                <h3 className="text-lg font-semibold text-gold mb-3">
                  "How do I verify my allocation?"
                </h3>
                <p className="text-text-secondary">
                  Each allocation is recorded on a verifiable ledger with corresponding vault records.
                  Clients can request allocation statements and audit-ready documentation through
                  standard institutional processes.
                </p>
              </div>

              {/* Q4 */}
              <div className="card-institutional">
                <h3 className="text-lg font-semibold text-gold mb-3">
                  "What counterparty risk am I taking?"
                </h3>
                <p className="text-text-secondary">
                  The multi-entity structure is designed to minimize counterparty concentration.
                  No single entity controls governance, custody, and allocation simultaneously.
                  Client exposure is to the allocated metals themselves, not to company credit.
                </p>
              </div>

              {/* Q5 - Bankruptcy Remote */}
              <div className="card-institutional">
                <h3 className="text-lg font-semibold text-gold mb-3">
                  "Is this structure bankruptcy remote?"
                </h3>
                <p className="text-text-secondary">
                  Yes. Client metals remain outside the balance sheet of operating entities.
                  Precious metals are held within independent custody structures separate from
                  operating entities, designed to survive corporate events affecting the operator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Positioning */}
      <section className="container-institutional mb-20">
        <div className="max-w-3xl mx-auto">
          <div className="card-institutional border-l-4 border-l-emerald">
            <h3 className="text-lg font-display text-text-primary mb-4 flex items-center gap-3">
              <svg className="w-5 h-5 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Regulatory Positioning
            </h3>
            <p className="text-text-secondary mb-4">
              Auxite provides infrastructure for physically backed digital metals. The group does not
              operate as a deposit-taking institution, broker-dealer, or investment advisor.
            </p>
            <p className="text-text-muted text-sm">
              Activities are structured to align with applicable regulatory frameworks across operating
              jurisdictions. Detailed regulatory disclosures are available during institutional
              due diligence processes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-institutional">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-h3 font-display text-text-primary mb-6">
            Due Diligence Materials Available
          </h2>
          <p className="text-text-secondary mb-4">
            Institutional counterparties can request detailed documentation including custody agreements,
            governance frameworks, and audit procedures.
          </p>
          <p className="text-sm text-gold mb-8">
            Available upon qualified institutional request.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-institutional-solid">
              Contact Institutional Team
            </Link>
            <Link href="/trust-governance" className="btn-institutional">
              View Governance Framework
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
