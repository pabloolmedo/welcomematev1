import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";






const Navigation = () => {
    return (

        <>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="light" className="fs-5 py-1 py-sm-2 py-md-3">
                <Container >
                    <Navbar.Brand as={Link} to='/'>Welcome Mate Australia</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto " >
                            <Nav.Link as={Link} to='/estudia'>Estudia</Nav.Link>
                            <Nav.Link as={Link} to='/trabaja'>Trabaja</Nav.Link>
                            {/* <Nav.Link as={Link} to='/quienesSomos'>Quienes Somos</Nav.Link> */}
                            <Nav.Link as={Link} to='/contactanos'>Contactanos</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>





        </>

    )
}

export default Navigation