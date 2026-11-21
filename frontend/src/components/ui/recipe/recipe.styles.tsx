import styled from "styled-components";
import { Link } from "react-router";

//============================== redisign
export const BgCont = styled.div`
    background: var(--background);
`;

//#region hero
export const HeroCont = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 68vh;
    min-height: 380px;
    max-height: 568px;
    //box-sizing: border-box;
`;

export const HeroImg = styled.img`
    width: 100%;
    height: 100%;
    //object-fit: cover; //the images are very small
    object-fit: contain;
`;

export const HeroImgGradient = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(13,12,11,1) 0%, rgba(13,12,11,0.4) 50%, transparent 100%);
`;

export const HeroInfoCont = styled.div`
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    max-width: 1280px;
    box-sizing: border-box;
    margin-inline: auto;
    padding-inline: 1.5rem;
    padding-bottom: 2.5rem;
`;

export const HeroBackCategoriesBtn = styled(Link)`
    text-decoration: none;
    display: inline-flex;
    width: fit-content;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    margin-bottom: 1rem;
    color: var(--muted-foreground);
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.2s;

    &:hover {
        color: var(--foreground);
    }
`;

export const HeroTagsCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
`;

export const HeroTagsCategoryBtn = styled(Link)`
    background: var(--primary);
    color: var(--foreground);
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.05em;
    padding-inline: 0.75rem;
    padding-block: 0.25rem;
    border-radius: calc(infinity * 1px);
`;

export const HeroTag = styled.span`
    display: flex;
    align-items: center;
    gap: 0.375rem;
    font-size: 0.875rem;
    color: rgba(255,255,255,0.7);
    text-transform: capitalize;
`;

export const HeroRecipeTitle =  styled.h1`
    font-size: 2.25rem;
    font-weight: 600;
    color: var(--foreground);
    margin: 0;

    @media (width >= 48rem /* 768px */) {
        font-size: 3rem /*= 48px */;
    }
`;

//#region recipe ingredients
export const RecipeCont = styled.div`
    max-width: 1280px;
    box-sizing: border-box;
    margin-inline: auto;
    padding-inline: 1.5rem;
    padding-block: 3rem;
`;

export const RecipeGridCont = styled.div`
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 3rem;

    @media (width >= 64rem /* 1024px */) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
`;

export const RecipeMainCont = styled.main`
    @media (width >= 64rem /* 1024px */) {
        grid-column: span 2 / span 2;
    }
`;

export const RecipeIngredientsCont = styled.section`
    margin-bottom: 3.5rem;
`;

export const ListIngredientsHeading = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    h2 {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--primary);
        margin: 0;
    }
`;

export const CheckedAmount = styled.span`
    font-size: 0.75rem;
    padding-inline: 0.75rem;
    padding-block: 0.25rem;
    border-radius: calc(infinity * 1px);
    background: var(--muted); 
    color: var(--muted-foreground);
`;

export const IngredientUl = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;

export const IngredientLi = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    border-radius: 0.5rem;
    border-bottom: 1px solid var(--border);
    justify-content: space-between;
    font-size: 0.875rem;
    box-sizing: border-box;
    margin-bottom: 0.25rem;
    
    input[name="checkDone"] {
        display: none;
    }

    label[class="checkDone"] {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 0.875rem;
        width: 100%;
        padding-block: 0.75rem;
        padding-inline: 0.25rem;
    }

    label[class="checkDone"]::after {
        content: "";
        display: block;
        background-color: transparent;
        border: 2px solid var(--muted);
        position: relative;
        cursor: pointer;
        border-radius: 0.25rem;
        height: 1.25rem;
        width: 1.25rem;
        box-sizing: border-box;
    }

    input[name="checkDone"]:checked
    + label[class="checkDone"]::after {
        background-image: url('/images/check-icon.svg');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
        border: 2px solid var(--primary);
        background-color: var(--primary);
    }
`;

//#region recipe instructions
export const RecipeInstructionsCont = styled.section`
    margin-bottom: 3.5rem;

    h2 {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--primary);
        margin: 0 0 1.5rem 0;
    }
`;

export const InstructionsCont = styled.div`
    display: flex;
    gap: 1.25rem;
    margin-bottom: 1.5rem;
`;

export const InstructionNumber = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: calc(infinity * 1px);
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    font-weight: 700;
    margin-top: 0.125rem;
    background: var(--muted);
    color: var(--primary);
`;

export const InstructionStep = styled.p`
    font-size: 0.875rem;
    line-height: 1.625;
    flex: 1;
    padding-top: 0.25rem;
    margin: 0;
    color: var(--secondary-foreground);
`;

//#region aside
export const SidebarCont = styled.aside`
    @media (width >= 64rem /* 1024px */) {
        grid-column: span 1 / span 1;
    }
`; 

export const SidebarStickyCont = styled.div`
    position: sticky;
    top: 6rem;
    border-radius: 1rem;
    overflow: hidden;
    background: var(--card);
    border: 1px solid var(--border);
`;

export const SidebarHeading = styled.div`
    padding: 1.25rem;
    border-bottom: solid 1px;
    border-color: var(--border);

    h3 {
        font-size: 1.125rem;
        font-weight: 600;
        color: var(--foreground);
    }
`;

export const SidebarLink = styled(Link)`
    width: 100%;
    display: flex;
    gap: 0.75rem;
    padding: 1rem;
    text-align: left;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.2s;
    text-decoration: none;
    color: var(--foreground);
    border-color: var(--border);

    &:hover {
        background-color: color-mix(in oklab, var(--foreground) /* #fff = #ffffff */ 3%, transparent);
    }

    &:not(:last-child) {
        border-bottom: 1px solid var(--foreground);
    }
`;

export const SidebarImgCont = styled.div`
    width: 4rem;
    height: 3.5rem;
    border-radius: 0.75rem;
    overflow: hidden;
    flex-shrink: 0;
    box-sizing: border-box;
`;

export const SidebarImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;