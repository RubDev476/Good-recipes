import {styled} from "styled-components";

export const HeaderContainer = styled.header`
    position: sticky;
    top: 0;
    width: 100%;
    background-color: var(--card);
    border-bottom: solid 1px var(--border); 
    z-index: 900;
    font-size: 1rem;

    /*CREATE A REUSABLE COMPONENT LATER*/
    .link-1 {
        border-radius: 50px;
        color: var(--foreground);
        text-decoration: none;
        border: solid 1px var(--border);
        padding: 8px 16px;
        font-weight: 600;
        font-size: .9em;
        transition: all .125s ease-in-out;
        
        &:hover {
            background-color: var(--border);
        }
    }
    
    .link-2 {
        border-radius: 50px;
        background-color: var(--primary);
        color: var(--primary-foreground);
        text-decoration: none;
        padding: 8px 16px;
        font-weight: 600;
        font-size: .9em;
        margin-left: 8px;
        transition: all .125s ease-in-out;

        &:hover {
            opacity: 90%;
        }
    }
`;

export const Nav = styled.nav`
    width: 100%;
    max-width: 1280px;
    margin: auto;
    box-sizing: border-box;
    padding: .7rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .name-site {
        display: none;
        color: var(--foreground);
        font-weight: 600;
        font-size: 1.2rem;
        margin-left: 10px;
    }

    @media screen and (min-width: 720px) {
        .name-site {
            display: block;
        }
    }
`;

export const LogoContainer = styled.div`
    background-color: var(--primary);
    border-radius: 40px;
    width: 40px;
    height: 40px;

    svg {
        width: 40px;
        height: 40px;
    }
`;

export const Routes = styled.div`
    display: none;
    
    a {
        text-decoration: none;
        color: var(--secondary-foreground);
        position: relative;
        font-size: .9em;
        font-weight: 600;
        
        .icon {
            width: 1em;
            height: 1em;
            margin-right: 7px;
        }
    }

    a.current-path-color {
        color: var(--primary);
    }
    
    @media screen and (min-width: 640px) {
        display: flex;
        gap: 2em;
    }
`;