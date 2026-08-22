import styled from 'styled-components'
import { Link } from 'react-router'

export const CategoriesSection = styled.section`
    padding-block: 4rem;
    background: var(--background);
`;

export const CategoriesCont = styled.div`
    max-width: 1280px;
    margin-inline: auto;
    padding-inline: 1.5rem;
    box-sizing: border-box;
`;

export const CategoriesGridCont = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;

    @media (width >= 48rem /* 768px */) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
`;

export const CategoryCard = styled(Link)`
    text-decoration: none;
    display: block;
    position: relative;
    overflow: hidden;
    border-radius: 1rem;
    aspect-ratio: 1/1;

    &:hover img {
        transform: scale(1.1);
    }
`;

export const CategoryCardImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    //transition: all .2s ease-in-out;
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    //transition-duration: var(--tw-duration, var(--default-transition-duration) /* 150ms */);
    transition-duration: .4s;
`;

export const CategoryGradient = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 60%, transparent 100%);
`;

export const CategoryTitleCont = styled.div`
    position: absolute;
    inset-inline: 0px;
    bottom: 0px;
    padding: 1rem;
    text-align: left;

    .title {
        font-size: 1.125rem;
        font-weight: 600;
        color: var(--foreground);
        line-height: 1.25;
    }
`;
