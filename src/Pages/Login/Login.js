import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Lottie from 'lottie-react'
import LoginAnim from '../../Assets/login.json'
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  return (
    <Container className="bg-light">
      <Row className="py-4 justify-content-center align-items-center" >
        <Col lg={6}>
        <div>
            <Lottie
             animationData={LoginAnim}
             loop={true}
             style={{height:"100%"}}
            >

            </Lottie>
        </div>
        </Col>
        <Col lg={4}>
            <h2 className="fw-bold text-center">Login</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
         
            <Button variant="primary" type="submit" className="w-100 fw-bold ">
              Login
            </Button>
            <small className="text-center d-block my-2 d-flex justify-content-center">Don't have an account?
            <Nav.Link 
            as={Link}
            to="/signup"
            className="mx-1 text-primary"
            >
            Sign Up
            </Nav.Link>
                </small>

            <Button variant="dark" type="submit" className="w-100 fw-bold d-block my-2"
            
            >
             <FcGoogle className="fw-bold fs-2 me-2" />Continue With Google
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
