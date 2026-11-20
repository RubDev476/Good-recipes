/**
 * Pruebas unitarias para el componente `MainContent` (`src/pageComponents/main/mainContent/MainContent.tsx`).
 *
 * Qué se prueba:
 * - El saludo dinámico basado en la hora del sistema (`new Date().getHours()`):
 *   - Antes de las 12:00 -> "Good morning"
 *   - Entre 12:00 y 16:59 -> "Good afternoon"
 *   - 17:00 en adelante -> "Good evening"
 * - Renderizado de la imagen Hero, mensaje de bienvenida y botones de acción hacia `/meals` y `/cocktails`.
 */
import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import MainContent from '../../../../../src/pageComponents/main/mainContent/MainContent';

describe('MainContent', () => {
    afterEach(() => {
        // Restaura el reloj real del sistema después de cada test que utilice fake timers.
        vi.useRealTimers();
    });

    const renderMainContent = () =>
        render(
            <MemoryRouter>
                <MainContent />
            </MemoryRouter>
        );

    it('should display "Good morning" greeting when current hour is before 12:00', () => {
        // Congela la hora del sistema a las 09:30 AM para verificar el saludo matutino.
        vi.useFakeTimers();
        vi.setSystemTime(new Date(2026, 5, 15, 9, 30, 0));

        renderMainContent();

        expect(screen.getByText('Good morning')).toBeInTheDocument();
    });

    it('should display "Good afternoon" greeting when current hour is between 12:00 and 16:59', () => {
        // Congela la hora del sistema a las 14:00 (2:00 PM).
        vi.useFakeTimers();
        vi.setSystemTime(new Date(2026, 5, 15, 14, 0, 0));

        renderMainContent();

        expect(screen.getByText('Good afternoon')).toBeInTheDocument();
    });

    it('should display "Good evening" greeting when current hour is 17:00 or later', () => {
        // Congela la hora del sistema a las 20:15 (8:15 PM).
        vi.useFakeTimers();
        vi.setSystemTime(new Date(2026, 5, 15, 20, 15, 0));

        renderMainContent();

        expect(screen.getByText('Good evening')).toBeInTheDocument();
    });

    it('should render hero welcome text and navigation links to meals and cocktails', () => {
        renderMainContent();

        expect(screen.getByText('Good Recipes')).toBeInTheDocument();
        expect(screen.getByRole('img', { name: 'Hero' })).toHaveAttribute(
            'src',
            '/images/hero.avif'
        );
        expect(screen.getByRole('link', { name: 'Explore recipes' })).toHaveAttribute(
            'href',
            '/meals'
        );
        expect(screen.getByRole('link', { name: 'View cocktails' })).toHaveAttribute(
            'href',
            '/cocktails'
        );
    });
});
