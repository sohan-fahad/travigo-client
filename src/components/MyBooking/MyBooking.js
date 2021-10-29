import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
import './MyBooking.css'

const MyBooking = () => {
    const { user } = useAuth()
    const [MyBooking, setMyBooking] = useState([])
    const [control, setControl] = useState(false)

    useEffect(() => {
        const url = `https://morning-reaches-74730.herokuapp.com/booking/${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMyBooking(data))
    }, [control])

    const handleMyBooking = id => {
        const url = `https://morning-reaches-74730.herokuapp.com/booking/${id}`
        axios.delete(url)
            .then(res => {
                if (res) {
                    const process = window.confirm("Are You Sure?")
                    if (process) {
                        alert("Delete succussfully");
                        setControl(!control)
                    }
                }
            })
    }
    return (
        <div>
            <Container>
                <div className="my-Booking">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Booking Date</th>
                                <th>Email</th>
                                <th>Destination</th>
                                <th>Approve</th>
                                <th>Cancel</th>
                            </tr>
                        </thead>
                        {MyBooking.map(booking =>
                            <tbody key={booking?._id}>
                                <tr>
                                    <td>{booking?.name}</td>
                                    <td>{booking?.bookingDate}</td>
                                    <td>{booking?.email}</td>
                                    <td>{booking?.destinetion}</td>
                                    <td><button className="btn-primary">{
                                        booking.status === "Pending" ? "PENDING" : "APPROVED"
                                    }</button></td>
                                    <td><button className='btn-danger px-2 py-1'
                                        onClick={() => handleMyBooking(booking._id)}
                                    >X</button></td>
                                </tr>
                            </tbody>
                        )}
                    </Table>
                </div>
            </Container>
        </div>
    );
};

export default MyBooking;