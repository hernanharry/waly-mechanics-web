import { MessageCircle } from "lucide-react";
import { Photo } from "./shared";
import { SITE } from "@/lib/site";

/* --------------------------- Gráficas del banner --------------------------- */

function Speedometer({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <circle cx="60" cy="66" r="54" fill="#0d0d10" stroke="rgba(255,255,255,0.14)" strokeWidth="2" />
      <path d="M16 66 A44 44 0 0 1 88.3 32.3" fill="none" stroke="#e2e8f0" strokeWidth="10" strokeLinecap="round" />
      <path d="M98.1 44 A44 44 0 0 1 104 66" fill="none" stroke="#ef4444" strokeWidth="10" strokeLinecap="round" />
      <g stroke="#94a3b8" strokeWidth="3" strokeLinecap="round">
        <line x1="24" y1="66" x2="30" y2="66" />
        <line x1="31" y1="45" x2="36" y2="49" />
        <line x1="60" y1="22" x2="60" y2="28" />
        <line x1="89" y1="45" x2="84" y2="49" />
      </g>
      <line x1="60" y1="66" x2="86" y2="40" stroke="#ef4444" strokeWidth="6" strokeLinecap="round" />
      <circle cx="60" cy="66" r="9" fill="#f8fafc" stroke="#ef4444" strokeWidth="4" />
    </svg>
  );
}

function Swoosh({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 62" className={className} aria-hidden preserveAspectRatio="none">
      <path
        d="M6 48 C 70 8 172 4 252 24"
        fill="none"
        stroke="#ef4444"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M34 56 C 100 34 178 30 248 40"
        fill="none"
        stroke="#f8fafc"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path d="M238 14 L258 24 L240 36 Z" fill="#ef4444" />
    </svg>
  );
}

/* ---------------------------- Banner horizontal ---------------------------- */

function BannerRecreation() {
  return (
    <div className="relative flex w-full items-center gap-5 overflow-hidden rounded-[2rem] border border-white/12 bg-[#08080b] px-6 py-7 md:gap-8 md:px-10">
      <div
        aria-hidden
        className="absolute -right-16 -top-20 size-64 rounded-full bg-[#ef3b46]/25 blur-3xl"
      />
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.06),transparent_55%)]" />

      <Speedometer className="relative size-24 shrink-0 md:size-32" />

      <div className="relative min-w-0 flex-1">
        <Swoosh className="mb-2 hidden h-10 w-full max-w-lg md:block" />
        <p className="font-display text-4xl font-extrabold uppercase leading-none tracking-tight text-white md:text-6xl">
          Mecánica <span className="text-[#ff3b45]">Waly</span>
        </p>
        <div className="mt-3 h-px w-full max-w-lg bg-white/15" />
        <p className="mt-3 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-white/70 md:text-xs">
          Suspensión <span className="text-[#ff3b45]">·</span> Frenos{" "}
          <span className="text-[#ff3b45]">·</span> Embrague{" "}
          <span className="text-[#ff3b45]">·</span> Inyección electrónica
        </p>
      </div>
    </div>
  );
}

export function BrandBanner() {
  return (
    <section aria-label="Banner de Mecánica Waly" className="px-4 pb-4 md:pb-6">
      <div className="mx-auto max-w-6xl">
        <Photo
          src="photos/banner-logo.jpg"
          alt="Banner de Mecánica Waly: velocímetro y servicios del taller"
          className="w-full rounded-[2rem] border border-white/12 object-cover"
          fallback={<BannerRecreation />}
        />
      </div>
    </section>
  );
}

/* ------------------------------ Afiche vertical ------------------------------ */

function PosterRecreation() {
  return (
    <div className="relative w-full max-w-[300px] overflow-hidden rounded-[1.75rem] border border-white/12 bg-[linear-gradient(180deg,#141419_0%,#050507_100%)] px-6 py-7 text-center">
      <div
        aria-hidden
        className="absolute -right-14 -top-16 size-44 rounded-full bg-[#ef3b46]/25 blur-3xl"
      />

      <div className="relative flex justify-center">
        <Speedometer className="size-24" />
      </div>
      <Swoosh className="relative mx-auto mt-1 h-8 w-40" />

      <p className="relative mt-3 font-display text-4xl font-extrabold uppercase leading-none tracking-tight text-white">
        Mecánica
      </p>
      <p className="relative font-display text-5xl font-extrabold uppercase leading-none tracking-tight text-[#ff3b45]">
        Waly
      </p>

      <div className="relative mx-auto mt-4 h-0.5 w-24 bg-[#ff3b45]" />

      <p className="relative mt-4 font-display text-xl font-bold uppercase tracking-wide text-white">
        Atendemos todas las marcas
      </p>

      <ul className="relative mt-3 space-y-1 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-white/75">
        <li>
          Suspensión <span className="text-[#ff3b45]">·</span> Frenos
        </li>
        <li>
          Embrague <span className="text-[#ff3b45]">·</span> Distribución
        </li>
        <li>Mecánica en general</li>
      </ul>

      <div className="relative mt-5 flex items-center justify-center gap-2 text-[#ff3b45]">
        <MessageCircle className="size-5" />
        <span className="font-mono text-2xl font-bold tracking-tight">{SITE.phoneDisplay}</span>
      </div>
    </div>
  );
}

export function FlyerPoster() {
  return (
    <Photo
      src="photos/flyer.jpg"
      alt="Afiche de Mecánica Waly con servicios y teléfono"
      className="w-full max-w-[300px] rounded-[1.75rem] border border-white/12 object-cover"
      fallback={<PosterRecreation />}
    />
  );
}
