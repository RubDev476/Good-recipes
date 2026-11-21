import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { getRecipe } from "../../api/api-actions";
import type { ApiRecipe } from "../../types/api-types";
import { RecipeComponent } from "../../components/ui/recipe/Recipe";
import Loader from "../../components/ui/Loader";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import NotFound from "../NotFound";

export default function RecipeCocktail() {
    const [recipe, setRecipe] = useState<ApiRecipe | null>(null);
    const [loading, setLoading] = useState(true);

    const location = useLocation();

    useScrollToTop(location.pathname);

    useEffect(() => {
        let isCancelled = false;

        const fetchRecipe = async () => {
            const id = location.pathname.split('/')[3] ?? '';
            setLoading(true);

            try {
                const data = await getRecipe('cocktails', id);
                if (!isCancelled) {
                    setRecipe(data);
                }
            } catch (error) {
                console.error(error);
                if (!isCancelled) {
                    setRecipe(null);
                }
            } finally {
                if (!isCancelled) {
                    setLoading(false);
                }
            }
        };

        fetchRecipe();

        return () => {
            isCancelled = true;
        };
    }, [location]);

    if (loading) return <Loader />;

    if (!recipe) {
        return (
            <NotFound
                title="Recipe not found"
                message="We couldn't find the cocktail recipe you're looking for."
                backTo="/cocktails"
                backLabel="Back to cocktail categories"
            />
        );
    }

    return <RecipeComponent recipe={recipe} tag="cocktails" />;
}
