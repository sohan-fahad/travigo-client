import axios from 'axios';
import React from 'react';
import { useRef } from 'react';
import './AddNewService.css'

const AddNewService = () => {

    const nameRef = useRef()
    const descriptionRef = useRef()
    const imgLinkRef = useRef()
    const priceRef = useRef()

    const handleEventAdd = e => {
        e.preventDefault()
        const name = nameRef.current.value
        const description = descriptionRef.current.value
        const tourImage = imgLinkRef.current.value
        const price = priceRef.current.value

        const enventInfo = { name, description, tourImage, price }
        axios.post('http://localhost:5000/services', enventInfo)
            .then(res => {
                if (res) {
                    alert("Successful")
                    console.log(res)
                    nameRef.current.value = ''
                    priceRef.current.value = ''
                    descriptionRef.current.value = ''
                    imgLinkRef.current.value = ''

                }
            })
    }
    return (
        <div className="AddService">
            <div className="addService-Container">
                <form onSubmit={handleEventAdd}>
                    <input type="text" placeholder="Place Name" ref={nameRef} required />
                    <input type="text" placeholder="Price" ref={priceRef} required />
                    <textarea placeholder="Description" rows="2" ref={descriptionRef} />
                    <input type="url" placeholder="Image Link" ref={imgLinkRef} />
                    <input type="submit" value="ADD SERVICE" className="btn-primary" />
                </form>
            </div>
        </div>
    );
};

export default AddNewService;