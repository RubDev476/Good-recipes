import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMartiniGlassCitrus, faCutlery} from "@fortawesome/free-solid-svg-icons";

import Logo from "../../ui/Logo.tsx";

import {HeaderContainer, LogoContainer, Nav, Routes} from "./header.styles.ts";

export const Header = () => {
    return (
        <HeaderContainer>
            <Nav>
                <div className={'all-center'}>
                    <Link to={'/'}>
                        <LogoContainer>
                            <Logo fill={'#fff'} />
                        </LogoContainer>
                    </Link>

                    <Routes>
                        <Link to={'/meals'} className={"link"}><FontAwesomeIcon icon={faCutlery} className={'icon'} /> Meals</Link>
                        <Link to={'/cocktails'} className={"link"}><FontAwesomeIcon icon={faMartiniGlassCitrus} className={'icon'} /> Cocktails</Link>
                    </Routes>
                </div>

                <div>
                    <Link to={'/login'} className={"link-1"}>Login</Link>
                    <Link to={'/register'} className={"link-2"}>Register</Link>
                </div>
            </Nav>
        </HeaderContainer>
    );
};
