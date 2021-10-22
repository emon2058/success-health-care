import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Form from 'react-bootstrap/Form';
import firebaseAuthentication from '../Firebase/firebase.init';
import Button from 'react-bootstrap/Button';
import { Link,useHistory } from 'react-router-dom';

firebaseAuthentication()
const Login = () => {
    const [user,setUser] = useState({});

    const[values,setValues] = useState({
        email:'',
        password:'',
        error:''
    })
    const history=useHistory()

    const {email,password,error} = values;

    const auth = getAuth();

    const handleChange =(props) => event =>{
        setValues({...values,[props] : event.target.value})
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
    }
    const signInUsingGoogle = (e)=>{
        e.preventDefault()
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const {displayName , email, photoURL} = result.user;

            const loggedUser = {
                name: displayName,
                email: email,
                photo: photoURL
              }
              setUser(loggedUser)
            // ...
            console.log(result);
            alert("success")
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            console.log(errorCode,errorMessage,email);

          });
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
                <Form.Text className="text-danger">{error}</Form.Text>
                <Button  className="w-50 text-light py-1 rounded" variant="primary" type="submit" onClick={loginUsingEmailAndPassword}>
                    Login
                </Button>
                <p>Don't have an account?<Link to="/registration">Registration</Link> </p>
                <p className="mx-4">------------------------------OR-----------------------------</p>
                <Button className="w-50 text-secondary py-1 rounded" variant="warning" type="submit" onClick={signInUsingGoogle}>
                   LogIn with Google
                </Button>
            </Form>
        </div>
    );
};

export default Login;