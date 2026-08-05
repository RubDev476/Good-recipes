import { useState, useEffect, useCallback } from 'react';
import type { SliderFeatures } from '../types/global';

const sliderResize = (): SliderFeatures => {
    const width = window.innerWidth;
    const features: SliderFeatures = { slidesView: 3, pagination: true, navigation: false };

    if (width < 480) {
        features.slidesView = 1;
    } else if (width < 940) {
        features.slidesView = 2;
    } else if (width >= 1280) {
        features.pagination = false;
        features.navigation = true;
    }

    return features;
};

function useSliderFeatures() {
    const [features, setFeatures] = useState<null | SliderFeatures>(null);

    const getSliderFeatures = useCallback(() => {
        const size = sliderResize();
        setFeatures(size);
    }, []);

    useEffect(() => {
        getSliderFeatures();

        const handleResize = () => getSliderFeatures();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [getSliderFeatures]);

    return { features };
}

export default useSliderFeatures;
