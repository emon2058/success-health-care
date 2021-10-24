import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import Form from 'react-bootstrap/Form';
import firebaseAuthentication from '../Login/Firebase/firebase.init';
import Button from 'react-bootstrap/Button';
import { Link,useHistory } from 'react-router-dom';

firebaseAuthentication()

const Registration = () => {
const[values,setValues] = useState({
        displayName:'',
        email:'',
        password:'',
        error:''
    })
    const history=useHistory()

    const {displayName, email,password,error} = values;

    const auth = getAuth();

    const handleChange =(props) => event =>{
        setValues({...values,[props] : event.target.value})
    }
    const registrationUsingEmailAndPassword = (event) =>{
        event.preventDefault()
        if(password.length<6){
            setValues({
                ...values,
                error:"Password should be at least 6 characters"
            })
            return;
        }
        createUserWithEmailAndPassword(auth,email, password)
        .then((result) => {
            // Signed in 
            const user = result.user;
            setValues({
                ...values,
                error:""
            })
            history.push('/')
            console.log(user);
        })
        .catch(e=>{
            setValues({
                ...values,
                error:e.message
            })
        })
    }

    return (
        <div className="py-5 bg-info" style={{height:"85.9vh"}}>
            <Form className="my-4 w-50 d-flex flex-column justify-content-center mx-auto" >
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={displayName} onChange={handleChange('displayName')} placeholder="your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={email} onChange={handleChange('email')} placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={handleChange('password')} placeholder="Password" />
                    <Form.Text className="text-danger">
                    {error}
                    </Form.Text>
                </Form.Group>
                <Button  className="w-50 text-light py-1 rounded" variant="primary" type="submit" onClick={registrationUsingEmailAndPassword}>
                    Registration
                </Button>
                <p>Already have an account?<Link to="/login">login</Link> </p>
            </Form>
        </div>
    );
};

export default Registration;