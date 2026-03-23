"use client";

import { useState } from "react";
import { LEAD_CAPTURE_CONTENT } from "@/lib/content";

export default function LeadCapture() {
  const { eyebrow, headline, subheadline, ctaLabel, successMessage } =
    LEAD_CAPTURE_CONTENT;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Small delay for feel — swap this for a real API call if needed
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section className="py-20 bg-[#C2692A]">
      <div className="max-w-2xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <p className="text-sm font-semibold tracking-widest uppercase text-amber-200 mb-4">
          {eyebrow}
        </p>

        {/* Headline */}
        <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-5">
          {headline}
        </h2>

        {/* Subheadline */}
        <p className="text-white/80 text-lg mb-10">{subheadline}</p>

        {submitted ? (
          <div className="bg-white/10 border border-white/20 rounded-2xl px-8 py-6">
            <p className="text-white text-xl font-semibold">{successMessage}</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              required
              placeholder="Your first name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl px-5 py-4 text-base bg-white text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-white/60"
            />
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl px-5 py-4 text-base bg-white text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-white/60"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl px-5 py-4 text-base font-semibold bg-[#1a1a1a] text-white hover:bg-black transition-colors disabled:opacity-60"
            >
              {loading ? "Sending…" : ctaLabel}
            </button>
            <p className="text-white/50 text-xs mt-1">
              No spam, ever. Unsubscribe any time.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
