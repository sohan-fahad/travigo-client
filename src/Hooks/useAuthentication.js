import React from 'react';
import FirebaseIntialize from '../Firebase/Firebace.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from 'react';
import { useState } from 'react';


FirebaseIntialize()
const useAuthentication = () => {

    const auth = getAuth()

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [preLoader, setPreLoader] = useState(true)
    const [error, setError] = useState("")
    // google singing
    const singingUsingGoole = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        signOut(auth)
            .then(() => setUser({}))
            .catch(err => {
                setError(err)
            })
    }

    // observ user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe;
    }, [])

    return {
        singingUsingGoole,
        setIsLoading,
        isLoading,
        error,
        setError,
        user,
        setUser,
        preLoader,
        setPreLoader,
        logOut
    }
};

export default useAuthentication;