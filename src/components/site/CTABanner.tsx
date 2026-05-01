import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CTABanner() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-border p-10 text-center sm:p-16"
          style={{
            background:
              "radial-gradient(ellipse at top left, oklch(0.72 0.18 220 / 0.35), transparent 60%), radial-gradient(ellipse at bottom right, oklch(0.78 0.20 155 / 0.3), transparent 60%), oklch(0.18 0.03 245)",
          }}
        >
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Have an idea?{" "}
              <span className="text-gradient-brand">Let's build it</span> into a powerful digital product.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Book a free consultation. We'll review your goals, suggest the best stack, and give
              you a clear roadmap — no pressure.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-green px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
                style={{ boxShadow: "var(--shadow-glow-blue)" }}
              >
                Contact Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://wa.me/0000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-green/40 bg-brand-green/10 px-6 py-3.5 text-sm font-semibold text-brand-green transition-colors hover:bg-brand-green/20"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
