/**
 * Datos reales del negocio (Mecánica Waly).
 * Todo lo que falte debe quedar como placeholder acá — no inventar datos.
 */

const ADDRESS = "Calle 158 e/ 9 y 10, Berisso, Buenos Aires, Argentina";
const ADDRESS_QUERY = encodeURIComponent(ADDRESS);

export const SITE = {
  name: "Mecánica Waly",
  tagline: "Tu auto en buenas manos.",
  address: ADDRESS,
  city: "Berisso, Buenos Aires",

  /** Teléfono del taller (formato visible) */
  phoneDisplay: "+54 221 541-7253",
  /** Teléfono en formato E.164 para enlaces tel: */
  phoneTel: "+542215417253",
  /** WhatsApp directo (mismo número) */
  whatsappUrl: `https://wa.me/542215417253?text=${encodeURIComponent(
    "Hola Mecánica Waly, quiero hacer una consulta por mi auto.",
  )}`,

  /** Horario de atención */
  hours: "Lunes a viernes de 9:30 a 19:00",
  hoursShort: "Lun a Vie 9:30–19:00",
  hoursClosed: "Sábado y domingo cerrado",

  /** Reseñas de Google */
  rating: 4.6,
  ratingLabel: "4,6",
  reviewCount: 10,

  /** Ubicación (Google Maps) */
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${ADDRESS_QUERY}`,
  mapsEmbedUrl: `https://www.google.com/maps?q=${ADDRESS_QUERY}&z=16&output=embed`,
} as const;

export const NAV_ITEMS = [
  { href: "#especialidades", label: "Especialidades" },
  { href: "#galeria", label: "Galería" },
  { href: "#resenas", label: "Reseñas" },
  { href: "#contacto", label: "Contacto" },
] as const;
