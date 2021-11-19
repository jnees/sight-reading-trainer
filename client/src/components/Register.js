import React from 'react';
import { Link } from 'react-router-dom';
import { Container,
         FormGroup,
         Form,
         Label,
         Input,
         Button
} from 'reactstrap';

/*---------------------------------------------------
    This component is the registration page. Users
    are directed here if they are not authenticated.
-----------------------------------------------------*/

export default function Login() {
    return (
            <Container id="loginForm" >
                <h1 id="headline">Registration</h1>
                <p>Sight Reading Trainer is completely free.</p>
                <Form>
                    <FormGroup>
                        <Label for="name">
                        Username
                        </Label>
                        <Input id="Name" name="name" type="text"/>
                        </FormGroup>
                    <FormGroup>
                    <Label for="Email">
                    Email
                    </Label>
                    <Input id="Email" name="email" type="email"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="Password">Password (6 or more characters)</Label>
                        <Input id="Password" name="password" type="password"/>
                    </FormGroup>
                    <Button color="primary" id="registerSubmitBtn">Register</Button>
                </Form>
                <hr/>
                <p>Already have an account?</p>
                <Link to="/login">Login</Link>
            </Container>
    )
}