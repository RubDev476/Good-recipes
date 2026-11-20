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
        // 1. Mock getRecipes response for /cocktails/category/Coffee _ Tea
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

        // 2. Mock getRecipe response for /cocktails/recipe/12768
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

        // Step 1: Static cocktail categories are displayed
        await waitFor(() => {
            expect(screen.getByText('Coffee / Tea')).toBeInTheDocument();
        });

        // Click on "Coffee / Tea" category card
        fireEvent.click(screen.getByRole('link', { name: /Coffee \/ Tea/i }));

        // Step 2: CategoryCocktails fetches drinks for "Coffee / Tea" and displays "Frappé"
        await waitFor(() => {
            expect(screen.getByText('Frappé')).toBeInTheDocument();
        });

        // Click on the "Frappé" recipe card
        fireEvent.click(screen.getByRole('link', { name: /Frappé/i }));

        // Step 3: Cocktail recipe details page renders
        await waitFor(() => {
            expect(screen.getByRole('heading', { name: 'Frappé' })).toBeInTheDocument();
        });

        expect(screen.getByText('Espresso - 2 shots')).toBeInTheDocument();
        expect(screen.getByText('Blend coffee and milk with ice')).toBeInTheDocument();
        expect(screen.getByText('Serve cold')).toBeInTheDocument();
    });
});
