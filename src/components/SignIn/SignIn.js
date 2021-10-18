import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useFirebase from "../../hooks/useFirebase";

const SignIn = () => {
    const { user, signInUsingGoogle } = useFirebase();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(watch("example")); // watch input value by passing the name of it
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                <Button onClick={signInUsingGoogle}> Google sign In</Button>
            </div>
        </div>
    );
};

export default SignIn;