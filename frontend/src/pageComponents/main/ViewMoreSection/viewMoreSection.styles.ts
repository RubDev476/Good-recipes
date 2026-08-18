import {styled} from "styled-components";

export const Section = styled.section`
    background-color: var(--secondary);
    padding-block: 5rem;
`;

export const SectionCont = styled.div`
    max-width: 1280px;
    margin-inline: auto;
    padding-inline: 1.5rem;
`;

export const TitleContainer = styled.div`
    text-align: center;
    margin-bottom: 2.5rem;

    h2 {
        font-family: var(--font-fraunces);
        color: var(--foreground);
        font-size: 1.875rem /*= 30px */;
        font-weight: 600;
        margin: 0  0  0.75rem 0;
    }

    p {
        font-size: 0.875rem;
        color: var(--muted-foreground);
        margin: 0;
    }

    @media (width >= 48rem /* 768px */) {
        h2 {
            font-size: 2.25rem /*= 36px */;
        }   
    }
`;

export const CategoriesLinksCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
    margin-bottom: 2.5rem;

    a {
        text-decoration: none;
        padding-inline: 1.25rem;
        padding-block: 0.625rem;
        border-radius: calc(infinity * 1px);
        font-size: 0.875rem;
        font-weight: 500;
        border: solid 1px var(--border);
        color: var(--secondary-foreground);
        background: var(--muted);
        transition: all .125s ease-in-out;

        &:hover {
            border: solid 1px var(--primary);
            color: var(--primary-foreground);
        }
    }
`;

export const ViewmoreLinkCont = styled.div`
    display: flex;
    justify-content: center;

    a {
        padding-inline: 2rem;
        padding-block: 0.75rem;
        background: var(--primary);
        color: var(--primary-foreground);
        text-decoration: none;
        border-radius: calc(infinity * 1px);
        font-size: 0.875rem;
        font-weight: 600;
        transition: all .125s ease-in-out;

        &:hover {
            opacity: 90%;
        }

        &:active {
            --tw-scale-x: 95%;
            --tw-scale-y: 95%;
            --tw-scale-z: 95%;

            scale: var(--tw-scale-x) var(--tw-scale-y);
        }
    }
`;