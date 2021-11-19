import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container,
         FormGroup,
         Form,
         Label,
         Input,
         Button
} from 'reactstrap'
import PropTypes from 'prop-types';
import { login } from '../actions/authActions';

/*---------------------------------------------------
    This component is the login page. Users
    are directed here if they are not authenticated.
-----------------------------------------------------*/

const Login = ({ login, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    // Have changes to the form by the user update the current state.
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
    
    // OnSubmit of form -> Validate password fields and initiate action
    const onSubmit = e => {
        e.preventDefault();
        login(email, password);
    }

    // If the user is authenticated already -> Redirect
    if(isAuthenticated){
        return <Redirect to="/"></Redirect>
    }

    return (
        <Container id="loginForm" >
            <h1 id="headline">Sight Reading Trainer</h1>
            <p>Get better at reading piano music.</p>
            <Form onSubmit={e => onSubmit(e)}>
                <FormGroup>
                    <Label for="Email">
                    Email
                    </Label>
                    <Input 
                        id="Email" 
                        name="email" 
                        type="email"
                        value={email}
                        onChange={e => onChange(e)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="Password">Password</Label>
                    <Input 
                        id="Password" 
                        name="password" 
                        type="password"
                        value={password}
                        onChange={e => onChange(e)}
                    />
                </FormGroup>
                <Button color="primary" id="loginSubmitBtn">Login</Button>
            </Form>
            <hr/>
            <p>Need an account?</p>
            <Link to="/register">Register</Link>
        </Container>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);