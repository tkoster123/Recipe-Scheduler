import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const LaunchNav = () => {
    
    return (
        <Navbar bg="light" expand="lg">
            <LinkContainer to="/">
                <Navbar.Brand>Home</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            
            </Navbar.Collapse>
            <Nav className='justify-end-content'>
                <LinkContainer to="/Login">
                    <Nav.Link>Log In / Sign Up</Nav.Link>
                </LinkContainer>
            </Nav>
        </Navbar>
    )
}

export default LaunchNav