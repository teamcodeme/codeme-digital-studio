import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./Section";

const projects = [
  {
    title: "Business Landing Website",
    category: "Web Design",
    tags: ["Next.js", "SEO", "CMS"],
    color: "from-brand-cyan/30 to-brand-blue/10",
  },
  {
    title: "E-commerce Platform",
    category: "Commerce",
    tags: ["Stripe", "Inventory", "Analytics"],
    color: "from-brand-green/30 to-brand-cyan/10",
  },
  {
    title: "AI Resume Analyzer",
    category: "AI Product",
    tags: ["OpenAI", "Vector DB", "SaaS"],
    color: "from-brand-purple/30 to-brand-blue/10",
  },
  {
    title: "Company Dashboard",
    category: "Internal Tool",
    tags: ["React", "Charts", "Auth"],
    color: "from-brand-cyan/30 to-brand-green/10",
  },
  {
    title: "Automation System",
    category: "Workflow",
    tags: ["Zapier", "Webhooks", "AI"],
    color: "from-brand-blue/30 to-brand-purple/10",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Selected work"
          title={<>Projects we're <span className="text-gradient-brand">proud of</span></>}
          description="A snapshot of recent products built for startups, SMEs, and growing teams."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-surface/60 backdrop-blur transition-colors hover:border-brand-cyan/40 ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
            >
              {/* Visual area */}
              <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${p.color}`}>
                <div className="absolute inset-0 bg-grid opacity-30" />
                <ProjectMockup index={i} />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-brand-cyan">{p.category}</span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-green" />
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold">{p.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectMockup({ index }: { index: number }) {
  return (
    <div className="absolute inset-x-6 bottom-0 top-8">
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
        className="glass-strong h-full w-full rounded-t-xl border border-white/10 p-3"
      >
        <div className="flex items-center gap-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-destructive/60" />
          <div className="h-1.5 w-1.5 rounded-full bg-yellow-400/60" />
          <div className="h-1.5 w-1.5 rounded-full bg-brand-green/70" />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {Array.from({ length: 6 }).map((_, k) => (
            <div
              key={k}
              className="h-8 rounded-md border border-white/5 bg-gradient-to-br from-white/5 to-white/0"
            />
          ))}
        </div>
        <div className="mt-3 h-12 rounded-md border border-white/5 bg-gradient-to-r from-brand-cyan/15 to-brand-green/15" />
      </motion.div>
    </div>
  );
}
