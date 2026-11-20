/**
 * Prueba de integración: Flujo completo de descubrimiento y visualización de cócteles (`CocktailsFlow.test.tsx`).
 *
 * Qué se prueba:
 * - Carga inicial de las categorías estáticas de cócteles en `/cocktails`.
 * - Navegación hacia una categoría cuyo nombre contiene una barra `/` ("Coffee / Tea"):
 *   - `CategoryLayout` codifica la URL como `/cocktails/category/Coffee _ Tea`.
 *   - `CategoryCocktails` revierte el `_` a `/` para consultar correctamente el endpoint de TheCocktailDB.
 * - Selección de una bebida ("Frappé") y visualización de sus ingredientes e instrucciones en `/cocktails/recipe/12768`.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import Root from '../../src/routes/Root';
import { Cocktails, CategoryCocktails, RecipeCocktail } from '../../src/routes/cocktails';

describe('Integration: Cocktails Discovery & Recipe Flow', () => {
    const fetchMock = vi.fn();

    beforeEach(() => {
        vi.stubGlobal('fetch', fetchMock);
    });

    afterEach(() => {
        vi.unstubAllGlobals();
    });

    it('should browse static cocktail categories, handle slash-encoded category routes, and display cocktail details', async () => {
        // 1. Respuesta simulada de getRecipes para /cocktails/category/Coffee _ Tea
        // (Nota: getCategories para cócteles no usa fetch porque devuelve el arreglo estático COCKTAILS).
        fetchMock.mockResolvedValueOnce({
            json: vi.fn().mockResolvedValueOnce({
                drinks: [
                    {
                        idDrink: '12768',
                        strDrink: 'Frappé',
                        strDrinkThumb: 'https://example.com/frappe.jpg',
                    },
                ],
            }),
        });

        // 2. Respuesta simulada de getRecipe para /cocktails/recipe/12768
        fetchMock.mockResolvedValueOnce({
            json: vi.fn().mockResolvedValueOnce({
                drinks: [
                    {
                        idDrink: '12768',
                        strDrink: 'Frappé',
                        strCategory: 'Coffee / Tea',
                        strDrinkThumb: 'https://example.com/frappe.jpg',
                        strInstructions: 'Blend coffee and milk with ice. Serve cold.',
                        strIngredient1: 'Espresso',
                        strMeasure1: '2 shots',
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
                        { path: '/cocktails', element: <Cocktails /> },
                        { path: '/cocktails/category/:category', element: <CategoryCocktails /> },
                        { path: '/cocktails/recipe/:IdRecipe', element: <RecipeCocktail /> },
                    ],
                },
            ],
            { initialEntries: ['/cocktails'] }
        );

        render(<RouterProvider router={router} />);

        // Paso 1: Se muestran las categorías estáticas de cócteles
        await waitFor(() => {
            expect(screen.getByText('Coffee / Tea')).toBeInTheDocument();
        });

        // El usuario selecciona la categoría "Coffee / Tea"
        fireEvent.click(screen.getByRole('link', { name: /Coffee \/ Tea/i }));

        // Paso 2: CategoryCocktails consulta las bebidas de la categoría y muestra "Frappé"
        await waitFor(() => {
            expect(screen.getByText('Frappé')).toBeInTheDocument();
        });

        // El usuario selecciona la tarjeta de "Frappé"
        fireEvent.click(screen.getByRole('link', { name: /Frappé/i }));

        // Paso 3: Se renderiza la página de detalle del cóctel con sus ingredientes y pasos
        await waitFor(() => {
            expect(screen.getByRole('heading', { name: 'Frappé' })).toBeInTheDocument();
        });

        expect(screen.getByText('Espresso - 2 shots')).toBeInTheDocument();
        expect(screen.getByText('Blend coffee and milk with ice')).toBeInTheDocument();
        expect(screen.getByText('Serve cold')).toBeInTheDocument();
    });
});
