import { TESTIMONIALS } from "@/lib/content";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Testimonial } from "@/types";

function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  return (
    <AnimatedSection delay={index * 120}>
      <div className="h-full bg-white/70 rounded-2xl p-8 border border-amber-light/40 shadow-sm hover:shadow-md transition-shadow">
        {/* Large quote mark */}
        <div className="font-heading text-6xl text-amber-brand/20 leading-none mb-2 -mt-2">
          &ldquo;
        </div>
        <p className="text-base md:text-lg text-charcoal font-body leading-relaxed mb-8">
          {t.quote}
        </p>
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="w-11 h-11 rounded-full bg-amber-brand flex items-center justify-center flex-shrink-0">
            <span className="text-white text-sm font-semibold font-body">
              {t.avatarInitials}
            </span>
          </div>
          <div>
            <p className="font-semibold text-charcoal font-body text-sm">{t.name}</p>
            <p className="text-xs text-warmgray font-body">
              {t.title}, {t.company}
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-amber-wash">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Kind Words"
            headline="From people I've had the privilege of working with."
          />
        </AnimatedSection>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.id} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
