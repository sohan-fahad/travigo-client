import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'
import useAuth from '../../Hooks/useAuth'

const Services = () => {
    const { preLoader, setPreLoader } = useAuth()
    const [services, setServices] = useState([])
    useEffect(() => {
        axios.get('https://morning-reaches-74730.herokuapp.com/services')
            .then(res => {
                setServices(res.data)
                setPreLoader(false)
            })
    }, [])


    return (
        <div id='packages'>
            <Container>
                <h1 className="text-center service-title">WE OFFER <span className="text-bright-red">THE BEST TOUR</span> PACKAGES</h1>
                <div className="services-container">
                    <div className="services">
                        {
                            preLoader ? <Spinner animation="border" /> :
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