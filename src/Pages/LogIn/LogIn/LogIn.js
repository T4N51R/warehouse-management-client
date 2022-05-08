import React from 'react';
import { Button, Form } from 'react-bootstrap';

const LogIn = () => {
    return (
        <div className='container fs-3'>
            <h1 className='text-primary text-center'>Please LogIn</h1>
            <Form>
                <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>
                <Button className="w-50 mx-auto mb-3 d-block py-2 fs-4" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default LogIn;