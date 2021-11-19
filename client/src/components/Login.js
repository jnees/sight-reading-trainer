import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container,
         FormGroup,
         Form,
         Label,
         Input,
         Button
} from 'reactstrap'

/*---------------------------------------------------
    This component is the login page. Users
    are directed here if they are not authenticated.
-----------------------------------------------------*/

export default function Login() {

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
        
        console.log("Success");
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
