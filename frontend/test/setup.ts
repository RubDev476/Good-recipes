import React from 'react';
import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, beforeEach, vi } from 'vitest';

beforeEach(() => {
    window.scrollTo = vi.fn();
});

afterEach(() => {
    cleanup();
    vi.clearAllMocks();
});

//============================= M O C K S ===============
vi.mock('swiper/react', () => ({
    Swiper: ({
        children,
        slidesPerView,
        pagination,
        navigation,
    }: {
        children: React.ReactNode;
        slidesPerView?: number;
        pagination?: boolean;
        navigation?: boolean;
    }) =>
        React.createElement(
            'div',
            {
                'data-testid': 'swiper-mock',
                'data-slides-per-view': slidesPerView,
                'data-pagination': String(pagination),
                'data-navigation': String(navigation),
            },
            children
        ),
    SwiperSlide: ({ children }: { children: React.ReactNode }) =>
        React.createElement('div', { 'data-testid': 'swiper-slide-mock' }, children),
}));

vi.mock('swiper/modules', () => ({
    Pagination: 'Pagination',
    Navigation: 'Navigation',
}));
