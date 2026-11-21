import RecipeDetailRoute from "../shared/RecipeDetailRoute";

export default function RecipeCocktail() {
    return (
        <RecipeDetailRoute
            tag="cocktails"
            backTo="/cocktails"
            backLabel="Back to cocktail categories"
            notFoundMessage="We couldn't find the cocktail recipe you're looking for."
        />
    );
}
