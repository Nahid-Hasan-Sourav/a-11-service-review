import React from 'react';
import { Button, Card, Col, Container,Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
const ChoseCity = () => {
    return (
        <Container>
            <Row className='mx-0 py-4 g-3'>
                <Col lg='6' className='bg-light'>
                  <div>
                     <h3 className='fw-bold mb-2 pb-1 text-primary'>Over 3 Million Memories Captured</h3>
                     <p className='mb-2'>Flytographer connects you with hand-picked local photographers in over 350 destinations around the globe for fun, hassle-free photo shoots.</p>
                     <ListGroup>
                         <ListGroup.Item className='my-2 fw-bold'>Capture the magic of travel with a vacation photo shoot</ListGroup.Item>
                         <ListGroup.Item className='my-2 fw-bold'>Show the world who you are with The Modern Headshot photo shoot</ListGroup.Item>
                         <ListGroup.Item className='my-2 fw-bold'>Book a proposal photographer to capture the big moment</ListGroup.Item>
                         <ListGroup.Item className='my-2 fw-bold'>Preserve cherished memories with a hometown photo shoot</ListGroup.Item>
                     
                    </ListGroup>
                    <div className='my-3 text-center'>
                        <Button className='mx-1 text-center' variant="outline-danger">Choose My City</Button>
                        <Button className='mx-1 text-center' variant="outline-danger">See Pricing</Button>
                    </div>
                  </div>
                </Col>
                <Col lg='6'>
                   <Card >
                   <div className=''>
                   <Card.Img variant="top" src={`https://media1.popsugar-assets.com/files/thumbor/c4fbQkR8NB4BoR-ANS17JHXvDQA/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/01/10/904/n/24155406/84cddc605171a95f_Single_Mom/i/Benefits-Being-Single-Mom.jpg`} />
                   </div>
                   </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ChoseCity;