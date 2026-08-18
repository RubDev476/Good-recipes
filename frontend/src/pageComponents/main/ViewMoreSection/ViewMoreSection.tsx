import {Link} from "react-router";

import {
    CategoriesLinksCont,
    Section,
    SectionCont,
    TitleContainer,
    ViewmoreLinkCont
} from "./viewMoreSection.styles.ts";

import type {ViewMoreSectionProps} from "../../../types/props.ts";

export default  function ViewMoreSection({tag, nameCategories, title}: ViewMoreSectionProps) {
    return(
        <Section>
            <SectionCont>
                <TitleContainer>
                    <h2>{title}</h2>
                    <p>Browse by meal category</p>
                </TitleContainer>

                <CategoriesLinksCont>
                    {nameCategories.map(nameCategory => (
                        <Link key={nameCategory} to={`/${tag}/category/${nameCategory}`}>{nameCategory}</Link>
                    ))}
                </CategoriesLinksCont>

                <ViewmoreLinkCont>
                    <Link to={`/${tag}`}>View more categories</Link>
                </ViewmoreLinkCont>
            </SectionCont>
        </Section>
    )
}