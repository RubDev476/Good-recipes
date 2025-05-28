import {styled} from "styled-components";

export const HeaderContainer = styled.header`
    position: sticky;
    top: 0;
    width: 100%;
    background-color: #e50077;
    z-index: 900;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    font-size: 1rem;
    
    /*CREATE A REUSABLE COMPONENT LATER*/
    .link-1 {
        border-radius: 50px;
        transition: all .3s ease-in-out;
        background-color: var(--color-1);
        color: var(--color-5);
        text-decoration: none;
        border: solid 1px var(--color-5);
        padding: 6px 25px;
        font-weight: 600;
        font-size: .8em;
        
        &:hover {
            background-color: var(--color-5);
            color: var(--color-1);
        }
    }
    
    .link-2 {
        border-radius: 50px;
        transition: all .3s ease-in-out;
        background-color: var(--color-5);
        color: var(--color-1);
        text-decoration: none;
        border: solid 1px var(--color-5);
        padding: 6px 25px;
        font-weight: 600;
        font-size: .8em;
        margin-left: 8px;
    }

    @media screen and (min-width: 640px) {
        font-size: 1.1rem;
    }

    @media screen and (min-width: 940px) {
        font-size: 1.4rem;
    }
`;

export const Nav = styled.nav`
    width: 100%;
    max-width: calc(74.375rem + 160px);
    margin: auto;
    box-sizing: border-box;
    padding: .3rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    @media screen and (min-width: 940px) {
        padding: .4rem 1rem;
    }
`;

export const LogoContainer = styled.div`
    svg {
        width: 47px;
        height: 47px;
    }
    
    @media screen and (min-width: 940px) {
        svg {
            width: 60px;
            height: 60px;
        }
    }
`;

export const Routes = styled.div`
    *display: flex;
    *align-items: center;
    *justify-content: center;
    margin-left: 30px;
    display: none;
    
    a {
        text-decoration: none;
        color: var(--color-5);
        position: relative;
        margin-right: 20px;
        font-size: .8em;
        font-weight: 300;
        
        .icon {
            margin-right: 5px;
        }
        
        &::after {
            content: '';
            background-color: var(--color-5);
            width: 0;
            height: 3px;
            border-radius: 10px;
            position: absolute;
            left: 0;
            bottom: -6px;
            transition: width .2s ease-in-out;
        }
        
        &:hover::after {
            width: 100%;
        }
    }
    
    @media screen and (min-width: 640px) {
        display: block;
    }

    @media screen and (min-width: 940px) {
        a::after {
            height: 4px;
            bottom: -10px;
        }
    }
`;