import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

import { getRecipe } from "../../api/api-actions";
import type { ApiRecipe } from "../../types/api-types";
import { RecipeComponent } from "../../components/ui/recipe/Recipe";
import Loader from "../../components/ui/Loader";
import { useScrollToTop } from "../../hooks/useScrollToTop";

export default function RecipeMeal() {
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
                const data = await getRecipe('meals', id);
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
            <div className="container all-center" style={{ minHeight: '60vh', flexDirection: 'column', gap: '1rem', textAlign: 'center' }}>
                <h2 className="font-display">Recipe not found</h2>
                <Link to="/meals" style={{ color: 'var(--primary)', fontWeight: 600 }}>Back to meal categories</Link>
            </div>
        );
    }

    return <RecipeComponent recipe={recipe} tag="meals" />;
}
