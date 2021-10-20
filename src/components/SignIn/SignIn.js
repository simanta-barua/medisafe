import React, { useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";
import './SignIn.css'

const SignIn = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    const { signInUsingGoogle, handleUserSignIn } = useAuth();
    //handle google sing in
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirect_url);
                swal("Google Sign In Success", {
                    icon: "success",
                });
            })
            .catch(err =>
                swal("Something went wrong!", `${err.message}`, "error")

            );
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
                                ref={emailRef} type="email" placeholder="Enter email" required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                ref={passwordRef} type="password" placeholder="Password" required />
                        </Form.Group>
                        <Button onClick={handleSubmit} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                <div>
                    <br />
                    <h5>Not have an account?</h5>
                    <Link to='/signup'><Button className="m-2"> Register Here</Button></Link>
                    <br />
                    <h5>Or</h5>
                    <Button onClick={handleGoogleSignIn} className="m-2"> Google sign In</Button>
                </div>
            </Container>
        </div>
    );
};

export default SignIn;