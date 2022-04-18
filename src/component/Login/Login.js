import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()

    const location = useLocation()

    let from = location.state?.from?.pathname || "/";
    let erorrElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending, ] = useSendPasswordResetEmail(auth);

      if(error){
        erorrElement = <div>
            <p className='text-danger'>Erorr :{error?.message}</p>
        </div>
      }

      if(user){
        navigate(from, { replace: true });
      }

    const handelSubmit = (event)=>{
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        console.log(email, password)
        signInWithEmailAndPassword(email, password)
    }
    
   const restPassword = async ()=>{
    const email = emailRef.current.value
    await sendPasswordResetEmail(email);
    toast('Sent email');
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
               
                <p>Don't have an account? <span><Link className='text-decoration-none' to='/singup'>SingUp</Link></span> </p>
                <p>forget Password? <span><button className='text-decoration-none' onClick={restPassword} >Reset Password</button></span> </p>
                </Form>
                {erorrElement}
                <GoogleLogin></GoogleLogin>
                <ToastContainer />
        </div>
    );
};

export default Login;