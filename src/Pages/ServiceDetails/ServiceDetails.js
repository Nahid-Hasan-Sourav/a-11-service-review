import React, { useState } from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useContext } from 'react';
import Form from "react-bootstrap/Form";
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

import Nav from 'react-bootstrap/Nav';

import Modal from 'react-bootstrap/Modal';
import ServiceReview from '../../Components/ServiceReview/ServiceReview';



const ServiceDetails = () => {
  const [show, setShow] =useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
   
  };
    const services=useLoaderData()
    const {user}=useContext(AuthContext)


    const handleReview =(event)=>{
      const current = new Date();
      const time = current.toLocaleTimeString("en-US");
      event.preventDefault();
      const form = event.target;
      const textArea=form.textarea.value;
      // console.log("This review text",textArea);

      const review={
        reviewText:textArea,
        serVicesId:services.serviceId,
        userName:user.displayName,
        userIMg:user.photoURL,   
        userEmail:user.email,
        serVicesName:services.name,
        time:time
      }

     
      // hit insert api
      fetch('http://localhost:5000/review',{
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(review)
      })
      .then(res=>res.json())
      .then(data=>console.log(data))
      .catch(err=>console.error(err))
      
    }

    return (
      <Container>
        <Row className="mx-0 justify-content-center">
          <Col lg={8}>
            <Card classsName="shadow-lg">
              <Card.Img
                variant="top"
                src={services.imgUrl}
                style={{ height: "280px" }}
                className="img-fluid w-100"
              />
              <Card.Body>
                <Card.Title className="fw-bold">{services.name}</Card.Title>
                <Card.Text>{services.description}</Card.Text>
                <Card.Text className="">
                  <span className="fw-bold">Price : </span>
                  {services.price}$
                </Card.Text>
                <Button
                  variant="danger"
                  className="ms-auto d-block fw-bold"
                  as={Link}
                  to={`/services/${services._id}`}
                >
                  Book Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr></hr>

        <Row className="mx-0 justify-content-center">
          <Col lg={8}>
            <Button
              variant="primary"
              type="submit"
              className="w-100 fw-bold my-3"
              onClick={handleShow}
            >
              SEND REVIEW
            </Button>
            {/* if user is logged in this modal will show to get user review  */}
            {user?.uid ? (
              <>
                <Modal show={show} onHide={handleClose} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add Your Review</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form onSubmit={handleReview}>
                      <FloatingLabel
                        controlId="floatingTextarea2"
                        label="type here..."
                      >
                        <Form.Control
                          as="textarea"
                          name="textarea"
                          placeholder=""
                          style={{ height: "100px" }}
                        />
                      </FloatingLabel>

                    <Button variant="primary" type='submit' className="my-3">
                      Send Review
                    </Button>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            ) : (
              <>
                {/* if user is not logged in this modal will show to log in */}
                <Modal show={show} onHide={handleClose} animation={false}>
                 
                  <Modal.Body>

                  Sorry!! You are Not Loggedin.
                  If You want to add Review About This Service You must need to Login<Nav.Link  className='my-2 text-white btn btn-danger' as={Link} to='/login'>Login</Nav.Link>



                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    
                  </Modal.Footer>
                </Modal>
              </>
            )}
          </Col>
        </Row>
        <Row className='mx-0 justify-content-center '>
              <ServiceReview serVicesId={services.serviceId}>

              </ServiceReview>
        </Row>
      </Container>
    );
};

export default ServiceDetails;