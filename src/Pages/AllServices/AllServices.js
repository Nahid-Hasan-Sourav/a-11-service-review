import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AllServiceCard from "../../Components/AllServiceCard/AllServiceCard";

const AllServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://a11-flytographer-server-side.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <Container>
      <Row className="mx-0 justify-content-center">
        <Col lg={8} className="g-2">
          <h2 className="p-2 my-2 text-danger fw-bold">All Services</h2>
          <Row className="mx-0 g-3">
            {services.map((services) => {
              return (
                <AllServiceCard
                  key={services._id}
                  services={services}
                ></AllServiceCard>
              );
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AllServices;
