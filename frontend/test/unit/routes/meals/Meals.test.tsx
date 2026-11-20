import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Meals from '../../../../src/routes/meals/Meals';
import * as useFetchCategoriesModule from '../../../../src/routes/hooks/useFetchCategories';

describe('Meals Route', () => {
    it('should render CategoryLayout with fetched meal categories', () => {
        vi.spyOn(useFetchCategoriesModule, 'useFetchCategories').mockReturnValueOnce({
            categories: [
                {
                    idCategory: '1',
                    strCategory: 'Beef',
                    strCategoryDescription: 'Beef dishes',
                    strCategoryThumb: 'https://example.com/beef.jpg',
                },
            ],
            error: null,
        });

        render(
            <MemoryRouter>
                <Meals />
            </MemoryRouter>
        );

        expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
        expect(screen.getByRole('heading', { name: 'Meals' })).toBeInTheDocument();
        expect(screen.getByText('Beef')).toBeInTheDocument();
    });

    it('should display an error message when fetching categories fails', () => {
        vi.spyOn(useFetchCategoriesModule, 'useFetchCategories').mockReturnValueOnce({
            categories: null,
            error: 'Error in fetchCategories',
        });

        render(
            <MemoryRouter>
                <Meals />
            </MemoryRouter>
        );

        expect(screen.getByText('Error : Error in fetchCategories')).toBeInTheDocument();
    });
});
