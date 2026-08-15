import React from 'react'
import * as S from './CardRecipe.styles'
import { Link } from 'react-router'

import type { CardRecipeProps } from '../../../types/props'

export const CardRecipe: React.FC<CardRecipeProps> = ({ title, img, tag, id }) => {
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
                        <S.RecipeTime>{30} min</S.RecipeTime>
                    </S.RecipeImgContainer>

                    <S.RecipeTypeContainer>
                        <S.RecipeType>
                            <S.RecipeIconContainer>
                                {tag === 'meals' ? (
                                    <>
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2M7 2v20M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
                                        </svg>
                                    </>
                                ) : (
                                    <>
                                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 22h8M12 11v11M3 3l9 8 9-8M5 3h14"></path></svg>
                                    </>
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
