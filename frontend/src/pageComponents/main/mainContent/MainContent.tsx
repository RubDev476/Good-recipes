import { Link } from "react-router";

import { 
    ContentContainer,
    DivBackground,
    Greeting,
    ImgContainer,
    LinksContainer,
    MainContainer,
    TextWelcome,
    Welcome
} from "./mainContent.styles";

/*const MAIN_RECIPES: { [hour: string]: ApiCategory[] } = {
    "morning": [
        {
            strMeal: "Bread omelette",
            strMealThumb: "https://www.themealdb.com/images/media/meals/hqaejl1695738653.jpg",
            idMeal: "53076"
        },
        {
            strMeal: "Breakfast Potatoes",
            strMealThumb: "https://www.themealdb.com/images/media/meals/1550441882.jpg",
            idMeal: "52965"
        },
        {
            strMeal: "English Breakfast",
            strMealThumb: "https://www.themealdb.com/images/media/meals/utxryw1511721587.jpg",
            idMeal: "52895"
        },
        {
            strMeal: "Fruit and Cream Cheese Breakfast Pastries",
            strMealThumb: "https://www.themealdb.com/images/media/meals/1543774956.jpg",
            idMeal: "52957"
        },
        {
            strMeal: "Full English Breakfast",
            strMealThumb: "https://www.themealdb.com/images/media/meals/sqrtwu1511721265.jpg",
            idMeal: "52896"
        },
        {
            strMeal: "Home-made Mandazi",
            strMealThumb: "https://www.themealdb.com/images/media/meals/thazgm1555350962.jpg",
            idMeal: "52967"
        },
        {
            strMeal: "Salmon Eggs Eggs Benedict",
            strMealThumb: "https://www.themealdb.com/images/media/meals/1550440197.jpg",
            idMeal: "52962"
        },
        {
            strMeal: "Smoked Haddock Kedgeree",
            strMealThumb: "https://www.themealdb.com/images/media/meals/1550441275.jpg",
            idMeal: "52964"
        }
    ],
    "afternoon": [
        {
            strMeal: "Kentucky Fried Chicken",
            strMealThumb: "https://www.themealdb.com/images/media/meals/xqusqy1487348868.jpg",
            idMeal: "52813"
        },
        {
            strMeal: "Beef Asado",
            strMealThumb: "https://www.themealdb.com/images/media/meals/pkopc31683207947.jpg",
            idMeal: "53071"
        },
        {
            strMeal: "Spaghetti Bolognese",
            strMealThumb: "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
            idMeal: "52770"
        },
        {
            strMeal: "Chicken & mushroom Hotpot",
            strMealThumb: "https://www.themealdb.com/images/media/meals/uuuspp1511297945.jpg",
            idMeal: "52846"
        },
        {
            strMeal: "Vegan Chocolate Cake",
            strMealThumb: "https://www.themealdb.com/images/media/meals/qxutws1486978099.jpg",
            idMeal: "52794"
        },
        {
            strMeal: "Pumpkin Pie",
            strMealThumb: "https://www.themealdb.com/images/media/meals/usuqtp1511385394.jpg",
            idMeal: "52857"
        },
        {
            strMeal: "Broccoli & Stilton soup",
            strMealThumb: "https://www.themealdb.com/images/media/meals/tvvxpv1511191952.jpg",
            idMeal: "52842"
        },
        {
            strMeal: "Salmon Avocado Salad",
            strMealThumb: "https://www.themealdb.com/images/media/meals/1549542994.jpg",
            idMeal: "52960"
        }
    ],
    "evening": [
        {
            strDrink: "Blueberry Mojito",
            strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/07iep51598719977.jpg",
            idDrink: "178336"
        },
        {
            strDrink: "A Night In Old Mandalay",
            strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/vyrvxt1461919380.jpg",
            idDrink: "17832"
        },
        {
            strDrink: "Casino Royale",
            strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/3qpv121504366699.jpg",
            idDrink: "11224"
        },
        {
            strDrink: "Wine Cooler",
            strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yutxtv1473344210.jpg",
            idDrink: "13056"
        },
        {
            strDrink: "Iced Coffee",
            strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/ytprxy1454513855.jpg",
            idDrink: "12770"
        },
        {
            strDrink: "Citrus Coke",
            strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/uyrvut1479473214.jpg",
            idDrink: "17135"
        },
        {
            strDrink: "Limona Corona",
            strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/wwqrsw1441248662.jpg",
            idDrink: "15086"
        },
        {
            strDrink: "Orange Crush",
            strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/zvoics1504885926.jpg",
            idDrink: "15330"
        }
    ]
}*/

export default function MainContent() {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

    return (
        <main>
            <MainContainer>
                <ImgContainer>
                    <img
                        src="https://images.unsplash.com/photo-1505498753650-ac9cb50b158d?w=1600&h=500&fit=crop&auto=format"
                        alt="Hero"
                        className="img-background"
                    />
                </ImgContainer>

                <DivBackground />

                <ContentContainer>
                    <Greeting>
                        {greeting}
                    </Greeting>

                    <Welcome>
                        Welcome to<br />
                        <span style={{ color: 'var(--primary)' }}>Good Recipes</span>
                    </Welcome>

                    <TextWelcome>
                        Thousands of recipes crafted for every moment — from quick breakfasts to weekend feasts.
                    </TextWelcome>

                    <LinksContainer>
                        <Link to={'/meals'} className="link-2">
                            Explore recipes
                        </Link>

                        <Link to={'/cocktails'} className="link-1">
                            View cocktails
                        </Link>
                    </LinksContainer>
                </ContentContainer>
            </MainContainer>
        </main>
    )
}
