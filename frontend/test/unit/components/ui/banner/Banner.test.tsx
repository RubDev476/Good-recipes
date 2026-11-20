import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Banner from '../../../../../src/components/ui/banner/Banner';

describe('Banner', () => {
    it('should render title, image, and "Browse" subtitle when tag is "categories"', () => {
        render(<Banner title="Meals" img="/images/banner-m.avif" tag="categories" />);

        expect(screen.getByRole('heading', { name: 'Meals' })).toBeInTheDocument();
        expect(screen.getByText('Browse')).toBeInTheDocument();

        const image = screen.getByRole('img', { name: 'Category banner' });
        expect(image).toHaveAttribute('src', '/images/banner-m.avif');
    });

    it('should not render "Browse" subtitle when tag is "category"', () => {
        render(<Banner title="Chicken" img="/images/banner-m.avif" tag="category" />);

        expect(screen.getByRole('heading', { name: 'Chicken' })).toBeInTheDocument();
        expect(screen.queryByText('Browse')).not.toBeInTheDocument();
    });
});
