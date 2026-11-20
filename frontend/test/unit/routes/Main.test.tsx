import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Main from '../../../src/routes/Main';

describe('Main Route', () => {
    afterEach(() => {
        vi.useRealTimers();
    });

    const renderMain = () =>
        render(
            <MemoryRouter>
                <Main />
            </MemoryRouter>
        );

    it('should scroll to top and render morning section when time is before 12:00', () => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date(2026, 5, 15, 8, 0, 0));

        renderMain();

        expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
        expect(screen.getByRole('heading', { name: 'Good Morning' })).toBeInTheDocument();
        expect(screen.getByText('Bread omelette')).toBeInTheDocument();
    });

    it('should render afternoon section when time is between 12:00 and 16:59', () => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date(2026, 5, 15, 15, 0, 0));

        renderMain();

        expect(screen.getByRole('heading', { name: 'Good Afternoon' })).toBeInTheDocument();
        expect(screen.getByText('Kentucky Fried Chicken')).toBeInTheDocument();
    });

    it('should render evening section and static sections when time is 17:00 or later', () => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date(2026, 5, 15, 21, 0, 0));

        renderMain();

        expect(screen.getByRole('heading', { name: 'Good Evening' })).toBeInTheDocument();
        expect(screen.getByText('Blueberry Mojito')).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'For coffee lovers' })).toBeInTheDocument();
        expect(
            screen.getByRole('heading', { name: 'What are you going to cook today?' })
        ).toBeInTheDocument();
        expect(
            screen.getByRole('heading', { name: 'The best cocktails for every moment' })
        ).toBeInTheDocument();
    });
});
