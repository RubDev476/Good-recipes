import MainContent from "../pageComponents/main/mainContent/MainContent";
import SectionSlider from "../pageComponents/main/sectionSlider/SectionSlider";
import ViewMoreSection from "../pageComponents/main/ViewMoreSection/ViewMoreSection.tsx";
import ViewMoreAltSection from "../pageComponents/main/ViewMoreAltSection/ViewMoreAltSection.tsx";
import { CATEGORIES_SECTIONS, MAIN_RECIPES, RECIPES_SECTIONS } from "../data/mainRecipes";
import { useScrollToTop } from "../hooks/useScrollToTop";

export default function Main() {
    const hour = new Date().getHours();
    const time = hour < 12 ? 'morning' : hour < 17 ? 'afternoon' : 'evening';

    useScrollToTop();

    return (
        <>
            <MainContent />

            <SectionSlider
                title={'Good ' + time.charAt(0).toUpperCase() + time.slice(1)}
                tag={time === 'evening' ? 'cocktails' : 'meals'}
                recipes={MAIN_RECIPES[time]}
            />

            <SectionSlider title="For coffee lovers" tag="cocktails" recipes={RECIPES_SECTIONS.coffees} />

            <ViewMoreSection
                title={CATEGORIES_SECTIONS.meals.title}
                tag={CATEGORIES_SECTIONS.meals.tag}
                nameCategories={CATEGORIES_SECTIONS.meals.nameCategories}
            />

            <ViewMoreAltSection
                title={CATEGORIES_SECTIONS.cocktails.title}
                tag={CATEGORIES_SECTIONS.cocktails.tag}
                nameCategories={CATEGORIES_SECTIONS.cocktails.nameCategories}
            />
        </>
    );
}
