import { Link } from "react-router";
import { ViewMoreSectionProps } from "../../../types/props";
import {
    Section,
    SectionCont,
    TextPrimary,
    TextMuted,
    Title,
    LinksCont,
    ViewmoreLinkCont,
    ImageCont,
    GridCont
} from "./viewMoreAltSection.styles";

export default function ViewMoreAltSection({ title, tag, nameCategories }: ViewMoreSectionProps) {
    return (
        <Section>
            <SectionCont>
                <GridCont>
                    <div>
                        <TextPrimary>Drinks & Cocktails</TextPrimary>
                        <Title>{title}</Title>
                        <TextMuted>From refreshing soft drinks to craft cocktails — find the perfect pour for any occasion.</TextMuted>

                        <LinksCont>
                            {nameCategories.map(nameCategory => (
                                <Link key={nameCategory} to={`/${tag}/category/${nameCategory}`}>{nameCategory}</Link>
                            ))}
                        </LinksCont>

                        <ViewmoreLinkCont>
                            <Link to={`/${tag}`}>View more categories</Link>
                        </ViewmoreLinkCont>
                    </div>

                    <ImageCont>
                        <img
                            src="/images/vw-section.avif"
                            alt={tag}
                        />
                        <div className="gradient" />
                    </ImageCont>
                </GridCont>
            </SectionCont>
        </Section>
    )
}
