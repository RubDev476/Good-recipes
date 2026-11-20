/**
 * Pruebas unitarias para la ruta `RecipeMeal` (`src/routes/meals/Recipe.tsx`).
 *
 * Qué se prueba:
 * - Que muestre inicialmente el componente `Loader`.
 * - Que extraiga el ID de la receta de `location.pathname.split('/')[3]` (`/meals/recipe/52772` -> `52772`).
 * - Que llame a `getRecipe('meals', '52772')` y renderice el detalle con `RecipeComponent`.
 */
import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import RecipeMeal from '../../../../src/routes/meals/Recipe';
import * as apiActions from '../../../../src/api/api-actions';

vi.mock('../../../../src/api/api-actions', () => ({
    getRecipe: vi.fn(),
}));

describe('RecipeMeal Route', () => {
    it('should show loader initially and render the meal recipe once loaded', async () => {
        const mockRecipe = {
            idMeal: '52772',
            strMeal: 'Teriyaki Chicken Casserole',
            strCategory: 'Chicken',
            strCountry: 'Japanese',
            strMealThumb: 'https://example.com/teriyaki.jpg',
            strInstructions: 'Preheat oven. Bake chicken.',
            strIngredient1: 'Chicken',
            strMeasure1: '500g',
        };

        vi.mocked(apiActions.getRecipe).mockResolvedValueOnce(mockRecipe);

        const { container } = render(
            <MemoryRouter initialEntries={['/meals/recipe/52772']}>
                <RecipeMeal />
            </MemoryRouter>
        );

        expect(container.querySelector('.loader')).toBeInTheDocument();

        await waitFor(() => {
            expect(
                screen.getByRole('heading', { name: 'Teriyaki Chicken Casserole' })
            ).toBeInTheDocument();
        });

        expect(apiActions.getRecipe).toHaveBeenCalledWith('meals', '52772');
        expect(screen.getByText('Chicken - 500g')).toBeInTheDocument();
    });
});
