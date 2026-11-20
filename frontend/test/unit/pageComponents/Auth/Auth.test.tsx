import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Auth from '../../../../src/pageComponents/Auth/Auth';

describe('Auth', () => {
    it('should render the login form when mode is "login"', () => {
        render(
            <MemoryRouter>
                <Auth mode="login" />
            </MemoryRouter>
        );

        expect(screen.getByRole('heading', { name: 'Welcome back' })).toBeInTheDocument();
        expect(screen.getByText('Sign in to your account to continue')).toBeInTheDocument();
        expect(screen.getByText('Continue with')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Continue with Google/i })).toBeInTheDocument();
        expect(screen.queryByText(/Terms of Service/i)).not.toBeInTheDocument();
    });

    it('should render the register form and terms notice when mode is "register"', () => {
        render(
            <MemoryRouter>
                <Auth mode="register" />
            </MemoryRouter>
        );

        expect(screen.getByRole('heading', { name: 'Create account' })).toBeInTheDocument();
        expect(screen.getByText('Join the Good Recipes community')).toBeInTheDocument();
        expect(screen.getByText('Register with')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'google-btn' })).toBeInTheDocument();
        expect(screen.getByText('Terms of Service')).toBeInTheDocument();
        expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    });

    it('should render mode switch links for login and register', () => {
        render(
            <MemoryRouter>
                <Auth mode="login" />
            </MemoryRouter>
        );

        const loginToggle = screen.getByRole('link', { name: 'login' });
        const registerToggle = screen.getByRole('link', { name: 'register' });

        expect(loginToggle).toHaveAttribute('href', '/login');
        expect(registerToggle).toHaveAttribute('href', '/register');
    });
});
