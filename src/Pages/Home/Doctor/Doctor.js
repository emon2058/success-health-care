import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = (props) => {
    const {img,name,occupation,description}=props.doctor;
    return (
        <>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} height="300px"/>
                    <Card.Body>
                    <Card.Title bg="secondary">{occupation}</Card.Title>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Doctor;