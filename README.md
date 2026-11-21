# 🍽️ Good Recipes

Aplicación web moderna de catálogo de recetas culinarias y coctelería. Permite explorar desayunos, comidas, postres, cafés y cócteles con recomendaciones adaptadas a la hora del día, navegación por categorías y vistas interactivas paso a paso.

> [!NOTE]
> **Proyecto optimizado y modernizado con IA Antigravity:** Los tests unitarios y de integración, así como la auditoría y refactorización de este proyecto, fueron creados y actualizados con la asistencia de la IA agéntica **Antigravity** (Google DeepMind).

---

## 📌 Tabla de Contenidos

- [Enlaces Rápidos](#-enlaces-rápidos)
- [Notas Previas](#-notas-previas)
- [Características Principales](#-características-principales)
- [Stack Tecnológico](#-stack-tecnológico)
- [Rutas de la Aplicación](#-rutas-de-la-aplicación)
- [Estructura del Proyecto (Frontend)](#-estructura-del-proyecto-frontend)
- [APIs Utilizadas](#-apis-utilizadas)
- [Instalación y Uso Local](#-instalación-y-uso-local)
- [Scripts Disponibles](#-scripts-disponibles)
- [Testing (Pruebas Unitarias y de Integración)](#-testing-pruebas-unitarias-y-de-integración)
  - [Arquitectura de Pruebas](#arquitectura-de-pruebas)
  - [Cómo ejecutar las pruebas](#cómo-ejecutar-las-pruebas)
- [Despliegue](#-despliegue)

---

## 🔗 Enlaces Rápidos

- **Demo en producción:** [good-recipes-vert.vercel.app](https://good-recipes-vert.vercel.app/)
- **Diseño y Mockups:** [Ver proyecto en Figma](https://www.figma.com/design/YWFxZZFUbPjIjLUyxVzRxR/Good-Recipes?node-id=21-471&t=BkMhg2LAN4KhqdYw-1)

---

## 🧭 Notas Previas

> [!IMPORTANT]
> **Contexto del proyecto y decisiones de arquitectura:**
>
> 1. **Calidad y refactorización:** El frontend fue auditado y refactorizado siguiendo principios **SOLID (SRP)**, **DRY**, **KISS** y **Clean Code** (separación de datos estáticos en `src/data/`, rutas reutilizables en `src/routes/shared/`, validación en runtime con **Zod 4**, vistas `NotFound` para rutas/categorías/recetas inexistentes y accesibilidad), manteniendo **0 errores de TypeScript**, **0 errores/warnings en ESLint 10** y **33/33 suites (67 pruebas)** en verde.
> 2. **Carpeta `backend/` y vistas de autenticación (`/login`, `/register`):** La aplicación funciona hoy de forma completamente autónoma consumiendo las APIs públicas de TheMealDB y TheCocktailDB. La carpeta `backend/` y la interfaz de autenticación se mantienen preparadas para **construir una API propia** enfocada en cuentas de usuario, recetas favoritas y persistencia personalizada.

---

## ✨ Características Principales

- **Recomendaciones dinámicas por horario:** La página principal detecta la hora local del usuario y adapta el saludo (`Good Morning`, `Good Afternoon`, `Good Evening`) junto con las sugerencias destacadas: desayunos por la mañana, comidas por la tarde y cócteles por la noche.
- **Carruseles responsivos:** Implementados con **Swiper** y un custom hook (`useSliderFeatures`) que ajusta automáticamente la cantidad de tarjetas visibles (`1`, `2` o `3`) según el tamaño de la pantalla.
- **Exploración por categorías:** Catálogos dedicados para **Meals** (Chicken, Beef, Vegetarian, Seafood, etc.) y **Cocktails** (Shot, Coffee / Tea, Soft Drink, Cocktail, Beer, etc.).
- **Vista detallada e interactiva de recetas:**
  - Encabezado visual con imagen de la receta, etiqueta de categoría y país de origen.
  - **Checklist interactivo de ingredientes** con contador en tiempo real (`X / N Checked`).
  - **Instrucciones paso a paso** formateadas y numeradas automáticamente.
  - Barra lateral (*sidebar*) con sugerencias de recetas relacionadas.
- **Vistas de autenticación (UI):** Pantallas de inicio de sesión (`/login`) y registro (`/register`) con diseño dividido (*split-screen*) preparadas para integración futura.
- **Interfaz oscura moderna y responsiva:** Sistema de diseño basado en variables CSS, tipografías *Fraunces* y *Outfit*, y estilos encapsulados con **Styled Components**.
- **Tipado estricto y validación en runtime:** Modelos de datos definidos con **TypeScript** y validación activa de respuestas de API con esquemas de **Zod 4**.
- **Manejo de rutas y recursos inexistentes (`404`):** Componente reutilizable `NotFound` para rutas desconocidas, categorías vacías/inexistentes y recetas no encontradas.

---

## 🛠 Stack Tecnológico

| Categoría | Tecnologías |
| :--- | :--- |
| **Core** | React 19, TypeScript, Vite 8 |
| **Enrutamiento** | React Router 8 (`createBrowserRouter`) |
| **Estilos e UI** | Styled Components 6, CSS Custom Properties, Swiper 14, SVGs personalizados |
| **Tipado y Validación** | TypeScript, Zod 4 |
| **Testing** | Vitest, React Testing Library, Jest-DOM, JSDOM |
| **Calidad de Código** | ESLint 10, `typescript-eslint` |
| **Diseño** | Figma |
| **APIs Públicas** | [TheMealDB](https://www.themealdb.com/), [TheCocktailDB](https://www.thecocktaildb.com/) |
| **Despliegue** | Vercel |

---

## 🗺 Rutas de la Aplicación

| Ruta | Descripción |
| :--- | :--- |
| `/` | Página principal con hero, slider dinámico según la hora, sección de cafés y accesos a categorías. |
| `/meals` | Catálogo de categorías de comidas. |
| `/meals/category/:category` | Listado de recetas de comida filtradas por categoría (muestra `NotFound` si no existe). |
| `/meals/recipe/:IdRecipe` | Vista detallada de una receta de comida (ingredientes interactivos e instrucciones). |
| `/cocktails` | Catálogo de categorías de cócteles y bebidas. |
| `/cocktails/category/:category` | Listado de cócteles filtrados por categoría (muestra `NotFound` si no existe). |
| `/cocktails/recipe/:IdRecipe` | Vista detallada de un cóctel (ingredientes interactivos e instrucciones). |
| `/login` | Interfaz de inicio de sesión. |
| `/register` | Interfaz de registro de usuario. |
| `*` | Página `404` estilizada con acceso directo al inicio. |

---

## 📂 Estructura del Proyecto (Frontend)

```text
frontend/
├── public/
│   ├── icons/                      # Favicons y apple-touch-icon
│   └── images/                     # Banners e imágenes estáticas optimizadas (.avif / .svg)
├── src/
│   ├── api/
│   │   └── api-actions.ts          # Cliente HTTP defensivo con validación Zod para TheMealDB y TheCocktailDB
│   ├── components/
│   │   ├── layout/                 # Componentes estructurales globales (Header, Footer)
│   │   └── ui/                     # Componentes reutilizables (Banner, CardRecipe, CategoryIcons, Recipe, Loader, Spinner, Logo)
│   ├── data/
│   │   └── mainRecipes.ts          # Recetas destacadas por horario y secciones estáticas del inicio
│   ├── hooks/
│   │   ├── useScrollToTop.ts       # Hook de scroll limpio en efectos al navegar
│   │   └── useSliderFeatures.ts    # Hook responsivo para configuración de Swiper
│   ├── pageComponents/
│   │   ├── Auth/                   # Vistas y estilos de Login / Register
│   │   ├── Category/               # Layout de categorías
│   │   ├── main/                   # Secciones de la página principal (Hero, Sliders, ViewMore)
│   │   └── recipes/                # Layout de grilla de recetas
│   ├── routes/
│   │   ├── cocktails/              # Wrappers de rutas de coctelería
│   │   ├── meals/                  # Wrappers de rutas de comidas
│   │   ├── shared/                 # Vistas compartidas (CategoryRecipesRoute, RecipeDetailRoute)
│   │   ├── hooks/                  # useFetchCategories.ts
│   │   ├── Root.tsx                # Layout raíz con Header, Outlet y Footer
│   │   ├── Main.tsx                # Página de inicio
│   │   ├── Login.tsx               # Ruta de inicio de sesión
│   │   ├── Register.tsx            # Ruta de registro
│   │   └── NotFound.tsx            # Página 404 reutilizable (rutas, categorías y recetas no encontradas)
│   ├── styles/
│   │   ├── normalize.css           # Reseteo base de estilos
│   │   └── global.css              # Variables CSS, tipografías y utilidades globales
│   ├── types/
│   │   ├── api-types.ts            # Esquemas Zod exportados y tipos inferidos de API
│   │   ├── global.ts               # Tipos globales de la aplicación
│   │   └── props.ts                # Interfaces de props de componentes
│   ├── createRoutes.tsx            # Configuración centralizada de React Router
│   └── main.tsx                    # Punto de entrada de React
├── test/
│   ├── setup.ts                    # Configuración global de pruebas, matchers y mocks base (Swiper, scrollTo)
│   ├── unit/                       # Pruebas unitarias replicando la estructura de src/
│   │   ├── api/                    # Tests de consumo de API (api-actions.test.ts)
│   │   ├── components/             # Tests de componentes de layout y UI
│   │   ├── hooks/                  # Tests de hooks personalizados (useSliderFeatures.test.ts)
│   │   ├── pageComponents/         # Tests de secciones y layouts de páginas
│   │   └── routes/                 # Tests unitarios de vistas y hooks de rutas
│   └── integration/                # Pruebas de integración de flujos completos de usuario
│       ├── AppNavigation.test.tsx
│       ├── AuthFlow.test.tsx
│       ├── CocktailsFlow.test.tsx
│       └── MealsFlow.test.tsx
├── index.html                      # Plantilla HTML con metadatos SEO y Open Graph
├── vercel.json                     # Configuración de rewrites para SPA en Vercel
├── vite.config.ts                  # Configuración de Vite
├── vitest.config.ts                # Configuración del entorno de pruebas con Vitest y JSDOM
└── package.json                    # Dependencias y scripts del frontend
```

---

## 🌐 APIs Utilizadas

La aplicación consume APIs públicas que **no requieren claves ni variables de entorno**:

- **TheMealDB (`https://www.themealdb.com/api/json/v1/1/`)**
  - `categories.php` — Obtiene todas las categorías de comidas.
  - `filter.php?c={category}` — Filtra recetas por categoría.
  - `lookup.php?i={id}` — Obtiene el detalle completo de una receta por ID.
- **TheCocktailDB (`https://www.thecocktaildb.com/api/json/v1/1/`)**
  - `filter.php?c={category}` — Filtra cócteles por categoría.
  - `lookup.php?i={id}` — Obtiene el detalle completo de un cóctel por ID.
  - *Nota:* Las tarjetas visuales de categorías de cócteles utilizan descripciones e imágenes curadas definidas en `src/api/api-actions.ts`.

---

## 🚀 Instalación y Uso Local

### Requisitos previos

- [Node.js](https://nodejs.org/) (v18 o superior recomendado)
- `npm`

### Pasos

1. **Clonar el repositorio:**

```bash
git clone https://github.com/RubDev476/Good-recipes.git
```

2. **Acceder al directorio del frontend:**

```bash
cd Good-recipes/frontend
```

3. **Instalar las dependencias:**

```bash
npm install
```

4. **Iniciar el servidor de desarrollo:**

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173/`.

---

## 📜 Scripts Disponibles

Ejecutar dentro de `frontend/`:

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo de Vite con recarga rápida (HMR). |
| `npm run build` | Verifica tipos con TypeScript (`tsc -b`) y genera el build de producción en `dist/`. |
| `npm run preview` | Levanta un servidor local para previsualizar el build de producción. |
| `npm run lint` | Ejecuta ESLint para analizar la calidad y consistencia del código. |
| `npm test` | Inicia Vitest en modo interactivo (*watch mode*) durante el desarrollo. |
| `npm run test:run` | Ejecuta una sola vez toda la suite de pruebas unitarias y de integración. |

---

## 🧪 Testing (Pruebas Unitarias y de Integración)

El proyecto cuenta con una suite de **33 archivos de prueba (67 tests en total)** construida con **Vitest**, **React Testing Library** y **JSDOM**. Todas las pruebas están escritas en inglés y documentadas con comentarios explicativos en español para facilitar el mantenimiento.

### Arquitectura de Pruebas

1. **Configuración Global (`frontend/test/setup.ts` y `frontend/vitest.config.ts`)**:
   - Extiende `expect` con los matchers semánticos de `@testing-library/jest-dom`.
   - Limpia el árbol del DOM (`cleanup`) y reinicia los espías/mocks después de cada prueba.
   - Simula APIs del navegador no implementadas en `jsdom` (como `window.scrollTo`) y componentes de `Swiper` para validar sus propiedades sin errores de layout.

2. **Pruebas Unitarias (`frontend/test/unit/`)**:
   - Siguen la jerarquía de carpetas de `frontend/src/` (`api/`, `components/`, `hooks/`, `pageComponents/`, `routes/`).
   - Evalúan cada módulo de forma aislada:
     - **Capa de API (`api-actions`)**: Peticiones a TheMealDB y TheCocktailDB con validación Zod, y retorno de categorías estáticas para cócteles.
     - **Custom Hooks (`useSliderFeatures`, `useFetchCategories`)**: Cálculo responsivo de columnas del slider ante eventos `resize` y manejo de estados de éxito/error en peticiones asíncronas.
     - **Componentes UI y Layout**: Renderizado accesible de `Header`, `Footer`, `Banner`, `CardRecipe`, `Loader`, `Spinner`, `Logo` y la vista interactiva `RecipeComponent` (checklist controlado de ingredientes con contador `X / N Checked` y separación de pasos de cocción).
     - **Vistas y Page Components**: Comportamiento dependiente de la hora del día (`Good Morning`, `Good Afternoon`, `Good Evening`) mediante *fake timers*, sanitización de rutas y estados de carga.

3. **Pruebas de Integración (`frontend/test/integration/`)**:
   - Prueban flujos completos de usuario conectando el enrutador en memoria (`createMemoryRouter`) con múltiples componentes, hooks y la capa de datos:
     - **`AppNavigation.test.tsx`**: Navegación global entre páginas desde el `Header`, resaltado de ruta activa (`current-path-color`) y manejo de rutas inexistentes (`Not Found`).
     - **`MealsFlow.test.tsx`**: Flujo completo desde el catálogo de categorías de comidas (`/meals`) -> selección de categoría (`/meals/category/:category`) -> detalle de receta (`/meals/recipe/:IdRecipe`) -> interacción con la lista de ingredientes.
     - **`CocktailsFlow.test.tsx`**: Flujo completo de coctelería, incluyendo la codificación y decodificación de categorías con `/` en la URL (ej. `Coffee / Tea` <-> `Coffee _ Tea`) hasta la vista de preparación de la bebida.
     - **`AuthFlow.test.tsx`**: Transición bidireccional entre las vistas de `/login` y `/register` desde la barra de navegación y los selectores del formulario.

### Cómo ejecutar las pruebas

```bash
cd frontend

# Ejecutar todas las pruebas una sola vez
npm run test:run

# Ejecutar Vitest en modo watch
npm test
```

---

## ☁ Despliegue

El frontend está configurado para desplegarse en **Vercel** con soporte para navegación SPA mediante `frontend/vercel.json`, el cual redirige todas las rutas (`/(.*)`) hacia `/` para evitar errores 404 al recargar rutas dinámicas.

---
