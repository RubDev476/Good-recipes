import styled from "styled-components";

export const CardContainer = styled.div`
    border-radius: 1rem;
    overflow: hidden;
    background: var(--card);
    border: 1px solid var(--border);
    transition: transform 0.3s;

    &:hover {
        transform: translateY(-0.25rem); /* group-hover:-translate-y-1 */
    }

    /*".recipe-image" styles are in the "RecipeImgContainer" component*/
    .recipe-image {
        transition: transform 0.5s;
    }
    &:hover .recipe-image {
        transform: scale(1.05); /* group-hover:scale-105 */
    }
`;

export const RecipeImgContainer = styled.div`
    position: relative;
    overflow: hidden;
    padding-top: 68%;

    .recipe-image {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const GradientOverlay = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(13,12,11,0.5) 0%, transparent 50%);
`;

export const RecipeTime = styled.time`
    position: absolute;
    top: 0.75rem; /* top-3 */
    right: 0.75rem; /* right-3 */
    font-size: 0.75rem; /* text-xs */
    font-weight: 500; /* font-medium */
    padding: 0.25rem 0.625rem; /* px-2.5 py-1 */
    border-radius: 9999px; /* rounded-full */
    background: rgba(13,12,11,0.75);
    color: var(--foreground);
    backdrop-filter: blur(8px);
`;

export const RecipeTypeContainer = styled.div`
    padding: 1rem; /* p-4 */
`;

export const RecipeType = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem; /* gap-2 */
    margin-bottom: 0.25rem; /* mb-1 */

    .recipe-meta-text {
        font-size: 0.75rem; /* text-xs */
        color: var(--muted-foreground);
        text-transform: capitalize;
    }
`;

export const RecipeIconContainer = styled.div`
    width: 1.25rem; /* w-5 */
    height: 1.25rem; /* h-5 */
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: var(--primary);
`;

export const RecipeTitle = styled.h3`
    font-size: 0.875rem; /* text-sm */
    font-weight: 600; /* font-semibold */
    text-align: left;
    line-height: 1.375; /* leading-snug */
    color: var(--foreground);
    margin: 0px;
`;