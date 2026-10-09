# Demo Yuxtapose

Aplicación web estática que permite comparar con un deslizador imágenes aéreas históricas (2010 vs 2022) del sector Hacienda Carcelén - Río Monjas, en Quito, usando [Juxtapose](https://juxtapose.knightlab.com/). Está hecha con HTML, CSS y JavaScript puro: no requiere build, backend ni dependencias externas.

## Requisitos

- Un navegador moderno (Chrome, Firefox, Edge, Safari).
- Opcional: Python 3 (o cualquier servidor estático) si prefieres servir el proyecto por HTTP.

## Cómo ejecutarlo

```bash
git clone https://github.com/faustoaguanor/DemoYuxtapose.git
cd DemoYuxtapose
```

**Opción A – Directo en el navegador:** abre `index.html` con doble clic (funciona sin servidor).

**Opción B – Servidor local:**

```bash
python3 -m http.server 8000
```

Luego visita <http://localhost:8000>.

## Estructura del proyecto

```text
DemoYuxtapose/
├─ index.html
├─ LICENSE
├─ README.md
└─ src/
   ├─ app/
   │  └─ main.js
   ├─ config/
   │  └─ slider.config.js
   ├─ styles/
   │  └─ main.css
   ├─ vendor/
   │  └─ juxtapose/
   │     ├─ juxtapose.css
   │     └─ juxtapose.min.js
   └─ assets/
      ├─ comparisons/
      │  ├─ foto_2010_hc.jpg
      │  └─ foto_2022_hc.jpg
      └─ georef/
         ├─ foto_2010_hc.jgw
         ├─ foto_2010_hc.prj
         ├─ foto_2022_hc.jgw
         └─ foto_2022_hc.prj
```

## Cómo usar

1. Mueve el deslizador para comparar ambas fechas.
2. Cambia entre `Compacto` y `Editorial` desde el selector superior.

## Mantenimiento

- Para cambiar imágenes o etiquetas, edita `src/config/slider.config.js`.
- Para ajustes visuales, edita `src/styles/main.css`.
- El código de inicialización y ajuste responsive del slider vive en `src/app/main.js`.
- El comportamiento del selector de estilos (`compact`/`editorial`) también está en `src/app/main.js`.

## Historial de mejoras

- Reorganización a estructura limpia por capas (`app`, `config`, `styles`, `assets`, `vendor`).
- Eliminación de código inline en `index.html`.
- Eliminación de dependencias de CDN: Juxtapose ahora se carga en local desde `src/vendor/`.
- Eliminación de archivos duplicados en `optimized_images/`.
- Corrección de textos y codificación UTF-8 en scripts.
- Remoción del logo del Municipio de Quito en la interfaz.
- Rediseño UI sobrio y usable (jerarquía visual, tarjetas limpias y mejor legibilidad).
- Selector de estilos visuales: `compact` y `editorial`.
- Persistencia de preferencia de layout en `localStorage` (`ui-layout`).
- README y licencia actualizados.

## Créditos y atribución

- Librería de comparación: Knight Lab Juxtapose (`src/vendor/juxtapose/*`).
- Fuente de imágenes comparadas: Municipio del Distrito Metropolitano de Quito.
- Créditos mostrados en el comparador:
  - Año 2010: Municipio de Quito - StereoCarto.
  - Año 2022: Municipio de Quito - DMC.

## Licencias de terceros

- Juxtapose es software de terceros; su licencia y términos corresponden a sus autores y repositorio oficial.
- Este repositorio mantiene licencia MIT para el código propio del proyecto.
- Detalle formal en `THIRD_PARTY_NOTICES.md`.
