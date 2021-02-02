import styled from "styled-components"

export const Container = styled.div `
    width: 100%;
    border: 1px solid #eee;
    background: #fff;
    box-shadow: 0 0 5px 1px #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerSignIn = styled.div `
    display: flex;
    justify-content: center;
    width: 500px;
    position: relative;
    margin: 210px auto;
    height: 30vh;
    background-color: black;
`;

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
`;

export const Input = styled.input `
    margin: 0.8rem;
    padding: 10px;
`;

export const CardButton = styled.button `
    /*padding: 20px;
    width: 200px;
    background-color: #3B3B47; #1b5ff9;
    #e17366;
    font-size: 20px;
    color: white;
    border: none;
    font-weight: bold;
    &:hover, &:focus {
        background-color: #1db954; #e17366;
        color: white;
        box-shadow: 0 0 10px 8px #ccc;
        transition: 200ms;
        cursor: pointer;
        transform: scale(1.05) perspective(1px);
    }*/

    border: none;
    display: block;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
    outline: none;
    overflow: hidden;
    position: relative;
    color: #fff;
    font-weight: 600;
    font-size: 20px;
    background-color: #222;
    padding: 30px 60px;
    margin: 0 auto;
    box-shadow: 0 5px 15px rgba(0,0,0,0.20);

    &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 490%;
        width: 140%;
        text-color: white;
        background: #e17366;/*#78c7d2;*/
        -webkit-transition: all .5s ease-in-out;
        transition: all .5s ease-in-out;
        -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
        transform: translateX(-98%) translateY(-25%) rotate(45deg);
    }

    &:hover:after {
        -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
        transform: translateX(-9%) translateY(-25%) rotate(45deg);
    }
`;

export const Title = styled.h1 `
    text-align: center;
`;

export const Text = styled.p `
    text-decoration: none;
`;
