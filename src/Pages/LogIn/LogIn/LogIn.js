import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import SocialLogIn from '../SocailLogIn/SocialLogIn';
import Loading from '../../Shared/Loading/Loading';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import useToken from '../../../hooks/useToken';
const LogIn = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [
        sendPasswordResetEmail,
        sending
    ] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [token] = useToken(user)
    // navigate user to home after log in 
    let from = location.state?.from?.pathname || "/";
    if (token) {
        navigate(from, { replace: true });
    }

    // Spinner Added 
    if (loading) {
        return <Loading></Loading>
    }
    // Log in with email and password 
    const handleLogIn = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
    }

    // Show error messege 
    let errorMessege;
    if (error) {
        errorMessege = <p className='text-danger text-center'>Error: {error?.message}</p>
    }

    // password reset email 
    const handleresetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email Sent For Password Reset');
        }
        else {
            toast('Please enter your email address');
        }
    }


    return (
        <div className='container fs-3'>
            <h1 className='text-primary text-center'>Please LogIn</h1>
            <Form onSubmit={handleLogIn}>
                <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Enter Password" required />
                </Form.Group>
                {errorMessege}
                <Button className="w-50 mx-auto mb-3 d-block py-2 fs-4" variant="primary" type="submit">
                    Log In
                </Button>
                <p className='text-center fs-3'>Don't Have an Account?<Link to='/register' className='text-primary text-decoration-none ms-2'>Sign Up</Link></p>
                <p className='text-center fs-3'>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none fs-3' onClick={handleresetPassword}>Reset Password</button> </p>
            </Form>
            <SocialLogIn></SocialLogIn>
            <ToastContainer />
        </div>
    );
};

export default LogIn;