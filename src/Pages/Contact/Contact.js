import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Contact = () => {
    return (
        <Container className="py-5 mt-3">
            <h1 className="text-center">CONTACT FOR APPOINMENT</h1>
            <Form>
                <Row className="mb-3">
                    <Form.Group controlId="formGridEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="your Name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="your address" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default Contact;