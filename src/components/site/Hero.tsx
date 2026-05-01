import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Zap, TrendingUp, Globe2, Bot, Search } from "lucide-react";

const badges = [
  { icon: Code2, label: "Web Development" },
  { icon: Bot, label: "AI Automation" },
  { icon: Search, label: "SEO" },
  { icon: TrendingUp, label: "Digital Marketing" },
];

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-4 py-1.5 text-xs font-medium text-brand-cyan"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Premium digital products, built for growth
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            We Build Digital{" "}
            <span className="text-gradient-brand">Products</span> That Help Businesses Grow
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            Team CodeMe creates modern websites, web applications, AI automations, branding, and
            marketing solutions for businesses that want to scale faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-green px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
              style={{ boxShadow: "var(--shadow-glow-blue)" }}
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary/40 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-secondary"
            >
              View Our Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-2"
          >
            {badges.map((b) => (
              <div
                key={b.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur"
              >
                <b.icon className="h-3.5 w-3.5 text-brand-cyan" />
                {b.label}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right - 3D animated visual */}
        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
      className="relative mx-auto h-[460px] w-full max-w-[560px]"
      style={{ perspective: 1200 }}
    >
      {/* Glow halo */}
      <div className="absolute inset-0 -z-10 rounded-full opacity-60 blur-3xl"
        style={{ background: "var(--gradient-brand)" }} />

      {/* Floating orb */}
      <motion.div
        className="absolute right-6 top-2 h-24 w-24 rounded-full"
        style={{
          background: "radial-gradient(circle at 30% 30%, oklch(0.85 0.18 210), oklch(0.45 0.18 250))",
          boxShadow: "0 0 60px oklch(0.72 0.18 220 / 0.7)",
        }}
        animate={{ y: [0, -16, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main dashboard card */}
      <motion.div
        className="glass-strong absolute left-1/2 top-1/2 w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-2xl p-5 shadow-elevated"
        animate={{ rotateX: [2, -2, 2], rotateY: [-3, 3, -3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-brand-green/80" />
          </div>
          <div className="text-[10px] font-mono text-muted-foreground">teamcodeme.app</div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { label: "Revenue", value: "$48.2K", up: "+24%" },
            { label: "Users", value: "12,480", up: "+18%" },
            { label: "Convert", value: "5.4%", up: "+9%" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="rounded-xl border border-border bg-surface/70 p-3"
            >
              <div className="text-[10px] uppercase text-muted-foreground">{s.label}</div>
              <div className="mt-1 font-display text-base font-bold">{s.value}</div>
              <div className="text-[10px] text-brand-green">{s.up}</div>
            </motion.div>
          ))}
        </div>

        {/* Chart */}
        <div className="mt-4 rounded-xl border border-border bg-surface/70 p-3">
          <div className="mb-2 flex items-center justify-between">
            <div className="text-xs font-semibold">Performance</div>
            <Zap className="h-3.5 w-3.5 text-brand-green" />
          </div>
          <svg viewBox="0 0 300 90" className="h-24 w-full">
            <defs>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.78 0.20 155)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="oklch(0.78 0.20 155)" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="chartLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="oklch(0.72 0.18 220)" />
                <stop offset="100%" stopColor="oklch(0.78 0.20 155)" />
              </linearGradient>
            </defs>
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.8 }}
              d="M0,70 C30,60 50,40 80,45 C110,50 130,20 160,25 C190,30 210,55 240,40 C270,28 285,15 300,18"
              stroke="url(#chartLine)"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
              d="M0,70 C30,60 50,40 80,45 C110,50 130,20 160,25 C190,30 210,55 240,40 C270,28 285,15 300,18 L300,90 L0,90 Z"
              fill="url(#chartFill)"
            />
          </svg>
        </div>
      </motion.div>

      {/* Floating code panel */}
      <motion.div
        className="glass absolute -left-4 bottom-8 w-44 rounded-xl p-3 font-mono text-[10px] shadow-card sm:-left-8"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="text-brand-green">{"<TeamCodeMe />"}</div>
        <div className="mt-1 text-muted-foreground">
          <span className="text-brand-cyan">const</span> growth ={" "}
          <span className="text-brand-green">"10x"</span>;
        </div>
        <div className="text-muted-foreground">
          <span className="text-brand-cyan">launch</span>(<span className="text-brand-green">"now"</span>);
        </div>
      </motion.div>

      {/* Floating badge */}
      <motion.div
        className="glass absolute -right-2 bottom-20 flex items-center gap-2 rounded-xl px-3 py-2 shadow-card sm:-right-6"
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="rounded-lg bg-brand-green/20 p-1.5">
          <Globe2 className="h-4 w-4 text-brand-green" />
        </div>
        <div>
          <div className="text-[10px] text-muted-foreground">SEO Score</div>
          <div className="font-display text-sm font-bold text-brand-green">98 / 100</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
