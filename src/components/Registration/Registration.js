import React, { useRef, useState } from 'react';
import { Button, Container, Form } from "react-bootstrap";
import useAuth from '../../hooks/useAuth';

const Registration = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signInUsingGoogle, handleUserRegister } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    handleUserRegister(emailRef.current.value, passwordRef.current.value)
  }

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then((result) => {
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.

      });
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
          <Button onClick={handleGoogleSignIn} className="m-2"> Login Here</Button>
          <br />
          <h5>Or</h5>
          <Button onClick={handleGoogleSignIn} className="m-2"> Google sign In</Button>
        </div>
      </Container>
    </div>
  );
};


export default Registration;