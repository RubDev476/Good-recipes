import { Link } from 'react-router'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
    text-decoration: none;
`

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    border-radius: 12px;
    *max-width: 250px ;
    min-width: 200px;
    *min-height:250px;
    color: #ffffff;
    text-decoration: none;
    transition:all .4s ease-in-out;

    &:hover{
        *box-shadow: 0 8px 16px rgba(0, 0, 0, 0.51); 
        img{
            transform:scale(1.1);
        }
        
        .container-image {
            background:rgb(228, 228, 228);
        }
    }
    
    `


export const Container_image = styled.div`
    display: flex;
    align-items: end;
    width: 100%;
    height: 200px;
    background: #ffffff;
    overflow:hidden;
    transition: all .3s ease-in-out;
    
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        transition: transform .3s ease-in-out;
    }
    `

export const Container_p = styled.article`
    display:flex;
    width: 100%;
    justify-content: center;
    background-color: #e50077;
    
    p {
        font-weight: bolder;
        font-size: 20px;
        margin: 0;
        padding: 10px 0;
    }
`