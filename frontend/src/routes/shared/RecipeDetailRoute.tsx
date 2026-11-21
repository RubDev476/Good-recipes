import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";

import { getRecipe } from "../../api/api-actions";
import type { ApiRecipe, TagRecipe } from "../../types/api-types";
import { RecipeComponent } from "../../components/ui/recipe/Recipe";
import Loader from "../../components/ui/Loader";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import NotFound from "../NotFound";

interface RecipeDetailRouteProps {
    tag: TagRecipe;
    backTo: string;
    backLabel: string;
    notFoundMessage: string;
}

export default function RecipeDetailRoute({
    tag,
    backTo,
    backLabel,
    notFoundMessage,
}: RecipeDetailRouteProps) {
    const [recipe, setRecipe] = useState<ApiRecipe | null>(null);
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    const { IdRecipe: paramId } = useParams();

    useScrollToTop(location.pathname);

    useEffect(() => {
        let isCancelled = false;

        const fetchRecipe = async () => {
            const id = paramId ?? location.pathname.split('/')[3] ?? '';
            setLoading(true);

            try {
                const data = await getRecipe(tag, id);
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
    }, [location, paramId, tag]);

    if (loading) return <Loader />;

    if (!recipe) {
        return (
            <NotFound
                title="Recipe not found"
                message={notFoundMessage}
                backTo={backTo}
                backLabel={backLabel}
            />
        );
    }

    return <RecipeComponent recipe={recipe} tag={tag} />;
}
