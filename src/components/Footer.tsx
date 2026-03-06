"use client";

import Link from "next/link";
import Image from "next/image";

/* ═══════════════════════════════════════════════════════════════════════════
   AUXITE GLOBAL — INSTITUTIONAL FOOTER
   UPGRADED: Regulatory Notice, Legal Structure, Risk Disclosure
   Private banks don't underestimate footer trust signals
   ═══════════════════════════════════════════════════════════════════════════ */

const footerLinks = {
  company: [
    { label: "About Auxite", href: "/about" },
    { label: "Trust & Governance", href: "/trust-governance" },
    { label: "Group Structure", href: "/group-structure" },
    { label: "Infrastructure", href: "/infrastructure" },
  ],
  solutions: [
    { label: "Institutional Solutions", href: "/solutions" },
    { label: "Segregated Custody", href: "/solutions#custody" },
    { label: "Structured Allocation", href: "/solutions#allocation" },
    { label: "Institutional Reporting", href: "/solutions#reporting" },
    { label: "Auxite Vault", href: "https://auxite.io" },
  ],
  resources: [
    { label: "Insights & Research", href: "/insights" },
    { label: "Contact", href: "/contact" },
    { label: "Due Diligence", href: "/contact?type=due-diligence" },
    { label: "Institutional Access", href: "/contact?type=institutional-access" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Risk Disclosure", href: "/risk-disclosure" },
    { label: "Jurisdiction Notice", href: "/jurisdiction" },
    { label: "Regulatory Framework", href: "/regulatory" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-midnight border-t border-border">
      {/* Main Footer */}
      <div className="container-institutional section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/auxite-logo.png"
                alt="Auxite Global"
                width={320}
                height={213}
                className="h-28 w-auto"
              />
            </Link>

            <p className="text-sm text-text-muted leading-relaxed mb-6">
              Global institutional infrastructure for digital precious metals.
              Governance-led architecture engineered for long-term confidence.
            </p>

            <div className="gold-line mb-6"></div>

            <p className="text-xs text-text-faint italic">
              Built for permanence.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-text-secondary mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-text-secondary mb-6">
              Solutions
            </h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-text-secondary mb-6">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-text-secondary mb-6">
              Legal & Regulatory
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          UPGRADED: Three-Column Legal Notices (Private Bank Style)
          ═══════════════════════════════════════════════════════════════════════ */}
      <div className="border-t border-border">
        <div className="container-institutional py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Regulatory Notice */}
            <div className="bg-midnight-50 border border-border rounded-sm p-5">
              <h5 className="text-xs font-medium tracking-[0.1em] uppercase text-gold mb-3 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Regulatory Notice
              </h5>
              <p className="text-xs text-text-muted leading-relaxed">
                Auxite Group entities operate under the applicable regulatory frameworks of their
                respective jurisdictions. Services availability, licensing status, and regulatory
                oversight vary by region. This website does not constitute an offer or solicitation
                in jurisdictions where such activities would be unlawful.
              </p>
            </div>

            {/* Legal Structure */}
            <div className="bg-midnight-50 border border-border rounded-sm p-5">
              <h5 className="text-xs font-medium tracking-[0.1em] uppercase text-gold mb-3 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Legal Structure
              </h5>
              <p className="text-xs text-text-muted leading-relaxed">
                Auxite Global comprises multiple independent legal entities across Hong Kong,
                Dubai, and Türkiye. Each entity maintains separate legal status and operates
                within its designated jurisdiction. No single entity is responsible for the
                obligations of other group entities.
              </p>
            </div>

            {/* Risk Disclosure */}
            <div className="bg-midnight-50 border border-border rounded-sm p-5">
              <h5 className="text-xs font-medium tracking-[0.1em] uppercase text-gold mb-3 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Risk Disclosure
              </h5>
              <p className="text-xs text-text-muted leading-relaxed">
                Precious metals investments involve market risk and are subject to price
                volatility. Past performance does not guarantee future results. Investors
                should carefully consider their investment objectives, risk tolerance, and
                financial circumstances before making any investment decisions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Trust Text - CRITICAL */}
      <div className="border-t border-border">
        <div className="container-institutional py-8">
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-xs text-text-muted leading-relaxed text-center">
              Auxite Global operates through a multi-entity structure designed to support governance clarity,
              operational specialization, and custodial independence.
            </p>
            <p className="text-xs text-text-muted leading-relaxed text-center">
              Digital representations are intended to reflect physically backed precious metals held within
              controlled environments.
            </p>
            <p className="text-xs text-text-faint leading-relaxed text-center">
              Nothing on this website constitutes investment advice or an offer to sell financial instruments.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-institutional py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-faint">
              &copy; {currentYear} Auxite Global. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <span className="text-xs text-text-faint">
                Institutional Infrastructure
              </span>
              <span className="w-1 h-1 rounded-full bg-gold/50"></span>
              <span className="text-xs text-text-faint">
                Multi-Entity Architecture
              </span>
              <span className="w-1 h-1 rounded-full bg-gold/50"></span>
              <span className="text-xs text-text-faint">
                Governance-Led
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
