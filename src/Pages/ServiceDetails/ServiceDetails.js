import React from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import Form from "react-bootstrap/Form";


const ServiceDetails = () => {
    const services=useLoaderData()
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
            <h4>Service Review</h4>
            <Form>
              <FloatingLabel controlId="floatingTextarea2" label="type here...">
                <Form.Control
                  as="textarea"
                  placeholder=""
                  style={{ height: "100px" }}
                />
              </FloatingLabel>

              <Button
                variant="primary"
                type="submit"
                className="w-100 fw-bold my-3"
              >
                SEND REVIEW
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
};

export default ServiceDetails;