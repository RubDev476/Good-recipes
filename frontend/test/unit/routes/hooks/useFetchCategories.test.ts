import { describe, it, expect, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useFetchCategories } from '../../../../src/routes/hooks/useFetchCategories';
import * as apiActions from '../../../../src/api/api-actions';

vi.mock('../../../../src/api/api-actions', () => ({
    getCategories: vi.fn(),
}));

describe('useFetchCategories', () => {
    it('should fetch and return categories on successful API call', async () => {
        const mockCategories = [
            {
                idCategory: '1',
                strCategory: 'Beef',
                strCategoryDescription: 'Beef meals',
                strCategoryThumb: 'https://example.com/beef.jpg',
            },
            {
                idCategory: '2',
                strCategory: 'Chicken',
                strCategoryDescription: 'Chicken meals',
                strCategoryThumb: 'https://example.com/chicken.jpg',
            },
        ];

        vi.mocked(apiActions.getCategories).mockResolvedValueOnce(mockCategories);

        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        const { result } = renderHook(() => useFetchCategories(url));

        await waitFor(() => {
            expect(result.current.categories).toEqual(mockCategories);
        });

        expect(result.current.error).toBeNull();
        expect(apiActions.getCategories).toHaveBeenCalledWith(url);
    });

    it('should set categories to null and populate error message when fetching fails', async () => {
        vi.mocked(apiActions.getCategories).mockRejectedValueOnce(new Error('Network failure'));

        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        const { result } = renderHook(() => useFetchCategories(url));

        await waitFor(() => {
            expect(result.current.error).toBe('Error in fetchCategories');
        });

        expect(result.current.categories).toBeNull();
    });
});
