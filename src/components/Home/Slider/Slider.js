import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    const slider1 = "https://i.ibb.co/27xjrg5/slider1.jpg"
    const slider2 = "https://i.ibb.co/f1662nw/slider2.jpg"
    const slider3 = "https://i.ibb.co/18wy8fS/slider3.jpg"
    return (
        <div className="my-4">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;