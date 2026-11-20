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

        expect(container.querySelector('.loader')).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByText('Teriyaki Chicken Casserole')).toBeInTheDocument();
        });

        expect(screen.getByRole('heading', { name: 'Chicken' })).toBeInTheDocument();
        expect(apiActions.getRecipes).toHaveBeenCalledWith(
            'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken'
        );
    });
});
