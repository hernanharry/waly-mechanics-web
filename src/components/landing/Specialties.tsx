import { motion } from "framer-motion";
import { Cog, Cpu, Disc, MoveVertical, type LucideIcon } from "lucide-react";
import { SectionHeading } from "./shared";

type Specialty = {
  code: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /** Acento propio de cada tarjeta (paleta técnica, color por servicio). */
  chip: string;
  bar: string;
  barHover: string;
};

const SPECIALTIES: Specialty[] = [
  {
    code: "01",
    title: "Suspensión",
    description:
      "Amortiguadores, resortes, bujes y terminales. Recuperamos el confort y el control del auto, sin ruidos ni rebotes.",
    icon: MoveVertical,
    chip: "border-cyan-400/30 bg-cyan-400/15 text-cyan-300",
    bar: "bg-cyan-400",
    barHover: "group-hover:w-24",
  },
  {
    code: "02",
    title: "Frenos",
    description:
      "Pastillas, discos, bombas y líquido de frenos. Revisión completa para que frene firme y parejo en todas las condiciones.",
    icon: Disc,
    chip: "border-brand/40 bg-brand/10 text-brand",
    bar: "bg-brand",
    barHover: "group-hover:w-24",
  },
  {
    code: "03",
    title: "Embrague",
    description:
      "Diagnóstico, cambio de kit y rectificación. Marcha suave, sin patinar ni tironear en ningún cambio.",
    icon: Cog,
    chip: "border-amber-400/30 bg-amber-400/15 text-amber-300",
    bar: "bg-amber-400",
    barHover: "group-hover:w-24",
  },
  {
    code: "04",
    title: "Inyección electrónica",
    description:
      "Lectura de fallas, inyectores, sensores y bobinas. El motor arranca, acelera y consume como debe.",
    icon: Cpu,
    chip: "border-violet-400/30 bg-violet-400/15 text-violet-300",
    bar: "bg-violet-400",
    barHover: "group-hover:w-24",
  },
];

export function Specialties() {
  return (
    <section id="especialidades" className="scroll-mt-28 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Lo que hacemos"
          title="Especialidades"
          description="Cuatro áreas en las que somos fuertes, con diagnóstico previo y trabajo en todas las marcas."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {SPECIALTIES.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="group relative flex flex-col overflow-hidden rounded-3xl glass p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-3 -top-5 font-display text-7xl font-extrabold text-white/[0.06]"
                >
                  {item.code}
                </span>

                <span
                  className={`inline-flex size-12 items-center justify-center rounded-2xl border shadow-sm transition group-hover:scale-105 ${item.chip}`}
                >
                  <Icon className="size-6" strokeWidth={2.2} />
                </span>

                <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                <span className="mt-5 flex items-center justify-between">
                  <span
                    aria-hidden
                    className={`block h-1 w-10 rounded-full transition-all duration-300 ${item.bar} ${item.barHover}`}
                  />
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {item.code}
                  </span>
                </span>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
