import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



import './Heder.css'

const Heder = () => {
    const [user] = useAuthState(auth)
    const handelSingOut = ()=>{
        signOut(auth)
    }
    
    return (
        <div className="sticky-top">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/"><img style={{height:'50px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WG9JBWzKKjrLuPqENudGYiGB4OWX-W_5-A&usqp=CAU" alt="" /></Navbar.Brand>
                        <Nav className="">
                        <Nav.Link href="/">Home</Nav.Link>
                        
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Nav.Link href="/about">About Me</Nav.Link>
                        {
                            user?
                            <Nav.Link onClick={handelSingOut}>LogOut</Nav.Link>
                            :
                            <Nav.Link href="/login">Login</Nav.Link>
                            
                        }
                    <Nav.Link href="/singup">SingUp</Nav.Link>
                    
                </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Heder;