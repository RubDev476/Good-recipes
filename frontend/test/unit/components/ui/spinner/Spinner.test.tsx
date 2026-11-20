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
