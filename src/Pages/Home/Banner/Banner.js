import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/Banner/Banner1.jpg'
import banner2 from '../../../images/Banner/Banner2.jpg'
import banner3 from '../../../images/Banner/Banner3.jpg'
const Banner = () => {
    return (
        <>
          <Carousel variant="primary">
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Next Generation</h3>
                    <p>your baby is safe and get fully care.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>PATIENT SATISFACTION</h3>
                    <p>Treatment they received, the information provided about their condition, their input on goal settings.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Measuring Cost Of Care</h3>
                    <p>The best method for understanding these costs is time-driven activity-based costing.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>  
        </>
    );
};

export default Banner;