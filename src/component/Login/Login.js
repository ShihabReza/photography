import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      if(user){
        navigate('/')
      }

    const handelSubmit = (event)=>{
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        console.log(email, password)
        signInWithEmailAndPassword(email, password)
    }
    
    return (
        <div className='w-50 mx-auto mt-5'>
            <Form onSubmit={handelSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef}  type="password" placeholder="Password" required/>
                </Form.Group>
                
                <Button variant="dark" type="submit">
                    Login
                </Button>
               
                <p>Alrady Acount? <span><Link to='/singup'>SingUp</Link></span> </p>
                </Form>
        </div>
    );
};

export default Login;