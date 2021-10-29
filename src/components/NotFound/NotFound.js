import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    const errorImg = "https://i.ibb.co/YD5cnTN/error.jpg"
    return (
        <div className="NotFound">
            <div className="not-found">
                <img src={errorImg} alt="" className="w-10 img-fluid" />
                <Nav.Link as={Link} to="/" className="btn-notFound">Go Back</Nav.Link>
            </div>
        </div>
    );
};

export default NotFound;