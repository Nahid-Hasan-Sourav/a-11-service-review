// import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Lottie from 'lottie-react'
import LoginAnim from '../../Assets/login.json'
import { FcGoogle } from 'react-icons/fc';
import { useContext,useState} from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from 'react-router-dom';



const Login = () => {
  
  const {providerLogin,signIn,setError,error}=useContext(AuthContext)
  const[erros,setErrors]=useState('')
  const googleProvider=new GoogleAuthProvider()
  const navigate=useNavigate()
  const location=useLocation()

  const fromss = location.state?.from?.pathname || '/';

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
   
    const email = form.email.value;
    const password = form.password.value;
    console.log("Emails",password);
    signIn(email,password)
    .then((result) => {
        
      const user = result.user;
      console.log(user)

      const currentUser = {
        email: user.email
    }
   

    console.log("Current user",currentUser);

      // get jwt token
      fetch('http://localhost:5000/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
     console.log(data);   
      localStorage.setItem('genius-token', data.token);
       
      });
      
      form.reset();
      setErrors('');
      navigate(fromss, {replace: true});
    
      
    })
  .catch(error => {
    console.error(error)
    setErrors(error.message)
  
  })
  }

  const handleGoogleSignIn=(e)=>{
    e.preventDefault()
    console.log("clickLogin");
    providerLogin(googleProvider)
    .then((result) => {
        
        const user = result.user;
        // console.log(user)
        // navigate(fromss,{replace:true});
        const currentUser = {
          email: user.email
      }
     
  
      console.log("Current user",currentUser);
  
        // get jwt token
        fetch('http://localhost:5000/jwt', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
      })
      .then(res => res.json())
      .then(data => {
       console.log(data);   
        localStorage.setItem('genius-token', data.token);
         
        });
        
        // form.reset();
        setErrors('');
        navigate(fromss, {replace: true});
      
        
      })
    .catch(error => {
      console.error(error)
    
    })
}



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
          <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />            
          </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" />
            </Form.Group>
           
             <Form.Text className="text-danger mb-2 d-block">
             {
              erros
             }
            </Form.Text>
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
            <p className="text-center">Or</p>
            </Form>
            <Button variant="dark" className="w-100 fw-bold d-block my-2"
              onClick={handleGoogleSignIn}
            >
         
             <FcGoogle className="fw-bold fs-2 me-2" />Continue With Google
            </Button>
          
          
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
