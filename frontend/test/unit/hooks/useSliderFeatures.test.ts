import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useSliderFeatures from '../../../src/hooks/useSliderFeatures';

describe('useSliderFeatures', () => {
    const setWindowWidth = (width: number) => {
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: width,
        });
    };

    beforeEach(() => {
        setWindowWidth(1024);
    });

    it('should return 1 slide per view when window width is less than 480px', () => {
        setWindowWidth(375);

        const { result } = renderHook(() => useSliderFeatures());

        expect(result.current.features).toEqual({
            slidesView: 1,
            pagination: true,
            navigation: false,
        });
    });

    it('should return 2 slides per view when window width is between 480px and 939px', () => {
        setWindowWidth(768);

        const { result } = renderHook(() => useSliderFeatures());

        expect(result.current.features).toEqual({
            slidesView: 2,
            pagination: true,
            navigation: false,
        });
    });

    it('should return 3 slides per view when window width is 940px or greater', () => {
        setWindowWidth(1280);

        const { result } = renderHook(() => useSliderFeatures());

        expect(result.current.features).toEqual({
            slidesView: 3,
            pagination: true,
            navigation: false,
        });
    });

    it('should update slider features dynamically when the window is resized', () => {
        setWindowWidth(1200);
        const { result } = renderHook(() => useSliderFeatures());

        expect(result.current.features?.slidesView).toBe(3);

        act(() => {
            setWindowWidth(400);
            window.dispatchEvent(new Event('resize'));
        });

        expect(result.current.features?.slidesView).toBe(1);

        act(() => {
            setWindowWidth(600);
            window.dispatchEvent(new Event('resize'));
        });

        expect(result.current.features?.slidesView).toBe(2);
    });
});
