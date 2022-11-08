import React from 'react';
import { Button, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Slider from '../../Components/Slider/Slider';
import sliderInfo from '../../Assets/sliderInfo.json';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';
console.log(sliderInfo)

const Home = () => {
   
    return (
        <Container> 
            <Row>
            <Carousel slide={false} >
                {
                     sliderInfo.map((info,index)=>{
                        return(
                    <Carousel.Item  style={{height:"500px"}}
                    key={index}
                    >
                    <div 
                    className='carousel-img'
                    >
                    <img
                       className="d-block w-100"
                       src={info.url}
                       alt="Ohoo!!"
                     />
                    </div>
                  
                     <Carousel.Caption className="" style={{top:"40%"}}>
                   
                       <h3 className='fw-bold fs-1'>{info.title}</h3>
                       <p className="fw-bold mb-2">{info.description}</p>
                       <Button variant="danger" className=' text-white fw-bold my-2'>Book Now</Button>
                     
                     </Carousel.Caption>
                   </Carousel.Item>
                        )
                     })
                }
            </Carousel>
            </Row>
        </Container>
    );
};

export default Home;