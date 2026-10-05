import { useState, type ReactNode } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Muestra una foto real desde /public si existe; si el archivo todavía no está,
 * renderiza el placeholder (fallback) sin romper el layout.
 * Imágenes reales cargadas en public/photos/ con estos nombres:
 * banner-logo.png, flyer.png, interior.png, local.png, calle.png, entrada.png, logo.png
 */
export function Photo({
  src,
  alt,
  className,
  fallback,
}: {
  src: string;
  alt: string;
  className?: string;
  fallback: ReactNode;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) return <>{fallback}</>;
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

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
      {row("text-white/25")}
      <span
        className="absolute inset-y-0 left-0 overflow-hidden text-amber-400"
        style={{ width: `${percent}%` }}
      >
        {row("text-amber-400")}
      </span>
    </span>
  );
}

/** Encabezado de sección: etiqueta monoespaciada + título condensado + bajada. */
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
      <span className="inline-flex items-center gap-2 rounded-md border border-brand/40 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-brand">
        <span aria-hidden>//</span>
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
