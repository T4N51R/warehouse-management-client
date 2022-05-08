import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
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

    if (user) {
        navigate('/')
    }
    const handleLogIn = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
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
                <Button className="w-50 mx-auto mb-3 d-block py-2 fs-4" variant="primary" type="submit">
                    Submit
                </Button>
                <p className='text-center fs-3'>Don't Have an Account?<Link to='/register' className='text-primary text-decoration-none ms-2'>Sign Up</Link></p>
            </Form>
        </div>
    );
};

export default LogIn;