import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
const AddService = () => {
  useTitle("Add Service");
  const navigate = useNavigate();
  const handleAddServices = (event) => {
    event.preventDefault();
    const current = new Date();
    const time = current.toLocaleTimeString("en-US");

    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const Price = form.Price.value;
    const ServiceId = form.ServiceId.value;
    const description = form.description.value;

    const service = {
      name,
      imgUrl: photoUrl,
      price: Price,
      description,
      serviceId: ServiceId,
      time,
    };

    // console.log("Add Serce",service);

    fetch(`https://a11-flytographer-server-side.vercel.app/services`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("database", data);
        if (data.acknowledged) {
          toast("service added successfully");
          form.reset();
          form.reset();
          // navigate('/services')
        }
      });
  };
  return (
    <Container>
      <Row className="mx-0 justify-content-center">
        <Col lg={6}>
          <h2 className="fw-bold text-center">Add Services</h2>
          <Card className="p-2 shadow-lg">
            <Form onSubmit={handleAddServices}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Service Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Service Name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Image Url</Form.Label>
                <Form.Control
                  name="photoUrl"
                  type="text"
                  placeholder="Image Url"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  name="Price"
                  type="text"
                  placeholder="Price"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>ServiceId</Form.Label>
                <Form.Control
                  name="ServiceId"
                  type="text"
                  placeholder="ServiceId"
                  required
                />
              </Form.Group>

              <Form.Label>Description</Form.Label>
              <FloatingLabel controlId="floatingTextarea2" label="Description">
                <Form.Control
                  as="textarea"
                  name="description"
                  placeholder=""
                  required
                  style={{ height: "100px" }}
                />
              </FloatingLabel>

              <Button variant="danger" type="submit" className="my-2">
                Add Service
              </Button>
              <Toaster />
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddService;
