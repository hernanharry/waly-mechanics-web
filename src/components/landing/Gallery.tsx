import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { Photo, SectionHeading } from "./shared";

/**
 * Fotos reales del taller: colocar los archivos en public/photos/
 * con estos nombres y se muestran solos (si falta el archivo,
 * queda el placeholder hasta que lo cargues):
 *   interior.jpg  — naftera/bahías con autos en el taller
 *   local.jpg     — frente del local con el cartel
 *   calle.jpg     — trabajo en la calle
 *   entrada.jpg   — entrada del taller de noche
 */
type Slot = {
  label: string;
  hint: string;
  src?: string;
  feature?: boolean;
};

const SLOTS: Slot[] = [
  { label: "Interior", hint: "Bahías de servicio", src: "photos/interior.jpg", feature: true },
  { label: "Frente", hint: "Local con cartel", src: "photos/local.jpg" },
  { label: "Calle", hint: "Trabajo en la vía pública", src: "photos/calle.jpg" },
  { label: "Entrada", hint: "Taller de noche", src: "photos/entrada.jpg" },
  { label: "Foto 05", hint: "Espacio para una foto más" },
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
        </div>
      </div>
    </section>
  );
}
