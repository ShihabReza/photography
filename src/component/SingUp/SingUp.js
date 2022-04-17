
import { sendEmailVerification } from 'firebase/auth';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate, } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleLogin from '../GoogleLogin/GoogleLogin';


const SingUp = () => {
   
   const emailRef = useRef ('')
   const passwordRef = useRef ('')
   const conFrimpasswordRef = useRef ('')
   const navigate = useNavigate()
   

   const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

  

  if(user){
    navigate('/')
    
  }
 
  

    const handalSingUp = (event) =>{
        event.preventDefault()
        
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const confrimPassword = conFrimpasswordRef.current.value
       
        createUserWithEmailAndPassword(email,password,confrimPassword)
    }
    
   return (
        <div className='w-50 mx-auto mt-5'>
            <Form onSubmit={handalSingUp}>
            
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={conFrimpasswordRef} type="password" placeholder="Confrim Password" required/>
                </Form.Group>
                
                <Button variant="dark" type="submit">
                    SingUp
                </Button>
               
                <p>Already have an account? <span><Link className='text-decoration-none' to='/login'>Login</Link></span> </p>
                </Form>

                <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default SingUp;