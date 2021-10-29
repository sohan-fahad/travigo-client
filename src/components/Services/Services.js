import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/services')
            .then(res => {
                setServices(res.data)
            })
    }, [])
    return (
        <div id='services'>
            <Container>
            <h1 className="text-center service-title">WE OFFER <span className="text-bright-red">THE BEST TOUR</span> PACKAGES</h1>
            <div className="services-container">
                <div className="services">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </Container>
        </div>
    );
};

export default Services;