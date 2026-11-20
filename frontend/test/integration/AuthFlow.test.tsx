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

        // Starts on Login page
        expect(screen.getByRole('heading', { name: 'Welcome back' })).toBeInTheDocument();
        expect(screen.getByText('Sign in to your account to continue')).toBeInTheDocument();

        // Click the "register" mode toggle inside the Auth card
        fireEvent.click(screen.getByRole('link', { name: 'register' }));

        expect(screen.getByRole('heading', { name: 'Create account' })).toBeInTheDocument();
        expect(screen.getByText('Join the Good Recipes community')).toBeInTheDocument();
        expect(screen.getByText('Terms of Service')).toBeInTheDocument();

        // Click the "login" mode toggle inside the Auth card to go back
        fireEvent.click(screen.getByRole('link', { name: 'login' }));

        expect(screen.getByRole('heading', { name: 'Welcome back' })).toBeInTheDocument();

        // Click "Register" in the Header
        fireEvent.click(screen.getByRole('link', { name: 'Register' }));

        expect(screen.getByRole('heading', { name: 'Create account' })).toBeInTheDocument();
    });
});
