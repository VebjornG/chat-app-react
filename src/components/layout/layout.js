import React from 'react'
import { Container } from "./layoutStyles"
import HeaderComponent from '../header/header'


function Layout ({ children }) {
  return(
    <Container>
        {children}
    </Container>
   )

 }

export default Layout