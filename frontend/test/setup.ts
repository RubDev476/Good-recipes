/**
 * Archivo de configuración global para las pruebas de Vitest (setup.ts).
 * Se ejecuta automáticamente antes de cada archivo de test según lo definido en vitest.config.ts.
 *
 * Propósito principal:
 * 1. Extender `expect` con los matchers del DOM de `@testing-library/jest-dom` (ej. toBeInTheDocument).
 * 2. Simular APIs del navegador que `jsdom` no implementa nativamente (como `window.scrollTo`).
 * 3. Limpiar el DOM virtual (`cleanup`) y reiniciar espías/mocks (`vi.clearAllMocks`) después de cada prueba.
 * 4. Simular globalmente los componentes de `swiper` para evitar errores de medición de layout en `jsdom`.
 */
import React from 'react';
import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, beforeEach, vi } from 'vitest';

beforeEach(() => {
    // jsdom no implementa window.scrollTo; lo reemplazamos con un mock para evitar errores
    // y poder verificar en los tests si una ruta hizo scroll al inicio de la página.
    window.scrollTo = vi.fn();
});

afterEach(() => {
    // Desmonta los componentes de React renderizados y limpia el historial de los mocks entre tests.
    cleanup();
    vi.clearAllMocks();
});

/**
 * Mock global de `swiper/react`:
 * Swiper depende de APIs gráficas del navegador y clona nodos cuando `loop={true}`.
 * Aquí lo reemplazamos por divs simples que conservan las props en atributos `data-*`
 * para poder inspeccionarlas fácilmente en las pruebas unitarias y de integración.
 */
vi.mock('swiper/react', () => ({
    Swiper: ({
        children,
        slidesPerView,
        pagination,
        navigation,
    }: {
        children: React.ReactNode;
        slidesPerView?: number;
        pagination?: boolean;
        navigation?: boolean;
    }) =>
        React.createElement(
            'div',
            {
                'data-testid': 'swiper-mock',
                'data-slides-per-view': slidesPerView,
                'data-pagination': String(pagination),
                'data-navigation': String(navigation),
            },
            children
        ),
    SwiperSlide: ({ children }: { children: React.ReactNode }) =>
        React.createElement('div', { 'data-testid': 'swiper-slide-mock' }, children),
}));

// Mock de los módulos de Swiper para evitar importaciones innecesarias durante las pruebas.
vi.mock('swiper/modules', () => ({
    Pagination: 'Pagination',
    Navigation: 'Navigation',
}));
