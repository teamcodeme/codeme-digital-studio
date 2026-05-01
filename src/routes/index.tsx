import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground } from "@/components/site/AnimatedBackground";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhatWeBuild } from "@/components/site/WhatWeBuild";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Process } from "@/components/site/Process";
import { Projects } from "@/components/site/Projects";
import { About } from "@/components/site/About";
import { CTABanner } from "@/components/site/CTABanner";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Team CodeMe — Software Development & Digital Marketing Company in Sri Lanka",
      },
      {
        name: "description",
        content:
          "Team CodeMe builds modern websites, custom web applications, AI automation, SEO-friendly websites, and digital marketing campaigns for startups and growing businesses in Sri Lanka.",
      },
      {
        name: "keywords",
        content:
          "software development company Sri Lanka, website development services, custom web application development, digital marketing services, SEO-friendly websites, AI automation solutions, business automation systems, startup technology solutions, Team CodeMe software company",
      },
      { property: "og:title", content: "Team CodeMe — Premium Software & Digital Marketing" },
      {
        property: "og:description",
        content:
          "We build websites, web apps, AI tools, and marketing campaigns that help businesses scale.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Team CodeMe",
          url: "https://teamcodeme.com",
          description:
            "Modern software development and digital marketing company building websites, web apps, AI tools, and marketing systems.",
          areaServed: "Worldwide",
          address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <Services />
      <WhatWeBuild />
      <WhyChooseUs />
      <Process />
      <Projects />
      <About />
      <CTABanner />
      <Contact />
      <Footer />
    </main>
  );
}
