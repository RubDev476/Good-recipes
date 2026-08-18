import {styled} from "styled-components";

export const Section = styled.section`
    background: var(--background);
    padding-block: 5rem;
`;

export const SectionCont = styled.div`
    max-width: 1280px;
    box-sizing: border-box;
    margin-inline: auto;
    padding-inline: 1.5rem;
`;

export const GridCont = styled.div`
    display: grid;
    gap: 3rem;
    align-items: center;

    @media (width >= 48rem /* 768px */) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

export const TextPrimary = styled.p`
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin: 0 0 0.75rem 0;
    color: var(--primary);
`;

export const Title = styled.h2`
    font-family: var(--font-fraunces);
    font-size: 1.875rem;
    margin: 0 0 1.25rem 0;
    font-weight: 600;
    line-height: 1.25;
    color: var(--foreground);

    @media (width >= 48rem /* 768px */) {
        font-size: 3rem;
        line-height: 1;
    }
`;

export const TextMuted = styled.p`
    font-size: 0.875rem;
    margin: 0 0 2rem 0;
    color: var(--muted-foreground);
    line-height: 1.625;
`;

export const LinksCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 0.75rem;
    margin-bottom: 2rem;
    gap: 0.75rem;

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
    justify-content: start;

    a {
        padding-inline: 1.75rem;
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

export const ImageCont = styled.div`
    position: relative;
    height: 18rem;
    border-radius: 1rem;
    overflow: hidden;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    .gradient {
        position: absolute;
        inset: 0px;
         background: linear-gradient(to top, rgba(13,12,11,0.6) 0%, transparent 60%);
    }

    @media (width >= 48rem /* 768px */) {
        height: 24rem /*= 384px */;
    }
`;