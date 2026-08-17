import styled from "styled-components";

export const SliderContainer = styled.div`
    //max-width: calc(74.375rem + 160px);

    /*NOTE: These classes belong to swipper*/
    .swiper-button-prev,
    .swiper-button-next {
        //background: #ffffff;
        //padding: 7px;
        //width: 50px;
        //height: 100%;
        top: 0px;

        svg {
            //color: #e50077;
            //width: 22px;
        }
    }

    .swiper-button-prev {
        left: 0px;
    }

    .swiper-button-next {
        right: 0px;
    }

    .swiper {
        padding-bottom: 25px;
    }

    @media screen and (min-width: 1280px) {
        .swiper {
            //padding: 0px 80px 0px;
        }
    }
`;
