import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Cocktails from '../../../../src/routes/cocktails/Cocktails';
import * as useFetchCategoriesModule from '../../../../src/routes/hooks/useFetchCategories';

describe('Cocktails Route', () => {
    it('should render CategoryLayout with fetched cocktail categories', () => {
        vi.spyOn(useFetchCategoriesModule, 'useFetchCategories').mockReturnValueOnce({
            categories: [
                {
                    idCategory: '1',
                    strCategory: 'Cocktail',
                    strCategoryDescription: 'Mixed drinks',
                    strCategoryThumb: 'https://example.com/cocktail.jpg',
                },
            ],
            error: null,
        });

        render(
            <MemoryRouter>
                <Cocktails />
            </MemoryRouter>
        );

        expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
        expect(screen.getByRole('heading', { name: 'Cocktails' })).toBeInTheDocument();
        expect(screen.getByText('Cocktail')).toBeInTheDocument();
    });

    it('should display an error message when fetching cocktail categories fails', () => {
        vi.spyOn(useFetchCategoriesModule, 'useFetchCategories').mockReturnValueOnce({
            categories: null,
            error: 'Error in fetchCategories',
        });

        render(
            <MemoryRouter>
                <Cocktails />
            </MemoryRouter>
        );

        expect(screen.getByText('Error : Error in fetchCategories')).toBeInTheDocument();
    });
});
