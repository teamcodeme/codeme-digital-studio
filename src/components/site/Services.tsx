import { motion } from "framer-motion";
import {
  Globe, Layers, Smartphone, Workflow, Bot, Search, Palette, ShoppingCart,
} from "lucide-react";
import { SectionHeader } from "./Section";

const services = [
  { icon: Globe, title: "Website Development", desc: "Lightning-fast, SEO-friendly websites that convert visitors into customers." },
  { icon: Layers, title: "Web Application Development", desc: "Custom web apps engineered for scale, security, and performance." },
  { icon: Smartphone, title: "Mobile App UI/UX", desc: "Beautiful, intuitive interfaces designed for iOS and Android." },
  { icon: Workflow, title: "Business Automation", desc: "Automate repetitive operations and free your team for real work." },
  { icon: Bot, title: "AI Tools & Chatbots", desc: "Intelligent assistants that engage users and qualify leads 24/7." },
  { icon: Search, title: "SEO & Digital Marketing", desc: "Rank higher, get found, and turn organic traffic into pipeline." },
  { icon: Palette, title: "Branding & Social Media", desc: "Identity systems and content that make your brand unforgettable." },
  { icon: ShoppingCart, title: "E-commerce Solutions", desc: "High-converting storefronts with payments, inventory, and analytics." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="What we do"
          title={<>Services that <span className="text-gradient-brand">power growth</span></>}
          description="From a first website to a full AI-powered product suite — we deliver everything modern businesses need to compete and win online."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur transition-colors hover:border-brand-cyan/40"
            >
              <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                style={{ background: "var(--gradient-brand)" }}
              />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-gradient-to-br from-brand-cyan/20 to-brand-green/10 text-brand-cyan transition-transform group-hover:scale-110">
                  <s.icon className="h-6 w-6" strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
