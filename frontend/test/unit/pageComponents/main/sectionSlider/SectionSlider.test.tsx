/**
 * Pruebas unitarias para el componente `SectionSlider` (`src/pageComponents/main/sectionSlider/SectionSlider.tsx`).
 *
 * Qué se prueba:
 * - Estado de carga: cuando `useSliderFeatures()` aún devuelve `{ features: null }`, debe mostrar el `Spinner`.
 * - Estado listo: cuando `features` tiene la configuración del carrusel, renderiza el título `<h2>` y el componente `Slider`.
 */
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import SectionSlider from '../../../../../src/pageComponents/main/sectionSlider/SectionSlider';
import * as useSliderFeaturesModule from '../../../../../src/hooks/useSliderFeatures';

describe('SectionSlider', () => {
    const mockRecipes = [
        {
            idMeal: '53076',
            strMeal: 'Bread omelette',
            strMealThumb: 'https://example.com/omelette.jpg',
            strCountry: 'India',
        },
    ];

    it('should render Spinner when slider features are not available yet', () => {
        // Espía el hook `useSliderFeatures` forzando una respuesta nula para simular el estado previo al cálculo de pantalla.
        vi.spyOn(useSliderFeaturesModule, 'default').mockReturnValueOnce({ features: null });

        const { container } = render(
            <MemoryRouter>
                <SectionSlider title="Good Morning" tag="meals" recipes={mockRecipes} />
            </MemoryRouter>
        );

        expect(container.querySelector('.loader')).toBeInTheDocument();
        expect(screen.queryByRole('heading', { name: 'Good Morning' })).not.toBeInTheDocument();
    });

    it('should render section title and Slider when slider features are available', () => {
        vi.spyOn(useSliderFeaturesModule, 'default').mockReturnValueOnce({
            features: { slidesView: 3, pagination: true, navigation: false },
        });

        render(
            <MemoryRouter>
                <SectionSlider title="Good Morning" tag="meals" recipes={mockRecipes} />
            </MemoryRouter>
        );

        expect(screen.getByRole('heading', { name: 'Good Morning' })).toBeInTheDocument();
        expect(screen.getByText('Bread omelette')).toBeInTheDocument();
    });
});
