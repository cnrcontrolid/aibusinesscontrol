import { SPEAKING_CONTENT, SPEAKING_TOPICS } from "@/lib/content";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";

const FORMAT_COLORS: Record<string, string> = {
  Keynote: "bg-amber-light text-amber-brand",
  Workshop: "bg-sage/20 text-sage",
  Panel: "bg-amber-light/60 text-warmgray",
  "Fireside Chat": "bg-charcoal/5 text-charcoal",
};

export default function Speaking() {
  return (
    <section id="speaking" className="py-24 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            eyebrow={SPEAKING_CONTENT.eyebrow}
            headline={SPEAKING_CONTENT.headline}
            subheadline={SPEAKING_CONTENT.subheadline}
          />
        </AnimatedSection>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {SPEAKING_TOPICS.map((topic, i) => (
            <AnimatedSection key={topic.id} delay={i * 100}>
              <div className="h-full bg-cream border border-amber-light/60 rounded-2xl p-8 hover:border-amber-brand/40 hover:shadow-lg hover:shadow-amber-brand/5 hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex flex-wrap gap-2 mb-5">
                  {topic.formats.map((fmt) => (
                    <span
                      key={fmt}
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium font-body ${FORMAT_COLORS[fmt] ?? "bg-amber-light text-amber-brand"}`}
                    >
                      {fmt}
                    </span>
                  ))}
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  {topic.title}
                </h3>
                <p className="text-base text-warmgray font-body leading-relaxed">
                  {topic.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={300}>
          <div className="mt-14 text-center">
            <p className="text-warmgray font-body mb-5">
              Interested in having me speak at your event or conference?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-7 py-3.5 rounded-full bg-charcoal text-cream font-medium font-body text-base hover:bg-charcoal/90 transition-all hover:-translate-y-0.5"
            >
              Send a speaking inquiry
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
