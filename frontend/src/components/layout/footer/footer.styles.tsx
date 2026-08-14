import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: var(--secondary);
    border-top: 1px solid var()--border;
`;

export const Container = styled.div`
    box-sizing: border-box;
    max-width: 1280px;
    padding: 3.5rem 1.5rem;
    margin-inline: auto;
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 2.5rem;

    @media (width >= 48rem /* 768px */) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
`;

export const BrandContainer = styled.div`
    font-size: 1.2rem;

    @media (width >= 48rem /* 768px */) {
        grid-column: span 1 / span 1;
    }
`;

export const Brand = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    margin-bottom: 1rem;
    font-weight: 600;
`;

export const LogoContainer = styled.div`
    background-color: var(--primary);
    border-radius: 28px;
    width: 28px;
    height: 28px;

    svg {
        width: 28px;
        height: 28px;
    }
`;

export const SocialMediaContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 20px;
`;

export const SocialMediaBtn = styled.button`
    background: var(--muted); 
    color: var(--muted-foreground);
    width: 32px;
    height: 32px;
    border-radius: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
`;

export const NavLinksTitle = styled.h4`
    color: var(--muted-foreground);
    font-size: 12px;
    line-height: 1.3;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 16px;
    margin-top: 0px;
`;

export const NavLinks = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0px;
    gap: 1rem;

    .link {
        color: var(--secondary-foreground);
        font-size: 14px;
        text-decoration: none;

        &:hover {
            color: var(--primary-foreground);
        }
    }
`;

export const Copyright = styled.div`
    margin-top: 3rem;
    padding-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: .5rem;
    font-size: 12px;
    line-height: 1.3;
    border-top: 1px solid var(--border);
    color: var(--muted-foreground);

    @media (width >= 768px) {
        flex-direction: row;
    }
`;
