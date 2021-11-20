import React, { useState } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink

} from 'reactstrap';
import { Link } from 'react-router-dom';


/*-----------------------------------------------
    Navigation bar component.

    Allows user to navigate the site pages;
    Home, Stats, and Logout. Reacts to small
    screens by converting to pop-out list
    with pancake toggle button.
 ------------------------------------------------*/
const AppNavbar = () => {

    const [navState, setNavState] = useState({
        isOpen: false,
        isAuthenticated: false
    });

    const toggle = () => {
        setNavState({
            ...navState,
            isOpen: !navState.isOpen
        });
    }

    return (
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">User</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={navState.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link class="nav-link" to="/">
                                    <NavLink >Home</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link class="nav-link" to="/stats">
                                    <NavLink href="/stats">Stats</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link class="nav-link" to="/logout">
                                    <NavLink href="/logout">Log Out</NavLink>
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default AppNavbar;