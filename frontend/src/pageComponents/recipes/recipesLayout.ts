import { styled } from "styled-components";

export const RecipesContainer = styled.div`
    display: grid;
    align-items: flex-start;
    margin: 40px auto;
    grid-template-columns: 1fr;
    gap: calc(0.25rem * 6);

    @media screen and (width >= 520px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (width >= 720px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;
