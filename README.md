# 🍽️ Good Recipes

Aplicación web moderna de catálogo de recetas culinarias y coctelería. Permite explorar desayunos, comidas, postres, cafés y cócteles con recomendaciones adaptadas a la hora del día, navegación por categorías y vistas interactivas paso a paso.

![Good Recipes Preview](/hero.png)

---

## 🔗 Enlaces Rápidos

- **Demo en producción:** [good-recipes-vert.vercel.app](https://good-recipes-vert.vercel.app/)
- **Diseño y Mockups:** [Ver proyecto en Figma](https://www.figma.com/design/YWFxZZFUbPjIjLUyxVzRxR/Good-Recipes?node-id=21-471&t=BkMhg2LAN4KhqdYw-1)

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
- **Tipado estricto y validación:** Modelos de datos definidos con **TypeScript** y esquemas de **Zod**.

---

## 🛠️ Stack Tecnológico

| Categoría | Tecnologías |
| :--- | :--- |
| **Core** | React 19, TypeScript, Vite 8 |
| **Enrutamiento** | React Router 8 (`createBrowserRouter`) |
| **Estilos e UI** | Styled Components 6, CSS Custom Properties, Swiper 14, FontAwesome |
| **Tipado y Validación** | TypeScript, Zod 4 |
| **Calidad de Código** | ESLint 10, `typescript-eslint` |
| **Diseño** | Figma |
| **APIs Públicas** | [TheMealDB](https://www.themealdb.com/), [TheCocktailDB](https://www.thecocktaildb.com/) |
| **Despliegue** | Vercel |

---

## 🗺️ Rutas de la Aplicación

| Ruta | Descripción |
| :--- | :--- |
| `/` | Página principal con hero, slider dinámico según la hora, sección de cafés y accesos a categorías. |
| `/meals` | Catálogo de categorías de comidas. |
| `/meals/category/:category` | Listado de recetas de comida filtradas por categoría. |
| `/meals/recipe/:IdRecipe` | Vista detallada de una receta de comida (ingredientes interactivos e instrucciones). |
| `/cocktails` | Catálogo de categorías de cócteles y bebidas. |
| `/cocktails/category/:category` | Listado de cócteles filtrados por categoría. |
| `/cocktails/recipe/:IdRecipe` | Vista detallada de un cóctel (ingredientes interactivos e instrucciones). |
| `/login` | Interfaz de inicio de sesión. |
| `/register` | Interfaz de registro de usuario. |

---

## 📂 Estructura del Proyecto (Frontend)

```text
frontend/
├── public/
│   ├── icons/                  # Favicons y apple-touch-icon
│   └── images/                 # Banners e imágenes estáticas optimizadas (.avif / .webp)
├── src/
│   ├── api/
│   │   └── api-actions.ts      # Funciones de consumo de TheMealDB y TheCocktailDB
│   ├── components/
│   │   ├── layout/             # Componentes estructurales globales (Header, Footer)
│   │   └── ui/                 # Componentes reutilizables (Banner, CardRecipe, Recipe, Loader, Spinner, Logo, InputField)
│   ├── hooks/
│   │   └── useSliderFeatures.ts # Hook responsivo para configuración de Swiper
│   ├── pageComponents/
│   │   ├── Auth/               # Vistas y estilos de Login / Register
│   │   ├── Category/           # Layout de categorías
│   │   ├── main/               # Secciones de la página principal (Hero, Sliders, ViewMore)
│   │   └── recipes/            # Layout de grilla de recetas
│   ├── routes/
│   │   ├── cocktails/          # Páginas de categorías y detalle de cócteles
│   │   ├── meals/              # Páginas de categorías y detalle de comidas
│   │   ├── hooks/              # useFetchCategories.ts
│   │   ├── Root.tsx            # Layout raíz con Header, Outlet y Footer
│   │   ├── Main.tsx            # Página de inicio
│   │   ├── Login.tsx           # Ruta de inicio de sesión
│   │   └── Register.tsx        # Ruta de registro
│   ├── styles/
│   │   ├── normalize.css       # Reseteo base de estilos
│   │   └── global.css          # Variables CSS, tipografías y utilidades globales
│   ├── types/
│   │   ├── api-types.ts        # Esquemas Zod y tipos de respuestas de API
│   │   ├── global.ts           # Tipos globales de la aplicación
│   │   └── props.ts            # Interfaces de props de componentes
│   ├── createRoutes.tsx        # Configuración centralizada de React Router
│   └── main.tsx                # Punto de entrada de React
├── index.html                  # Plantilla HTML con metadatos SEO y Open Graph
├── vercel.json                 # Configuración de rewrites para SPA en Vercel
├── vite.config.ts              # Configuración de Vite
└── package.json                # Dependencias y scripts del frontend
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

---

## ☁️ Despliegue

El frontend está configurado para desplegarse en **Vercel** con soporte para navegación SPA mediante `frontend/vercel.json`, el cual redirige todas las rutas (`/(.*)`) hacia `/` para evitar errores 404 al recargar rutas dinámicas.

---
