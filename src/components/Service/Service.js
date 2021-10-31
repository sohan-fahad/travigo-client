import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, description, tourImage, price, _id } = service;
    return (
        <div className="service-container">
            <div className="service-img">
                <img className="img-fluid" src={tourImage} alt="" />
            </div>
            <div>
                <h3 className="text-center mt-3 text-bright-red">{name}</h3>
                <h5 className="text-primary text-center">{price}৳ <span className=""text-dark>/Person</span></h5>
                <p className="pt-3 px-3">{description.slice(0,200)}</p>
            </div>
            <div>
                <Nav.Link as={Link} to={`/placebooking/${_id}`}>
                    <button className="btn-book">BOOK NOW</button>
                </Nav.Link>
            </div>

        </div>
    );
};

export default Service;