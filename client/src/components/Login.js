import React from 'react';
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
    return (
        <Container id="loginForm" >
            <h1 id="headline">Sight Reading Trainer</h1>
            <p>Get better at reading piano music.</p>
            <Form>
                <FormGroup>
                <Label for="Email">
                Email
                </Label>
                <Input id="Email" name="email" type="email"/>
                </FormGroup>
                <FormGroup>
                    <Label for="Password">Password</Label>
                    <Input id="Password" name="password" type="password"/>
                </FormGroup>
                <Button color="primary" id="loginSubmitBtn">Login</Button>
            </Form>
            <hr/>
            <p>Need an account?</p>
            <Link to="/register">Register</Link>
        </Container>
    )
}
