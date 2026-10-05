import { motion } from "framer-motion";
import { ArrowUpRight, Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { SectionHeading } from "./shared";

const ROWS = [
  {
    icon: MapPin,
    label: "Dirección",
    value: SITE.address,
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: SITE.phoneDisplay,
    href: `tel:${SITE.phoneTel}`,
  },
  {
    icon: Clock,
    label: "Horario",
    value: SITE.hours,
    sub: SITE.hoursClosed,
  },
];

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-28 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Dónde encontrarnos"
          title="Contacto"
          description="Estamos en el corazón de Berisso. Escribinos por WhatsApp o llamanos, y pasá cuando te quede cómodo."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {/* Datos de contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-3xl glass p-6 md:p-8"
          >
            <ul className="space-y-4">
              {ROWS.map((row) => {
                const Icon = row.icon;
                const body = (
                  <>
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl border border-brand/20 bg-brand-soft text-brand">
                      <Icon className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                        {row.label}
                      </span>
                      <span className="block break-words text-base font-semibold text-foreground md:text-lg">
                        {row.value}
                      </span>
                      {row.sub && (
                        <span className="block text-sm text-muted-foreground">{row.sub}</span>
                      )}
                    </span>
                  </>
                );

                return (
                  <li
                    key={row.label}
                    className="flex items-start gap-4 rounded-2xl border border-white/70 bg-white/55 p-4 transition hover:bg-white/75"
                  >
                    {row.href ? (
                      <a href={row.href} className="flex items-start gap-4">
                        {body}
                      </a>
                    ) : (
                      body
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 flex-1 rounded-full px-6 font-semibold shadow-[0_14px_30px_-12px_rgba(225,29,46,0.7)]"
              >
                <a href={SITE.whatsappUrl} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-5" />
                  WhatsApp directo
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 flex-1 rounded-full border-white/80 bg-white/65 px-6 font-semibold hover:bg-white"
              >
                <a href={`tel:${SITE.phoneTel}`}>
                  <Phone className="size-5" />
                  Llamar ahora
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="rounded-3xl glass p-3 md:p-4"
          >
            <div className="overflow-hidden rounded-2xl border border-white/80 bg-white/60">
              <iframe
                title={`Ubicación de ${SITE.name} — ${SITE.address}`}
                src={SITE.mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[300px] w-full border-0 md:h-[360px]"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 px-2 pb-1 pt-4">
              <p className="text-sm font-semibold text-foreground">{SITE.address}</p>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/80 bg-white/70 px-4 py-2 text-sm font-semibold text-brand transition hover:bg-white"
              >
                Cómo llegar
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
