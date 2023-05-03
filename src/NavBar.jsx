import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
    
    return (
        <Navbar bg="light" expand="lg">
            <LinkContainer to="/Home">
                <Navbar.Brand>Home</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <LinkContainer to="/Add">
                    <Nav.Link>Add Meal</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/planner">
                    <Nav.Link>Meal Planner</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                    <Nav.Link>About</Nav.Link>
                </LinkContainer>
               
            </Nav>
            </Navbar.Collapse>
            <Nav className='justify-end-content'>
                <LinkContainer to="/">
                    <Nav.Link>Log Out</Nav.Link>
                </LinkContainer>
            </Nav>
        </Navbar>
    )
}

export default Header