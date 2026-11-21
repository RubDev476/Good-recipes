import { Link, useLocation } from "react-router";

import Logo from "../../ui/Logo.tsx";
import { CocktailIcon, MealIcon } from "../../ui/CategoryIcons";

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
                    <Link to={'/meals'} className={`link all-center ${pathname.includes("meals") ? "current-path-color" : ""}`}>
                        <MealIcon className="icon" strokeWidth={2} /> Meals
                    </Link>
                    <Link to={'/cocktails'} className={`link all-center ${pathname.includes("cocktails") ? "current-path-color" : ""}`}>
                        <CocktailIcon className="icon" strokeWidth={2} /> Cocktails
                    </Link>
                </Routes>

                <div>
                    <Link to={'/login'} className={"link-1"}>Login</Link>
                    <Link to={'/register'} className={"link-2"}>Register</Link>
                </div>
            </Nav>
        </HeaderContainer>
    );
};
