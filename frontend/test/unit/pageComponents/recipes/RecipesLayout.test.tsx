import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import RecipesLayout from '../../../../src/pageComponents/recipes/RecipesLayout.tsx';
import type { ApiCategory } from '../../../../src/types/api-types';

describe('RecipesLayout', () => {
    it('should render a CardRecipe for every valid meal or drink item', () => {
        const recipes: ApiCategory[] = [
            {
                idMeal: '52772',
                strMeal: 'Teriyaki Chicken',
                strMealThumb: 'https://example.com/teriyaki.jpg',
                strCountry: 'Japan',
            },
            {
                idMeal: '52813',
                strMeal: 'Kentucky Fried Chicken',
                strMealThumb: 'https://example.com/kfc.jpg',
                strCountry: 'United States',
            },
        ];

        render(
            <MemoryRouter>
                <RecipesLayout tag="meals" title="Chicken" recipes={recipes} />
            </MemoryRouter>
        );

        expect(screen.getByText('Teriyaki Chicken')).toBeInTheDocument();
        expect(screen.getByText('Kentucky Fried Chicken')).toBeInTheDocument();
        expect(screen.getAllByRole('article')).toHaveLength(2);
    });

    it('should ignore recipes with missing id, title, or thumbnail image', () => {
        const recipes: ApiCategory[] = [
            {
                idDrink: '11007',
                strDrink: 'Margarita',
                // Missing strDrinkThumb
            },
            {
                idDrink: '178336',
                strDrink: 'Blueberry Mojito',
                strDrinkThumb: 'https://example.com/mojito.jpg',
            },
        ];

        render(
            <MemoryRouter>
                <RecipesLayout tag="cocktails" title="Cocktails" recipes={recipes} />
            </MemoryRouter>
        );

        expect(screen.getAllByRole('article')).toHaveLength(1);
        expect(screen.getByText('Blueberry Mojito')).toBeInTheDocument();
        expect(screen.queryByText('Margarita')).not.toBeInTheDocument();
    });
});
