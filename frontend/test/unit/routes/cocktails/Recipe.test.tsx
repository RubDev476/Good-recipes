/**
 * Pruebas unitarias para la ruta `RecipeCocktail` (`src/routes/cocktails/Recipe.tsx`).
 *
 * Qué se prueba:
 * - Que muestre el `Loader` mientras se obtiene la información del cóctel.
 * - Que extraiga el ID del cóctel desde la URL (`/cocktails/recipe/11007` -> `11007`).
 * - Que invoque `getRecipe('cocktails', '11007')` y muestre el componente `RecipeComponent`.
 */
import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import RecipeCocktail from '../../../../src/routes/cocktails/Recipe';
import * as apiActions from '../../../../src/api/api-actions';

vi.mock('../../../../src/api/api-actions', () => ({
    getRecipe: vi.fn(),
}));

describe('RecipeCocktail Route', () => {
    it('should show loader initially and render the cocktail recipe once loaded', async () => {
        const mockCocktail = {
            idDrink: '11007',
            strDrink: 'Margarita',
            strCategory: 'Ordinary Drink',
            strDrinkThumb: 'https://example.com/margarita.jpg',
            strInstructions: 'Rub the rim of the glass. Shake with ice.',
            strIngredient1: 'Tequila',
            strMeasure1: '1 1/2 oz',
        };

        vi.mocked(apiActions.getRecipe).mockResolvedValueOnce(mockCocktail);

        const { container } = render(
            <MemoryRouter initialEntries={['/cocktails/recipe/11007']}>
                <RecipeCocktail />
            </MemoryRouter>
        );

        expect(container.querySelector('.loader')).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByRole('heading', { name: 'Margarita' })).toBeInTheDocument();
        });

        expect(apiActions.getRecipe).toHaveBeenCalledWith('cocktails', '11007');
        expect(screen.getByText('Tequila - 1 1/2 oz')).toBeInTheDocument();
    });
});
