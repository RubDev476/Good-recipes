/**
 * Pruebas unitarias para el componente `CategoryLayout` (`src/pageComponents/Category/CategoryLayout.tsx`).
 *
 * Qué se prueba:
 * - Renderizado del `Banner` principal con el título de la sección ("Meals" o "Cocktails") y el subtítulo "Browse".
 * - Generación de las tarjetas de categoría y sanitización de barras `/` por guiones bajos `_` en las URLs
 *   (para evitar que React Router interprete la barra como un segmento adicional de ruta).
 * - Manejo seguro cuando `cards` es `null` (renderiza solo el Banner sin lanzar errores).
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { CategoryLayout } from '../../../../src/pageComponents/Category/CategoryLayout';
import type { ApiCategories } from '../../../../src/types/api-types';

describe('CategoryLayout', () => {
    const mockCards: ApiCategories[] = [
        {
            idCategory: '1',
            strCategory: 'Beef',
            strCategoryDescription: 'Beef dishes',
            strCategoryThumb: 'https://example.com/beef.jpg',
        },
        {
            idCategory: '2',
            strCategory: 'Coffee / Tea',
            strCategoryDescription: 'Coffee and tea drinks',
            strCategoryThumb: 'https://example.com/coffee.jpg',
        },
    ];

    it('should render the banner and all category cards with sanitized URLs', () => {
        render(
            <MemoryRouter>
                <CategoryLayout
                    title="Cocktails"
                    cards={mockCards}
                    bannerImg="/images/banner-c.avif"
                />
            </MemoryRouter>
        );

        expect(screen.getByRole('heading', { name: 'Cocktails' })).toBeInTheDocument();
        expect(screen.getByText('Browse')).toBeInTheDocument();

        const beefLink = screen.getByRole('link', { name: /Beef/i });
        expect(beefLink).toHaveAttribute('href', '/cocktails/category/Beef');

        const coffeeLink = screen.getByRole('link', { name: /Coffee \/ Tea/i });
        expect(coffeeLink).toHaveAttribute('href', '/cocktails/category/Coffee _ Tea');

        expect(screen.getByRole('img', { name: 'Beef' })).toHaveAttribute(
            'src',
            'https://example.com/beef.jpg'
        );
    });

    it('should render the banner without cards when cards prop is null', () => {
        render(
            <MemoryRouter>
                <CategoryLayout title="Meals" cards={null} bannerImg="/images/banner-m.avif" />
            </MemoryRouter>
        );

        expect(screen.getByRole('heading', { name: 'Meals' })).toBeInTheDocument();
        expect(screen.queryAllByRole('link')).toHaveLength(0);
    });
});
