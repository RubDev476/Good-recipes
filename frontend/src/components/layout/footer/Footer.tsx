import { Link } from "react-router";
import { 
    StyledFooter, 
    Container, 
    BrandContainer, 
    LogoContainer, 
    Brand, 
    GridContainer, 
    NavLinks, 
    Copyright, 
    SocialMediaContainer,
    SocialMediaBtn,
    NavLinksTitle
} from "./footer.styles";
import Logo from "../../ui/Logo";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <GridContainer>
                    {/* Brand */}
                    <BrandContainer>
                        <Brand>
                            <LogoContainer>
                                <Logo fill={'#fff'} />
                            </LogoContainer>
                            <span
                                className="font-display name-site"
                            >
                                Good <span style={{ color: 'var(--primary)' }}>Recipes</span>
                            </span>
                        </Brand>

                        <p
                            style={{
                                color: 'var(--muted-foreground)',
                                fontSize: '14px',
                                lineHeight: '1.6'
                            }}
                        >
                            Discover thousands of recipes crafted by passionate home cooks and professional chefs.
                        </p>

                        <SocialMediaContainer>
                            {['instagram', 'facebook', 'youtube', 'pinterest', 'tiktok'].map((s) => (
                                <SocialIcon key={s} name={s} />
                            ))}
                        </SocialMediaContainer>
                    </BrandContainer>

                    <div style={{ gridColumn: 'span 1'}} />

                    {/* Site map */}
                    <div>
                        <NavLinksTitle>
                            Site Map
                        </NavLinksTitle>

                        <NavLinks>
                            {[
                                { label: 'Meal Recipes', target: 'meals' },
                                { label: 'Cocktail Recipes', target: 'cocktails' },
                                { label: 'Favourites', target: '/' },
                            ].map((link) => (
                                <Link 
                                    to={link.target} 
                                    key={link.label}
                                    className="link"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </NavLinks>
                    </div>
                </GridContainer>

                <Copyright>
                    <span>©2026 Created by RubDeveloper</span>
                </Copyright>
            </Container>
        </StyledFooter>
    );
};

function SocialIcon({ name }: { name: string }) {
    const icons: Record<string, React.ReactNode> = {
        instagram: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
        ),
        facebook: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
        ),
        youtube: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
            </svg>
        ),
        pinterest: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M8 20l4-9" /><path d="M10.7 14c.437 1.263 1.43 2 2.55 2 2.071 0 3.75-1.679 3.75-3.75C17 9.4 14.8 7 12 7 9.3 7 7 9.3 7 12c0 1.1.35 2.1.9 2.9" />
            </svg>
        ),
        tiktok: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5" />
            </svg>
        ),
    }

    return (
        <SocialMediaBtn id={name} aria-label={name}>
            {icons[name]}
        </SocialMediaBtn>
    )
}
