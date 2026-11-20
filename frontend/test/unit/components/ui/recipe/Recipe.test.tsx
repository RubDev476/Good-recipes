import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { RecipeComponent } from '../../../../../src/components/ui/recipe/Recipe';
import type { ApiRecipe } from '../../../../../src/types/api-types';

describe('RecipeComponent', () => {
    const mockMealRecipe: ApiRecipe = {
        idMeal: '52772',
        strMeal: 'Teriyaki Chicken Casserole',
        strCategory: 'Chicken',
        strCountry: 'Japanese',
        strMealThumb: 'https://example.com/teriyaki.jpg',
        strInstructions: 'Preheat oven to 350 degrees. Mix soy sauce and water. Bake for 30 minutes.',
        strIngredient1: 'soy sauce',
        strMeasure1: '3/4 cup',
        strIngredient2: 'water',
        strMeasure2: '1/2 cup',
        strIngredient3: '',
        strMeasure3: '',
    };

    const renderRecipe = (recipe: ApiRecipe = mockMealRecipe, tag: 'meals' | 'cocktails' = 'meals') =>
        render(
            <MemoryRouter>
                <RecipeComponent recipe={recipe} tag={tag} />
            </MemoryRouter>
        );

    it('should render hero information including title, image, category link, tag, and country', () => {
        renderRecipe();

        expect(
            screen.getByRole('heading', { name: 'Teriyaki Chicken Casserole' })
        ).toBeInTheDocument();

        const heroImg = screen.getByRole('img', { name: 'recipe-image' });
        expect(heroImg).toHaveAttribute('src', 'https://example.com/teriyaki.jpg');

        const backLink = screen.getByRole('link', { name: /Back to categories/i });
        expect(backLink).toHaveAttribute('href', '/meals');

        const categoryLink = screen.getByRole('link', { name: 'Chicken' });
        expect(categoryLink).toHaveAttribute('href', '/meals/category/Chicken');

        expect(screen.getByText('Japanese')).toBeInTheDocument();
    });

    it('should replace slash with underscore in category URL when category contains a slash', () => {
        const cocktailRecipe: ApiRecipe = {
            idDrink: '11007',
            strDrink: 'Coffee Punch',
            strCategory: 'Coffee / Tea',
            strDrinkThumb: 'https://example.com/coffee.jpg',
            strInstructions: 'Brew coffee. Pour over ice.',
            strIngredient1: 'Coffee',
            strMeasure1: '1 cup',
        };

        renderRecipe(cocktailRecipe, 'cocktails');

        const categoryLink = screen.getByRole('link', { name: 'Coffee / Tea' });
        expect(categoryLink).toHaveAttribute('href', '/cocktails/category/Coffee _ Tea');
    });

    it('should render non-empty ingredients and toggle checked progress counter on click', () => {
        renderRecipe();

        const firstIngredient = screen.getByText('soy sauce - 3/4 cup');
        const secondIngredient = screen.getByText('water - 1/2 cup');

        expect(firstIngredient).toBeInTheDocument();
        expect(secondIngredient).toBeInTheDocument();
        expect(screen.queryByText(/Checked/i)).not.toBeInTheDocument();

        fireEvent.click(firstIngredient);
        expect(screen.getByText('1 / 2 Checked')).toBeInTheDocument();

        fireEvent.click(secondIngredient);
        expect(screen.getByText('2 / 2 Checked')).toBeInTheDocument();

        fireEvent.click(firstIngredient);
        expect(screen.getByText('1 / 2 Checked')).toBeInTheDocument();
    });

    it('should split instructions by period and render numbered cooking steps', () => {
        renderRecipe();

        expect(screen.getByRole('heading', { name: 'How to Cook' })).toBeInTheDocument();
        expect(screen.getByText('Preheat oven to 350 degrees')).toBeInTheDocument();
        expect(screen.getByText('Mix soy sauce and water')).toBeInTheDocument();
        expect(screen.getByText('Bake for 30 minutes')).toBeInTheDocument();
        expect(screen.getByText('1')).toBeInTheDocument();
        expect(screen.getByText('2')).toBeInTheDocument();
        expect(screen.getByText('3')).toBeInTheDocument();
    });

    it('should render the sidebar with related recipes', () => {
        renderRecipe();

        expect(
            screen.getByRole('heading', { name: 'Recipes that may interest you' })
        ).toBeInTheDocument();
        expect(screen.getByText('Bread omelette')).toBeInTheDocument();
        expect(screen.getByText('Blueberry Mojito')).toBeInTheDocument();
        expect(screen.getByText('Frappé')).toBeInTheDocument();
        expect(screen.getByText('Kentucky Fried Chicken')).toBeInTheDocument();
    });
});
