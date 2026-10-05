import { motion } from "framer-motion";
import { Camera, MapPin } from "lucide-react";
import { Photo, SectionHeading } from "./shared";
import { SITE } from "@/lib/site";

/**
 * Fotos reales del taller cargadas en public/photos/:
 *   interior.png, local.png, calle.png, entrada.png
 * Si algún archivo falta, se muestra el placeholder hasta que lo cargues.
 */
type Slot = {
  label: string;
  hint: string;
  src?: string;
  feature?: boolean;
  /** Ocupa las 2 columnas en mobile (foto panorámica). */
  wide?: boolean;
};

const SLOTS: Slot[] = [
  { label: "Interior", hint: "Bahías de servicio", src: "photos/interior.png", feature: true },
  { label: "Frente", hint: "Local con cartel", src: "photos/local.png" },
  { label: "Calle", hint: "Trabajo en la vía pública", src: "photos/calle.png" },
  { label: "Entrada", hint: "Taller de noche", src: "photos/entrada.png", wide: true },
];

function Placeholder({ label, hint }: { label: string; hint: string }) {
  return (
    <span className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center">
      <span className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-slate-300 transition group-hover:border-brand/50 group-hover:text-brand">
        <Camera className="size-5" />
      </span>
      <span className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-slate-300">
        {label}
      </span>
      <span className="text-xs text-slate-400">{hint}</span>
    </span>
  );
}

export function Gallery() {
  return (
    <section id="galeria" className="scroll-mt-28 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="El taller"
          title="Galería"
          description="El local, las bahías de trabajo y los autos pasando por el taller, de la mano de lo que se ve todos los días en Calle 158."
        />

        <div className="mt-10 grid auto-rows-[130px] grid-cols-2 gap-4 sm:auto-rows-[160px] md:grid-cols-3">
          {SLOTS.map((slot, index) => (
            <motion.div
              key={slot.label}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
              className={[
                "group relative overflow-hidden rounded-3xl border-2 border-dashed border-slate-500/50 bg-white/5 backdrop-blur-md transition hover:border-brand/60 hover:bg-white/10",
                slot.feature ? "col-span-2 row-span-2" : "",
                slot.wide ? "col-span-2 md:col-span-1" : "",
              ].join(" ")}
            >
              {slot.src ? (
                <Photo
                  src={slot.src}
                  alt={`${slot.label} — ${slot.hint}`}
                  className="h-full w-full object-cover"
                  fallback={<Placeholder label={slot.label} hint={slot.hint} />}
                />
              ) : (
                <Placeholder label={slot.label} hint={slot.hint} />
              )}
            </motion.div>
          ))}

          {/* Cierra la grilla: acceso directo a la ubicación real del taller */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: SLOTS.length * 0.05, ease: "easeOut" }}
            className="col-span-2 md:col-span-1"
          >
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full w-full flex-col items-center justify-center gap-2 rounded-3xl border-2 border-dashed border-slate-500/50 bg-white/5 p-4 text-center backdrop-blur-md transition hover:border-brand/60 hover:bg-white/10"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-slate-300 transition group-hover:border-brand/50 group-hover:text-brand">
                <MapPin className="size-5" />
              </span>
              <span className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-slate-300">
                Cómo llegar
              </span>
              <span className="text-xs text-slate-400">Calle 158 e/ 9 y 10 · Berisso</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
