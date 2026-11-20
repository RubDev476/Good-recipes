/**
 * Prueba de integración: Flujo de autenticación entre Login y Register (`AuthFlow.test.tsx`).
 *
 * Qué se prueba:
 * - Navegación bidireccional entre las rutas `/login` y `/register`.
 * - Cambio de vista utilizando tanto los botones de pestaña internos del componente `Auth` (`login` / `register`)
 *   como los enlaces superiores del `Header` (`Login` / `Register`).
 */
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import Root from '../../src/routes/Root';
import Login from '../../src/routes/Login';
import Register from '../../src/routes/Register';

describe('Integration: Authentication Flow', () => {
    it('should allow switching between Login and Register views via Header and Auth form toggle links', () => {
        const router = createMemoryRouter(
            [
                {
                    path: '/',
                    element: <Root />,
                    children: [
                        { path: '/login', element: <Login /> },
                        { path: '/register', element: <Register /> },
                    ],
                },
            ],
            { initialEntries: ['/login'] }
        );

        render(<RouterProvider router={router} />);

        // 1. Inicia en la pantalla de Login
        expect(screen.getByRole('heading', { name: 'Welcome back' })).toBeInTheDocument();
        expect(screen.getByText('Sign in to your account to continue')).toBeInTheDocument();

        // 2. Cambia a Register usando el selector interno del formulario Auth
        fireEvent.click(screen.getByRole('link', { name: 'register' }));

        expect(screen.getByRole('heading', { name: 'Create account' })).toBeInTheDocument();
        expect(screen.getByText('Join the Good Recipes community')).toBeInTheDocument();
        expect(screen.getByText('Terms of Service')).toBeInTheDocument();

        // 3. Regresa a Login usando el selector interno del formulario Auth
        fireEvent.click(screen.getByRole('link', { name: 'login' }));

        expect(screen.getByRole('heading', { name: 'Welcome back' })).toBeInTheDocument();

        // 4. Navega nuevamente a Register desde el botón del Header
        fireEvent.click(screen.getByRole('link', { name: 'Register' }));

        expect(screen.getByRole('heading', { name: 'Create account' })).toBeInTheDocument();
    });
});
