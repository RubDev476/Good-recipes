import React from 'react'
import * as S from './CategoryLayout.styles'
import { CategoryCard } from './CategoryCard'
import type { ApiCategories } from '../../types/api-types'

interface Props {
    title: string
    cards: ApiCategories[] | null
}

export const CategoryLayout: React.FC<Props> = ({ title, cards }) => {
    return (
        <S.LayoutContainer>
            <S.Image_container>
                <img
                    src="/images/category-recipes.webp"
                    alt="Category banner" />
            </S.Image_container>
            <S.Titles_container>
                <h4>{title}</h4>
            </S.Titles_container>
            <S.Card_container>
                {
                    cards?.map((card) => (
                        <CategoryCard
                            key={card.idCategory}
                            strCategory={card.strCategory}
                            strCategoryDescription={card.strCategoryDescription}
                            strCategoryThumb={card.strCategoryThumb}
                            title={title}
                        />
                    ))
                }
            </S.Card_container>
        </S.LayoutContainer>
    )
}
