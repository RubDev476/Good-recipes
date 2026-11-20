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
        // 1. Mock getCategories response for /meals
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

        // 2. Mock getRecipes response for /meals/category/Chicken
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

        // 3. Mock getRecipe response for /meals/recipe/52772
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

        // Step 1: Categories page renders "Chicken"
        await waitFor(() => {
            expect(screen.getByText('Chicken')).toBeInTheDocument();
        });

        // Click on the Chicken category card
        fireEvent.click(screen.getByRole('link', { name: /Chicken/i }));

        // Step 2: Category page renders "Teriyaki Chicken Casserole"
        await waitFor(() => {
            expect(screen.getByText('Teriyaki Chicken Casserole')).toBeInTheDocument();
        });
        expect(screen.getByRole('heading', { name: 'Chicken' })).toBeInTheDocument();

        // Click on the recipe card
        fireEvent.click(screen.getByRole('link', { name: /Teriyaki Chicken Casserole/i }));

        // Step 3: Recipe detail page renders ingredients and instructions
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

        // Step 4: Interact with ingredient checklist
        fireEvent.click(screen.getByText('Soy Sauce - 3/4 cup'));
        expect(screen.getByText('1 / 2 Checked')).toBeInTheDocument();
    });
});
