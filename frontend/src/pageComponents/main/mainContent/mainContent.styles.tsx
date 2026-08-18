import styled from "styled-components";

export const MainContainer = styled.div`
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, #1a0e10 0%, #0d0c0b 50%, #0e1015 100%);
`;

export const ImgContainer = styled.div`
    position: absolute;
    opacity: 20%;
    inset: 0px;

    .img-background {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const DivBackground = styled.div`
    background: linear-gradient(to bottom, rgba(13,12,11,0.3) 0%, rgba(13,12,11,0.95) 100%);
    position: absolute;
    inset: 0px;
`;

export const ContentContainer = styled.div`
    position: relative;
    max-width: 1280px;
    box-sizing: border-box;
    margin-inline: auto;
    padding-inline: 1.5rem;
    padding-block: 5rem;

    @media (width >= 48rem /* 768px */) {
        padding-block: 7rem; /* 7rem = 112px */
    }
`;

export const Greeting = styled.p`
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-top: 0px;
    margin-bottom: 12px;
    color: var(--primary);
    padding: 0px;
`;

export const Welcome = styled.h1`
    font-family: var(--font-fraunces);
    font-size: 3rem;
    line-height: 1.25;
    font-weight: 600;
    margin-block: 1rem;

    @media (width >= 48rem /* 768px */) {
        font-size: 4.5rem /* 4.5rem = 72px */;
    }
`;

export const TextWelcome = styled.p`
    color: var(--secondary-foreground);
    font-size: 18px;
    line-height: 1.5;
    max-width: 448px;
`;

export const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;

    .link-1 {
        transition: all .125s ease-in-out;
        color: var(--foreground);
        text-decoration: none;
        border: solid 1px var(--border);
        padding: 0.75rem 1.5rem;
        font-weight: 600;
        font-size: .875em;
        line-height: 1.4;
        border-radius: calc(infinity * 1px);
        
        &:hover {
            background-color: var(--border);
        }
    }
    
    .link-2 {
        transition: all .125s ease-in-out;
        background-color: var(--primary);
        color: var(--primary-foreground);
        text-decoration: none;
        padding: 0.75rem 1.5rem;
        font-weight: 600;
        font-size: .875em;
        line-height: 1.4;
        border-radius: calc(infinity * 1px);

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