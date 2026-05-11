import { motion } from "framer-motion";
import { ArrowRight, BarChart3, CheckCircle2, Code2, Globe2, Sparkles } from "lucide-react";
import { SectionHeader } from "./Section";

const packages = [
  {
    icon: Globe2,
    title: "Starter Digital Presence",
    description: "For small businesses that need to look professional online.",
    includes: [
      "Landing page",
      "Business email setup",
      "Google Business Profile setup",
      "Basic SEO",
      "WhatsApp/contact button",
      "Mobile responsive design",
    ],
    startingFrom: "Contact for quote",
    bestFor: "Small shops, salons, tutors, food businesses, freelancers, local services.",
    cta: "Start My Online Presence",
  },
  {
    icon: BarChart3,
    title: "Business Growth System",
    description: "For businesses that want more leads, inquiries, and customers.",
    includes: [
      "Full business website",
      "Contact/lead form",
      "WhatsApp integration",
      "SEO setup",
      "Social media profile setup",
      "Basic analytics setup",
    ],
    bestFor:
      "Growing businesses, service companies, agencies, clinics, education centers, real estate, construction, consultants.",
    startingFrom: "Contact for quote",
    cta: "Grow My Business Online",
    recommended: true,
  },
  {
    icon: Code2,
    title: "Custom Software / Automation",
    description: "For businesses that need systems to reduce manual work and operate faster.",
    includes: [
      "Web app",
      "Admin dashboard",
      "Booking system",
      "Inventory system",
      "CRM",
      "ERP module",
      "Workflow automation",
    ],
    bestFor:
      "Companies with manual Excel work, repeated admin tasks, customer tracking problems, booking issues, stock/inventory problems, or business process issues.",
    startingFrom: "Custom quotation",
    cta: "Build My Custom System",
  },
];

export function DigitalSolutionPackages() {
  return (
    <section id="packages" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Solution packages"
          title={
            <>
              Our Digital <span className="text-gradient-brand">Solution Packages</span>
            </>
          }
          description="Choose the right starting point for your business, from a polished online presence to a custom system that automates daily operations."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((pkg, i) => (
            <motion.article
              key={pkg.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className={`group relative flex min-h-full flex-col overflow-hidden rounded-2xl border p-6 backdrop-blur sm:p-7 ${
                pkg.recommended
                  ? "border-brand-cyan/45 bg-gradient-to-br from-surface/90 via-surface/70 to-brand-cyan/10 shadow-[var(--shadow-elevated)] md:-translate-y-2"
                  : "border-border bg-surface/60"
              } ${i === 2 ? "md:col-span-2 xl:col-span-1" : ""}`}
            >
              <div
                className={`absolute -right-12 -top-12 h-36 w-36 rounded-full blur-3xl transition-opacity duration-500 ${
                  pkg.recommended ? "opacity-50" : "opacity-0 group-hover:opacity-50"
                }`}
                style={{ background: "var(--gradient-brand)" }}
              />

              <div className="relative flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-gradient-to-br from-brand-cyan/20 to-brand-green/10 text-brand-cyan transition-transform group-hover:scale-110">
                    <pkg.icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  {pkg.recommended && (
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-green/30 bg-brand-green/10 px-3 py-1 text-xs font-medium text-brand-green">
                      <Sparkles className="h-3.5 w-3.5" />
                      Recommended
                    </div>
                  )}
                </div>

                <div className="mt-6">
                  <h3 className="font-display text-xl font-semibold tracking-tight">{pkg.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {pkg.description}
                  </p>
                </div>

                <div className="mt-6 rounded-xl border border-brand-cyan/25 bg-brand-cyan/10 px-4 py-3">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-cyan">
                    Starting from
                  </div>
                  <p className="mt-1 font-display text-base font-semibold text-foreground">
                    {pkg.startingFrom}
                  </p>
                </div>

                <div className="mt-7">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-cyan">
                    Includes
                  </div>
                  <ul className="mt-4 space-y-3">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                        <span className="text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 rounded-xl border border-border bg-background/25 p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Best for
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {pkg.bestFor}
                  </p>
                </div>

                <a
                  href="#contact"
                  className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-center text-sm font-semibold transition-transform hover:scale-[1.02] ${
                    pkg.recommended
                      ? "bg-gradient-to-r from-brand-cyan to-brand-green text-primary-foreground"
                      : "border border-brand-cyan/35 bg-brand-cyan/10 text-brand-cyan hover:bg-brand-cyan/15"
                  }`}
                  style={pkg.recommended ? { boxShadow: "var(--shadow-glow-blue)" } : undefined}
                >
                  {pkg.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
