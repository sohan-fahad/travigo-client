import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';
import "./Login.css"

const Login = () => {

    const history = useHistory()
    const location = useLocation()
    const redirect_from = location.state?.from || "/home"
    console.log(redirect_from)

    const { singingUsingGoole, setError, error, setUser, setIsLoading } = useAuth()

    const handleGoogleLogin = () => {
        singingUsingGoole()
            .then(result => {
                const loggedinUser = result.user
                setUser(loggedinUser)
                // console.log(user)
                setIsLoading(false)
                setError("")
                history.push(redirect_from)
            })
            .catch((err) => {
                const errorCode = err.code;
                const errorMessage = err.message;
                setError(errorCode, errorMessage)
            })
    }

    return (
        <div className="Login">
            <div className="Login-container">
                <h3>Login With</h3>
                <button className="Login-google" onClick={handleGoogleLogin}>
                    <h5 className=" text-bright-red"><i className="fab fa-google"></i> Continue with Google</h5>
                </button>
                <p>Don’t have an account? <span className="text-primary">Create an account</span></p>
                <p>{error}</p>
            </div>
        </div>
    );
};

export default Login;