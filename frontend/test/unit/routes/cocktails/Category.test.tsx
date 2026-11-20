/**
 * Pruebas unitarias para la ruta `CategoryCocktails` (`src/routes/cocktails/Category.tsx`).
 *
 * Qué se prueba:
 * - Estado de carga inicial (`Loader`).
 * - Decodificación del nombre de la categoría en la URL: convierte `_` nuevamente en `/` y `%20` en espacios
 *   para mostrar el título legible en el `Banner` (ej. `Coffee%20_%20Tea` -> `Coffee / Tea`) y consultar la API.
 * - Renderizado de las bebidas obtenidas en `RecipesLayout`.
 */
import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import CategoryCocktails from '../../../../src/routes/cocktails/Category';
import * as apiActions from '../../../../src/api/api-actions';

vi.mock('../../../../src/api/api-actions', () => ({
    getRecipes: vi.fn(),
}));

describe('CategoryCocktails Route', () => {
    it('should normalize underscore and encoded spaces in category name and render fetched drinks', async () => {
        const mockDrinks = [
            {
                idDrink: '12768',
                strDrink: 'Frappé',
                strDrinkThumb: 'https://example.com/frappe.jpg',
            },
        ];

        vi.mocked(apiActions.getRecipes).mockResolvedValueOnce(mockDrinks);

        const { container } = render(
            <MemoryRouter initialEntries={['/cocktails/category/Coffee%20_%20Tea']}>
                <CategoryCocktails />
            </MemoryRouter>
        );

        expect(container.querySelector('.loader')).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByText('Frappé')).toBeInTheDocument();
        });

        expect(screen.getByRole('heading', { name: 'Coffee / Tea' })).toBeInTheDocument();
        expect(apiActions.getRecipes).toHaveBeenCalledWith(
            'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Coffee%20/%20Tea'
        );
    });
});
