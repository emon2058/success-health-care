import React from 'react';
import { Card, Col, Stack } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
const Testimonial = (props) => {
    const {img,description}=props.user;
    return (
        <>
            <Col>
                <Stack direction="horizontal">
                    <Image variant="top" src={img} roundedCircle height="100px"/>
                    <Card.Body>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    </Card.Body>
                </Stack>
            </Col>
        </>
    );
};

export default Testimonial;