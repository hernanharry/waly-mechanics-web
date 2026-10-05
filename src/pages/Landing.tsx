import { useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { Car, Clock, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Specialties } from "@/components/landing/Specialties";
import { Gallery } from "@/components/landing/Gallery";
import { Reviews } from "@/components/landing/Reviews";
import { Contact } from "@/components/landing/Contact";
import { Stars } from "@/components/landing/shared";
import { NAV_ITEMS, SITE } from "@/lib/site";
import logo from "@/assets/logo.svg";

/* ---------------- Velocímetro (ícono del logo, en grande) ---------------- */

const CX = 160;
const CY = 175;
const R = 120;
const GAUGE_TICKS = Array.from({ length: 9 }, (_, i) => 180 - i * 22.5);

function polar(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CX + radius * Math.cos(rad), y: CY - radius * Math.sin(rad) };
}

const arcStart = polar(180, R);
const arcEnd = polar(0, R);
const arcPath = `M${arcStart.x} ${arcStart.y} A${R} ${R} 0 0 1 ${arcEnd.x} ${arcEnd.y}`;
const redlineStart = polar(30, R);
const redlinePath = `M${redlineStart.x} ${redlineStart.y} A${R} ${R} 0 0 1 ${arcEnd.x} ${arcEnd.y}`;
const needleTip = polar(52, R - 16);

function GaugeSvg() {
  return (
    <svg viewBox="0 0 320 205" className="mt-3 w-full" role="img" aria-label="Velocímetro decorativo">
      {/* pista */}
      <path d={arcPath} fill="none" stroke="#e2e8f0" strokeWidth={16} strokeLinecap="round" />
      {/* zona de límite */}
      <path d={redlinePath} fill="none" stroke="#e11d2e" strokeWidth={16} strokeLinecap="round" />
      {/* recorrido de la aguja */}
      <motion.path
        d={arcPath}
        fill="none"
        stroke="#0f172a"
        strokeWidth={16}
        strokeLinecap="round"
        opacity={0.9}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 0.72 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />
      {/* marcas */}
      <g strokeWidth={3.5} strokeLinecap="round">
        {GAUGE_TICKS.map((angle) => {
          const outer = polar(angle, 104);
          const inner = polar(angle, 89);
          return (
            <line
              key={angle}
              x1={outer.x}
              y1={outer.y}
              x2={inner.x}
              y2={inner.y}
              stroke={angle < 30 ? "#e11d2e" : "#94a3b8"}
            />
          );
        })}
      </g>
      {/* aguja */}
      <line
        x1={CX}
        y1={CY}
        x2={needleTip.x}
        y2={needleTip.y}
        stroke="#e11d2e"
        strokeWidth={7}
        strokeLinecap="round"
      />
      <circle cx={CX} cy={CY} r={13} fill="#ffffff" stroke="#e11d2e" strokeWidth={5} />
      <circle cx={CX} cy={CY} r={3.5} fill="#e11d2e" />
    </svg>
  );
}

