import {styled} from "styled-components";

export const Heading = styled.div`
    h1 {
        text-align: center;
        color: var(--color-2);
        font-size: calc(1.1rem + 1vw);
        text-transform: capitalize;
    }
`;

export const RecipesContainer = styled.div`
    display: grid;
    align-items: flex-start;
    //gap: 40px;
    margin: 40px auto;
    grid-template-columns: 1fr;
    //gap: 30px;
    gap: calc(0.25rem * 6);

    @media screen and (width >= 520px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (width >= 720px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;