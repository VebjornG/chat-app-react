import styled from "styled-components"
import EmojiPicker from "emoji-picker-react"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 400px;
    margin: 50px auto;
`;

export const Section = styled.section `
    display: flex;
    position: relative;
    width: 100%;
    height: calc(100% - 165px);
    overflow: hidden; /* prevents scrollbars from showing up, even when they're necessary. */
`;

export const DivUsers = styled.div `
    width: 30%;
    height: 100%;
    overflow-x: hidden;
    border-right: 1px solid #ccc;
    padding-top: 170px;
    display: flex;
    position: absolute;

    @media (max-width: 700px) {
        display: none;
    }
`;

export const DivName = styled.div `
    /*display: flex;*/
    /*align-items: center;*/
    padding: 5px 10px;
    box-sizing: border-box;
    cursor: pointer;
    width: 100%;
    display: grid;
    grid-template-columns: 90px auto;
    &:active {
        background: #ccc;
    }
`;

export const DivPic = styled.div `
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 25px;
`;

export const DivChatArea = styled.div `
    width: 70%;
    height: 100%;
    overflow-x: hidden;
    display: flex;
    margin-left: 30%;
    /*background-color: skyblue;*/

    @media (max-width: 700px) {
        width: 100%;
        margin-left: 0%;
    }
`;

export const DivChatHeader = styled.div `
    position: absolute;
    width: 70%;
    height: 40px;
    background: white;
    font-weight: bold;
    line-height: 40px;
    font-size: 20px;
    color: #000;
    text-align: center;
    z-index: 5;
    top: 163px;
    margin-left: 2px;
    

    @media (max-width: 700px) {
        width: 100%;
        top: 120px;
        
    }

`;

export const DivMessageSections = styled.div `
    height: 90vh;   /*90vh*/
    display: flex;
    width: 100%;                   /* added top: 125px in Header to (headerStyles)*/
    overflow-x: hidden;
    position: relative;
    top: 170px;
    z-index: 1;
`;

export const DivChatControls = styled.form `
    display: flex;
    position: fixed;
    width: 70%;
    height: 100px;
    bottom: 0;
    /*background-color: crimson;*/
    padding: 5px 5px 0;

    @media (max-width: 700px) {
        width: 100%;
    }
`;

export const TextContainer = styled.div `
    textAlign: left; 
    width: 100%; 
    position: relative;
`;

export const TextMessage = styled.p `
    /*background: skyblue;*/
    /*width: 500%;*/
    padding: 1em;
    box-sizing: border-box;
    width: 100%;

    /*@media (max-width: 700px) {    
    }*/
`;

export const Image = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Text = styled.h3 `
    /*display: grid;
    place-items: center;*/
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    font-weight: bold;
`;


export const StyledLink = styled.div `
    text-decoration: none;
    position:relative;
    color: black;
    /*&:hover, &:focus {
        color: white;
        transition: 400ms;
    }*/
    
`;

export const Button = styled.button `
    
    margin: 0.7rem;
    font-size: 20px;
    width: 25%;
    color: white;
    background-color: #CA675B; /*#63B8FF;*/ /*#1b5ff9;*/ /*#e17366;*/
    border: none;
    font-weight: bold;
    &:hover, &:focus {
        color: white;
        background-color: #e17366; /*#e17366;*/ 
        box-shadow: 0 0 5px 2px #ccc;
        transition: 400ms;
        cursor: pointer;
        transform: scale(1.05) perspective(0px);
    }
`;

export const Textarea = styled.input `
    width: 100%;
    resize: none;
    font-size: 15px;
`;

export const DivUserInfo = styled.div `
    display: flex;
    flex: 1;
    margin: 0 10px;
    justify-content: space-between;
`;

export const SpanOnline = styled.span `
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #16e316;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 #16e316;
    margin-top: 1.3em;
    margin-left: 1em;
`;

export const SpanOffline = styled.span `

    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background: green;
    box-shadow: 0 0 0 0;
`;

export const SpanAway = styled.span `
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background: #ffdf00;
    box-shadow: 0 0 10px 0 #ffdf00;
`;

export const EmojisContainer = styled.div `
    width: 100%;
    max-height: 100%;
    overflow-y: auto;
    background-color: white;
`;

//export const EmojiPickerContainer = styled(EmojiPicker) `
//`;