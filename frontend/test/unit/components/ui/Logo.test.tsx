/**
 * Pruebas unitarias para el componente `Logo` (`src/components/ui/Logo.tsx`).
 *
 * Qué se prueba:
 * - Que renderice correctamente el elemento `<svg>` vectorial.
 * - Que propague la propiedad `fill` al grupo `<g>` interno del SVG.
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Logo from '../../../../src/components/ui/Logo';

describe('Logo', () => {
    it('should render an SVG element with the provided fill color', () => {
        const { container } = render(<Logo fill="#ff5500" />);

        const svgElement = container.querySelector('svg');
        const gElement = container.querySelector('g');

        expect(svgElement).toBeInTheDocument();
        expect(gElement).toHaveAttribute('fill', '#ff5500');
    });
});
