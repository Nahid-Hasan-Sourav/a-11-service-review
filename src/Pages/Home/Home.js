import React, { useEffect, useState } from 'react';
import { Button, Row,Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Slider from '../../Components/Slider/Slider';
import sliderInfo from '../../Assets/sliderInfo.json';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';
import ServicesCard from '../../Components/ServicesCard/ServicesCard';
import { Link } from 'react-router-dom';


const Home = () => {
    const [threeServices, setthreeServices] = useState([]);
    const count=0;
    useEffect(() => {
      fetch("http://localhost:5000/threeservices")
        .then((res) => res.json())
        .then((data) => setthreeServices(data));
    }, []);
  
    console.log("Three data",threeServices);
    return (
        <Container className=''> 
        
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
                       style={{
                        height: "500px"
                       }}
                       src={info.url}
                       alt="Ohoo!!"
                     />
                    </div>
                  
                     <Carousel.Caption className="" style={{top:"50%"}}>
                   
                       <h3 className='fw-bold fs-1'>{info.title}</h3>
                       <p className="fw-bold mb-2">{info.description}</p>
                       <Button variant="danger" className=' text-white fw-bold my-2' as={Link} to='/services'>Book Now</Button>
                     
                     </Carousel.Caption>
                   </Carousel.Item>
                        )
                     })
                }
            </Carousel>
            </Row>
           

            <Row className='mx-0 '>
            <h1 className='text-danger text-center mt-4 fw-bold'>SERVICES</h1>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis suscipit nisi tempore eaque esse, nulla assumenda asperiores, iste praesentium, repellat optio cumque vel velit et mollitia nihil ab exercitationem magnam corrupti hic quod perspiciatis. Nam accusamus possimus velit non repellat.</p>
            <Row className="my-3 mx-0">
                {
                  threeServices.map((services)=>{
                    return(
                        <ServicesCard
                        key={services._id}
                        services={services}
                        count={count}
                        >

                        </ServicesCard>
                    )
                  })  
                }
            </Row>
            <Button style={{width:"120px"}} className="d-block mx-auto my-4" as={Link} to='/services'>SEE ALL</Button>
            </Row>
           
        </Container>
    );
};

export default Home;