import styled from "styled-components";

export const Section = styled.section`
    margin: 2rem 0;

    .slider-title {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
    }

    @media (width >= 48rem /* 768px */) {
        .slider-title {
            font-size: 1.875rem /* 1.875rem = 30px */;
        }
    }
`;