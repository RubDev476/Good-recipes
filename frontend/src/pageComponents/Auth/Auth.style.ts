import { Link } from 'react-router';
import styled from 'styled-components';

export const AuthCont = styled.section`
    display: grid;
    background: var(--background);

    @media (width >= 48rem /* 768px */) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const AuthImgCont = styled.div`
    position: relative;
    overflow: hidden;
    display: none;
    max-height: 700px;
    box-sizing: border-box;

    @media (width >= 48rem /* 768px */) {
        display: block;
    }
`;

export const AuthImg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

export const AuthImgGradient = styled.div`
    position: absolute;
    inset: 0px;
    background: linear-gradient(135deg, rgba(13,12,11,0.3) 0%, rgba(232,24,122,0.15) 100%);
`;

export const TextCont = styled.div`
    position: absolute;
    bottom: 3rem;
    left: 2.5rem;
    right: 2.5rem;

    p {
        margin: 0;
    }

    .text1 {
        font-size: 2.25rem;
        font-weight: 600;
        color: var(--foreground);
        line-height: 1.25;
        margin: 0 0 0.75rem 0;

        span {
            color: var(--primary);
        }
    }

    .text2 {
        color: var(--foreground);
        font-size: 0.875rem;
        opacity: 65%;
    }
`;

export const FormCont = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-inline: 1.5rem;
    padding-block: 4rem;

    .cont {
        width: 100%;
        max-width: 28rem;
        box-sizing: border-box;
    }
`;

export const LogoCont = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 2.5rem;
`;

export const LogoContainer = styled.div`
    background-color: var(--primary);
    border-radius: 40px;
    width: 40px;
    height: 40px;

    svg {
        width: 40px;
        height: 40px;
    }
`;

export const ToggleCont = styled.div`
    display: flex;
    border-radius: 0.75rem;
    padding: 0.25rem;
    margin-bottom: 2.25rem;
    background: var(--secondary);
    border: 1px solid var(--border);
`;

export const ToggleBtn = styled(Link)`
    text-decoration: none;
    text-align: center;
    flex: 1;
    border: none;
    padding-block: 0.625rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: capitalize;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
`;

//=================================== forms
export const HeadingFormCont = styled.div`
    margin-bottom: 2rem;

    h1 {
        font-size: 1.875rem;
        font-weight: 600;
        margin: 0 0 0.25rem 0;
        color: var(--foreground);
    }

    p {
        margin: 0;
        font-size: 0.875rem;
        color: var(--muted-foreground);
    }
`;

export const ContinueWith = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-block: 1.25rem;

    .line {
        flex: 1;
        height: 1px;
        background: var(--border);
    }

    span {
        font-size: 0.75rem;
        color: var(--muted-foreground);
    }
`;

export const GoogleBtn = styled.button`
    width: 100%;
    padding-block: 0.75rem;
    border-radius: 0.75rem;
    font-size: 0.875rem;
    font-weight: 500;
    border: solid 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    margin-bottom: 2rem;
    border-color: var(--border);
    color: var(--foreground);
    background-color: transparent;
    transition: all .2s ease-in-out;

    &:hover {
        background-color: var(--secondary);
    }
`;

export const TermsPrivacy = styled.p`
    text-align: center;
    font-size: 0.75rem;
    margin: 1rem 0 0 0;
    color: var(--muted-foreground);

    span {
        color: var(--foreground);
    }
`;