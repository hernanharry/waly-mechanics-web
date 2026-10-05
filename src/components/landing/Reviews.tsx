import { motion } from "framer-motion";
import { ArrowUpRight, Handshake, Quote, ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/site";
import { SectionHeading, Stars } from "./shared";

const HIGHLIGHTS = [
  {
    icon: ShieldCheck,
    title: "Honestidad",
    text: "Lo que más se destaca del taller: claridad sobre el trabajo que hace falta.",
    chip: "bg-brand-soft text-brand",
  },
  {
    icon: Handshake,
    title: "Atención de Walter",
    text: "Trato directo con el dueño del taller en cada visita.",
    chip: "bg-amber-400/15 text-amber-300",
  },
];

/** Placeholders: pegar acá las reseñas reales de Google (texto + nombre). */
const REVIEW_SLOTS = ["Reseña 01", "Reseña 02", "Reseña 03"];

export function Reviews() {
  return (
    <section id="resenas" className="scroll-mt-28 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Nuestros clientes"
          title="Reseñas"
          description="Valoración real en Google, con reseñas que destacan la honestidad y la atención del dueño, Walter."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-5">
          {/* Resumen de la valoración */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-3xl glass p-6 md:p-8 lg:col-span-2"
          >
            <div className="flex items-end gap-4">
              <span className="font-display text-7xl font-extrabold leading-none text-brand">
                {SITE.ratingLabel}
              </span>
              <div className="pb-1.5">
                <Stars rating={SITE.rating} starClassName="size-5" />
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {SITE.reviewCount} reseñas en Google
                </p>
              </div>
            </div>

            <div className="my-6 h-px bg-border" />

            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Lo que destacan los clientes
            </p>
            <ul className="mt-4 space-y-3">
              {HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.title}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5"
                  >
                    <span
                      className={`mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-xl ${item.chip}`}
                    >
                      <Icon className="size-5" />
                    </span>
                    <span>
                      <span className="block font-display text-lg font-bold uppercase tracking-wide text-foreground">
                        {item.title}
                      </span>
                      <span className="block text-sm text-muted-foreground">{item.text}</span>
                    </span>
                  </li>
                );
              })}
            </ul>

            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition hover:text-white"
            >
              Ver reseñas en Google Maps
              <ArrowUpRight className="size-4" />
            </a>
          </motion.div>

          {/* Placeholders de reseñas individuales */}
          <div className="grid gap-5 sm:grid-cols-3 lg:col-span-3">
            {REVIEW_SLOTS.map((label, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease: "easeOut" }}
                className="flex flex-col rounded-3xl border-2 border-dashed border-slate-500/50 bg-white/5 p-6 backdrop-blur-md"
              >
                <Quote className="size-6 text-slate-400" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">
                  Espacio para una reseña real de Google: pegá acá el texto del cliente.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-full border border-dashed border-slate-600 bg-white/10 text-xs font-bold text-slate-400">
                    ?
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-slate-300">
                      Nombre del cliente
                    </span>
                    <Stars rating={0} starClassName="size-3.5" />
                  </span>
                </div>
                <span className="mt-4 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                  {label} · pendiente
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
