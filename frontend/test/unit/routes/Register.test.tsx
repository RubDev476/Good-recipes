/**
 * Pruebas unitarias para la ruta `Register` (`src/routes/Register.tsx`).
 *
 * Qué se prueba:
 * - Que monte el componente `Auth` configurado con `mode="register"`.
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Register from '../../../src/routes/Register';

describe('Register Route', () => {
    it('should render the Auth component in register mode', () => {
        render(
            <MemoryRouter>
                <Register />
            </MemoryRouter>
        );

        expect(screen.getByRole('heading', { name: 'Create account' })).toBeInTheDocument();
        expect(screen.getByText('Join the Good Recipes community')).toBeInTheDocument();
    });
});
