import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { getRecipes } from "../../api/api-actions";
import type { ApiDrinkCategory } from "../../types/api-types";

import RecipesLayout from "../../pageComponents/recipes/RecipesLayout.tsx";
import { Heading } from "../../pageComponents/recipes/recipesLayout.ts";
import Loader from "../../components/ui/Loader.tsx";

export default function CategoryCocktails() {
    const [recipes, setRecipes] = useState<ApiDrinkCategory[]>([]);
    const [nameCategory, setCategory] = useState('');
    const [loading, setLoading] = useState(true);

    const location = useLocation();

    window.scrollTo(0, 0);

    useEffect(() => {
        const fetchCategorie = async () => {
            const category = location.pathname.split('/')[3].replace('_', '/');
            setCategory(category.split('%20').join(' '));

            try {
                const data: ApiDrinkCategory[] = await getRecipes(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);

                //console.log(data);

                setRecipes(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setRecipes([]);
            }
        }

        fetchCategorie();
    }, [])

    return (
        <>
            <Heading>
                <img src="/images/category-recipes.webp" alt="top-image" className={'w-full'} />

                <h1>{nameCategory}</h1>
            </Heading>

            {!loading ? (
                <RecipesLayout recipes={recipes} tag={'cocktails'} title="" />
            ) : (
                <Loader />
            )}
        </>
    )
}
