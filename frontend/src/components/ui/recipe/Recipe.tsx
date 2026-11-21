import {
    BgCont,
    ChekedAmount,
    HeroBackCategoriesBtn,
    HeroCont,
    HeroImg,
    HeroImgGradient,
    HeroInfoCont,
    HeroRecipeTitle,
    HeroTag,
    HeroTagsCategoryBtn,
    HeroTagsCont,
    IngredientLi,
    IngredientUl,
    InstructionNumber,
    InstructionsCont,
    InstructionStep,
    ListIngredientsHeading,
    RecipeCont,
    RecipeGridCont,
    RecipeIngredientsCont,
    RecipeInstructionsCont,
    RecipeMainCont,
    SidebarCont,
    SidebarHeading,
    SidebarImg,
    SidebarImgCont,
    SidebarLink,
    SidebarStickyCont,
} from "../../../components/ui/recipe/recipe.styles";

import type {RecipeProps} from "../../../types/props.ts";
import { useState } from "react";

const relatedRecipes = [
    {id: 53076, title: 'Bread omelette', img: 'https://www.themealdb.com/images/media/meals/hqaejl1695738653.jpg', tag: 'meals'},
    {id: 178336, title: 'Blueberry Mojito', img: 'https://www.thecocktaildb.com/images/media/drink/07iep51598719977.jpg', tag: 'cocktails'},
    {id: 12768, title: 'Frappé', img: 'https://www.thecocktaildb.com/images/media/drink/vqwryq1441245927.jpg', tag: 'cocktails'},
    {id: 52813, title: 'Kentucky Fried Chicken', img: 'https://www.themealdb.com/images/media/meals/xqusqy1487348868.jpg', tag: 'meals'},
];

export const RecipeComponent = ({recipe, tag}: RecipeProps) => {
    const recipeKey = recipe.idMeal ?? recipe.idDrink ?? recipe.strMeal ?? recipe.strDrink ?? 'recipe';
    const [checkedState, setCheckedState] = useState<{ key: string; items: Set<number> }>({
        key: recipeKey,
        items: new Set(),
    });
    const checked = checkedState.key === recipeKey ? checkedState.items : new Set<number>();

    const ingredients: string[] = [];
    for (let i = 1; i <= 20; i++) {
        const rawIngredient = recipe[`strIngredient${i}`];
        const ingredient = typeof rawIngredient === 'string' ? rawIngredient.trim() : '';

        if (ingredient) {
            const rawMeasure = recipe[`strMeasure${i}`];
            const quantity = typeof rawMeasure === 'string' ? rawMeasure.trim() : '';

            ingredients.push(quantity ? `${ingredient} - ${quantity}` : ingredient);
        }
    }

    const splitInstructions = (steps: string): string[] => {
        return steps
            .split(".")
            .map(step => step.trim())
            .filter(step => step.length > 0);
    };

    const toggleIngredient = (i: number) => {
        setCheckedState(prev => {
            const base = prev.key === recipeKey ? prev.items : new Set<number>();
            const next = new Set(base);
            if (next.has(i)) {
                next.delete(i);
            } else {
                next.add(i);
            }
            return { key: recipeKey, items: next };
        });
    };

    const origin = recipe.strArea ?? recipe.strCountry;
    const instructions = splitInstructions(recipe.strInstructions ?? '');
    const recipeTitle = recipe.strMeal ?? recipe.strDrink ?? 'Recipe image';
    const heroImageSrc = recipe.strMealThumb ?? recipe.strDrinkThumb;
    
    return (
        <BgCont>
            <HeroCont>
                {heroImageSrc && <HeroImg src={heroImageSrc} alt={recipeTitle} />}

                <HeroImgGradient />

                <HeroInfoCont>
                    <HeroBackCategoriesBtn
                        to={`/${tag}`}
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                        Back to categories
                    </HeroBackCategoriesBtn>

                    <HeroTagsCont>
                        <HeroTagsCategoryBtn
                            to={`/${tag}/category/${recipe.strCategory?.replace('/', '_')}`}
                        >
                            {recipe.strCategory}
                        </HeroTagsCategoryBtn>

                        <HeroTag>
                            {tag === 'meals' ? (
                                <>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2M7 2v20M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
                                    </svg>
                                </>
                            ) : (
                                <>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 22h8M12 11v11M3 3l9 8 9-8M5 3h14"></path></svg>
                                </>
                            )}

                            {tag}
                        </HeroTag>

                        {origin && (
                            <HeroTag>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                                </svg>

                                {origin}
                            </HeroTag>
                        )}
                    </HeroTagsCont>

                    <HeroRecipeTitle className="font-display">{recipe.strMeal ?? recipe.strDrink}</HeroRecipeTitle>
                </HeroInfoCont>
            </HeroCont>

            <RecipeCont>
                <RecipeGridCont>
                    <RecipeMainCont>
                        <RecipeIngredientsCont>
                            <ListIngredientsHeading>
                                <h2 className="font-display">Ingredients</h2>

                                {checked.size > 0 && <ChekedAmount>{checked.size} / {ingredients.length} Checked</ChekedAmount>}
                            </ListIngredientsHeading>

                            <IngredientUl>
                                {ingredients.map((ingredient, index) => (
                                    <IngredientLi
                                        key={index}
                                    >
                                        <input
                                            type="checkbox"
                                            name="checkDone"
                                            id={`ingredient-${index}`}
                                            checked={checked.has(index)}
                                            onChange={() => toggleIngredient(index)}
                                        />
                                        <label
                                            htmlFor={`ingredient-${index}`}
                                            className="checkDone"
                                            style={{ color: checked.has(index) ? 'var(--muted-foreground)' : 'var(--foreground)', textDecoration: checked.has(index) ? 'line-through' : 'none' }}
                                        >
                                            <span>{ingredient}</span>
                                        </label>
                                    </IngredientLi>
                                ))}
                            </IngredientUl>
                        </RecipeIngredientsCont>

                        <RecipeInstructionsCont>
                            <h2 className="font-display">How to Cook</h2>

                            <div>
                                {instructions.map((step, index) => (
                                    <InstructionsCont key={index}>
                                        <InstructionNumber className="font-display">{index + 1}</InstructionNumber>
                                        <InstructionStep>{step}</InstructionStep>
                                    </InstructionsCont>
                                ))}
                            </div>
                        </RecipeInstructionsCont>
                    </RecipeMainCont>

                    <SidebarCont>
                        <SidebarStickyCont>
                            <SidebarHeading>
                                <h3 className="font-display">Recipes that may interest you</h3>
                            </SidebarHeading>

                            <div>
                                {relatedRecipes.map((recipe) => (
                                    <SidebarLink
                                        key={recipe.id}
                                        to={`/${recipe.tag}/recipe/${recipe.id}`}
                                    >
                                        <SidebarImgCont>
                                            <SidebarImg src={recipe.img} alt={recipe.title} />
                                        </SidebarImgCont>

                                        <p>{recipe.title}</p>
                                    </SidebarLink>
                                ))}
                            </div>
                        </SidebarStickyCont>
                    </SidebarCont>
                </RecipeGridCont>
            </RecipeCont>
        </BgCont>
    );
};
