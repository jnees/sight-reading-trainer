import React, { useState } from 'react';
import { connect } from 'react-redux';
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
import PropTypes from 'prop-types';
import { logout} from '../actions/authActions';


/*-----------------------------------------------
    Navigation bar component.

    Allows user to navigate the site pages;
    Home, Stats, and Logout. Reacts to small
    screens by converting to pop-out list
    with pancake toggle button.
 ------------------------------------------------*/
const AppNavbar = ({ auth: { isAuthenticated, loading, user}, logout }) => {

    const [navState, setNavState] = useState({
        isOpen: false,
        isAuthenticated: false,
        name: user? user.name: "Sight Reading Trainer"
    });

    // Handle toggling of the navbar sandwhich button
    const toggle = () => {
        setNavState({
            ...navState,
            isOpen: !navState.isOpen
        });
    }

    /*----------------------------------------------
        Navbar for unauthenticated users
        Logo    Login    Register
    ------------------------------------------------*/
    if(!isAuthenticated && !loading){
        return (
            <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">Sight Reading Trainer</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={navState.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link class="nav-link" to="/login">
                                    <NavLink >Login</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link class="nav-link" to="/register">
                                    <NavLink href="/register">Register</NavLink>
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
        )
    }

    /*----------------------------------------------
        Navbar for unauthenticated users
        Name    Home    Stats   Logout
    ------------------------------------------------*/
    return (
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">{navState.name}</NavbarBrand>
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
                                <Link class="nav-link" to="#!">
                                    <NavLink onClick={logout}>Log Out</NavLink>
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

AppNavbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logout})(AppNavbar);