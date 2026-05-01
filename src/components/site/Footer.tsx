import { Globe, Linkedin as LinkedinIcon, Twitter as TwitterIcon, Instagram as InstagramIcon, Facebook as FacebookIcon, Github as GithubIcon } from "lucide-react";
import logo from "@/assets/logo-teamcodeme.png";

export function Footer() {
  return (
    <footer className="relative border-t border-border pt-16">
      <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Team CodeMe" className="h-9 w-9 rounded-lg object-cover" />
              <span className="font-display text-lg font-bold">
                Team<span className="text-gradient-brand">CodeMe</span>
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Team CodeMe is a modern software development and digital marketing company helping
              startups, SMEs, and growing brands launch, automate, and scale online.
            </p>
            <div className="mt-6 flex gap-2">
              {[Twitter, Linkedin, Instagram, Facebook, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface/60 text-muted-foreground transition-colors hover:border-brand-cyan/40 hover:text-brand-cyan"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold">Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {["Web Development", "Web Apps", "AI Automation", "SEO", "Branding", "E-commerce"].map((l) => (
                <li key={l}><a href="#services" className="hover:text-foreground">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold">Quick links</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {[
                ["Home", "#home"],
                ["Projects", "#projects"],
                ["Process", "#process"],
                ["About", "#about"],
                ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={l}><a href={h} className="hover:text-foreground">{l}</a></li>
              ))}
            </ul>
            <div className="mt-6 text-xs text-muted-foreground">
              <div>hello@teamcodeme.com</div>
              <div>+94 70 000 0000</div>
              <div>Colombo, Sri Lanka</div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <div>© 2024 Team CodeMe. All rights reserved.</div>
          <div>Built with passion for businesses that want to grow.</div>
        </div>
      </div>
    </footer>
  );
}
