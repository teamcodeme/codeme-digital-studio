import { motion } from "framer-motion";
import {
  LayoutDashboard, CalendarCheck, Users, Briefcase, FileCode, Rocket, Cpu, ArrowUpRight,
} from "lucide-react";
import { SectionHeader } from "./Section";

const items = [
  { icon: Users, title: "Client Portals", metric: "+62%", note: "client retention", trend: "up" },
  { icon: CalendarCheck, title: "Booking Systems", metric: "24/7", note: "automated bookings", trend: "up" },
  { icon: LayoutDashboard, title: "Admin Dashboards", metric: "10x", note: "faster reporting", trend: "up" },
  { icon: Briefcase, title: "CRM Systems", metric: "+38%", note: "deal velocity", trend: "up" },
  { icon: FileCode, title: "Landing Pages", metric: "5.8%", note: "avg conversion", trend: "up" },
  { icon: Rocket, title: "Marketing Funnels", metric: "3.4x", note: "ROAS uplift", trend: "up" },
  { icon: Cpu, title: "AI-Powered Tools", metric: "<1s", note: "response time", trend: "up" },
];

export function WhatWeBuild() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="What we build"
          title={<>Real products. <span className="text-gradient-brand">Real outcomes.</span></>}
          description="Every product we ship is measured against the metrics that matter — revenue, retention, and time saved."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface/80 to-surface/40 p-6 backdrop-blur"
            >
              <div className="flex items-start justify-between">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan">
                  <it.icon className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-green" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{it.title}</h3>

              <div className="mt-5 flex items-end justify-between">
                <div>
                  <div className="font-display text-3xl font-bold text-gradient-brand">{it.metric}</div>
                  <div className="text-xs text-muted-foreground">{it.note}</div>
                </div>
                <MiniChart />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MiniChart() {
  return (
    <svg viewBox="0 0 100 40" className="h-10 w-24">
      <defs>
        <linearGradient id="mini" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(0.72 0.18 220)" />
          <stop offset="100%" stopColor="oklch(0.78 0.20 155)" />
        </linearGradient>
      </defs>
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
        d="M0,32 L15,28 L30,24 L45,20 L60,14 L75,10 L100,4"
        stroke="url(#mini)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
