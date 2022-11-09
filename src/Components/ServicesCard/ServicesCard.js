import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ServicesCard = ({services,count}) => {
    console.log("ServicesCard", services);
    console.log("count", count);

    return (
      <Col className="g-3" lg='4'>
        <Card classsName="shadow-lg">
          <Card.Img variant="top" src={services.imgUrl} style={{height:"280px"}} className="img-fluid"/>
          <Card.Body>
            <Card.Title className='fw-bold'>{services.name}</Card.Title>
            <Card.Text>
             {
                count===0 ? services.description.slice(0,100):"hh"
             }
            </Card.Text>
            <Card.Text className=''>
             {/* {
                count>0 ? services.price:""
             } */}
             <span className='fw-bold'>Price : </span>{
              services.price
             }$
            </Card.Text>
            <Button variant="danger" className='ms-auto d-block fw-bold' as={Link}>View Details</Button>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default ServicesCard;
