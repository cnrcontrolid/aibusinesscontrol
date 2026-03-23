import { Compass, BookOpen, Users } from "lucide-react";
import { SERVICES } from "@/lib/content";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Service } from "@/types";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Compass,
  BookOpen,
  Users,
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = ICON_MAP[service.icon] ?? Compass;

  return (
    <AnimatedSection delay={index * 120}>
      <div className="group h-full bg-cream border border-amber-light/60 rounded-2xl p-8 hover:border-amber-brand/40 hover:shadow-xl hover:shadow-amber-brand/5 hover:-translate-y-1 transition-all duration-300">
        <div className="w-12 h-12 rounded-xl bg-amber-light flex items-center justify-center mb-6 group-hover:bg-amber-brand/10 transition-colors">
          <Icon size={22} className="text-amber-brand" />
        </div>
        <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
          {service.title}
        </h3>
        <p className="text-base text-warmgray font-body leading-relaxed">
          {service.description}
        </p>
        {service.ctaLabel && (
          <a
            href="#contact"
            className="inline-flex items-center mt-6 text-sm font-medium font-body text-amber-brand hover:text-charcoal transition-colors"
          >
            {service.ctaLabel} →
          </a>
        )}
      </div>
    </AnimatedSection>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-amber-wash/40">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            eyebrow="What I Do"
            headline="Where I can help."
            subheadline="I work with leadership teams and organizations at all stages of the AI journey — from those just getting started to those ready to scale."
          />
        </AnimatedSection>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
