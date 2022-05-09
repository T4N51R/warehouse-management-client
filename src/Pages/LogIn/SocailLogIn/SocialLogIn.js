import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import google from '../../../image/social/google.png'
const SocialLogIn = () => {
    const [signInWithGoogle,
        user,
        loading,
        error] = useSignInWithGoogle(auth);

    // Show error messege 
    let errorMessege;
    if (error) {
        errorMessege = <p className='text-danger text-center'>Error: {error?.message}</p>
    }
    return (
        <div>
            <div>
                <div className='d-flex align-items-center'>
                    <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                    <p className='mt-2 px-2'>or</p>
                    <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                </div>
            </div>
            {errorMessege}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-primary w-50 d-block mx-auto my-2 fs-3'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Sign In with Google</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogIn;