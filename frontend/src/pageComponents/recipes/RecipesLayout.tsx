import {RecipesContainer} from "./recipesLayout.ts";

import {CardRecipe} from "../../components/ui/CardRecipe/CardRecipe.tsx";
import type {SectionSliderProps} from "../../types/props.ts";

export default function RecipesLayout({tag, recipes}: SectionSliderProps) {
    return (
        <>
            <RecipesContainer className={'container'}>
                {recipes.map(recipe => {
                    const id = recipe.idMeal ?? recipe.idDrink;
                    const title = recipe.strMeal ?? recipe.strDrink;
                    const img = recipe.strMealThumb ?? recipe.strDrinkThumb;
                    const country = recipe.strCountry;

                    if (!id || !title || !img) return null;

                    return (
                        <CardRecipe key={id} tag={tag} img={img} title={title} id={id} country={country} />
                    )
                })}
            </RecipesContainer>
        </>
    )
}