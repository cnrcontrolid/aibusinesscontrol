import { CONTACT_CONTENT } from "@/lib/content";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactForm from "@/components/ui/ContactForm";
import { Mail, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <AnimatedSection>
            <div className="sticky top-24">
              <SectionHeader
                eyebrow={CONTACT_CONTENT.eyebrow}
                headline={CONTACT_CONTENT.headline}
                subheadline={CONTACT_CONTENT.subheadline}
                align="left"
              />

              <div className="mt-10 space-y-5">
                <div>
                  <p className="text-sm font-medium font-body text-warmgray uppercase tracking-widest mb-3">
                    Reach me directly
                  </p>
                  <a
                    href="mailto:hello@aibusinesscontrol.com"
                    className="inline-flex items-center gap-2 text-charcoal font-body hover:text-amber-brand transition-colors"
                  >
                    <Mail size={16} className="text-amber-brand" />
                    hello@aibusinesscontrol.com
                  </a>
                </div>

                <div>
                  <p className="text-sm font-medium font-body text-warmgray uppercase tracking-widest mb-3">
                    Connect
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com/in/chinmaiswamy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-charcoal font-body text-sm hover:text-amber-brand transition-colors"
                    >
                      <Linkedin size={16} className="text-amber-brand" />
                      LinkedIn
                    </a>
                    <a
                      href="https://twitter.com/chinmaiswamy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-charcoal font-body text-sm hover:text-amber-brand transition-colors"
                    >
                      <Twitter size={16} className="text-amber-brand" />
                      Twitter / X
                    </a>
                  </div>
                </div>
              </div>

              {/* Warm note */}
              <div className="mt-12 p-6 rounded-2xl bg-amber-light/40 border border-amber-light">
                <p className="text-sm text-warmgray font-body leading-relaxed">
                  I respond to every message personally. No auto-replies, no sales team. If you
                  reach out, you&apos;ll hear back from me.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — form */}
          <AnimatedSection delay={150}>
            <div className="bg-amber-wash/60 rounded-2xl p-8 border border-amber-light/60">
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
