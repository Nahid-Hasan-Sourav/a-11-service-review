import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const ServiceReview = ({serVicesId}) => {
    const [review,setReview]=useState([])
    // const url=`http://localhost:5000/review?serVicesId=${serVicesId}`

    useEffect(()=>{
        fetch(`http://localhost:5000/review?serVicesId=${serVicesId}`)
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[review])
    return (
        <>
            <Col lg='8 '>
            {
            review.length <= 0 ? 
            <>
            <h2 className='fw-bold text-danger text-center my-3 p-2'>NO REVIEW YET</h2>
            </>
            : 
            <>
              {
                review?.map((review,index) => {
                    return(
                    <Card className='mb-3'>
                        <Card.Body className="">

                        <Card.Text className="text-center">
                           " {review.reviewText} "
                        </Card.Text>
                        <Card.Img variant="top" src={review.userIMg} 
                        style={{width:'60px',height:'60px',borderRadius:'50%'}}
                        className='img-fluid d-block mx-auto'
                        />

                        <Card.Text className="text-center my-0 fw-bold fs-4">
                            {review.userName}
                        </Card.Text>

                        </Card.Body>

                    </Card>
                    )
                })
              }
            </>

            }
            </Col>
        </>
    );
};

export default ServiceReview;