import React, {useEffect, useState} from 'react';
import {Container, Dropdown, Nav, Navbar, NavItem, NavLink} from "react-bootstrap";
import {useRouter} from "next/router";

function Header() {
    const router = useRouter()
    const [user, setUser] = useState(null)
    if (typeof window != "undefined") {
        window.addEventListener('storage', () => {
            console.log('ss')
            setUser(JSON.parse(localStorage.getItem('user')))
        })
    }
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
    }, [])


    function logout() {
        localStorage.removeItem('user')
        setUser(null)
        window.location.href = '/auth/signin'

    }

    return (//navigation bar by Bootstrap
        <Navbar className={'fxd'} collapseOnSelect expand="lg" bg={'white'} variant="light">
            <Container className={"navmenu"}>
                {/*Logo*/}
                <Navbar.Brand href={'/'} className={'navBrand'}> <img src="/images/shared/logo-en.jpeg"
                                                                        className={'img-fluid'}
                                                                        alt=""/></Navbar.Brand>
                {/*Responsive navbar*/}
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        {/*Nav Links*/}
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/destnation">Destinations</Nav.Link>
                        <Nav.Link href="/about">About Us</Nav.Link>
                        <Nav.Link href="/packages">Packages</Nav.Link>
                        <Nav.Link href="/contact">Contact us</Nav.Link>
                        {!user ? <Nav.Link href="/auth/signin">Login</Nav.Link> : ''}
                        {!user ? <Nav.Link href="/auth/signup">Join</Nav.Link> : ''}
                    </Nav>
                    {/*User Drop Down*/}
                    {user ? <div>
                        <Dropdown as={NavItem}>
                            <Dropdown.Toggle as={NavLink}><i className="fa-solid fa-user"></i></Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>{user.user.username}</Dropdown.Item>
                                <Dropdown.Item>{user.user.address}</Dropdown.Item>
                                <Dropdown.Item>{user.user.phone}</Dropdown.Item>
                                <Dropdown.Item onClick={() => logout()}>log out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div> : ''}
                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
}

export default Header;