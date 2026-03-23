import { ABOUT_CONTENT } from "@/lib/content";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — photo + pull quote */}
          <AnimatedSection>
            <div className="sticky top-24">
              {/* Speaking photo placeholder */}
              <div className="w-full aspect-[4/5] rounded-2xl bg-amber-light/40 border border-amber-light overflow-hidden mb-8 shadow-lg">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-warmgray/60 px-8">
                    <p className="text-sm font-body">
                      Add speaking photo to
                      <br />
                      <code className="text-xs bg-amber-light/50 px-2 py-0.5 rounded">
                        public/chinmai-speaking.jpg
                      </code>
                    </p>
                  </div>
                </div>
              </div>

              {/* Pull quote */}
              <blockquote className="relative pl-6 border-l-4 border-amber-brand">
                <p className="font-heading text-xl text-charcoal leading-relaxed italic">
                  &ldquo;{ABOUT_CONTENT.pullQuote}&rdquo;
                </p>
                <footer className="mt-3 text-sm font-body text-warmgray">
                  — Chinmai Swamy
                </footer>
              </blockquote>
            </div>
          </AnimatedSection>

          {/* Right — text content */}
          <div>
            <AnimatedSection delay={100}>
              <SectionHeader
                eyebrow={ABOUT_CONTENT.eyebrow}
                headline={ABOUT_CONTENT.headline}
                align="left"
              />
            </AnimatedSection>

            <div className="mt-8 space-y-5">
              {ABOUT_CONTENT.paragraphs.map((para, i) => (
                <AnimatedSection key={i} delay={150 + i * 80}>
                  <p className="text-base md:text-lg text-warmgray font-body leading-relaxed">
                    {para}
                  </p>
                </AnimatedSection>
              ))}
            </div>

            {/* Stats bar */}
            <AnimatedSection delay={400}>
              <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-amber-light/60">
                {ABOUT_CONTENT.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-heading text-3xl font-bold text-amber-brand">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs font-body text-warmgray uppercase tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
