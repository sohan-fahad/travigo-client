import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';

const MyBooking = () => {
    // const { user } = useAuth()
    const [MyBooking, setMyBooking] = useState([])

    const {email} = useParams()
    useEffect(() => {
        const url = `http://localhost:5000/booking/${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    const handleMyBooking = id => {

    }
    return (
        <div>
            <Container>
                <h1>{MyBooking.length}</h1>
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
                    {/* {MyBooking.map(booking =>
                        <tbody key={booking?._id}>
                            <tr>
                                <td>{booking?.name}</td>
                                <td>{booking?.bookingDate}</td>
                                <td>{booking?.email}</td>
                                <td>{booking?.destinetion}</td>
                                <td><button className="btn-primary">Painding</button></td>
                                <td><button className='btn-danger px-2 py-1'
                                    onClick={() => handleMyBooking(booking._id)}
                                >X</button></td>
                            </tr>
                        </tbody>
                    )} */}
                </Table>
            </Container>
        </div>
    );
};

export default MyBooking;