import { z } from "zod";

const ApiCategoriesSchema = z.object({
    idCategory: z.string(),
    strCategory: z.string(),
    strCategoryDescription: z.string(),
    strCategoryThumb: z.string()
});

const ApiMealCategorySchema = z.object({
    idMeal: z.string(),
    strMeal: z.string(),
    strMealThumb: z.string()
});

const ApiDrinkCategorySchema = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string()
});

interface RecipeModel {
    strInstructions: z.ZodString;
    [prop: string]: z.ZodString | z.ZodNullable<z.ZodString>;
}

const RecipeSchema = z.object<RecipeModel>({
    strInstructions: z.string()
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
export type ApiDrinkCategory = z.infer<typeof ApiDrinkCategorySchema>
export type ApiRecipe= z.infer<typeof RecipeSchema>;

export type TagRecipe = 'meals' | 'cocktails';
