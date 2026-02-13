"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

/* ═══════════════════════════════════════════════════════════════════════════
   AUXITE GLOBAL — CONTACT PAGE
   Institutional contact form, office locations
   ═══════════════════════════════════════════════════════════════════════════ */

function ContactForm() {
  const searchParams = useSearchParams();
  const inquiryType = searchParams.get("type") || "general";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    inquiryType: inquiryType,
    message: "",
  });

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "institutional-access", label: "Institutional Access" },
    { value: "institutional-inquiry", label: "Institutional Services" },
    { value: "due-diligence", label: "Due Diligence Request" },
    { value: "technical-briefing", label: "Technical Briefing" },
    { value: "governance-inquiry", label: "Governance Documentation" },
    { value: "structure-inquiry", label: "Structure Documentation" },
    { value: "research-subscription", label: "Research Access" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm text-text-secondary mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-midnight border border-border rounded-sm text-text-primary placeholder-text-faint focus:border-gold/50 focus:outline-none transition-colors"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-text-secondary mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-midnight border border-border rounded-sm text-text-primary placeholder-text-faint focus:border-gold/50 focus:outline-none transition-colors"
            placeholder="your.email@organization.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="organization" className="block text-sm text-text-secondary mb-2">
            Organization *
          </label>
          <input
            type="text"
            id="organization"
            required
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            className="w-full px-4 py-3 bg-midnight border border-border rounded-sm text-text-primary placeholder-text-faint focus:border-gold/50 focus:outline-none transition-colors"
            placeholder="Your organization"
          />
        </div>
        <div>
          <label htmlFor="role" className="block text-sm text-text-secondary mb-2">
            Role / Title
          </label>
          <input
            type="text"
            id="role"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full px-4 py-3 bg-midnight border border-border rounded-sm text-text-primary placeholder-text-faint focus:border-gold/50 focus:outline-none transition-colors"
            placeholder="Your role"
          />
        </div>
      </div>

      <div>
        <label htmlFor="inquiryType" className="block text-sm text-text-secondary mb-2">
          Inquiry Type *
        </label>
        <select
          id="inquiryType"
          required
          value={formData.inquiryType}
          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
          className="w-full px-4 py-3 bg-midnight border border-border rounded-sm text-text-primary focus:border-gold/50 focus:outline-none transition-colors"
        >
          {inquiryTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-text-secondary mb-2">
          Message *
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 bg-midnight border border-border rounded-sm text-text-primary placeholder-text-faint focus:border-gold/50 focus:outline-none transition-colors resize-none"
          placeholder="Please describe your inquiry, including any relevant context about your institutional requirements."
        />
      </div>

      <div className="pt-4">
        <button type="submit" className="btn-institutional w-full md:w-auto">
          Submit Inquiry
        </button>
        <p className="text-xs text-text-faint mt-4">
          All inquiries are reviewed by our institutional team. Response times vary
          based on inquiry type and completeness of information provided.
        </p>
      </div>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-midnight min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-20 border-b border-border">
        <div className="container-institutional">
          <div className="max-w-4xl">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
              Institutional Contact
            </p>
            <h1 className="text-hero font-display text-text-primary mb-8">
              Contact the<br />
              <span className="text-gold">Institutional Team</span>
            </h1>
            <p className="text-body-lg text-text-secondary max-w-3xl">
              For institutional inquiries, due diligence requests, and governance
              documentation. Our team is available to support qualified institutional
              investors and fiduciaries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section">
        <div className="container-institutional">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-display text-text-primary mb-8">
                Institutional Inquiry
              </h2>

              <Suspense fallback={<div className="text-text-muted">Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              <div className="bg-midnight-50 border border-border rounded-sm p-6">
                <h3 className="text-lg font-display text-text-primary mb-4">
                  Office Locations
                </h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-gold mb-2">
                      Hong Kong
                    </p>
                    <p className="text-sm text-text-muted">
                      Aurum Ledger Ltd.<br />
                      Central, Hong Kong SAR
                    </p>
                  </div>

                  <div className="border-t border-border pt-6">
                    <p className="text-xs tracking-[0.15em] uppercase text-gold mb-2">
                      Dubai
                    </p>
                    <p className="text-sm text-text-muted">
                      Auxite Precious Metals LLC<br />
                      Meydan Free Zone<br />
                      Dubai, UAE
                    </p>
                  </div>

                  <div className="border-t border-border pt-6">
                    <p className="text-xs tracking-[0.15em] uppercase text-gold mb-2">
                      Istanbul
                    </p>
                    <p className="text-sm text-text-muted">
                      Auxite Kıymetli Metaller Ticaret A.Ş.<br />
                      Istanbul, Türkiye
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-midnight-50 border border-border rounded-sm p-6">
                <h3 className="text-lg font-display text-text-primary mb-4">
                  Inquiry Types
                </h3>
                <div className="space-y-3 text-sm text-text-muted">
                  <p>
                    <span className="text-gold">Institutional Access:</span><br />
                    New client onboarding inquiries
                  </p>
                  <p>
                    <span className="text-gold">Due Diligence:</span><br />
                    Documentation requests for institutional review
                  </p>
                  <p>
                    <span className="text-gold">Technical Briefing:</span><br />
                    Infrastructure and custody deep-dives
                  </p>
                  <p>
                    <span className="text-gold">Research Access:</span><br />
                    Institutional research subscription
                  </p>
                </div>
              </div>

              <div className="bg-gold/5 border border-gold/20 rounded-sm p-6">
                <h3 className="text-lg font-display text-gold mb-3">
                  Response Times
                </h3>
                <p className="text-sm text-text-muted">
                  Institutional inquiries are typically addressed within
                  2-3 business days. Due diligence requests may require
                  additional processing time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Options */}
      <section className="section border-t border-border">
        <div className="container-institutional">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-midnight-50 border border-border rounded-sm">
              <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-display text-text-primary mb-2">
                Email
              </h3>
              <p className="text-sm text-text-muted mb-4">
                For general institutional inquiries
              </p>
              <a href="mailto:institutional@auxiteglobal.com" className="text-gold hover:underline">
                institutional@auxiteglobal.com
              </a>
            </div>

            <div className="text-center p-8 bg-midnight-50 border border-border rounded-sm">
              <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-display text-text-primary mb-2">
                Due Diligence
              </h3>
              <p className="text-sm text-text-muted mb-4">
                Documentation and compliance requests
              </p>
              <a href="mailto:compliance@auxiteglobal.com" className="text-gold hover:underline">
                compliance@auxiteglobal.com
              </a>
            </div>

            <div className="text-center p-8 bg-midnight-50 border border-border rounded-sm">
              <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-display text-text-primary mb-2">
                Secure Communications
              </h3>
              <p className="text-sm text-text-muted mb-4">
                For sensitive institutional matters
              </p>
              <span className="text-text-faint text-sm">
                Available upon request
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 border-t border-border">
        <div className="container-institutional">
          <p className="text-xs text-text-faint text-center max-w-3xl mx-auto">
            This contact form is intended for institutional investors, family offices,
            and qualified fiduciaries. All inquiries are subject to verification.
            Auxite reserves the right to decline inquiries that do not meet
            institutional qualification standards.
          </p>
        </div>
      </section>
    </div>
  );
}