function GaugeCard() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div
        aria-hidden
        className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] border border-white/70 bg-white/30 backdrop-blur-sm"
      />
      <div className="relative overflow-hidden rounded-[2rem] glass p-6 md:p-8">
        <div className="flex items-center justify-between font-display text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
          <span>Mecánica Waly</span>
          <span className="text-brand">Berisso</span>
        </div>

        <GaugeSvg />

        <p className="-mt-1 text-center font-display text-sm font-bold uppercase tracking-[0.35em] text-brand">
          Todas las marcas
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {["Suspensión", "Frenos", "Embrague", "Inyección"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/80 bg-white/65 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground/80"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-3 rounded-2xl border border-white/80 bg-white/65 px-4 py-3">
          <span className="flex items-center gap-2">
            <Stars rating={SITE.rating} starClassName="size-4" />
            <span className="text-sm font-semibold text-foreground">
              {SITE.ratingLabel} <span className="font-normal text-muted-foreground">en Google</span>
            </span>
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            {SITE.reviewCount} reseñas
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------- Barra de navegación ---------------------------- */

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 rounded-2xl px-3 md:px-5 glass-strong">
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={logo} alt="Mecánica Waly" className="size-9 rounded-[10px] shadow-sm" />
          <span className="font-display text-lg font-bold uppercase leading-none tracking-wide text-foreground">
            Mecánica <span className="text-brand">Waly</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 font-display text-[15px] font-semibold uppercase tracking-wide text-foreground/75 transition hover:bg-white/70 hover:text-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="hidden rounded-full px-4 font-semibold sm:inline-flex"
          >
            <a href={SITE.whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle className="size-4" />
              WhatsApp
            </a>
          </Button>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-xl border border-white/80 bg-white/70 text-foreground transition hover:bg-white md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl p-3 md:hidden glass-strong">
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 font-display text-base font-semibold uppercase tracking-wide text-foreground/80 transition hover:bg-white/70 hover:text-brand"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-2 grid gap-2 border-t border-white/70 pt-3">
            <Button asChild size="sm" className="rounded-full font-semibold">
              <a href={SITE.whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" />
                Escribir por WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="sm" className="rounded-full bg-white/70 font-semibold">
              <a href={`tel:${SITE.phoneTel}`}>
                <Phone className="size-4" />
                {SITE.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------------------------- Portada ---------------------------------- */

function Hero() {
  return (
    <section id="top" className="relative px-4 pb-14 pt-28 md:pb-24 md:pt-36">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/80 bg-white/65 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-foreground/80 backdrop-blur">
              <MapPin className="size-3.5 text-brand" />
              {SITE.city}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/80 bg-white/65 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-foreground/80 backdrop-blur">
              <Car className="size-3.5 text-brand" />
              Todas las marcas
            </span>
          </div>

          <h1 className="mt-6 font-display text-[3.4rem] font-extrabold uppercase leading-[0.86] tracking-tight text-foreground sm:text-7xl lg:text-[5.5rem]">
            Mecánica
            <br />
            <span className="text-brand">Waly</span>
          </h1>

          <p className="mt-5 max-w-xl text-xl font-semibold text-foreground md:text-2xl">
            {SITE.tagline}
          </p>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Taller especializado en suspensión, frenos, embrague e inyección electrónica.
            Atendemos todas las marcas.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full px-7 font-semibold shadow-[0_16px_34px_-14px_rgba(225,29,46,0.85)]"
            >
              <a href={SITE.whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle className="size-5" />
                Escribir por WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-full border-white/80 bg-white/65 px-7 font-semibold hover:bg-white"
            >
              <a href={`tel:${SITE.phoneTel}`}>
                <Phone className="size-5" />
                {SITE.phoneDisplay}
              </a>
            </Button>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition hover:text-foreground"
            >
              <Stars rating={SITE.rating} />
              <strong className="font-bold text-foreground">{SITE.ratingLabel}</strong>
              <span>
                en Google · {SITE.reviewCount} reseñas
              </span>
            </a>
            <span aria-hidden className="hidden h-4 w-px bg-border sm:block" />
            <span className="flex items-center gap-1.5">
              <Clock className="size-4 text-brand" />
              {SITE.hoursShort}
            </span>
          </div>
        </div>

        <GaugeCard />
      </div>
    </section>
  );
}

/* ------------------------------ Franja de servicios ------------------------------ */

const TICKER_ITEMS = [
  "Suspensión",
  "Frenos",
  "Embrague",
  "Inyección electrónica",
  "Todas las marcas",
];

function Ticker() {
  return (
    <div className="relative overflow-hidden border-y border-white/70 bg-white/50 py-3 backdrop-blur-md">
      <div className="ticker-track flex w-max items-center gap-8 whitespace-nowrap">
        {[0, 1].map((copy) =>
          TICKER_ITEMS.map((item) => (
            <span key={`${copy}-${item}`} className="flex items-center gap-8">
              <span className="font-display text-sm font-bold uppercase tracking-[0.28em] text-foreground/80 md:text-base">
                {item}
              </span>
              <span className="size-1.5 rotate-45 bg-brand" aria-hidden />
            </span>
          )),
        )}
      </div>
    </div>
  );
}

/* ------------------------------- Llamada final ------------------------------- */

function CtaBand() {
  return (
    <section className="px-4 pb-16 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-6 py-10 text-center md:px-12 md:py-14 glass-strong"
      >
        <div
          aria-hidden
          className="absolute -left-20 -top-24 size-64 rounded-full bg-brand/15 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-24 -right-16 size-64 rounded-full bg-sky-300/40 blur-3xl"
        />

        <div className="relative">
          <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-foreground md:text-5xl">
            ¿Tu auto necesita atención?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
            Escribinos por WhatsApp o llamanos: te decimos qué hay que hacer y cuándo podés
            pasar.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full px-7 font-semibold shadow-[0_16px_34px_-14px_rgba(225,29,46,0.85)]"
            >
              <a href={SITE.whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle className="size-5" />
                WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-full border-white/80 bg-white/70 px-7 font-semibold hover:bg-white"
            >
              <a href={`tel:${SITE.phoneTel}`}>
                <Phone className="size-5" />
                Llamar al {SITE.phoneDisplay}
              </a>
            </Button>
          </div>

          <p className="mt-6 font-display text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {SITE.hours} · {SITE.hoursClosed}
          </p>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------------------------------- Pie ---------------------------------- */

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/70 bg-white/55 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3 md:py-12">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="" className="size-10 rounded-[10px] shadow-sm" />
            <span className="font-display text-xl font-bold uppercase tracking-wide text-foreground">
              Mecánica <span className="text-brand">Waly</span>
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Taller mecánico especializado en suspensión, frenos, embrague e inyección
            electrónica. Atendemos todas las marcas.
          </p>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-foreground">
            Contacto
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
              {SITE.address}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-brand" />
              <a
                href={`tel:${SITE.phoneTel}`}
                className="font-semibold text-foreground transition hover:text-brand"
              >
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 size-4 shrink-0 text-brand" />
              <span>
                {SITE.hours}
                <br />
                {SITE.hoursClosed}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-foreground">
            Secciones
          </p>
          <nav className="mt-4 flex flex-col items-start gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition hover:text-brand"
              >
                {item.label}
              </a>
            ))}
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-deep"
            >
              <MessageCircle className="size-4" />
              WhatsApp
            </a>
          </nav>
        </div>
      </div>

      <div className="border-t border-white/70 py-5 text-center text-xs text-muted-foreground">
        © {year} {SITE.name} · {SITE.address}
      </div>
    </footer>
  );
}

/* ---------------------------------- Página ---------------------------------- */

export default function Landing() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen">
        {/* Fondo luminoso con manchas frías y un toque de rojo */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-[#f8fbff] via-[#eef4fb] to-[#e6eff9]">
          <div className="absolute -left-32 -top-28 size-[30rem] rounded-full bg-sky-300/45 blur-3xl" />
          <div className="absolute -right-40 top-1/3 size-[34rem] rounded-full bg-indigo-200/45 blur-3xl" />
          <div className="absolute -bottom-40 left-1/4 size-[28rem] rounded-full bg-rose-200/55 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 size-[22rem] rounded-full bg-cyan-200/45 blur-3xl" />
        </div>

        <Header />
        <Hero />

        <Ticker />

        <Specialties />
        <Gallery />
        <Reviews />
        <Contact />
        <CtaBand />

        <Footer />

        {/* Botón flotante de WhatsApp */}
        <a
          href={SITE.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Escribir por WhatsApp"
          className="fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-brand text-white shadow-[0_16px_34px_-12px_rgba(225,29,46,0.9)] ring-4 ring-white/70 transition hover:scale-105 hover:bg-brand-deep"
        >
          <MessageCircle className="size-6" />
        </a>
      </div>
    </MotionConfig>
  );
}
