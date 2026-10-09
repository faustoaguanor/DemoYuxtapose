# Demo Yuxtapose

![Licencia: MIT](https://img.shields.io/badge/licencia-MIT-green)
![Stack: HTML · CSS · JavaScript](https://img.shields.io/badge/stack-HTML%20%C2%B7%20CSS%20%C2%B7%20JavaScript-blue)
![Sin dependencias externas](https://img.shields.io/badge/dependencias-ninguna-lightgrey)

Aplicación web estática para **comparar imágenes aéreas históricas (2010 vs 2022)** del sector **Hacienda Carcelén – Río Monjas** (Quito, Ecuador) mediante un deslizador interactivo basado en [Juxtapose](https://juxtapose.knightlab.com/).

Está construida con HTML, CSS y JavaScript puro: no requiere proceso de compilación, backend ni CDN.

## Características

- Comparación lado a lado con deslizador, adaptable a escritorio y móvil.
- Dos estilos visuales (`Compacto` y `Editorial`), con la preferencia guardada en `localStorage` (`ui-layout`).
- Funciona sin conexión: Juxtapose se sirve localmente desde `src/vendor/`.
- Configuración centralizada de imágenes, etiquetas y créditos.
- Imágenes acompañadas de sus archivos de georreferenciación (`.jgw`, `.prj`).

## Requisitos

- Un navegador moderno (Chrome, Firefox, Edge o Safari).
- Opcional: Python 3 u otro servidor estático para servir el proyecto por HTTP.

## Ejecución

```bash
git clone https://github.com/faustoaguanor/DemoYuxtapose.git
cd DemoYuxtapose
```

**Opción A — Directamente en el navegador:** abre `index.html` (no necesita servidor).

**Opción B — Servidor local:**

```bash
python3 -m http.server 8000
```

Después visita <http://localhost:8000>.

## Uso

1. Arrastra el control central del deslizador para comparar 2010 y 2022.
2. Cambia entre `Compacto` y `Editorial` con el selector superior.

## Estructura del proyecto

```text
DemoYuxtapose/
├─ index.html
├─ LICENSE
├─ README.md
├─ THIRD_PARTY_NOTICES.md
└─ src/
   ├─ app/
   │  └─ main.js                  # Inicialización del slider, ajuste responsive y selector de estilos
   ├─ config/
   │  └─ slider.config.js         # Imágenes, etiquetas, créditos y opciones del slider
   ├─ styles/
   │  └─ main.css                 # Estilos de la interfaz
   ├─ vendor/
   │  └─ juxtapose/               # Librería Juxtapose (terceros)
   └─ assets/
      ├─ comparisons/             # foto_2010_hc.jpg, foto_2022_hc.jpg
      └─ georef/                  # Archivos .jgw y .prj de cada imagen
```

## Personalización

| Qué cambiar | Dónde |
| --- | --- |
| Imágenes, etiquetas y créditos | `src/config/slider.config.js` |
| Apariencia visual | `src/styles/main.css` |
| Lógica del slider y del selector de estilos | `src/app/main.js` |

## Historial de mejoras

- Estructura por capas (`app`, `config`, `styles`, `assets`, `vendor`).
- Eliminación del código inline en `index.html`.
- Eliminación de dependencias de CDN: Juxtapose se carga localmente.
- Eliminación de archivos duplicados en `optimized_images/`.
- Corrección de textos y codificación UTF-8.
- Rediseño de la interfaz con mejor jerarquía visual y legibilidad.
- Selector de estilos `compact` / `editorial` con persistencia de preferencia.

## Créditos y atribución

| Recurso | Autoría / Fuente |
| --- | --- |
| Desarrollo del proyecto | Alejandro ([@faustoaguanor](https://github.com/faustoaguanor)) |
| Librería de comparación | [JuxtaposeJS](https://juxtapose.knightlab.com/) — Alex Duner y Northwestern University Knight Lab |
| Imagen 2010 | Municipio del Distrito Metropolitano de Quito — StereoCarto |
| Imagen 2022 | Municipio del Distrito Metropolitano de Quito — DMC |

Los derechos y permisos de uso de las imágenes pertenecen a sus proveedores originales.

## Licencia

El código propio de este proyecto se distribuye bajo licencia [MIT](LICENSE).

Los componentes y datos de terceros (Juxtapose e imágenes) conservan sus propias licencias y términos; el detalle está en [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
