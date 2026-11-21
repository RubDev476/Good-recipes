import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { getRecipes } from "../../api/api-actions";
import type { ApiMealCategory } from "../../types/api-types";
import { useScrollToTop } from "../../hooks/useScrollToTop";

import RecipesLayout from "../../pageComponents/recipes/RecipesLayout.tsx";
import Loader from "../../components/ui/Loader.tsx";
import Banner from "../../components/ui/banner/Banner.tsx";
import NotFound from "../NotFound.tsx";

export default function CategoryMeals() {
    const [recipes, setRecipes] = useState<ApiMealCategory[]>([]);
    const [loading, setLoading] = useState(true);
    const [nameCategory, setCategory] = useState('');

    const location = useLocation();

    useScrollToTop(location.pathname);

    useEffect(() => {
        let isCancelled = false;

        const fetchCategory = async () => {
            const category = location.pathname.split('/')[3] ?? '';
            setCategory(decodeURIComponent(category));
            setLoading(true);

            try {
                const data = (await getRecipes(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)) as ApiMealCategory[];
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

    if (!loading && recipes.length === 0) {
        return (
            <NotFound
                title="Category not found"
                message="No meal recipes were found for this category."
                backTo="/meals"
                backLabel="Back to meal categories"
            />
        );
    }

    return (
        <>
            <Banner title={nameCategory} img="/images/banner-m.avif" tag="category" />

            {!loading ? (
                <RecipesLayout recipes={recipes} tag={'meals'} title="" />
            ) : (
                <Loader />
            )}
        </>
    );
}
