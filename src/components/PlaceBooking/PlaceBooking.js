import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Redirect, useHistory, useParams } from 'react-router';
import useAuth from '../Hooks/useAuth'
import './PlaceBooking.css'

const PlaceOrder = () => {
    const { id } = useParams()
    const { user } = useAuth()

    const history =useHistory()

    const nameRef = useRef()
    const emailRef = useRef()
    const dateRef = useRef()
    const priceRef = useRef()
    const phoneRef = useRef()
    const desitinetionRef = useRef()
    const addressRef = useRef()

    const url = `https://morning-reaches-74730.herokuapp.com/services/`+ id
    const [service, setService] = useState({})

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setService(res.data)
            })

    }, [])

    // THIS FUNCTION POST MY BOOKING API
    const hadleBooking = (e) => {
        const name = nameRef.current.value
        const email = emailRef.current.value
        const bookingDate = dateRef.current.value
        const price = priceRef.current.value
        const phone = phoneRef.current.value
        const destinetion = desitinetionRef.current.value
        const address = addressRef.current.value

        const bookingData = { name, email, destinetion, phone, bookingDate, price, status: "Pending", address }
        e.preventDefault()
        axios.post("https://morning-reaches-74730.herokuapp.com/booking", bookingData)
            .then(res => {
                if(res) {
                    alert("Booking Succesfull")
                    history.push("/home")
                }
            })
    }
    return (
        <div>
            <Container>
                <div className="PlaceBooking-Container">
                    <div>
                        <div className="booking-details">
                            <img src={service?.tourImage} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="booking-info">
                        <h3 className="text-bright-red">{service?.name}</h3>
                        <h5 className="text-primary">{service?.price} Taka</h5>
                        <p>{service?.description}</p>
                    </div>
                    <div className="booking-form">
                        <form onSubmit={hadleBooking}>
                            <input type="email" value={user?.email} ref={emailRef} />
                            <input type="text" placeholder="Name" defaultValue={user?.displayName} ref={nameRef} />
                            <input type="text" value={service?.name} ref={desitinetionRef} />
                            <input type="text" ref={addressRef} placeholder="Address" />
                            <input type="text" placeholder="Phone Number" ref={phoneRef} required />
                            <input type="date" ref={dateRef} required />
                            <input type="number" value={service?.price} ref={priceRef} />
                            <input type="submit" value="Place Booking" />
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PlaceOrder;