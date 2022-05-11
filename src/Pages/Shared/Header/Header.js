import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar sticky='top' collapseOnSelect expand="lg" bg="primary" variant="dark" className=''>
                <Container>
                    <Navbar.Brand as={Link} to="/">Perfumia</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link href="home#product">Product</Nav.Link>
                            <Nav.Link as={Link} to="inventory">Manage Inventory</Nav.Link>
                            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="review">Reviews</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user &&
                                <>
                                    <Nav.Link as={Link} to="additem">Add Item</Nav.Link>
                                    <Nav.Link as={Link} to="myitem">My Item</Nav.Link>
                                </>
                            }
                            {
                                user ?
                                    <button
                                        onClick={handleSignOut}
                                        className='btn btn-link text-decoration-none text-white'
                                    >
                                        Log Out
                                    </button>
                                    :
                                    <Nav.Link as={Link} to="/login">
                                        Log In
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;