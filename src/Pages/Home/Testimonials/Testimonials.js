import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        fetch('users.json')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div id="testimonial" className="bg-info p-4">
            <div className="container my-5 ">
            <h5 className="text-light">A good word means a lot</h5>
            <h1>Patient <span className="text-primary">testimonials</span> </h1>
            <Row xs={1} md={2} lg={3} className="g-4 m-2">
                {users.map(user=><Testimonial
                    key={user.id}
                    user={user}></Testimonial>)}
            </Row>
            </div>
        </div>
    );
};

export default Testimonials;