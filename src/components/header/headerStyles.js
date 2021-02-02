import styled from "styled-components"

export const Header = styled.header `
    display: flex;
    justify-content: space-between;
    width: 100%;
    /*height: 15vh;*/
    /*background-color: #e17366;*/
    background: #4ba5eb; /*#1b5ff9;*/
    position: fixed;
    top: 0;
    z-index: 100;
    overflow: hidden;
`;

export const Container = styled.div `
    display: flex;
    /*justify-content: center;
    align-items: center;*/
`;

export const Logo = styled.div `
    font-size: 30px;
    color: #fff;
    font-weight: bold;
    margin: 25px 80px;

    @media (max-width: 700px) {
        display: none;
    }
`;

export const Ul = styled.ul `
    display: flex;
    font-weight: bold;
    margin: 35px;
`;

export const Li = styled.li `
    display: flex;
    color: white;
    font-size: 30px;
    text-decoration: none;
    margin: 30px 80px 0px; 
    text-decoration: none;

    @media (max-width: 700px) {
        margin: 20px 70px 0; 
    }
`;

export const StyledLink = styled.div `
    text-decoration: none;
    color: white;
    cursor: pointer;
    &:hover, &:focus {
        color: white; /*#e17366;*/
        transition: 400ms;
        transform: scale(1.2) perspective(1px);
    }
`;

export const StyledH3 = styled.h3 `
    text-decoration: none;
    color: white;
    &:hover, &:focus {
        color: #e17366;;
        transition: 400ms;
    }
`;

export const Div = styled.div `
    margin: 35px 0;
    font-size: 25px;
    font-weight: bold;
    color: #fff;
    fontWeight: 'bold';
`;

export const HeaderButton = styled.button `
    
    margin: 0.7rem;
    width: 150px;
    font-size: 20px;
    padding: 20px;
    color: white;
    background-color: #1b5ff9; /*#e17366;*/
    border: none;
    font-weight: bold;
    &:hover, &:focus {
        color: #e17366;
        /*background-color: #e17366;*/ /*#e17366;*/
        transition: 400ms;
        cursor: pointer;
    }
`;


export const HeaderLogo = styled.div `
    @media (min-width: 700px) {
        display: none;
    }

`;

export const Img = styled.img `
    margin: 20px 10px 0;
    height: 90px;
    width: 90px;
`;