/**
 * Pruebas unitarias para el componente `Slider` (`src/pageComponents/main/slider/Slider.tsx`).
 *
 * Qué se prueba:
 * - Que las propiedades de configuración (`slidesView`, `pagination`, `navigation`) se pasen correctamente a `Swiper`
 *   (verificadas mediante los atributos `data-*` definidos en el mock de `setup.ts`).
 * - Que se renderice un `SwiperSlide` con su `CardRecipe` por cada receta válida.
 * - Que la validación `if (!id || !title || !img) return null` descarte elementos con datos incompletos.
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Slider from '../../../../../src/pageComponents/main/slider/Slider';
import type { ApiCategory } from '../../../../../src/types/api-types';

describe('Slider', () => {
    const sliderFeatures = {
        slidesView: 3,
        pagination: true,
        navigation: false,
    };

    it('should render slides for valid recipes and pass slider configuration to Swiper', () => {
        const recipes: ApiCategory[] = [
            {
                idMeal: '53076',
                strMeal: 'Bread omelette',
                strMealThumb: 'https://example.com/omelette.jpg',
                strCountry: 'India',
            },
            {
                idMeal: '52965',
                strMeal: 'Breakfast Potatoes',
                strMealThumb: 'https://example.com/potatoes.jpg',
                strCountry: 'Canada',
            },
        ];

        render(
            <MemoryRouter>
                <Slider recipes={recipes} tag="meals" sliderFeatures={sliderFeatures} />
            </MemoryRouter>
        );

        const swiper = screen.getByTestId('swiper-mock');
        expect(swiper).toHaveAttribute('data-slides-per-view', '3');
        expect(swiper).toHaveAttribute('data-pagination', 'true');
        expect(swiper).toHaveAttribute('data-navigation', 'false');

        expect(screen.getAllByTestId('swiper-slide-mock')).toHaveLength(2);
        expect(screen.getByText('Bread omelette')).toBeInTheDocument();
        expect(screen.getByText('Breakfast Potatoes')).toBeInTheDocument();
    });

    it('should skip rendering recipes that are missing id, title, or image', () => {
        const incompleteRecipes: ApiCategory[] = [
            {
                idMeal: '53076',
                strMeal: 'Bread omelette',
                // Falta strMealThumb -> debe ser ignorado por Slider
            },
            {
                idDrink: '11007',
                strDrink: 'Margarita',
                strDrinkThumb: 'https://example.com/margarita.jpg',
            },
        ];

        render(
            <MemoryRouter>
                <Slider recipes={incompleteRecipes} tag="cocktails" sliderFeatures={sliderFeatures} />
            </MemoryRouter>
        );

        expect(screen.getAllByTestId('swiper-slide-mock')).toHaveLength(1);
        expect(screen.queryByText('Bread omelette')).not.toBeInTheDocument();
        expect(screen.getByText('Margarita')).toBeInTheDocument();
    });
});
