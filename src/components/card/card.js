import React from "react"
import { Container } from "./cardStyles"

function Card({ children }) {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Card