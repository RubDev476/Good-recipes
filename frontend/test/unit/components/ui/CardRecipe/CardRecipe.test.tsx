import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { CardRecipe } from '../../../../../src/components/ui/CardRecipe/CardRecipe';

describe('CardRecipe', () => {
    it('should render meal card with title, image, country badge, and link to meal recipe', () => {
        render(
            <MemoryRouter>
                <CardRecipe
                    id="52772"
                    title="Teriyaki Chicken"
                    img="https://example.com/teriyaki.jpg"
                    tag="meals"
                    country="Japan"
                />
            </MemoryRouter>
        );

        expect(screen.getByText('Teriyaki Chicken')).toBeInTheDocument();
        expect(screen.getByText('Japan')).toBeInTheDocument();
        expect(screen.getByText('meals')).toBeInTheDocument();

        const image = screen.getByRole('img', { name: 'Teriyaki Chicken' });
        expect(image).toHaveAttribute('src', 'https://example.com/teriyaki.jpg');

        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', '/meals/recipe/52772');
    });

    it('should render cocktail card without country badge and link to cocktail recipe', () => {
        render(
            <MemoryRouter>
                <CardRecipe
                    id="11007"
                    title="Margarita"
                    img="https://example.com/margarita.jpg"
                    tag="cocktails"
                    country="Mexico"
                />
            </MemoryRouter>
        );

        expect(screen.getByText('Margarita')).toBeInTheDocument();
        expect(screen.getByText('cocktails')).toBeInTheDocument();
        expect(screen.queryByText('Mexico')).not.toBeInTheDocument();

        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', '/cocktails/recipe/11007');
    });
});
