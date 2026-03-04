import styled from "styled-components";

export const Container = styled.article`
    width: 100%;
    display:flex;
    flex-direction: column;

    a {
        color: #252525;
        text-decoration: none;
        margin: auto;
        width: 100%;
        max-width: 400px;
    }
`
export const Container_image = styled.div`
display: flex;
 width: 100%;
 max-height: 200px;
 border-radius: 12px;
 overflow: hidden;
 
 img {
     width: 100%;
     height: auto;
     object-fit: cover;
    }

@media screen and (min-width: 480px) {
    height: calc(100px + 15vw);
    max-height: 225px;
}
`
export const Container_info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-bottom: 20px;
`
export const Title = styled.p`
font-size: calc(16px + 0.4vw);
color: #471f05;
font-weight: 600;
margin: 0;

@media screen and (min-width: 480px) {

}
`
export const Tag_food = styled.p`
    color: #ffffff;
    background-color: #ea4335;
    font-size: calc(13px + .3vw);
    padding: 7px;
    border-radius: 100%;
`
export const Tag_drinks = styled.p`
    color: #ffffff;
    font-size: calc(13px + .3vw);
    background-color: #f2af29;
    padding: 7px;
    border-radius: 100%;
`