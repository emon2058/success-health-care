import React, { useEffect,useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const {serviceId} = useParams()
    const[serviceDetails,setServiceDetails] = useState([]);
    useEffect(()=>{
        const url=`/services.json`
        fetch(url)
        .then(res => res.json())
        .then(data=>setServiceDetails(data[serviceId]))
    },[])
    console.log('serviceDetails',serviceDetails);
    return (
        <div className="py-5 mt-3">
            <Container className="w-50">
                <Row className="g-4 m-2 justify-content-center">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={serviceDetails.img} height="300px"/>
                            <Card.Body>
                            <Card.Title>{serviceDetails.title}</Card.Title>
                            <Card.Text>
                                {serviceDetails.description}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServiceDetails;