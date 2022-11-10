import React from 'react';
import { Container, Row } from 'react-bootstrap';

const SpecialServie = () => {
    return (
        <Container>
            <Row className='mx-0 p-3 text-center bg-light my-4'>
                <h3 className='text-danger'>SPECIAL OFFER </h3>
                <p>BUY 3 PACKGES YOU  WILL GET<span className='text-danger'> 30%</span> DISCOUNT </p>
            </Row>
        </Container>
    );
};

export default SpecialServie;