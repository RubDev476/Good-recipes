
import { CategoryLayout } from "../../pageComponents/Category/CategoryLayout";
import { useFetchCategories } from "../hooks/useFetchCategories.ts";

const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
export default function Meals() {
    const { categories, error } = useFetchCategories(url)

    window.scrollTo(0, 0);

    if (error) {
        return <p>Error : {error}</p>
    }

    return <CategoryLayout title="Meals" cards={categories} bannerImg="/images/banner-m.avif" />

}
