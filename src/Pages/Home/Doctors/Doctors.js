import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors,setDoctors] = useState([]);
    useEffect(()=>{
        fetch('doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <div>
            <h1 className="text-center mt-3">Some Of Our Expert Doctors</h1>
            <Row xs={1} md={2} lg={3} className="g-4 m-2">
            {doctors.map(doctor => <Doctor
                key={doctor.id}
                doctor={doctor}></Doctor>)}
            </Row>
        </div>
    );
};

export default Doctors;