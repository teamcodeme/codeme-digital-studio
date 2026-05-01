import { motion } from "framer-motion";
import { Compass, ClipboardList, Palette, Code2, Rocket, RefreshCcw } from "lucide-react";
import { SectionHeader } from "./Section";

const steps = [
  { icon: Compass, title: "Discover", desc: "We learn your business goals, audience, and success metrics." },
  { icon: ClipboardList, title: "Plan", desc: "Information architecture, user flows, and a delivery roadmap." },
  { icon: Palette, title: "Design", desc: "Premium UI/UX prototypes ready for stakeholder sign-off." },
  { icon: Code2, title: "Develop", desc: "Clean, scalable code with rigorous QA and testing." },
  { icon: Rocket, title: "Launch", desc: "Production deploy with SEO, analytics, and performance tuning." },
  { icon: RefreshCcw, title: "Support", desc: "Ongoing improvements, feature releases, and technical care." },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="How we work"
          title={<>A proven <span className="text-gradient-brand">six-step process</span></>}
          description="Transparent, predictable, and built to ship — with you involved at every stage."
        />

        <div className="relative mt-20">
          {/* Connector line */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px lg:block"
            style={{ background: "linear-gradient(to right, transparent, oklch(0.72 0.18 220 / 0.5), oklch(0.78 0.20 155 / 0.5), transparent)" }}
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative text-center"
              >
                <div className="relative mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-cyan/30 bg-surface text-brand-cyan shadow-glow-blue">
                  <s.icon className="h-6 w-6" strokeWidth={1.7} />
                  <span className="absolute -right-2 -top-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-green text-[10px] font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
