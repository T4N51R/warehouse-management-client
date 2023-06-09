import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogIn from '../SocailLogIn/SocialLogIn';
import 'react-toastify/dist/ReactToastify.css';
import useToken from '../../../hooks/useToken';


const SignUp = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [token] = useToken(user)
    // Spinner Added 
    if (loading) {
        return <Loading></Loading>
    }
    // navigate user 
    let from = location.state?.from?.pathname || "/";
    if (token) {
        navigate(from, { replace: true });
    }

    // create an user 
    const handleSignUp = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password);
        toast('Email send For Varification');
    }

    // show error to the user 
    let errorMessege;
    if (error) {
        errorMessege = <p className='fs-3 text-danger text-center '>Error : {error?.message}</p>
    }


    return (
        <div className='container fs-4'>
            <h1 className='text-primary text-center'>Please Create An Account</h1>
            <Form onSubmit={handleSignUp}>
                <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Enter Password" />
                </Form.Group>
                {errorMessege}
                <Button className="w-50 mx-auto mb-3 d-block py-2 fs-4" variant="primary" type="submit">
                    Register
                </Button>
                <p className='text-center fs-3'>Already Have an Account?<Link to='/login' className='text-primary text-decoration-none ms-2'>Log In</Link></p>
            </Form>
            <SocialLogIn></SocialLogIn>
            <ToastContainer />
        </div>
    );
};

export default SignUp;