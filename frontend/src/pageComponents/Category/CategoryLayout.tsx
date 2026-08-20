import React from 'react'
import * as S from './CategoryLayout.styles'
import type { ApiCategories } from '../../types/api-types'

interface Props {
    title: string
    cards: ApiCategories[] | null
    bannerImg: string
}

export const CategoryLayout: React.FC<Props> = ({ title, cards, bannerImg }) => {
    return (
        <>
            <S.BannerSection>
                <S.BannerImgCont>
                    <img src={bannerImg} className='img' alt="Category banner" />
                </S.BannerImgCont>
                <S.BannerGradient />
                <S.BannerTitleCont>
                    <p>Browse</p>
                    <h1 className='font-display'>{title}</h1>
                </S.BannerTitleCont>
            </S.BannerSection>

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
 