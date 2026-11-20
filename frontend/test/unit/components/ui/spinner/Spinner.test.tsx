/**
 * Pruebas unitarias para el componente `Spinner` (`src/components/ui/spinner/Spinner.tsx`).
 *
 * Qué se prueba:
 * - Que renderice el contenedor estilizado junto con el `<div className="loader">` que anima la carga.
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Spinner from '../../../../../src/components/ui/spinner/Spinner';

describe('Spinner', () => {
    it('should render the spinner loader element', () => {
        const { container } = render(<Spinner />);

        const loaderDiv = container.querySelector('.loader');
        expect(loaderDiv).toBeInTheDocument();
    });
});
