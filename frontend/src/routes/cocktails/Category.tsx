import CategoryRecipesRoute from "../shared/CategoryRecipesRoute";

export default function CategoryCocktails() {
    return (
        <CategoryRecipesRoute
            tag="cocktails"
            apiBaseUrl="https://www.thecocktaildb.com/api/json/v1/1/filter.php?c="
            bannerImg="/images/banner-c.avif"
            backTo="/cocktails"
            backLabel="Back to cocktail categories"
            emptyMessage="No cocktail recipes were found for this category."
            replaceUnderscoreWithSlash
        />
    );
}
