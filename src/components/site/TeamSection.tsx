import { motion } from "framer-motion";
import { ArrowUpRight, AtSign, Building2, ExternalLink, Mail, MessageCircle, Share2 } from "lucide-react";

// TODO: Replace these with the official Team CodeMe social media URLs if different.
const teamSocialLinks = {
  linkedin: "https://www.linkedin.com/company/teamcodeme",
  facebook: "https://www.facebook.com/teamcodeme",
  instagram: "https://www.instagram.com/teamcodeme",
  tiktok: "https://www.tiktok.com/@teamcodeme",
  whatsapp: "https://wa.me/94740472228",
};

const teamMembers = [
  {
    name: "Mahdiya S",
    initials: "MS",
    role: "Founder / Contact Person",
    subtitle: "Team CodeMe",
    avatarClass: "from-emerald-500 via-cyan-500 to-slate-950",
    contacts: [
      {
        label: "Personal Email",
        value: "smahdiya.official@gmail.com",
        href: "mailto:smahdiya.official@gmail.com",
        icon: Mail,
      },
      // {
      //   label: "Business Email",
      //   value: "teamcodeme.lk@gmail.com",
      //   href: "mailto:teamcodeme.lk@gmail.com",
      //   icon: Building2,
      // },
      {
        label: "WhatsApp",
        value: "+94 740 472 228",
        href: "https://wa.me/94740472228",
        icon: MessageCircle,
        external: true,
      },
    ],
  },
  {
    name: "Abdulla",
    initials: "A",
    role: "Co-Founder / Contact Person",
    subtitle: "Team CodeMe",
    avatarClass: "from-slate-950 via-emerald-700 to-cyan-500",
    contacts: [
      {
        label: "Email",
        value: "abdullahfy28@gmail.com",
        href: "mailto:abdullahfy28@gmail.com",
        icon: Mail,
      },
      {
        label: "WhatsApp",
        value: "+94 775 206 851",
        href: "https://wa.me/94775206851",
        icon: MessageCircle,
        external: true,
      },
    ],
  },
];

const socialItems = [
  { label: "LinkedIn", href: teamSocialLinks.linkedin },
  { label: "Facebook", href: teamSocialLinks.facebook },
  { label: "Instagram", href: teamSocialLinks.instagram },
  { label: "TikTok", href: teamSocialLinks.tiktok },
  { label: "WhatsApp", href: teamSocialLinks.whatsapp },
];

export function TeamSection() {
  return (
    <section id="team" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.72_0.18_220_/_0.16),transparent_58%),radial-gradient(ellipse_at_bottom_right,oklch(0.78_0.20_155_/_0.14),transparent_55%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/40 to-transparent" />
      <div className="absolute left-1/2 top-6 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand-cyan/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-brand-green/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand-cyan">
            MEET THE TEAM
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            The people behind <span className="text-gradient-brand">Team CodeMe</span>
          </h2>
          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand-cyan to-brand-green shadow-[0_0_28px_oklch(0.72_0.18_220_/_0.45)]" />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Connect with Team CodeMe for software development, web design, automation, branding,
            and digital marketing services.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 shadow-card transition-all duration-300 hover:border-brand-cyan/40 hover:shadow-[0_26px_80px_-42px_oklch(0.72_0.18_220_/_0.8)] sm:p-8"
            >
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/70 to-transparent" />
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-brand-cyan/20 blur-3xl transition-opacity group-hover:opacity-90" />
              <div className="absolute -bottom-16 left-8 h-40 w-40 rounded-full bg-brand-green/10 blur-3xl" />

              <div className="relative flex flex-col gap-6">
                <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
                  <div
                    className={`relative flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br ${member.avatarClass} text-3xl font-bold text-white shadow-[0_22px_70px_-24px_oklch(0.72_0.18_220_/_0.95)] sm:h-28 sm:w-28 sm:text-4xl`}
                  >
                    <span className="absolute inset-0 rounded-3xl border border-brand-cyan/35" />
                    <span className="absolute inset-2 rounded-2xl bg-white/10 blur-sm" />
                    <span className="relative">{member.initials}</span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                      {member.name}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-brand-green sm:text-base">
                      {member.role}
                    </p>
                    <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      {member.subtitle}
                    </p>
                  </div>
                </div>

                <div className="grid flex-1 grid-cols-1 gap-3">
                  {member.contacts.map((contact) => (
                    <a
                      key={contact.label}
                      href={contact.href}
                      title={contact.value}
                      target={contact.external ? "_blank" : undefined}
                      rel={contact.external ? "noopener noreferrer" : undefined}
                      className="group/action flex min-w-0 items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left backdrop-blur transition-all hover:-translate-y-0.5 hover:border-brand-cyan/40 hover:bg-brand-cyan/5 hover:shadow-[0_18px_48px_-30px_oklch(0.72_0.18_220_/_0.85)] sm:px-5"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-brand-cyan/20 bg-brand-cyan/10 text-brand-cyan transition-colors group-hover/action:border-brand-green/40 group-hover/action:bg-brand-green/15 group-hover/action:text-brand-green">
                        <contact.icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                          {contact.label}
                        </span>
                        <span className="mt-1 block max-w-full truncate text-sm font-semibold text-foreground sm:text-base">
                          {contact.value}
                        </span>
                      </span>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover/action:-translate-y-0.5 group-hover/action:translate-x-0.5 group-hover/action:text-brand-green" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="glass-strong relative mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl px-5 py-6 text-center shadow-elevated sm:px-8"
        >
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-brand-green/60 to-transparent" />
          <div className="relative flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand-cyan">
            <Share2 className="h-4 w-4 text-brand-green" />
            Connect with Team CodeMe
          </div>
          <p className="relative mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
            Team CodeMe helps businesses build modern websites, software systems, automation
            workflows, branding assets, and digital marketing campaigns.
          </p>
          <div className="relative mt-5 flex flex-wrap items-center justify-center gap-3">
            {socialItems.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open Team CodeMe ${social.label}`}
                className="inline-flex min-w-30 items-center justify-center gap-2 rounded-full border border-white/10 bg-surface/60 px-4 py-2.5 text-sm font-semibold text-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:border-brand-green/40 hover:bg-brand-green/10 hover:text-brand-green"
              >
                <AtSign className="h-4 w-4" />
                {social.label}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
