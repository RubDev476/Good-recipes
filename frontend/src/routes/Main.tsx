import MainContent from "../pageComponents/main/mainContent/MainContent";
import SectionSlider from "../pageComponents/main/sectionSlider/SectionSlider";
import ViewMoreSection from "../pageComponents/main/ViewMoreSection/ViewMoreSection.tsx";
import ViewMoreAltSection from "../pageComponents/main/ViewMoreAltSection/ViewMoreAltSection.tsx";

import type { ApiCategory } from "../types/api-types";
import type {ViewMoreSectionProps} from "../types/props.ts";

const MAIN_RECIPES: { [hour: string]: ApiCategory[] } = {
    "morning": [
        {
            strMeal: "Bread omelette",
            strMealThumb: "https://www.themealdb.com/images/media/meals/hqaejl1695738653.jpg",
            idMeal: "53076",
            strCountry: "India"
        },
        {
            strMeal: "Breakfast Potatoes",
            strMealThumb: "https://www.themealdb.com/images/media/meals/1550441882.jpg",
            idMeal: "52965",
            strCountry: "Canada"
        },
        {
            strMeal: "English Breakfast",
            strMealThumb: "https://www.themealdb.com/images/media/meals/utxryw1511721587.jpg",
            idMeal: "52895",
            strCountry: "United Kingdom"
        },
        {
            strMeal: "Fruit and Cream Cheese Breakfast Pastries",
            strMealThumb: "https://www.themealdb.com/images/media/meals/1543774956.jpg",
            idMeal: "52957",
            strCountry: "United States"
        },
        {
            strMeal: "Full English Breakfast",
            strMealThumb: "https://www.themealdb.com/images/media/meals/sqrtwu1511721265.jpg",
            idMeal: "52896",
            strCountry: "United Kingdom"
        },
        {
            strMeal: "Home-made Mandazi",
            strMealThumb: "https://www.themealdb.com/images/media/meals/thazgm1555350962.jpg",
            idMeal: "52967",
            strCountry: "Kenya"
        },
        {
            strMeal: "Salmon Eggs Eggs Benedict",
            strMealThumb: "https://www.themealdb.com/images/media/meals/1550440197.jpg",
            idMeal: "52962",
            strCountry: "United States"
        },
        {
            strMeal: "Smoked Haddock Kedgeree",
            strMealThumb: "https://www.themealdb.com/images/media/meals/1550441275.jpg",
            idMeal: "52964",
            strCountry: "India"
        }
    ],
    "afternoon": [
        {
            strMeal: "Kentucky Fried Chicken",
            strMealThumb: "https://www.themealdb.com/images/media/meals/xqusqy1487348868.jpg",
            idMeal: "52813",
            strCountry: "United States"
        },
        {
            strMeal: "Beef Asado",
            strMealThumb: "https://www.themealdb.com/images/media/meals/pkopc31683207947.jpg",
            idMeal: "53071",
            strCountry: "Philippines"
        },
        {
            strMeal: "Spaghetti Bolognese",
            strMealThumb: "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
            idMeal: "52770",
            strCountry: "Italy"
        },
        {
            strMeal: "Chicken & mushroom Hotpot",
            strMealThumb: "https://www.themealdb.com/images/media/meals/uuuspp1511297945.jpg",
            idMeal: "52846",
            strCountry: "United Kingdom"
        },
        {
            strMeal: "Vegan Chocolate Cake",
            strMealThumb: "https://www.themealdb.com/images/media/meals/qxutws1486978099.jpg",
            idMeal: "52794",
            strCountry: "United States"
        },
        {
            strMeal: "Pumpkin Pie",
            strMealThumb: "https://www.themealdb.com/images/media/meals/usuqtp1511385394.jpg",
            idMeal: "52857",
            strCountry: "United States"
        },
        {
            strMeal: "Broccoli & Stilton soup",
            strMealThumb: "https://www.themealdb.com/images/media/meals/tvvxpv1511191952.jpg",
            idMeal: "52842",
            strCountry: "United States"
        },
        {
            strMeal: "Salmon Avocado Salad",
            strMealThumb: "https://www.themealdb.com/images/media/meals/1549542994.jpg",
            idMeal: "52960",
            strCountry: "United States"
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
}

const RECIPES_SECTIONS: { [x: string]: ApiCategory[] } = {
    meals: [
        {
            strMeal: "Croatian lamb peka",
            strMealThumb: "https://www.themealdb.com/images/media/meals/pn59o51628769837.jpg",
            idMeal: "53056",
            strCountry: "Croatia"
        },
        {
            strMeal: "French Omelette",
            strMealThumb: "https://www.themealdb.com/images/media/meals/yvpuuy1511797244.jpg",
            idMeal: "52915",
            strCountry: "France"
        },
        {
            strMeal: "Blini Pancakes",
            strMealThumb: "https://www.themealdb.com/images/media/meals/0206h11699013358.jpg",
            idMeal: "53080",
            strCountry: "Russia"
        },
        {
            strMeal: "Blackberry Fool",
            strMealThumb: "https://www.themealdb.com/images/media/meals/rpvptu1511641092.jpg",
            idMeal: "52891",
            strCountry: "United Kingdom"
        },
        {
            strMeal: "15-minute chicken & halloumi burgers",
            strMealThumb: "https://www.themealdb.com/images/media/meals/vdwloy1713225718.jpg",
            idMeal: "53085",
            strCountry: "United States"
        },
        {
            strMeal: "Szechuan Beef",
            strMealThumb: "https://www.themealdb.com/images/media/meals/1529443236.jpg",
            idMeal: "52950",
            strCountry: "China"
        },
        {
            strMeal: "Lasagne",
            strMealThumb: "https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg",
            idMeal: "52844",
            strCountry: "Italy"
        },
    ],
    coffees: [
        {
            strDrink: "Frappé",
            strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/vqwryq1441245927.jpg",
            idDrink: "12768"
        },
        {
            strDrink: "Mocha-Berry",
            strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/vtwyyx1441246448.jpg",
            idDrink: "14209"
        },
        {
            strDrink: "Zorro",
            strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/kvvd4z1485621283.jpg",
            idDrink: "15328"
        },
        {
            strDrink: "Jamaican Coffee",
            strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/xqptps1441247257.jpg",
            idDrink: "15825"
        },
        {
            strDrink: "Afternoon",
            strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/vyrurp1472667777.jpg",
            idDrink: "13162"
        },
        {
            strDrink: "Thai Iced Coffee",
            strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/rqpypv1441245650.jpg",
            idDrink: "12784"
        },
        {
            strDrink: "Swedish Coffee",
            strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/ywtrvt1441246783.jpg",
            idDrink: "15521"
        }
    ]
}

const CATEGORIES_SECTIONS: {[x: string]: ViewMoreSectionProps} = {
    meals: {
        tag: 'meals',
        title: 'What are you going to cook today?',
        nameCategories: [
            'Chicken',
            'Starter',
            'Beef',
            'Vegetarian',
            'Goat',
            'SeaFood'
        ]
    },
    cocktails: {
        tag: 'cocktails',
        title: 'The best cocktails for every moment',
        nameCategories: [
            'Soft Drink',
            'Beer',
            'Cocoa',
            'Cocktail',
            'Ordinary Drink'
        ]
    }
}

export default function Main() {
    const hour = new Date().getHours();
    const time = hour < 12 ? 'morning' : hour < 17 ? 'afternoon' : 'evening';

    window.scrollTo(0, 0);
    
    return (
        <>
            <MainContent />

            <SectionSlider 
                title={'Good ' + time.charAt(0).toUpperCase() + time.slice(1)}
                tag={time === 'evening'  ? 'cocktails' : 'meals'} 
                recipes={MAIN_RECIPES[time]} 
            />

            <SectionSlider title="For coffee lovers" tag="cocktails" recipes={RECIPES_SECTIONS.coffees} />

            <ViewMoreSection title={CATEGORIES_SECTIONS.meals.title} tag={CATEGORIES_SECTIONS.meals.tag} nameCategories={CATEGORIES_SECTIONS.meals.nameCategories} />

            <ViewMoreAltSection title={CATEGORIES_SECTIONS.cocktails.title} tag={CATEGORIES_SECTIONS.cocktails.tag} nameCategories={CATEGORIES_SECTIONS.cocktails.nameCategories} />
        </>
    )
}
