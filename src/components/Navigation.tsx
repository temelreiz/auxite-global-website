"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

/* ═══════════════════════════════════════════════════════════════════════════
   AUXITE GLOBAL — INSTITUTIONAL NAVIGATION

   Menu Order (Psychologically Designed):
   1. Why Auxite
   2. Trust & Governance
   3. Group Structure
   4. The Auxite Standard
   5. Capital Allocation Philosophy
   6. Infrastructure
   7. Entities
   8. Partnerships
   9. Insights
   10. Contact

   ASLA YOK:
   ❌ Products
   ❌ Pricing
   ❌ Sign up
   ❌ Wallet
   ═══════════════════════════════════════════════════════════════════════════ */

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Asset Protection", href: "/asset-protection" },
  { label: "Trust & Governance", href: "/trust-governance" },
  { label: "Group Structure", href: "/group-structure" },
  { label: "Insights & Research", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Institutional Infrastructure Badge - Top Strip */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-midnight border-b border-border/50">
        <div className="container-institutional">
          <div className="flex items-center justify-center py-2">
            <span className="text-xs tracking-[0.2em] text-text-secondary uppercase">
              Institutional Infrastructure
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`fixed top-8 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-midnight/95 backdrop-blur-md border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="container-wide">
          <nav className="flex items-center justify-between py-5">
            {/* Logo */}
            <Link href="/" className="flex items-center group -my-8">
              <Image
                src="/images/auxite-logo.png"
                alt="Auxite Global"
                width={480}
                height={150}
                style={{ height: '150px', width: 'auto' }}
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden xl:flex items-center gap-1">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm whitespace-nowrap transition-colors duration-300 ${
                    pathname === item.href || (item.href === "/" && pathname === "/")
                      ? "text-gold"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Institutional Access CTA */}
            <Link
              href="/contact?type=institutional-access"
              className="hidden lg:flex items-center gap-2 bg-gold/10 border border-gold/40 hover:border-gold/70 text-gold px-5 py-2.5 text-xs font-medium tracking-wide uppercase transition-all duration-300 hover:bg-gold/15"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Institutional Access
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-30 bg-midnight transition-all duration-500 xl:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="pt-32 px-8 pb-8 h-full overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {menuItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-4 text-lg border-b border-border/30 transition-all duration-300 ${
                  pathname === item.href
                    ? "text-gold"
                    : "text-text-secondary hover:text-text-primary"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-12">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-institutional w-full justify-center"
            >
              Contact Institutional Team
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
