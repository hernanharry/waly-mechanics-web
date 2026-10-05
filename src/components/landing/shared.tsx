import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

/** Estrellas con soporte de valor parcial (ej. 4,6 de 5). */
export function Stars({
  rating,
  className,
  starClassName = "size-4",
}: {
  rating: number;
  className?: string;
  starClassName?: string;
}) {
  const percent = Math.max(0, Math.min(100, (rating / 5) * 100));
  const row = (color: string) => (
    <span className="flex gap-0.5" aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className={cn(starClassName, color, "fill-current shrink-0")} />
      ))}
    </span>
  );

  return (
    <span
      className={cn("relative inline-flex align-middle", className)}
      role="img"
      aria-label={`${rating} sobre 5 estrellas`}
    >
      {row("text-slate-300")}
      <span
        className="absolute inset-y-0 left-0 overflow-hidden text-amber-400"
        style={{ width: `${percent}%` }}
      >
        {row("text-amber-400")}
      </span>
    </span>
  );
}

/** Encabezado de sección: chip + título condensado + bajada. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand-soft/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
        <span className="size-1.5 rounded-full bg-brand" />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-foreground md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
