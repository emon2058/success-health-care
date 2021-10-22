import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const useFirebase = () => {
    const [user,setUser] = useState({});
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const auth = getAuth()
    
    const signInUsingEmailAndPassword = () =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            // Signed in 
            const user = result.user;
            console.log(user);
        })
    }
    return (
        signInUsingEmailAndPassword
    );
};

export default useFirebase;