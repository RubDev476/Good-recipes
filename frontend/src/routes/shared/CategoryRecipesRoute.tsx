import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";

import { getRecipes } from "../../api/api-actions";
import type { ApiCategory, TagRecipe } from "../../types/api-types";
import { useScrollToTop } from "../../hooks/useScrollToTop";

import RecipesLayout from "../../pageComponents/recipes/RecipesLayout.tsx";
import Loader from "../../components/ui/Loader.tsx";
import Banner from "../../components/ui/banner/Banner.tsx";
import NotFound from "../NotFound.tsx";

interface CategoryRecipesRouteProps {
    tag: TagRecipe;
    apiBaseUrl: string;
    bannerImg: string;
    backTo: string;
    backLabel: string;
    emptyMessage: string;
    replaceUnderscoreWithSlash?: boolean;
}

export default function CategoryRecipesRoute({
    tag,
    apiBaseUrl,
    bannerImg,
    backTo,
    backLabel,
    emptyMessage,
    replaceUnderscoreWithSlash = false,
}: CategoryRecipesRouteProps) {
    const [recipes, setRecipes] = useState<ApiCategory[]>([]);
    const [loading, setLoading] = useState(true);
    const [nameCategory, setNameCategory] = useState('');

    const location = useLocation();
    const { category: paramCategory } = useParams();

    useScrollToTop(location.pathname);

    useEffect(() => {
        let isCancelled = false;

        const fetchCategory = async () => {
            const rawCategory = paramCategory ?? location.pathname.split('/')[3] ?? '';
            const normalizedCategory = replaceUnderscoreWithSlash
                ? rawCategory.replace(/_/g, '/')
                : rawCategory;

            setNameCategory(decodeURIComponent(normalizedCategory));
            setLoading(true);

            try {
                const data = await getRecipes(`${apiBaseUrl}${normalizedCategory}`);
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
    }, [apiBaseUrl, location, paramCategory, replaceUnderscoreWithSlash]);

    if (!loading && recipes.length === 0) {
        return (
            <NotFound
                title="Category not found"
                message={emptyMessage}
                backTo={backTo}
                backLabel={backLabel}
            />
        );
    }

    return (
        <>
            <Banner title={nameCategory} img={bannerImg} tag="category" />

            {!loading ? (
                <RecipesLayout recipes={recipes} tag={tag} title="" />
            ) : (
                <Loader />
            )}
        </>
    );
}
