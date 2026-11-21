import { createBrowserRouter } from "react-router";

import Root from "./routes/Root";
import Main from "./routes/Main";
import Login from "./routes/Login";
import Register from "./routes/Register";
import NotFound from "./routes/NotFound";

import { Meals, RecipeMeals, CategoryMeals } from "./routes/meals";
import { Cocktails, RecipeCocktail, CategoryCocktails } from "./routes/cocktails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Main/>,
            },
            {
                path: '/meals',
                element: <Meals />,
            },
            {
                path: '/meals/category/:category',
                element: <CategoryMeals />,
            },
            {
                path: '/meals/recipe/:IdRecipe',
                element: <RecipeMeals />,
            },
            {
                path: '/cocktails',
                element: <Cocktails />,
            },
            {
                path: '/cocktails/category/:category',
                element: <CategoryCocktails />,
            },
            {
                path: '/cocktails/recipe/:IdRecipe',
                element: <RecipeCocktail />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ]
    }
]);

export default router;