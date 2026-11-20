/**
 * Pruebas unitarias para el componente `Loader` (`src/components/ui/Loader.tsx`).
 *
 * Qué se prueba:
 * - Que renderice el contenedor de página completa con las clases `.loader-page` y `.all-center`.
 * - Que incluya internamente el indicador visual `.loader` del componente `Spinner`.
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Loader from '../../../../src/components/ui/Loader';

describe('Loader', () => {
    it('should render the loader wrapper and spinner element', () => {
        const { container } = render(<Loader />);

        const loaderPage = container.querySelector('.loader-page');
        const spinnerElement = container.querySelector('.loader');

        expect(loaderPage).toBeInTheDocument();
        expect(loaderPage).toHaveClass('all-center');
        expect(spinnerElement).toBeInTheDocument();
    });
});
