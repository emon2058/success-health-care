import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Form from 'react-bootstrap/Form';
import firebaseAuthentication from '../Firebase/firebase.init';
import Button from 'react-bootstrap/Button';
import { Link,useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

firebaseAuthentication()
const Login = () => {
    const[values,setValues] = useState({
        email:'',
        password:'',
        error:''
    })
    const {auth,signInUsingGoogle}=useAuth()
    const history=useHistory()
    const location=useLocation()
    const redirect_uri = location.state?.from || '/home';

    const {email,password,error} = values;

    // const auth = getAuth();

    const handleChange =(props) => event =>{
        setValues({...values,[props] : event.target.value})
    }

    const handleGoogleSignIn = (e) =>{
        e.preventDefault()
        signInUsingGoogle()
        .then((result) => {
            // This gives a Google Access Token to access the Google API.
            history.push(redirect_uri)
            console.log('redirect_uri',redirect_uri);
            console.log(result);
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        })
    }

    const loginUsingEmailAndPassword = (event) =>{
        event.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            // Signed in 
            const user = result.user;
            console.log(user);
            history.push('/')
            // ...
        })
        .catch(()=>{
            setValues({
                ...values,
                error:"email or password didn't match try again"
            })
        })
        console.log("login",email);
    }

    return (
        <div className="py-5 bg-info" style={{height:"85.9vh"}}>
            <Form className="my-4 w-50 d-flex flex-column justify-content-center mx-auto" >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={email} onChange={handleChange('email')} placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={handleChange('password')} placeholder="Password" />
                </Form.Group>
                <Form.Text className="text-danger mb-3">{error}</Form.Text>
                <Button  className="w-50 text-light py-1 rounded" variant="primary" type="submit" onClick={loginUsingEmailAndPassword}>
                    Login
                </Button>
                <p>Don't have an account?<Link to="/registration">Registration</Link> </p>
                <p className="mx-4">------------------------------OR-----------------------------</p>
                <Button className="w-50 text-secondary py-1 rounded" variant="warning" type="submit" onClick={handleGoogleSignIn}>
                   LogIn with Google
                </Button>
            </Form>
        </div>
    );
};

export default Login;