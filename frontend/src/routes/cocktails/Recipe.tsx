import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { getRecipe } from "../../api/api-actions";
import type { ApiRecipe } from "../../types/api-types";
import { RecipeComponent } from "../../components/ui/recipe/Recipe";
import Loader from "../../components/ui/Loader";

export default function RecipeCocktail() {
    const [recipe, setRecipe] = useState<ApiRecipe | null>(null);
    const [loading, setLoading] = useState(true);

    const location = useLocation();

    window.scrollTo(0, 0);
    
    useEffect(() => {
        const fetchRecipe = async () => {
            const id = location.pathname.split('/')[3]; //15346

            try {
                const data: ApiRecipe = await getRecipe('cocktails', id);

                //console.log(data);

                setRecipe(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setRecipe(null);
            }
        }

        fetchRecipe();
    }, [])

    if(loading) return <Loader />;

    if(recipe) return(
        <>
            <RecipeComponent recipe={recipe} />
        </>
    )
}