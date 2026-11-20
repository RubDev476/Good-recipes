import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Login from '../../../src/routes/Login';

describe('Login Route', () => {
    it('should render the Auth component in login mode', () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );

        expect(screen.getByRole('heading', { name: 'Welcome back' })).toBeInTheDocument();
        expect(screen.getByText('Sign in to your account to continue')).toBeInTheDocument();
    });
});
