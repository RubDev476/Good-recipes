/**
 * Pruebas unitarias para el componente `ViewMoreSection` (`src/pageComponents/main/ViewMoreSection/ViewMoreSection.tsx`).
 *
 * Qué se prueba:
 * - Renderizado del título `<h2>` y subtítulo "Browse by meal category".
 * - Enlaces individuales para cada categoría proporcionada en `nameCategories`.
 * - Enlace "View more categories" que redirige a la vista general `/${tag}`.
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import ViewMoreSection from '../../../../../src/pageComponents/main/ViewMoreSection/ViewMoreSection';

describe('ViewMoreSection', () => {
    it('should render title, subtitle, category links, and view more link', () => {
        const categories = ['Chicken', 'Beef', 'Vegetarian'];

        render(
            <MemoryRouter>
                <ViewMoreSection
                    title="What are you going to cook today?"
                    tag="meals"
                    nameCategories={categories}
                />
            </MemoryRouter>
        );

        expect(
            screen.getByRole('heading', { name: 'What are you going to cook today?' })
        ).toBeInTheDocument();
        expect(screen.getByText('Browse by meal category')).toBeInTheDocument();

        categories.forEach((category) => {
            const link = screen.getByRole('link', { name: category });
            expect(link).toHaveAttribute('href', `/meals/category/${category}`);
        });

        const viewMoreLink = screen.getByRole('link', { name: 'View more categories' });
        expect(viewMoreLink).toHaveAttribute('href', '/meals');
    });
});
