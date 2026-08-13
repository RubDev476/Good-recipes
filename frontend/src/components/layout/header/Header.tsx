import { Link, useLocation } from "react-router";

import Logo from "../../ui/Logo.tsx";

import {HeaderContainer, LogoContainer, Nav, Routes} from "./header.styles.ts";

export const Header = () => {
    const {pathname} = useLocation();

    return (
        <HeaderContainer>
            <Nav>
                <div className={'all-center'}> 
                    <Link to={'/'} style={{textDecoration: 'none'}} className={'all-center'}>
                        <LogoContainer>
                            <Logo fill={'#fff'} />
                        </LogoContainer>

                        <span 
                            className="font-display name-site"
                        >
                            Good <span style={{ color: 'var(--primary)' }}>Recipes</span>
                        </span>
                    </Link>
                </div>

                <Routes>
                    <Link to={'/meals'} className={`link all-center ${pathname.includes("meals") ? "current-path-color" : ""}`}><svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2" /><path d="M7 2v20" /><path d="M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
                    </svg> Meals</Link>
                    <Link to={'/cocktails'} className={`link all-center ${pathname.includes("cocktails") ? "current-path-color" : ""}`}><svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 22h8M12 11v11M3 3l9 8 9-8M5 3h14" />
                    </svg> Cocktails</Link>
                </Routes>

                <div>
                    <Link to={'/login'} className={"link-1"}>Login</Link>
                    <Link to={'/register'} className={"link-2"}>Register</Link>
                </div>
            </Nav>
        </HeaderContainer>
    );
};
