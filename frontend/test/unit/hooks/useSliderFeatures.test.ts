/**
 * Pruebas unitarias para el custom hook `useSliderFeatures` (`src/hooks/useSliderFeatures.ts`).
 *
 * Qué se prueba:
 * - Que el número de slides visibles (`slidesView`) se calcule correctamente según el ancho de `window.innerWidth`:
 *   - Menor a 480px -> 1 slide
 *   - Entre 480px y 939px -> 2 slides
 *   - 940px o más -> 3 slides
 * - Que el listener del evento `resize` en `window` actualice el estado reactivamente cuando cambia el tamaño de pantalla.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useSliderFeatures from '../../../src/hooks/useSliderFeatures';

describe('useSliderFeatures', () => {
    // Función auxiliar para modificar `window.innerWidth` en el entorno simulado de jsdom.
    const setWindowWidth = (width: number) => {
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: width,
        });
    };

    beforeEach(() => {
        setWindowWidth(1024);
    });

    it('should return 1 slide per view when window width is less than 480px', () => {
        setWindowWidth(375);

        const { result } = renderHook(() => useSliderFeatures());

        expect(result.current.features).toEqual({
            slidesView: 1,
            pagination: true,
            navigation: false,
        });
    });

    it('should return 2 slides per view when window width is between 480px and 939px', () => {
        setWindowWidth(768);

        const { result } = renderHook(() => useSliderFeatures());

        expect(result.current.features).toEqual({
            slidesView: 2,
            pagination: true,
            navigation: false,
        });
    });

    it('should return 3 slides per view when window width is 940px or greater', () => {
        setWindowWidth(1280);

        const { result } = renderHook(() => useSliderFeatures());

        expect(result.current.features).toEqual({
            slidesView: 3,
            pagination: true,
            navigation: false,
        });
    });

    it('should update slider features dynamically when the window is resized', () => {
        setWindowWidth(1200);
        const { result } = renderHook(() => useSliderFeatures());

        expect(result.current.features?.slidesView).toBe(3);

        // `act` envuelve eventos que provocan actualizaciones de estado en React.
        act(() => {
            setWindowWidth(400);
            window.dispatchEvent(new Event('resize'));
        });

        expect(result.current.features?.slidesView).toBe(1);

        act(() => {
            setWindowWidth(600);
            window.dispatchEvent(new Event('resize'));
        });

        expect(result.current.features?.slidesView).toBe(2);
    });
});
