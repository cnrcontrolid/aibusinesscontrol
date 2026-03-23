"use client";

import { useState, useRef } from "react";
import { CONTACT_CONTENT } from "@/lib/content";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      inquiry: (form.elements.namedItem("inquiry") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      formRef.current?.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <CheckCircle size={48} className="text-sage" />
        <h3 className="font-heading text-2xl text-charcoal font-semibold">
          Message sent!
        </h3>
        <p className="text-warmgray font-body">
          I&apos;ll be in touch soon — usually within a day or two.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-body text-amber-brand hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium font-body text-charcoal mb-2">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            className="w-full px-4 py-3 rounded-xl border border-amber-light bg-white/80 text-charcoal placeholder-warmgray/50 font-body text-sm focus:outline-none focus:border-amber-brand focus:ring-1 focus:ring-amber-brand transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium font-body text-charcoal mb-2">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className="w-full px-4 py-3 rounded-xl border border-amber-light bg-white/80 text-charcoal placeholder-warmgray/50 font-body text-sm focus:outline-none focus:border-amber-brand focus:ring-1 focus:ring-amber-brand transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="inquiry" className="block text-sm font-medium font-body text-charcoal mb-2">
          How can I help?
        </label>
        <select
          id="inquiry"
          name="inquiry"
          required
          className="w-full px-4 py-3 rounded-xl border border-amber-light bg-white/80 text-charcoal font-body text-sm focus:outline-none focus:border-amber-brand focus:ring-1 focus:ring-amber-brand transition-colors appearance-none"
        >
          <option value="">Select an option…</option>
          {CONTACT_CONTENT.inquiryTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium font-body text-charcoal mb-2">
          What are you working on?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me a bit about your situation, what you're trying to figure out, or what you'd like to explore…"
          className="w-full px-4 py-3 rounded-xl border border-amber-light bg-white/80 text-charcoal placeholder-warmgray/50 font-body text-sm focus:outline-none focus:border-amber-brand focus:ring-1 focus:ring-amber-brand transition-colors resize-none"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-600 text-sm font-body">
          <AlertCircle size={16} />
          <span>Something went wrong — please try again or email me directly.</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-amber-brand text-white font-medium font-body text-base hover:bg-amber-brand/90 transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <Send size={16} />
        {status === "loading" ? "Sending…" : "Let's talk"}
      </button>
    </form>
  );
}
