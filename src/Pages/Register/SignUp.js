import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Lottie from 'lottie-react'
import LoginAnim from '../../Assets/login.json'
import SignUpAnim from '../../Assets/signUps.json'
import { FcGoogle } from 'react-icons/fc';

const SignUp = () => {
    return (
        <Container>
        {/* <div>
        <Lottie
             animationData={SignUpAnim}
          
             style={{height:"200px"}}
            >

            </Lottie>
    </div> */}
       
        <Row className="justify-content-center align-items-center">
          
          <Col lg="5">
          <div>
            <Lottie
             animationData={SignUpAnim}
          
             style={{height:"100%"}}
            >

            </Lottie>
        </div>
          </Col>

          <Col lg="5" className="order">
          <h2 className="fw-bold text-center py-3">Sign Up</h2>
            <Form >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Enter Your full name" required/>            
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo url</Form.Label>
                <Form.Control name="photoURL" type="text" placeholder="Enter Your photo url" required  />            
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />            
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
              </Form.Group>
              
              <Form.Text className="text-danger mb-2 d-block">
                 
              </Form.Text>
              <Button variant="primary" type="submit" className='d-block w-100'>
                Register
              </Button>
              <p className="d-flex flex-row my-2 justify-content-center">
                  Already Have an account? 
                   <Nav.Link className="mx-1 text-primary" as={Link} to='/login'>
                      Login
                  </Nav.Link>
             
              </p>   
              <p className="text-center">
                  Or
              </p>   
                
              
            </Form>
           <Button variant="light" type="submit" className='bg-light d-block w-100 mb-2 fw-bold'>
              <FcGoogle className="fw-bold fs-2 me-2" />Continue With Google
          </Button>     
          </Col>
        </Row>
      </Container>
    );
};

export default SignUp;