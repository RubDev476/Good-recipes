import useSliderFeatures from "../../../hooks/useSliderFeatures";

import Slider from "../slider/Slider";
import Spinner from "../../../components/ui/spinner/Spinner";

import type { SectionSliderProps } from "../../../types/props";

import { Section } from "./sectionSlider.styles";

export default function SectionSlider({tag, recipes, title}: SectionSliderProps) {
    const { features } = useSliderFeatures();

    if(!features) return <Spinner />;

    return (
        <Section>
            <div className="container">
                <h2 className="slider-title font-display">{title}</h2>
            </div>

            <Slider recipes={recipes} tag={tag} sliderFeatures={features} />
        </Section>
    )
}
