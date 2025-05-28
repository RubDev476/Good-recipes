import { Link } from "react-router";

import LogoProject from "../../ui/Logo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faFacebook,
    faYoutube,
    faPinterest,
    faTiktok,
} from "@fortawesome/free-brands-svg-icons";

import { StyledFooter, Container, FooterMenuNavigation, FooterNavigation, FooterMenuNavigationUl, FooterMenuNavigationTitle, FooterMenuNavigationUlLiA, FooterLogos, FooterMenuNavigationLi, FooterMenuNavigationUlLi, FooterSocials, Logo, Copyright } from "./footer.styles";

export const footerItems = [
    {
        title: "Site map",
        items: [
            {
                label: "Meal recipes",
                href: "/meals",
            },
            {
                label: "Cocktail recipes",
                href: "/cocktails",
            },
            {
                label: "Favourites",
                href: "#",
            }
        ],
    },
    {
        title: "Collaborators for this  project",
        items: [
            {
                label: "HopeDark22",
                href: "https://github.com/Darkhope22",
            },
            {
                label: "Ulises Saucedo",
                href: "https://github.com/Ulises-Saucedo",
            },
            {
                label: "Nicolás García López",
                href: "https://github.com/XnicolasG",
            }
        ],
    },
];

export const socialLinks = [
    {
        icon: faInstagram,
        href: "#",
    },
    {
        icon: faFacebook,
        href: "#",
    },
    {
        icon: faYoutube,
        href: "#",
    },
    {
        icon: faPinterest,
        href: "#",
    },
    {
        icon: faTiktok,
        href: "#",
    },
];

export const copyrightItems = [
    {
        href: "https://www.recetasnestle.com.mx/",
        label: "Design inspired from the original 'Recetas Nestlé' website",
    }
];

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterNavigation>
                    <FooterMenuNavigation>
                        {footerItems.map((footerItem, idx) => (
                            <FooterMenuNavigationLi key={idx}>
                                <FooterMenuNavigationTitle>
                                    {footerItem.title}
                                </FooterMenuNavigationTitle>

                                <FooterMenuNavigationUl>
                                    {footerItem.items.map((item, itemIdx) => (
                                        <FooterMenuNavigationUlLi key={itemIdx}>
                                            <FooterMenuNavigationUlLiA to={item.href}>
                                                {item.label}
                                            </FooterMenuNavigationUlLiA>
                                        </FooterMenuNavigationUlLi>
                                    ))}
                                </FooterMenuNavigationUl>
                            </FooterMenuNavigationLi>
                        ))}
                    </FooterMenuNavigation>
                </FooterNavigation>

                <FooterLogos>
                    <Logo to="/">
                        <LogoProject fill="#471f05" />
                    </Logo>
                    <FooterSocials>
                        {socialLinks.map((link, idx) => (
                            <li key={idx}>
                                <FontAwesomeIcon
                                    icon={link.icon}
                                    style={{ fontSize: "20px" }}
                                    className="icon"
                                />
                            </li>
                        ))}
                    </FooterSocials>
                </FooterLogos>

                <Copyright>
                    <p>
                        ©2025 Created by RubDeveloper
                    </p>
                    <ul>
                        {copyrightItems.map((item, idx) => (
                            <li key={idx}>
                                <Link to={item.href}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </Copyright>
            </Container>
        </StyledFooter>
    );
};
