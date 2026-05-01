import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Gauge, Layers3, Target, Wallet, LifeBuoy } from "lucide-react";
import { SectionHeader } from "./Section";

const reasons = [
  { icon: Sparkles, title: "Modern UI / UX", desc: "Interfaces that feel premium and convert." },
  { icon: Target, title: "SEO-First Development", desc: "Built to rank on Google from day one." },
  { icon: Layers3, title: "Scalable Architecture", desc: "Grow from 100 to 1M users without rebuilding." },
  { icon: Gauge, title: "Fast Delivery", desc: "Ship in weeks, not months — without cutting corners." },
  { icon: ShieldCheck, title: "Business-Focused Strategy", desc: "Every feature mapped to revenue or retention." },
  { icon: Wallet, title: "Affordable Packages", desc: "Premium quality at startup-friendly pricing." },
  { icon: LifeBuoy, title: "Support After Launch", desc: "We don't disappear — we keep optimizing." },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Why Team CodeMe"
          title={<>The partner serious businesses <span className="text-gradient-brand">choose to scale</span></>}
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
              className="flex items-start gap-4 rounded-2xl border border-border bg-surface/50 p-5 backdrop-blur transition-colors hover:border-brand-green/40"
            >
              <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green/20 to-brand-cyan/10 text-brand-green">
                <r.icon className="h-5 w-5" strokeWidth={1.7} />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold">{r.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
