import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signInUsingGoogle } = useAuth();
   
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
   
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit()}>
                    <br />
                    {/* register your input into the hook by invoking the "register" function */}
                    <input defaultValue="name" {...register("example")} />
                    <br />
                    {/* include validation with required or other standard HTML validation rules */}
                    <input {...register("exampleRequired", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                    <br />
                    <input type="submit" />
                </form>
            </div>
            <div>
                <Button onClick={handleGoogleSignIn}> Google sign In</Button>
            </div>
        </div>
    );
};

export default SignIn;