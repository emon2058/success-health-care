import React, { useEffect, useState } from 'react';
import { getAuth,onAuthStateChanged, GoogleAuthProvider, signInWithPopup,signOut } from "firebase/auth";
import firebaseAuthentication from '../Pages/Login/Firebase/firebase.init';

firebaseAuthentication()
const useFirebase = () => {
    const [user,setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth()

    const signInUsingGoogle = (e)=>{
        e.preventDefault()
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
        .then((result) => {
            // This gives a Google Access Token to access the Google API.
            const {displayName , email, photoURL} = result.user;

            const loggedUser = {
                name: displayName,
                email: email,
                photo: photoURL
              }
              setUser(loggedUser)
            console.log(result);
            alert("success")
        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);

          });
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])
    const logOut=()=>{
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        console.log(error.message);
        });
    }
    return {
        user,
        auth,
        signInUsingGoogle,
        logOut
    }
};

export default useFirebase;