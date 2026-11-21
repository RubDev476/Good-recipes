import { Link } from "react-router";
import styled from "styled-components";

const NotFoundSection = styled.section`
    min-height: 65vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 3rem 1.5rem;
    background: var(--background);
    color: var(--foreground);
`;

const ErrorCode = styled.span`
    font-size: clamp(4rem, 12vw, 7rem);
    font-weight: 700;
    line-height: 1;
    color: var(--primary);
    margin-bottom: 0.75rem;
`;

const Title = styled.h1`
    font-size: clamp(1.5rem, 4vw, 2.25rem);
    margin: 0 0 0.75rem 0;
`;

const Message = styled.p`
    color: var(--muted-foreground);
    max-width: 420px;
    margin: 0 0 2rem 0;
    line-height: 1.6;
`;

const HomeLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    padding: 0.75rem 1.75rem;
    border-radius: 999px;
    background: var(--primary);
    color: var(--primary-foreground);
    text-decoration: none;
    font-weight: 600;
    transition: opacity 0.2s ease;

    &:hover {
        opacity: 0.9;
    }
`;

interface NotFoundProps {
    code?: string;
    title?: string;
    message?: string;
    backTo?: string;
    backLabel?: string;
}

export default function NotFound({
    code = "404",
    title = "Page not found",
    message = "The recipe or page you are looking for does not exist or may have been moved.",
    backTo = "/",
    backLabel = "Back to Home",
}: NotFoundProps) {
    return (
        <NotFoundSection>
            <ErrorCode className="font-display">{code}</ErrorCode>
            <Title className="font-display">{title}</Title>
            <Message>{message}</Message>
            <HomeLink to={backTo}>{backLabel}</HomeLink>
        </NotFoundSection>
    );
}
