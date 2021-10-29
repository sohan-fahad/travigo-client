import React from 'react';
import { initializeApp } from "firebase/app";
import firebaseConfig from './Firebase.config';

const FirebaseIntialize = () => {
    return (
        initializeApp(firebaseConfig)
    );
};

export default FirebaseIntialize;