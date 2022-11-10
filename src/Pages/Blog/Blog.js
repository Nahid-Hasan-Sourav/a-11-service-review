import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useTitle from '../../Hooks/useTitle';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    useTitle("Blog")
    return (
      <Container>
        <Row className="mx-0 justify-content-center mt-4 ">
          <Col lg="8 " className="">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Difference between SQL and NoSQL
                </Accordion.Header>
                <Accordion.Body>
                  SQL databases are relational, NoSQL databases are
                  non-relational. SQL databases use structured query language
                  and have a predefined schema. NoSQL databases have dynamic
                  schemas for unstructured data. SQL databases are vertically
                  scalable, while NoSQL databases are horizontally scalable. SQL
                  databases are table-based, while NoSQL databases are document,
                  key-value, graph, or wide-column stores. SQL databases are
                  better for multi-row transactions, while NoSQL is better for
                  unstructured data like documents or JSON.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  What is JWT, and how does it work?
                </Accordion.Header>
                <Accordion.Body>
                  JWT, or JSON Web Token, is an open standard used to share
                  security information between two parties — a client and a
                  server. Each JWT contains encoded JSON objects, including a
                  set of claims. JWTs are signed using a cryptographic algorithm
                  to ensure that the claims cannot be altered after the token is
                  issued. JWTs differ from other web tokens in that they contain
                  a set of claims. Claims are used to transmit information
                  between two parties. What these claims are depends on the use
                  case at hand. For example, a claim may assert who issued the
                  token, how long it is valid for, or what permissions the
                  client has been granted. A JWT is a string made up of three
                  parts, separated by dots (.), and serialized using base64. In
                  the most common serialization format, compact serialization,
                  the JWT looks something like this: xxxxx.yyyyy.zzzzz. Once
                  decoded, you will get two JSON strings: The header and the
                  payload. The signature. The JOSE (JSON Object Signing and
                  Encryption) header contains the type of token — JWT in this
                  case — and the signing algorithm. The payload contains the
                  claims. This is displayed as a JSON string, usually containing
                  no more than a dozen fields to keep the JWT compact. This
                  information is typically used by the server to verify that the
                  user has permission to perform the action they are requesting.
                  There are no mandatory claims for a JWT, but overlaying
                  standards may make claims mandatory. For example, when using
                  JWT as bearer access token under OAuth2.0, iss, sub, aud, and
                  exp must be present. some are more common than others. The
                  signature ensures that the token hasn’t been altered. The
                  party that creates the JWT signs the header and payload with a
                  secret that is known to both the issuer and receiver, or with
                  a private key known only to the sender. When the token is
                  used, the receiving party verifies that the header and payload
                  match the signature.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>What is the difference between javascript and NodeJS?</Accordion.Header>
                <Accordion.Body>
                Javascript is a programming language that is used for writing scripts on the website. NodeJS is a Javascript runtime environment. Javascript can only be run in the browsers and It is basically used on the client-side.But We can run Javascript outside the browser with the help of NodeJS and It is mostly used on the server-side.Javascript is capable enough to add HTML and play with the DOM but Nodejs does not have capability to add HTML tags.Javascript is used in frontend development where Nodejs is used in server-side development.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>How does NodeJS handle multiple requests at the same time?</Accordion.Header>
                <Accordion.Body>
                NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                </Accordion.Body>
              </Accordion.Item>
             
            </Accordion>
          </Col>
        </Row>
      </Container>
    );
};

export default Blog;