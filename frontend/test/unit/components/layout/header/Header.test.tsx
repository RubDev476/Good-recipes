/**
 * Pruebas unitarias para el componente `Header` (`src/components/layout/header/Header.tsx`).
 *
 * Qué se prueba:
 * - Presencia de los enlaces principales (`/meals`, `/cocktails`, `/login`, `/register`).
 * - Aplicación condicional de la clase CSS `current-path-color` en el enlace de "Meals"
 *   o "Cocktails" dependiendo de la ruta activa en `useLocation()`.
 *
 * Nota técnica sobre `{ hidden: true }`:
 * En `header.styles.ts`, el contenedor `Routes` tiene `display: none` por defecto (mobile-first)
 * y cambia a `display: flex` en `@media screen and (min-width: 640px)`. Como `jsdom` no evalúa
 * media queries de viewport, usamos `{ hidden: true }` en `getByRole` para incluir esos enlaces.
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Header } from '../../../../../src/components/layout/header/Header';

describe('Header', () => {
    // Permite inicializar el MemoryRouter en cualquier ruta para probar `useLocation()`.
    //Envolverlos en <MemoryRouter initialEntries={['/ruta']}> simula la URL actual en memoria sin necesitar un navegador real.
    const renderHeader = (initialRoute = '/') =>
        render(
            <MemoryRouter initialEntries={[initialRoute]}>
                <Header />
            </MemoryRouter>
        );

    it('should render brand logo link and primary navigation links', () => {
        renderHeader();

        expect(screen.getByRole('link', { name: /Meals/i, hidden: true })).toHaveAttribute(
            'href',
            '/meals'
        );
        expect(screen.getByRole('link', { name: /Cocktails/i, hidden: true })).toHaveAttribute(
            'href',
            '/cocktails'
        );
        expect(screen.getByRole('link', { name: 'Login' })).toHaveAttribute('href', '/login');
        expect(screen.getByRole('link', { name: 'Register' })).toHaveAttribute('href', '/register');
    });

    it('should apply active class to Meals link when current path includes "meals"', () => {
        renderHeader('/meals/category/Chicken');

        const mealsLink = screen.getByRole('link', { name: /Meals/i, hidden: true });
        const cocktailsLink = screen.getByRole('link', { name: /Cocktails/i, hidden: true });

        expect(mealsLink).toHaveClass('current-path-color');
        expect(cocktailsLink).not.toHaveClass('current-path-color');
    });

    it('should apply active class to Cocktails link when current path includes "cocktails"', () => {
        renderHeader('/cocktails');

        const mealsLink = screen.getByRole('link', { name: /Meals/i, hidden: true });
        const cocktailsLink = screen.getByRole('link', { name: /Cocktails/i, hidden: true });

        expect(cocktailsLink).toHaveClass('current-path-color');
        expect(mealsLink).not.toHaveClass('current-path-color');
    });
});
