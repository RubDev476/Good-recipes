/**
 * Pruebas unitarias para la ruta `CategoryMeals` (`src/routes/meals/Category.tsx`).
 *
 * Qué se prueba:
 * - Que muestre el componente `Loader` mientras la petición asíncrona está en curso.
 * - Que extraiga el nombre de la categoría del cuarto segmento del `pathname` (`/meals/category/Chicken` -> `Chicken`).
 * - Que consulte `getRecipes` con la URL de filtro de TheMealDB y renderice las tarjetas en `RecipesLayout`.
 */
import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import CategoryMeals from '../../../../src/routes/meals/Category';
import * as apiActions from '../../../../src/api/api-actions';

vi.mock('../../../../src/api/api-actions', () => ({
    getRecipes: vi.fn(),
}));

describe('CategoryMeals Route', () => {
    it('should show loader initially and render meal recipes for the category in the URL path', async () => {
        const mockRecipes = [
            {
                idMeal: '52772',
                strMeal: 'Teriyaki Chicken Casserole',
                strMealThumb: 'https://example.com/teriyaki.jpg',
            },
        ];

        vi.mocked(apiActions.getRecipes).mockResolvedValueOnce(mockRecipes);

        const { container } = render(
            <MemoryRouter initialEntries={['/meals/category/Chicken']}>
                <CategoryMeals />
            </MemoryRouter>
        );

        // Antes de que la promesa se resuelva, debe mostrarse el indicador de carga.
        expect(container.querySelector('.loader')).toBeInTheDocument();

        // Una vez resuelta la promesa, aparece la receta en pantalla.
        await waitFor(() => {
            expect(screen.getByText('Teriyaki Chicken Casserole')).toBeInTheDocument();
        });

        expect(screen.getByRole('heading', { name: 'Chicken' })).toBeInTheDocument();
        expect(apiActions.getRecipes).toHaveBeenCalledWith(
            'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken'
        );
    });
});
