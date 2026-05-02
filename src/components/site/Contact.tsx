import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./Section";
import { contactDetails } from "@/data/contact";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().min(6, "Enter a valid phone").max(30),
  business: z.string().trim().max(120).optional().or(z.literal("")),
  service: z.string().min(1, "Select a service"),
  budget: z.string().min(1, "Select a budget"),
  message: z.string().trim().min(10, "Tell us a bit more").max(1000),
});

type FormValues = z.infer<typeof schema>;

const services = [
  "Website Development",
  "Web Application",
  "Mobile App UI/UX",
  "Business Automation",
  "AI Tools / Chatbot",
  "SEO & Digital Marketing",
  "Branding",
  "E-commerce",
];

const budgets = ["Under $1,000", "$1,000 – $5,000", "$5,000 – $15,000", "$15,000+"];

export function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormValues) => {
    await new Promise((r) => setTimeout(r, 800));
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Get in touch"
          title={<>Request a <span className="text-gradient-brand">free consultation</span></>}
          description="Tell us about your project. We'll respond within one business day with ideas and next steps."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold">Let's talk</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Prefer email or WhatsApp? Reach out directly.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  { icon: Mail, label: "Email", lines: [contactDetails.email] },
                  { icon: Phone, label: "Phone / WhatsApp", lines: contactDetails.phones },
                  {
                    icon: MapPin,
                    label: "Location",
                    lines: [contactDetails.location, contactDetails.locationNote],
                  },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan">
                      <c.icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-muted-foreground">{c.label}</div>
                      <div className="mt-0.5 space-y-0.5 text-sm font-medium">
                        {c.lines.map((line) => (
                          <div key={line} className="break-words">
                            {line}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-brand-green/30 bg-brand-green/10 p-4 text-sm text-brand-green">
                ⚡ Free 30-minute consultation — no obligations.
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit(onSubmit)}
            className="glass rounded-2xl p-6 sm:p-8 lg:col-span-3"
            noValidate
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Name" error={errors.name?.message}>
                <input
                  {...register("name")}
                  className="form-input"
                  placeholder="Jane Doe"
                />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input
                  type="email"
                  {...register("email")}
                  className="form-input"
                  placeholder="you@company.com"
                />
              </Field>
              <Field label="Phone / WhatsApp" error={errors.phone?.message}>
                <input
                  {...register("phone")}
                  className="form-input"
                  placeholder="+94 ..."
                />
              </Field>
              <Field label="Business name" error={errors.business?.message}>
                <input
                  {...register("business")}
                  className="form-input"
                  placeholder="Optional"
                />
              </Field>
              <Field label="Service needed" error={errors.service?.message}>
                <select {...register("service")} className="form-input" defaultValue="">
                  <option value="" disabled>Choose a service</option>
                  {services.map((s) => <option key={s}>{s}</option>)}
                </select>
              </Field>
              <Field label="Budget range" error={errors.budget?.message}>
                <select {...register("budget")} className="form-input" defaultValue="">
                  <option value="" disabled>Select a range</option>
                  {budgets.map((b) => <option key={b}>{b}</option>)}
                </select>
              </Field>
              <div className="sm:col-span-2">
                <Field label="Message" error={errors.message?.message}>
                  <textarea
                    rows={5}
                    {...register("message")}
                    className="form-input resize-none"
                    placeholder="Tell us about your project, goals, and timeline..."
                  />
                </Field>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-green px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-60 sm:w-auto"
              style={{ boxShadow: "var(--shadow-glow-blue)" }}
            >
              {sent ? (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Message sent!
                </>
              ) : isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          background: oklch(0.20 0.03 245 / 0.6);
          border: 1px solid var(--border);
          color: var(--foreground);
          border-radius: 0.75rem;
          padding: 0.7rem 0.9rem;
          font-size: 0.875rem;
          outline: none;
          transition: all 0.2s;
        }
        .form-input:focus {
          border-color: var(--brand-cyan);
          box-shadow: 0 0 0 3px oklch(0.72 0.18 220 / 0.2);
        }
        .form-input::placeholder { color: var(--muted-foreground); }
      `}</style>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
