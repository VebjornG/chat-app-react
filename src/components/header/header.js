import React from 'react'
import { 
        Header, 
        Container, 
        Logo, 
        Ul, 
        Li, 
        Div, 
        StyledLink, 
        StyledH3,
        HeaderLogo,
        Img } from './headerStyles'

//import firebase from 'firebase/app';
//import 'firebase/auth';
//const auth = firebase.auth()


const HeaderComponent = ({ children }) => {

/*function SignOut() {
    return auth.currentUser && (
    
        <button onClick={() => auth.signOut()}>Sign Out</button>
    )
}*/

  /*const loggedInAs = ({ user }) => {
    return (
        <>
            {`Logged in as ${user}`}
        </>
    )
  }*/

  return(
    <Header>
        <Container>
            <Logo><StyledH3>Messenger</StyledH3></Logo>
        </Container>

        <HeaderLogo>
            <Img src="./images/mangologo.png" alt="Messenger logo" />
        </HeaderLogo>

        <Ul>
            <Li>
                
                    {children}
                
            </Li>
        </Ul>
    </Header>
   )

 }

export default HeaderComponent