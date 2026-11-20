import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Footer } from '../../../../../src/components/layout/footer/Footer';

describe('Footer', () => {
    const renderFooter = () =>
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );

    it('should render the brand name and description', () => {
        renderFooter();

        expect(screen.getByText(/Good/i)).toBeInTheDocument();
        expect(screen.getByText('Recipes')).toBeInTheDocument();
        expect(
            screen.getByText(
                /Discover thousands of recipes crafted by passionate home cooks and professional chefs\./i
            )
        ).toBeInTheDocument();
    });

    it('should render all social media buttons with accessible labels', () => {
        renderFooter();

        const socialNetworks = ['instagram', 'facebook', 'youtube', 'pinterest', 'tiktok'];
        socialNetworks.forEach((network) => {
            expect(screen.getByRole('button', { name: network })).toBeInTheDocument();
        });
    });

    it('should render the Site Map navigation links with proper targets', () => {
        renderFooter();

        expect(screen.getByText('Site Map')).toBeInTheDocument();

        const mealLink = screen.getByRole('link', { name: 'Meal Recipes' });
        const cocktailLink = screen.getByRole('link', { name: 'Cocktail Recipes' });
        const favouritesLink = screen.getByRole('link', { name: 'Favourites' });

        expect(mealLink).toHaveAttribute('href', '/meals');
        expect(cocktailLink).toHaveAttribute('href', '/cocktails');
        expect(favouritesLink).toHaveAttribute('href', '/');
    });

    it('should display the copyright notice', () => {
        renderFooter();

        expect(screen.getByText('©2026 Created by RubDeveloper')).toBeInTheDocument();
    });
});
