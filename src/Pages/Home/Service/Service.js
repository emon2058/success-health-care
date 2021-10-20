import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const {id,img,title,description}=props.service;
    return (
        <>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} height="300px"/>
                    <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    </Card.Body>
                    <Button variant="outline-warning">Show Details</Button>
                </Card>
            </Col>
        </>
    );
};

export default Service;