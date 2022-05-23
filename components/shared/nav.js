import React from 'react';
import {Container, Dropdown, Nav, Navbar, NavItem, NavLink} from "react-bootstrap";

function Header() {
    return (
        <Navbar className={'fxd'} collapseOnSelect expand="lg" bg={'white'} variant="light">
            <Container className={"navmenu"}>
                <Navbar.Brand href="#home" className={'navBrand'}> <img src="/images/shared/logo-en.jpeg"
                                                                        className={'img-fluid'}
                                                                        alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/destnation">Destinations</Nav.Link>
                        <Nav.Link href="/about">About Us</Nav.Link>
                        <Nav.Link href="/packages">Packages</Nav.Link>
                        <Nav.Link href="/contact">Contact us</Nav.Link>
                        <Nav.Link href="/auth/signin">Login</Nav.Link>
                        <Nav.Link href="/auth/signup">Join</Nav.Link>
                    </Nav>
                    <div>
                        <Dropdown as={NavItem}>
                            <Dropdown.Toggle as={NavLink}><i className="fa-solid fa-user"></i></Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Username</Dropdown.Item>
                                <Dropdown.Item>Address</Dropdown.Item>
                                <Dropdown.Item>Phone number</Dropdown.Item>
                                <Dropdown.Item>Package 1</Dropdown.Item>
                                <Dropdown.Item>Package 1</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
}

export default Header;