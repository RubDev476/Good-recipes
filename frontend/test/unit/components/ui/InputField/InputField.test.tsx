import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { InputField } from '../../../../../src/components/ui/InputField/InputField';

describe('InputField', () => {
    it('should render label and input with provided attributes and default autoComplete="off"', () => {
        render(
            <InputField
                labelName="Email Address"
                fieldId="email-input"
                fieldType="email"
                fieldName="email"
                fieldPlaceholder="Enter your email"
            />
        );

        const input = screen.getByLabelText('Email Address');
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute('id', 'email-input');
        expect(input).toHaveAttribute('type', 'email');
        expect(input).toHaveAttribute('name', 'email');
        expect(input).toHaveAttribute('placeholder', 'Enter your email');
        expect(input).toHaveAttribute('autoComplete', 'off');
    });

    it('should allow overriding autoComplete and forward event handlers', () => {
        const handleChange = vi.fn();

        render(
            <InputField
                labelName="Username"
                fieldId="username-input"
                fieldType="text"
                fieldName="username"
                fieldPlaceholder="Enter your username"
                autoComplete="on"
                onChange={handleChange}
            />
        );

        const input = screen.getByLabelText('Username');
        expect(input).toHaveAttribute('autoComplete', 'on');

        fireEvent.change(input, { target: { value: 'chef_john' } });
        expect(handleChange).toHaveBeenCalledTimes(1);
    });
});
