import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { getRecipes } from "../../api/api-actions";
import type { ApiMealCategory } from "../../types/api-types";

import RecipesLayout from "../../pageComponents/recipes/RecipesLayout.tsx";
import Loader from "../../components/ui/Loader.tsx";
import { Heading } from "../../pageComponents/recipes/recipesLayout.ts";

export default function CategoryMeals() {
    const [recipes, setRecipes] = useState<ApiMealCategory[]>([]);
    const [loading, setLoading] = useState(true);
    const [nameCategory, setCategory] = useState('');

    const location = useLocation();

    window.scrollTo(0, 0);

    useEffect(() => {
        const fetchCategory = async () => {
            const category = location.pathname.split('/')[3];
            setCategory(category);

            try {
                const data: ApiMealCategory[] = await getRecipes(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);

                //console.log(data);

                setRecipes(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setRecipes([]);
            }
        }

        fetchCategory();
    }, [location])

    return (
        <>
            <Heading>
                <img src="/images/category-recipes.webp" alt="top-image" className={'w-full'} />

                <h1>{nameCategory}</h1>
            </Heading>

            {!loading ? (
                <RecipesLayout recipes={recipes} tag={'meals'} title="" />
            ): (
                <Loader />
            )}
        </>
    )
}