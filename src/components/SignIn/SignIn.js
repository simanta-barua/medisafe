import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import './SignIn.css'

const SignIn = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { signInUsingGoogle, handleUserSignIn } = useAuth();

    //handle google sing in
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then((result) => {
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
            });
    }
    //handle email sign in
    const handleSubmit = (e) => {
        e.preventDefault();
        handleUserSignIn(emailRef.current.value, passwordRef.current.value)
    }

    return (
        <div>
            <Container className="custom-form text-center">
                <h2>Sign In</h2>
                <div>
                    <Form>
                        <Form.Group className="mb-3" id="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                componentClass="textarea"
                                ref={emailRef} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                ref={passwordRef} type="password" placeholder="Password" />
                        </Form.Group>
                        <Button onClick={handleSubmit} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                <div>
                    <br />
                    <h5>Not have an account?</h5>
                    <Link to='/signup'><Button  className="m-2"> Register Here</Button></Link>
                    <br />
                    <h5>Or</h5>
                    <Button onClick={handleGoogleSignIn} className="m-2"> Google sign In</Button>
                </div>
            </Container>
        </div>
    );
};

export default SignIn;