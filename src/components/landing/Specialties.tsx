import { motion } from "framer-motion";
import { Cog, Cpu, Disc, MoveVertical, type LucideIcon } from "lucide-react";
import { SectionHeading } from "./shared";

type Specialty = {
  code: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const SPECIALTIES: Specialty[] = [
  {
    code: "01",
    title: "Suspensión",
    description:
      "Amortiguadores, resortes, bujes y terminales. Recuperamos el confort y el control del auto, sin ruidos ni rebotes.",
    icon: MoveVertical,
  },
  {
    code: "02",
    title: "Frenos",
    description:
      "Pastillas, discos, bombas y líquido de frenos. Revisión completa para que frene firme y parejo en todas las condiciones.",
    icon: Disc,
  },
  {
    code: "03",
    title: "Embrague",
    description:
      "Diagnóstico, cambio de kit y rectificación. Marcha suave, sin patinar ni tironear en ningún cambio.",
    icon: Cog,
  },
  {
    code: "04",
    title: "Inyección electrónica",
    description:
      "Lectura de fallas, inyectores, sensores y bobinas. El motor arranca, acelera y consume como debe.",
    icon: Cpu,
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
                className="group relative flex flex-col overflow-hidden rounded-3xl glass p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/70"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-3 -top-5 font-display text-7xl font-extrabold text-slate-900/[0.05]"
                >
                  {item.code}
                </span>

                <span className="inline-flex size-12 items-center justify-center rounded-2xl border border-brand/20 bg-brand-soft text-brand shadow-sm transition group-hover:scale-105">
                  <Icon className="size-6" strokeWidth={2.2} />
                </span>

                <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                <span
                  aria-hidden
                  className="mt-5 block h-1 w-10 rounded-full bg-brand transition-all duration-300 group-hover:w-24"
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
