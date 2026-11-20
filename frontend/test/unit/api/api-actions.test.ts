/**
 * Pruebas unitarias para la capa de acceso a datos (`src/api/api-actions.ts`).
 *
 * Qué se prueba:
 * - `getCategories`: Verifica que devuelva el arreglo estático de 11 categorías de cócteles
 *   sin hacer peticiones de red cuando la URL incluye "cocktail", y que use `fetch` para comidas.
 * - `getRecipes`: Verifica que retorne la lista de bebidas (`res.drinks`) o comidas (`res.meals`)
 *   dependiendo de la estructura JSON que responda la API.
 * - `getRecipe`: Verifica que construya la URL de búsqueda por ID hacia TheMealDB o TheCocktailDB
 *   según el tipo (`meals` o `cocktails`) y devuelva el primer elemento del arreglo.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { getCategories, getRecipes, getRecipe } from '../../../src/api/api-actions';

describe('api-actions', () => {
    const fetchMock = vi.fn();

    beforeEach(() => {
        // Reemplaza la función global `fetch` por un mock antes de cada prueba para no hacer llamadas reales.
        vi.stubGlobal('fetch', fetchMock);
    });

    afterEach(() => {
        // Restaura las variables globales originales al finalizar cada prueba.
        vi.unstubAllGlobals();
    });

    describe('getCategories', () => {
        // Caso 1: URL de cócteles -> debe retornar la constante COCKTAILS local sin llamar a fetch.
        it('should return static cocktail categories without calling fetch when URL contains "cocktail"', async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const result = await getCategories(url);

            expect(fetchMock).not.toHaveBeenCalled();
            expect(result).toHaveLength(11);
            expect(result[0]).toMatchObject({
                idCategory: '1',
                strCategory: 'Cocktail',
            });
            expect(result[10]).toMatchObject({
                idCategory: '11',
                strCategory: 'Soft Drink',
            });
        });

        // Caso 2: URL de comidas -> debe invocar fetch(url) y retornar la propiedad `categories`.
        it('should fetch meal categories from API when URL does not contain "cocktail"', async () => {
            const mockCategories = [
                {
                    idCategory: '1',
                    strCategory: 'Beef',
                    strCategoryDescription: 'Beef dishes',
                    strCategoryThumb: 'https://example.com/beef.jpg',
                },
            ];

            fetchMock.mockResolvedValueOnce({
                json: vi.fn().mockResolvedValueOnce({ categories: mockCategories }),
            });

            const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
            const result = await getCategories(url);

            expect(fetchMock).toHaveBeenCalledTimes(1);
            expect(fetchMock).toHaveBeenCalledWith(url);
            expect(result).toEqual(mockCategories);
        });
    });

    describe('getRecipes', () => {
        // Caso 1: La respuesta JSON trae `drinks` -> el operador nullish coalescing (`res.drinks ?? res.meals`) elige `drinks`.
        it('should return drinks array when the API response contains drinks', async () => {
            const mockDrinks = [
                { idDrink: '11007', strDrink: 'Margarita', strDrinkThumb: 'https://example.com/margarita.jpg' },
            ];

            fetchMock.mockResolvedValueOnce({
                json: vi.fn().mockResolvedValueOnce({ drinks: mockDrinks }),
            });

            const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';
            const result = await getRecipes(url);

            expect(fetchMock).toHaveBeenCalledWith(url);
            expect(result).toEqual(mockDrinks);
        });

        // Caso 2: La respuesta JSON no trae `drinks` sino `meals` -> retorna `res.meals`.
        it('should return meals array when the API response contains meals instead of drinks', async () => {
            const mockMeals = [
                { idMeal: '52772', strMeal: 'Teriyaki Chicken', strMealThumb: 'https://example.com/chicken.jpg' },
            ];

            fetchMock.mockResolvedValueOnce({
                json: vi.fn().mockResolvedValueOnce({ meals: mockMeals }),
            });

            const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken';
            const result = await getRecipes(url);

            expect(fetchMock).toHaveBeenCalledWith(url);
            expect(result).toEqual(mockMeals);
        });
    });

    describe('getRecipe', () => {
        // Caso 1: Búsqueda de detalle de comida por ID en TheMealDB (`res.meals[0]`).
        it('should fetch and return the first meal recipe when type is "meals"', async () => {
            const mockMeal = {
                idMeal: '52772',
                strMeal: 'Teriyaki Chicken Casserole',
                strInstructions: 'Preheat oven to 350 degrees.',
            };

            fetchMock.mockResolvedValueOnce({
                json: vi.fn().mockResolvedValueOnce({ meals: [mockMeal] }),
            });

            const result = await getRecipe('meals', '52772');

            expect(fetchMock).toHaveBeenCalledWith(
                'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772'
            );
            expect(result).toEqual(mockMeal);
        });

        // Caso 2: Búsqueda de detalle de cóctel por ID en TheCocktailDB (`res.drinks[0]`).
        it('should fetch and return the first cocktail recipe when type is "cocktails"', async () => {
            const mockDrink = {
                idDrink: '11007',
                strDrink: 'Margarita',
                strInstructions: 'Rub the rim of the glass with the lime slice.',
            };

            fetchMock.mockResolvedValueOnce({
                json: vi.fn().mockResolvedValueOnce({ drinks: [mockDrink] }),
            });

            const result = await getRecipe('cocktails', '11007');

            expect(fetchMock).toHaveBeenCalledWith(
                'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007'
            );
            expect(result).toEqual(mockDrink);
        });
    });
});
