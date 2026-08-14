import styled from "styled-components";

export const ContentContainer = styled.div`
    position: relative;
    max-width: 1280px;
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
    //margin: 0px;
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

export const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;

    .link-1 {
        transition: all .3s ease-in-out;
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
        transition: all .3s ease-in-out;
        background-color: var(--primary);
        color: var(--primary-foreground);
        text-decoration: none;
        padding: 0.75rem 1.5rem;
        font-weight: 600;
        font-size: .875em;
        line-height: 1.4;
        border-radius: calc(infinity * 1px);
        //margin-left: 8px;

        &:hover {
            opacity: 90%;
        }
    }
`;