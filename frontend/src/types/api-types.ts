import { z } from "zod";

export const ApiCategoriesSchema = z.object({
    idCategory: z.string(),
    strCategory: z.string(),
    strCategoryDescription: z.string(),
    strCategoryThumb: z.string(),
});

export const ApiMealCategorySchema = z.object({
    idMeal: z.string(),
    strMeal: z.string(),
    strMealThumb: z.string(),
});

export const ApiDrinkCategorySchema = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string(),
});

export const RecipeSchema = z.looseObject({
    idMeal: z.string().optional(),
    idDrink: z.string().optional(),
    strMeal: z.string().optional(),
    strDrink: z.string().optional(),
    strCategory: z.string().nullable().optional(),
    strArea: z.string().nullable().optional(),
    strCountry: z.string().nullable().optional(),
    strMealThumb: z.string().nullable().optional(),
    strDrinkThumb: z.string().nullable().optional(),
    strInstructions: z.string().nullable().optional(),
});

export interface ApiCategory {
    idMeal?: string;
    idDrink?: string;
    strMeal?: string;
    strDrink?: string;
    strMealThumb?: string;
    strDrinkThumb?: string;
    strCountry?: string;
}

export type ApiCategories = z.infer<typeof ApiCategoriesSchema>;
export type ApiMealCategory = z.infer<typeof ApiMealCategorySchema>;
export type ApiDrinkCategory = z.infer<typeof ApiDrinkCategorySchema>;
export type ApiRecipe = z.infer<typeof RecipeSchema>;

export type TagRecipe = 'meals' | 'cocktails';
