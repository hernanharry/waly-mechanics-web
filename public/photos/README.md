# Fotos del taller

Imágenes reales del taller cargadas en `public/photos/`. La página las muestra sola
(si un archivo falta, se ve el placeholder en Galería / banners):

| Archivo            | Uso                                    | Original en `public/assets/`        |
| ------------------ | -------------------------------------- | ----------------------------------- |
| `banner-logo.png`  | Banner horizontal del logo (portada)   | `04_banner_horizontal_mejorado.png` |
| `flyer.png`        | Afiche vertical (junto al CTA final)   | `05_banner_vertical_mejorado.png`   |
| `interior.png`     | Interior del taller (foto destacada)   | `01_taller_interior_mejorada.png`   |
| `local.png`        | Frente del local con el cartel         | `06_frente_taller_mejorada.png`     |
| `calle.png`        | Trabajo en la calle                    | `02_auto_capot_abierto_mejorada.png`|
| `entrada.png`      | Entrada del taller de noche            | `03_auxilio_mecanico_mejorada.png`  |
| `logo.png`         | Logo horizontal (pie de página)        | `Logo.png`                          |

Notas:

- Los originales quedan en `public/assets/`; no hace falta tocarlos.
- `banner_waly_h.png` / `banner_waly_v.png` son copias a media escala del banner
  horizontal y del afiche vertical (ya cubiertos por `banner-logo.png` y `flyer.png`).
- El logo tiene fondo negro puro: se muestra con `mix-blend-screen` para fundirlo
  con el fondo oscuro del sitio.
