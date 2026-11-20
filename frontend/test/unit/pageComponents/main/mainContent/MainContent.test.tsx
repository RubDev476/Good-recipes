import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import MainContent from '../../../../../src/pageComponents/main/mainContent/MainContent';

describe('MainContent', () => {
    afterEach(() => {
        vi.useRealTimers();
    });

    const renderMainContent = () =>
        render(
            <MemoryRouter>
                <MainContent />
            </MemoryRouter>
        );

    it('should display "Good morning" greeting when current hour is before 12:00', () => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date(2026, 5, 15, 9, 30, 0));

        renderMainContent();

        expect(screen.getByText('Good morning')).toBeInTheDocument();
    });

    it('should display "Good afternoon" greeting when current hour is between 12:00 and 16:59', () => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date(2026, 5, 15, 14, 0, 0));

        renderMainContent();

        expect(screen.getByText('Good afternoon')).toBeInTheDocument();
    });

    it('should display "Good evening" greeting when current hour is 17:00 or later', () => {
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
