import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { HERO_CONTENT } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 px-6 overflow-hidden">
      {/* Warm gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, #FAF7F2 0%, #FDF0E0 40%, #F5DBC5 80%, #FAF7F2 100%)",
        }}
      />

      {/* Subtle background texture */}
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 30%, #C2692A15 0%, transparent 60%), radial-gradient(circle at 20% 80%, #7A9E7E10 0%, transparent 50%)",
        }}
      />

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — copy */}
          <div className="order-2 md:order-1">
            <p className="inline-block text-sm font-medium font-body uppercase tracking-widest text-amber-brand mb-6">
              {HERO_CONTENT.eyebrow}
            </p>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal leading-tight mb-6">
              {HERO_CONTENT.headline}
            </h1>

            <p className="text-lg md:text-xl text-warmgray font-body leading-relaxed mb-10 max-w-lg">
              {HERO_CONTENT.subheadline}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={HERO_CONTENT.primaryCta.href}
                className="inline-flex items-center px-7 py-3.5 rounded-full bg-amber-brand text-white font-medium font-body text-base hover:bg-amber-brand/90 transition-all hover:shadow-lg hover:shadow-amber-brand/20 hover:-translate-y-0.5"
              >
                {HERO_CONTENT.primaryCta.label}
              </Link>
              <Link
                href={HERO_CONTENT.secondaryCta.href}
                className="inline-flex items-center px-7 py-3.5 rounded-full border border-charcoal/20 text-charcoal font-medium font-body text-base hover:border-amber-brand hover:text-amber-brand transition-all"
              >
                {HERO_CONTENT.secondaryCta.label}
              </Link>
            </div>
          </div>

          {/* Right — photo placeholder */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Photo frame */}
              <div className="w-full h-full rounded-[2rem] bg-amber-light/60 border-2 border-amber-light overflow-hidden shadow-xl shadow-amber-brand/10">
                <Image
                  src="/chinmai-headshot.jpg"
                  alt="Chinmai Swamy"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Decorative dot */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-amber-brand/10 -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-sage/20 -z-10" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center">
          <Link
            href="#about"
            className="flex flex-col items-center gap-2 text-warmgray/60 hover:text-amber-brand transition-colors group"
            aria-label="Scroll down"
          >
            <span className="text-xs font-body uppercase tracking-widest">Scroll</span>
            <ArrowDown size={18} className="animate-bounce-slow group-hover:text-amber-brand" />
          </Link>
        </div>
      </div>
    </section>
  );
}
