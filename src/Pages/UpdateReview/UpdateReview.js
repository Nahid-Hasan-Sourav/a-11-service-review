import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import {useLoaderData, useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


const UpdateReview = () => {
    const review=useLoaderData();
    const navigate=useNavigate()
    console.log("review",review);

    const handleUpdate=(event)=>{
      
      
      event.preventDefault();
      const form = event.target;
      const textArea=form.textarea.value;
      console.log("Text Area",textArea);

      const update={
        reviewText:textArea
      }
      fetch(`http://localhost:5000/review/${review._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0){
                alert('user updated')
                navigate('/my-review')
                console.log(data);
            }
            
        })
    }



    return (
      <Container>
        <Row className="mx-0 justify-content-center align-content-center align-items-center h-100">
          <Col lg={6}>
         
            <Form onSubmit={handleUpdate}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" defaultValue={review.userName} readOnly={true} disabled/>
              </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Services Name</Form.Label>
                <Form.Control type="email" defaultValue={review.serVicesName} readOnly={true} disabled/>
               
              </Form.Group>
              <Form.Label>Your Review</Form.Label>
              <FloatingLabel
                        controlId="floatingTextarea2"
                        label="Edit Your Review"
                      >
                        <Form.Control
                          as="textarea"
                          name="textarea"
                          placeholder=""
                          defaultValue={review.reviewText}
                          style={{ height: "100px" }}
                        />
            </FloatingLabel>
              
             
              <Button variant="danger" type="submit" className='my-2'>
                Update 
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
};

export default UpdateReview;