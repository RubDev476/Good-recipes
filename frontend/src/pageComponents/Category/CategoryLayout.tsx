import React from 'react'
import * as S from './CategoryLayout.styles'
import type { ApiCategories } from '../../types/api-types'
import Banner from '../../components/ui/banner/Banner'

interface Props {
    title: string
    cards: ApiCategories[] | null
    bannerImg: string
}

export const CategoryLayout: React.FC<Props> = ({ title, cards, bannerImg }) => {
    return (
        <>
            <Banner title={title} img={bannerImg} tag='categories' />

            <S.CategoriesSection>
                <S.CategoriesCont>
                    <S.CategoriesGridCont>
                        {cards?.map(card => (
                            <S.CategoryCard
                                key={card.idCategory}
                                to={`/${title.toLowerCase()}/category/${card.strCategory.replace('/', '_')}`}
                            >
                                <S.CategoryCardImg src={card.strCategoryThumb} alt={card.strCategory} />
                                <S.CategoryGradient />

                                <S.CategoryTitleCont>
                                    <p className='title font-display'>{card.strCategory}</p>
                                </S.CategoryTitleCont>
                            </S.CategoryCard>
                        ))}
                    </S.CategoriesGridCont>
                </S.CategoriesCont>
            </S.CategoriesSection>
        </>
    )
}
 