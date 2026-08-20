import styled from 'styled-components';

export const BannerSection = styled.section`
    position: relative;
    overflow: hidden;
    padding-block: 4rem;
    background: linear-gradient(135deg, #1a0e10 0%, #0d0c0b 100%);
`;

export const BannerImgCont = styled.div`
    position: absolute;
    inset: 0;
    opacity: 15%;

    .img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const BannerGradient = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(13,12,11,0.9) 100%);
`;

export const BannerTitleCont = styled.div`
    position: relative;
    max-width: 1280px;
    margin-inline: auto;
    padding-inline: 1.5rem;
    text-align: center;

    p {
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin: 0 0 0.75rem 0;
        color: var(--primary);
    }

    h1 {
        font-size: 2.25rem;
        font-weight: 600;
        color: var(--foreground);
        margin: 0;
    }

    @media (width >= 48rem /* 768px */) {
        h1 {
            font-size: 48px /*= 48px */;
        }
    }
`;
