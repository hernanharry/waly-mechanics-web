import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { SectionHeading } from "./shared";

/**
 * Galería de fotos del taller.
 * Cada casilla es un placeholder: reemplazar por
 * `<img src={fotoN} alt="..." className="h-full w-full object-cover" />`
 * cuando se suban las fotos reales (ej. en src/assets/gallery/).
 */
const SLOTS = [
  { label: "Foto 01", hint: "Exterior del local", feature: true },
  { label: "Foto 02", hint: "Frente del taller", feature: false },
  { label: "Foto 03", hint: "Trabajo en curso", feature: false },
  { label: "Foto 04", hint: "Bahía de servicio", feature: false },
  { label: "Foto 05", hint: "Herramientas", feature: false },
  { label: "Foto 06", hint: "Equipo", feature: false },
];

export function Gallery() {
  return (
    <section id="galeria" className="scroll-mt-28 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="El taller"
          title="Galería"
          description="Espacio reservado para las fotos reales del local y del taller trabajando. Cargá tus imágenes y reemplazá cada casilla."
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
                "group relative flex flex-col items-center justify-center gap-2 rounded-3xl border-2 border-dashed border-slate-400/50 bg-white/35 p-4 text-center backdrop-blur-md transition hover:border-brand/50 hover:bg-white/55",
                slot.feature ? "col-span-2 row-span-2" : "",
              ].join(" ")}
            >
              <span className="inline-flex size-11 items-center justify-center rounded-full border border-white/80 bg-white/70 text-slate-500 transition group-hover:text-brand">
                <Camera className="size-5" />
              </span>
              <span className="font-display text-lg font-bold uppercase tracking-[0.14em] text-slate-500">
                {slot.label}
              </span>
              <span className="text-xs text-slate-400">{slot.hint}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
