import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const Manage = () => {
    const [bookings, setBookings] = useState([])
    const [control, setControl] = useState(false)
    useEffect(() => {
        axios.get("http://localhost:5000/booking")
            .then(res => setBookings(res.data))
    }, [control])

    const handleManageDelete = id => {
        const url = `http://localhost:5000/booking/${id}`
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
    const handlePainding = id => {
        bookings.status = "APPROVED"
        console.log(bookings.status)
        axios.put(`http://localhost:5000/booking/${id}`, bookings.status)
        .then(res => {
            if(res) {
                alert("APPROVED")
                setControl(!control)
            }
        })
    }
    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Booking Date</th>
                        <th>Email</th>
                        <th>Destination</th>
                        <th>Approve</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {bookings.map(booking =>
                    <tbody key={booking?._id}>
                        <tr>
                            <td>{booking?.name}</td>
                            <td>{booking?.bookingDate}</td>
                            <td>{booking?.email}</td>
                            <td>{booking?.destinetion}</td>
                            <td><button onClick={()=> handlePainding(booking?._id)} className="btn-primary">{booking.status === "Painding" ? "PAINDING" : "APPROVED"}</button></td>
                            <td><button className='btn-danger px-2 py-1'
                                onClick={() => handleManageDelete(booking._id)}
                            >X</button></td>
                        </tr>
                    </tbody>
                )}
            </Table>
        </Container>
    );
};

export default Manage;