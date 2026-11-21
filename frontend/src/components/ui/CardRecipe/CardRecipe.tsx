import React from 'react'
import * as S from './CardRecipe.styles'
import { Link } from 'react-router'

import type { CardRecipeProps } from '../../../types/props'
import { CocktailIcon, MealIcon } from '../CategoryIcons'

export const CardRecipe: React.FC<CardRecipeProps> = ({ title, img, tag, id, country }) => {
    return (
        <article>
            <Link
                to={`/${tag}/recipe/${id}`}
                style={{
                    flex: 'none',
                    textDecoration: 'none'
                }}
            >
                <S.CardContainer>
                    <S.RecipeImgContainer>
                        <img src={img} alt={title} className="recipe-image" />
                        <S.GradientOverlay />
                        {tag === 'meals' && country && <S.RecipeTime>{country}</S.RecipeTime>}
                    </S.RecipeImgContainer>

                    <S.RecipeTypeContainer>
                        <S.RecipeType>
                            <S.RecipeIconContainer>
                                {tag === 'meals' ? (
                                    <MealIcon size={10} stroke="white" />
                                ) : (
                                    <CocktailIcon size={10} stroke="white" />
                                )}
                            </S.RecipeIconContainer>

                            <span className="recipe-meta-text">{tag}</span>
                        </S.RecipeType>

                        <S.RecipeTitle>{title}</S.RecipeTitle>
                    </S.RecipeTypeContainer>
                </S.CardContainer>
            </Link>
        </article>
    )
}
