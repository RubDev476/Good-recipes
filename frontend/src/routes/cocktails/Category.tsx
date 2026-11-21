import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { getRecipes } from "../../api/api-actions";
import type { ApiDrinkCategory } from "../../types/api-types";
import { useScrollToTop } from "../../hooks/useScrollToTop";

import RecipesLayout from "../../pageComponents/recipes/RecipesLayout.tsx";
import Loader from "../../components/ui/Loader.tsx";
import Banner from "../../components/ui/banner/Banner.tsx";

export default function CategoryCocktails() {
    const [recipes, setRecipes] = useState<ApiDrinkCategory[]>([]);
    const [nameCategory, setCategory] = useState('');
    const [loading, setLoading] = useState(true);

    const location = useLocation();

    useScrollToTop(location.pathname);

    useEffect(() => {
        let isCancelled = false;

        const fetchCategory = async () => {
            const rawCategory = location.pathname.split('/')[3] ?? '';
            const category = rawCategory.replace(/_/g, '/');
            setCategory(decodeURIComponent(category));
            setLoading(true);

            try {
                const data = (await getRecipes(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)) as ApiDrinkCategory[];
                if (!isCancelled) {
                    setRecipes(data);
                }
            } catch (error) {
                console.error(error);
                if (!isCancelled) {
                    setRecipes([]);
                }
            } finally {
                if (!isCancelled) {
                    setLoading(false);
                }
            }
        };

        fetchCategory();

        return () => {
            isCancelled = true;
        };
    }, [location]);

    return (
        <>
            <Banner title={nameCategory} img={"/images/banner-c.avif"} tag="category" />

            {!loading ? (
                <RecipesLayout recipes={recipes} tag={'cocktails'} title="" />
            ) : (
                <Loader />
            )}
        </>
    );
}
