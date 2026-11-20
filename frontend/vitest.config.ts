/**
 * Configuración de Vitest para el proyecto frontend.
 * - `environment: 'jsdom'`: Simula el DOM del navegador en Node.js.
 * - `setupFiles: './test/setup.ts'`: Ejecuta los mocks globales y matchers antes de cada suite.
 * - `include`: Define el patrón de búsqueda de pruebas unitarias y de integración dentro de `test/`.
 */
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './test/setup.ts',
        include: ['test/**/*.{test,spec}.{ts,tsx}'],
        css: true,
    },
});
