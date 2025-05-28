import {Link} from "react-router";
import {
    RecipeContainer,
    RecipeMain,
    RecipeSidebar,
    RecipeFooter as RecipeFooterComponent,
} from "../../../components/ui/recipe/recipe.styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faStar,
} from "@fortawesome/free-solid-svg-icons";

import type {RecipeProps} from "../../../types/props.ts";

export const RecipeComponent = ({recipe}: RecipeProps) => {
    const handleIngredients = () => {
        const ingredients: string[] = [];
        
        for (let i = 1; i <= 20; i++) {
            if (recipe[`strIngredient${i}`]) {
                const ingredient = recipe[`strIngredient${i}`];
                const quantity = recipe[`strMeasure${i}`];
                
                if(ingredient !== '' && quantity !== '' ) ingredients.push(`${ingredient} - ${quantity}`);
            }
        }
        
        return ingredients;
    }
    
    return (
        <RecipeContainer>
            <RecipeMain>
                <div className="recipe__image">
                    {recipe.strMealThumb && <img src={recipe.strMealThumb} alt={"recipe-image"}/>}
                    {recipe.strDrinkThumb && <img src={recipe.strDrinkThumb} alt={"recipe-image"}/>}
                </div>
                
                {recipe.strMeal && <RecipeTexts title={recipe.strMeal}/>}
                {recipe.strDrink && <RecipeTexts title={recipe.strDrink}/>}
                
                <RecipeIngredients ingredients={handleIngredients()} />
                
                <RecipeSteps steps={recipe.strInstructions as string} />
            </RecipeMain>
            
            <RecipeSidebar>
                <RecipeAside/>
            </RecipeSidebar>
            
            <RecipeFooterComponent>
                <RecipeFooter/>
            </RecipeFooterComponent>
        </RecipeContainer>
    );
};

const RecipeTexts = ({title}: {title: string}) => {
    return (
        <div className="recipe__texts">
            <h1 className="hl-1">{title}</h1>
        </div>
    );
};

const RecipeIngredients = ({ingredients}: {ingredients: string[]}) => {
    return (
        <div className="ingredients">
            <h2 className="ingredients__title">Ingredients</h2>

            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>
                        <div className="cook__item">
                            <input type="checkbox" name="checkDone" id={`ingredient-${index}`}/>
                            <label htmlFor={`ingredient-${index}`} className="checkDone">
                                <span>{ingredient}</span>
                            </label>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const RecipeSteps = ({steps}: {steps: string}) => {
    return (
        <div className="ingredients ingredient__steps">
            <h2 className="ingredients__title">¡to Cook!</h2>
            
            <p>{steps}</p>
        </div>
    );
};

const RecipeAside = () => {
    return (
        <>
            <div className="recipe__section__header">
                <h2>Recipes that may interest you</h2>
            </div>
            
            <div className="recipe__section__content">
                <div className="recipe__section__list">
                    {Array(4)
                    .fill(null)
                    .map((_, idx) => (
                        <Link to="#" className="card__recipe" key={idx}>
                            <div className="card__recipe__image">
                                <img
                                    src="https://www.recetasnestle.com.mx/sites/default/files/styles/cropped_recipe_card_new/public/srh_recipes/c638d17edfbb63a5310471a3b6b75b90.jpg.webp?itok=3Fdu7-dw"
                                    alt="recipe_1"
                                />
                            </div>
                            
                            <ul className="card__recipe__information">
                                <li className="info__difficulty">Fácil</li>
                                <li className="info__time">37 min</li>
                            </ul>
                            
                            <h3 className="card__recipe__title">
                                Tacos de camarón al pastor
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

const RecipeFooter = () => {
    return (
        <>
            <h2 className="recipe__comments__title">Commentaries (1)</h2>
            
            <div className="recipe__comments__login">
                <h2 className="recipe__comments__login__description">
                    Who did you spoil with this delicious recipe? Tell us how it turned out for you.
                </h2>
                
                <div className="recipe__comments__login__actions">
                    <Link to="/login" className="btn btn-primary">
                        Login
                    </Link>
                    <Link to="/register" className="btn btn-secondary">
                        Register
                    </Link>
                </div>
                
                <div className="recipe__comments__comment__container">
                    <div className="recipe__comments__comment">
                        <div className="text">
                            <div className="name">Fabi</div>
                            <div className="time">06.06.2023</div>
                            
                            <div className="stars">
                                {Array(5)
                                .fill(null)
                                .map((_, idx) => (
                                    <FontAwesomeIcon
                                        icon={faStar}
                                        style={{
                                            fontSize: "0.50rem",
                                            color: "var(--color-9)",
                                            marginRight: "2px",
                                        }}
                                        key={idx}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="content">
                            <p>
                                Very good, its delicious!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
