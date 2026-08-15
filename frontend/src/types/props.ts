import type{ ApiCategory, TagRecipe, ApiRecipe } from "./api-types";
import type { SliderFeatures } from "./global";

export type SliderProps = {
    recipes: ApiCategory[];
    tag: TagRecipe;
    sliderFeatures: SliderFeatures;
}

export type SectionSliderProps = Pick<SliderProps, 'recipes' | 'tag'> & {title: string};

export type CardRecipeProps = Pick<SectionSliderProps, 'tag'> & {
    img: string;
    id: string;
    title: string;
    country?: string;
}

export type ViewMoreSectionProps = Pick<SectionSliderProps, 'tag'> & {
    nameCategories: string[];
    title: string;
};

export type RecipeProps = {
    recipe: ApiRecipe;
}