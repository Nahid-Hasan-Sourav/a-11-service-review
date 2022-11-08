import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    // <Carousel slide={false}>
      
     
      
     
    // </Carousel>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1615439935188-5e488fc6b764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      alt="First slide"
      
    />
    <Carousel.Caption className="top-50">
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  );
}

export default Slider;