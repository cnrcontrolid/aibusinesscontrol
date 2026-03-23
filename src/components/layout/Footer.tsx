import Link from "next/link";
import { Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream/80 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Tagline */}
        <p className="font-heading text-base text-cream/60 text-center md:text-left max-w-xs">
          Helping leaders make sense of the AI moment — practically, honestly.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-5">
          <a
            href="https://linkedin.com/in/chinmaiswamy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-cream/60 hover:text-amber-brand transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://twitter.com/chinmaiswamy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X"
            className="text-cream/60 hover:text-amber-brand transition-colors"
          >
            <Twitter size={20} />
          </a>
          <a
            href="mailto:hello@aibusinesscontrol.com"
            aria-label="Email"
            className="text-cream/60 hover:text-amber-brand transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-cream/40 font-body">
          © {year} Chinmai Swamy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
