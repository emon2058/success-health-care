import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                        {description.slice(0,280)}...
                    </Card.Text>
                    </Card.Body>
                    <Card.Title  className="text-center" >
                        <Link to = {`/service/${id}`}>
                            <Button variant="outline-primary">Show Details</Button>
                        </Link>
                    </Card.Title>
                </Card>
            </Col>
        </>
    );
};

export default Service;