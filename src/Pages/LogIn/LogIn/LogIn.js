import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import SocialLogIn from '../SocailLogIn/SocialLogIn';
const LogIn = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');

    // navigate user to home after log in 
    if (user) {
        navigate('/')
    }

    // Log in with email and password 
    const handleLogIn = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    // Show error messege 
    let errorMessege;
    if (error) {
        errorMessege = <p className='text-danger text-center'>Error: {error?.message}</p>
    }

    return (
        <div className='container fs-3'>
            <h1 className='text-primary text-center'>Please LogIn</h1>
            <Form onSubmit={handleLogIn}>
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
                    Log In
                </Button>
                <p className='text-center fs-3'>Don't Have an Account?<Link to='/register' className='text-primary text-decoration-none ms-2'>Sign Up</Link></p>
            </Form>
            <SocialLogIn></SocialLogIn>
        </div>
    );
};

export default LogIn;