import React, { Component } from 'react';
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
import { updateStats } from '../actions/noteActions';

export default class AppNavbar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">User</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
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
}