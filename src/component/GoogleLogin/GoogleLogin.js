import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate()
    let erorrItams;

    if (error) {
        erorrItams = <div>
                         <p className='text-danger'>Error: {error.message}</p>
                     </div>
        
      }

      if(user){
        navigate('/')
      }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height:'1px'}} className="w-50 bg-dark"></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height:'1px'}} className="w-50 bg-dark"></div>
            </div>
            {erorrItams}
            <button onClick={()=>signInWithGoogle()} className="d-flex align-items-center justify-content-center border-0 bg-light text-center mx-auto mt-5">
                <img style={{width:'100px'}} src="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg" alt="" />
                <h1>Google SingIn</h1>
            </button>
        </div>
    );
};

export default GoogleLogin;