import { CategoryLayout } from "../../pageComponents/Category/CategoryLayout";
import { useFetchCategories } from "../hooks/useFetchCategories.ts";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

export default function Cocktails() {
    const { categories, error } = useFetchCategories(url);

    window.scrollTo(0, 0);

    if (error) {
        return <p>Error : {error}</p>
    }

    return <CategoryLayout title="Cocktails" cards={categories} bannerImg="/images/banner-c.avif" />

}
