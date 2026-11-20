/**
 * Prueba de integración: Flujo completo de descubrimiento y visualización de comidas (`MealsFlow.test.tsx`).
 *
 * Qué se prueba:
 * - La interacción real entre `Meals` -> `useFetchCategories` -> `api-actions` -> `CategoryLayout` ->
 *   `CategoryMeals` -> `RecipesLayout` -> `CardRecipe` -> `RecipeMeals` -> `RecipeComponent`.
 * - Solo se intercepta `window.fetch` en la frontera de red para simular las 3 respuestas de TheMealDB:
 *   1. Listado de categorías (`/meals`)
 *   2. Listado de platillos de la categoría seleccionada (`/meals/category/Chicken`)
 *   3. Detalle completo de la receta seleccionada (`/meals/recipe/52772`) y marcado interactivo de ingredientes.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import Root from '../../src/routes/Root';
import { Meals, CategoryMeals, RecipeMeals } from '../../src/routes/meals';

describe('Integration: Meals Discovery & Recipe Flow', () => {
    const fetchMock = vi.fn();

    beforeEach(() => {
        vi.stubGlobal('fetch', fetchMock);
    });

    afterEach(() => {
        vi.unstubAllGlobals();
    });

    it('should allow a user to browse meal categories, select a category, view a recipe, and check ingredients', async () => {
        // 1. Respuesta simulada de getCategories para /meals
        fetchMock.mockResolvedValueOnce({
            json: vi.fn().mockResolvedValueOnce({
                categories: [
                    {
                        idCategory: '1',
                        strCategory: 'Chicken',
                        strCategoryDescription: 'Chicken meals',
                        strCategoryThumb: 'https://example.com/chicken-cat.jpg',
                    },
                ],
            }),
        });

        // 2. Respuesta simulada de getRecipes para /meals/category/Chicken
        fetchMock.mockResolvedValueOnce({
            json: vi.fn().mockResolvedValueOnce({
                meals: [
                    {
                        idMeal: '52772',
                        strMeal: 'Teriyaki Chicken Casserole',
                        strMealThumb: 'https://example.com/teriyaki.jpg',
                    },
                ],
            }),
        });

        // 3. Respuesta simulada de getRecipe para /meals/recipe/52772
        fetchMock.mockResolvedValueOnce({
            json: vi.fn().mockResolvedValueOnce({
                meals: [
                    {
                        idMeal: '52772',
                        strMeal: 'Teriyaki Chicken Casserole',
                        strCategory: 'Chicken',
                        strCountry: 'Japan',
                        strMealThumb: 'https://example.com/teriyaki.jpg',
                        strInstructions: 'Preheat oven to 350 degrees. Bake for 30 minutes.',
                        strIngredient1: 'Soy Sauce',
                        strMeasure1: '3/4 cup',
                        strIngredient2: 'Chicken Breast',
                        strMeasure2: '500g',
                    },
                ],
            }),
        });

        const router = createMemoryRouter(
            [
                {
                    path: '/',
                    element: <Root />,
                    children: [
                        { path: '/meals', element: <Meals /> },
                        { path: '/meals/category/:category', element: <CategoryMeals /> },
                        { path: '/meals/recipe/:IdRecipe', element: <RecipeMeals /> },
                    ],
                },
            ],
            { initialEntries: ['/meals'] }
        );

        render(<RouterProvider router={router} />);

        // Paso 1: Se cargan y muestran las categorías de comidas
        await waitFor(() => {
            expect(screen.getByText('Chicken')).toBeInTheDocument();
        });

        // El usuario hace clic en la categoría "Chicken"
        fireEvent.click(screen.getByRole('link', { name: /Chicken/i }));

        // Paso 2: Se carga la vista de la categoría y aparece la tarjeta "Teriyaki Chicken Casserole"
        await waitFor(() => {
            expect(screen.getByText('Teriyaki Chicken Casserole')).toBeInTheDocument();
        });
        expect(screen.getByRole('heading', { name: 'Chicken' })).toBeInTheDocument();

        // El usuario hace clic en la tarjeta de la receta
        fireEvent.click(screen.getByRole('link', { name: /Teriyaki Chicken Casserole/i }));

        // Paso 3: Se carga el detalle completo de la receta con ingredientes y pasos de preparación
        await waitFor(() => {
            expect(screen.getByRole('heading', { name: 'How to Cook' })).toBeInTheDocument();
        });

        expect(
            screen.getByRole('heading', { name: 'Teriyaki Chicken Casserole' })
        ).toBeInTheDocument();
        expect(screen.getByText('Soy Sauce - 3/4 cup')).toBeInTheDocument();
        expect(screen.getByText('Chicken Breast - 500g')).toBeInTheDocument();
        expect(screen.getByText('Preheat oven to 350 degrees')).toBeInTheDocument();
        expect(screen.getByText('Bake for 30 minutes')).toBeInTheDocument();

        // Paso 4: El usuario marca un ingrediente como completado
        fireEvent.click(screen.getByText('Soy Sauce - 3/4 cup'));
        expect(screen.getByText('1 / 2 Checked')).toBeInTheDocument();
    });
});
