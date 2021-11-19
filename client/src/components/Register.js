import { connect } from 'react-redux';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { register } from '../actions/authActions'
import { Container,
         FormGroup,
         Form,
         Label,
         Input,
         Button
} from 'reactstrap';
import PropTypes from 'prop-types';

/*---------------------------------------------------
    This component is the registration page. Users
    are directed here if they are not authenticated.
    Submitting this form attempts to create a new
    user in the database via a POST call to the 
    "/api/users" endpoint.
-----------------------------------------------------*/
const Register = ({register}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    // Have changes to the form by the user update the current state.
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
    
    // OnSubmit of form -> Validate password fields and initiate action
    const onSubmit = e => {
        e.preventDefault();
        if(password !== password2){
            console.log("Passwords do not match.")
        } else {
            register({ name, email, password });
        }
    }

    return (
            <Container id="loginForm" >
                <h1 id="headline">Sign Up</h1>
                <p>Sight Reading Trainer is completely free.</p>
                <Form onSubmit={e => onSubmit(e)}>
                    <FormGroup>
                        <Label for="name">
                        Username
                        </Label>
                        <Input 
                            id="Name" 
                            name="name" 
                            type="text" 
                            value={name} 
                            onChange={e => onChange(e)}/>
                        </FormGroup>
                    <FormGroup>
                        <Label for="Email">
                        Email
                        </Label>
                        <Input 
                            id="Email" 
                            name="email" 
                            type="email" 
                            value={email}
                            onChange={e => onChange(e)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="Password">Password (6 or more characters)</Label>
                        <Input 
                            id="Password" 
                            name="password" 
                            type="password" 
                            value={password}
                            onChange={e => onChange(e)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="Password2">Type your password again.</Label>
                        <Input 
                            id="Password2" 
                            name="password2" 
                            type="password" 
                            value={password2}
                            onChange={e => onChange(e)}/>
                    </FormGroup>
                    <Button color="primary" id="registerSubmitBtn">Register</Button>
                </Form>
                <hr/>
                <p>Already have an account?</p>
                <Link to="/login">Login</Link>
            </Container>
    )
}

Register.propTypes = {
    register: PropTypes.func.isRequired
};

export default connect(null,{ register })(Register);