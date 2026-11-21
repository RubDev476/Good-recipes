import RecipeDetailRoute from "../shared/RecipeDetailRoute";

export default function RecipeMeal() {
    return (
        <RecipeDetailRoute
            tag="meals"
            backTo="/meals"
            backLabel="Back to meal categories"
            notFoundMessage="We couldn't find the meal recipe you're looking for."
        />
    );
}
