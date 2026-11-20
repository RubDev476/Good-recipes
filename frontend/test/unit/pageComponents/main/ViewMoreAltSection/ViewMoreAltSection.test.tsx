/**
 * Pruebas unitarias para el componente `ViewMoreAltSection` (`src/pageComponents/main/ViewMoreAltSection/ViewMoreAltSection.tsx`).
 *
 * Qué se prueba:
 * - Renderizado de la etiqueta "Drinks & Cocktails", el título principal y la descripción.
 * - Creación dinámica de enlaces hacia cada categoría recibida en `nameCategories` (`/${tag}/category/${nameCategory}`).
 * - Enlace general "View more categories" hacia `/${tag}` e imagen ilustrativa de la sección.
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import ViewMoreAltSection from '../../../../../src/pageComponents/main/ViewMoreAltSection/ViewMoreAltSection';

describe('ViewMoreAltSection', () => {
    it('should render title, category links, view more link, and section image', () => {
        const categories = ['Soft Drink', 'Beer', 'Cocktail'];

        render(
            <MemoryRouter>
                <ViewMoreAltSection
                    title="The best cocktails for every moment"
                    tag="cocktails"
                    nameCategories={categories}
                />
            </MemoryRouter>
        );

        expect(screen.getByText('Drinks & Cocktails')).toBeInTheDocument();
        expect(
            screen.getByRole('heading', { name: 'The best cocktails for every moment' })
        ).toBeInTheDocument();

        categories.forEach((category) => {
            const link = screen.getByRole('link', { name: category });
            expect(link).toHaveAttribute('href', `/cocktails/category/${category}`);
        });

        const viewMoreLink = screen.getByRole('link', { name: 'View more categories' });
        expect(viewMoreLink).toHaveAttribute('href', '/cocktails');

        const image = screen.getByRole('img', { name: 'cocktails' });
        expect(image).toHaveAttribute('src', '/images/vw-section.avif');
    });
});
