/**
 * Pruebas unitarias para el layout raíz `Root` (`src/routes/Root.tsx`).
 *
 * Qué se prueba:
 * - Que estructure la aplicación renderizando permanentemente el `Header` arriba,
 *   el contenido de la ruta hija activa mediante `<Outlet />` en el centro, y el `Footer` abajo.
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router';
import Root from '../../../src/routes/Root';

describe('Root Route', () => {
    it('should render the Header, child route Outlet content, and Footer', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<Root />}>
                        <Route index element={<div>Main Outlet Content</div>} />
                    </Route>
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByRole('link', { name: 'Login' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Meals/i, hidden: true })).toHaveAttribute(
            'href',
            '/meals'
        );
        expect(screen.getByText('Main Outlet Content')).toBeInTheDocument();
        expect(screen.getByText('©2026 Created by RubDeveloper')).toBeInTheDocument();
    });
});
