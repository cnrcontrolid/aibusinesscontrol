import clsx from "clsx";

interface SectionHeaderProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  headline,
  subheadline,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={clsx("max-w-2xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      {eyebrow && (
        <p
          className={clsx(
            "text-sm font-medium font-body uppercase tracking-widest mb-3",
            light ? "text-amber-light" : "text-amber-brand"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          "font-heading text-3xl md:text-4xl font-semibold leading-tight mb-4",
          light ? "text-cream" : "text-charcoal"
        )}
      >
        {headline}
      </h2>
      {subheadline && (
        <p
          className={clsx(
            "text-lg leading-relaxed font-body",
            light ? "text-cream/70" : "text-warmgray"
          )}
        >
          {subheadline}
        </p>
      )}
    </div>
  );
}
