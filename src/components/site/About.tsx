import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { value: 60, suffix: "+", label: "Projects delivered" },
  { value: 40, suffix: "+", label: "Happy clients" },
  { value: 98, suffix: "%", label: "Client retention" },
  { value: 5, suffix: "x", label: "Average ROI" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(p * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <>{n}{suffix}</>;
}

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-green/30 bg-brand-green/10 px-3 py-1 text-xs font-medium text-brand-green">
              About Team CodeMe
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              A growing technology and marketing team helping businesses{" "}
              <span className="text-gradient-brand">move online and scale</span>.
            </h2>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              Team CodeMe is a modern software development and digital marketing company. We help
              startups, SMEs, and growing brands launch beautiful websites, automate operations,
              ship AI-powered tools, and generate consistent leads through SEO and performance
              marketing.
            </p>
            <p className="mt-4 text-base text-muted-foreground">
              Our promise is simple: premium quality, transparent process, and products engineered
              for long-term growth — not just a launch day.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur"
              >
                <div
                  className="absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-40 blur-2xl"
                  style={{ background: "var(--gradient-brand)" }}
                />
                <div className="relative font-display text-4xl font-bold text-gradient-brand sm:text-5xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
