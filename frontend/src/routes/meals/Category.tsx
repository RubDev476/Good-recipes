import CategoryRecipesRoute from "../shared/CategoryRecipesRoute";

export default function CategoryMeals() {
    return (
        <CategoryRecipesRoute
            tag="meals"
            apiBaseUrl="https://www.themealdb.com/api/json/v1/1/filter.php?c="
            bannerImg="/images/banner-m.avif"
            backTo="/meals"
            backLabel="Back to meal categories"
            emptyMessage="No meal recipes were found for this category."
        />
    );
}
