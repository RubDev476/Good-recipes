import { Link } from "react-router";

import { 
    ContentContainer,
    DivBackground,
    Greeting,
    ImgContainer,
    LinksContainer,
    MainContainer,
    TextWelcome,
    Welcome
} from "./mainContent.styles";

export default function MainContent() {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

    return (
        <main>
            <MainContainer>
                <ImgContainer>
                    <img
                        src="/images/hero.avif"
                        alt="Hero"
                        className="img-background"
                    />
                </ImgContainer>

                <DivBackground />

                <ContentContainer>
                    <Greeting>
                        {greeting}
                    </Greeting>

                    <Welcome>
                        Welcome to<br />
                        <span style={{ color: 'var(--primary)' }}>Good Recipes</span>
                    </Welcome>

                    <TextWelcome>
                        Thousands of recipes crafted for every moment — from quick breakfasts to weekend feasts.
                    </TextWelcome>

                    <LinksContainer>
                        <Link to={'/meals'} className="link-2">
                            Explore recipes
                        </Link>

                        <Link to={'/cocktails'} className="link-1">
                            View cocktails
                        </Link>
                    </LinksContainer>
                </ContentContainer>
            </MainContainer>
        </main>
    )
}
