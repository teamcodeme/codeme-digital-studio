import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/logo-teamcodeme.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
            scrolled ? "glass-strong shadow-elevated" : "bg-transparent"
          }`}
        >
          <a href="#home" className="flex items-center gap-2">
            <img src={logo} alt="Team CodeMe logo" className="h-9 w-9 rounded-lg object-cover" />
            <span className="font-display text-lg font-bold tracking-tight">
              Team<span className="text-gradient-brand">CodeMe</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-green px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow-blue transition-transform hover:scale-105"
              style={{ boxShadow: "var(--shadow-glow-blue)" }}
            >
              Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
            className="rounded-lg p-2 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="glass-strong mt-2 rounded-2xl p-4 lg:hidden"
            >
              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-4 py-3 text-sm text-foreground/90 hover:bg-secondary/60"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li className="mt-2">
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-green px-5 py-3 text-sm font-semibold text-primary-foreground"
                  >
                    Free Consultation <ArrowRight className="h-4 w-4" />
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
