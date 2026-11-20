import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import Root from '../../src/routes/Root';
import Main from '../../src/routes/Main';
import Login from '../../src/routes/Login';
import Register from '../../src/routes/Register';
import { Meals, CategoryMeals, RecipeMeals } from '../../src/routes/meals';
import { Cocktails, CategoryCocktails, RecipeCocktail } from '../../src/routes/cocktails';

const routesConfig = [
    {
        path: '/',
        element: <Root />,
        errorElement: <div>Not Found</div>,
        children: [
            { path: '/', element: <Main /> },
            { path: '/meals', element: <Meals /> },
            { path: '/meals/category/:category', element: <CategoryMeals /> },
            { path: '/meals/recipe/:IdRecipe', element: <RecipeMeals /> },
            { path: '/cocktails', element: <Cocktails /> },
            { path: '/cocktails/category/:category', element: <CategoryCocktails /> },
            { path: '/cocktails/recipe/:IdRecipe', element: <RecipeCocktail /> },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },
        ],
    },
];

describe('Integration: App Navigation & Routing', () => {
    const fetchMock = vi.fn();

    beforeEach(() => {
        vi.stubGlobal('fetch', fetchMock);
    });

    afterEach(() => {
        vi.unstubAllGlobals();
    });

    it('should render the home page with Header, Main content, and Footer, and navigate across primary sections', async () => {
        fetchMock.mockResolvedValueOnce({
            json: vi.fn().mockResolvedValueOnce({
                categories: [
                    {
                        idCategory: '1',
                        strCategory: 'Chicken',
                        strCategoryDescription: 'Chicken dishes',
                        strCategoryThumb: 'https://example.com/chicken.jpg',
                    },
                ],
            }),
        });

        const router = createMemoryRouter(routesConfig, { initialEntries: ['/'] });
        render(<RouterProvider router={router} />);

        expect(screen.getByText(/Welcome to/i)).toBeInTheDocument();
        expect(screen.getByText('©2026 Created by RubDeveloper')).toBeInTheDocument();

        const header = screen.getByRole('banner');

        // Navigate to Meals via Header
        const mealsNavLink = within(header).getByRole('link', { name: /Meals/i, hidden: true });
        fireEvent.click(mealsNavLink);

        await waitFor(() => {
            expect(screen.getByRole('heading', { name: 'Meals' })).toBeInTheDocument();
        });
        expect(mealsNavLink).toHaveClass('current-path-color');

        // Navigate to Cocktails via Header
        const cocktailsNavLink = within(header).getByRole('link', {
            name: /Cocktails/i,
            hidden: true,
        });
        fireEvent.click(cocktailsNavLink);

        await waitFor(() => {
            expect(screen.getByRole('heading', { name: 'Cocktails' })).toBeInTheDocument();
        });
        expect(cocktailsNavLink).toHaveClass('current-path-color');
        expect(mealsNavLink).not.toHaveClass('current-path-color');
    });

    it('should render Not Found error boundary when navigating to an unknown route', () => {
        const router = createMemoryRouter(routesConfig, {
            initialEntries: ['/unknown-route-404'],
        });
        render(<RouterProvider router={router} />);

        expect(screen.getByText('Not Found')).toBeInTheDocument();
    });
});
