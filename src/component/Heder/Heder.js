import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Heder.css'

const Heder = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img style={{height:'50px'}} src="https://st2.depositphotos.com/1007358/5507/v/380/depositphotos_55071171-stock-illustration-camera-icon-black-and-white.jpg?forcejpeg=true" alt="" /></Navbar.Brand>
                        <Nav className="">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Heder;