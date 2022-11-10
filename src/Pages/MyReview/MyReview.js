import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import { MdDelete } from "react-icons/md";

import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import useTitle from "../../Hooks/useTitle";

const MyReview = () => {
  useTitle("My Review")
  const { user, logOut } = useContext(AuthContext);
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch(
      `https://a11-flytographer-server-side.vercel.app/my-review?userEmail=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("genius-token")} `,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          // return logOut();
        }
        return res.json();
      })
      .then((data) => {
        console.log("Received", data);
        setReview(data);
      });
  }, [user?.email, logOut]);

  console.log("Review image", review);

  const handleDelete = (id) => {
    console.log("Delete item", id);
    const proceed = window.confirm(
      "Are you sure you want to delete this review?"
    );
    if (proceed) {
      fetch(`https://a11-flytographer-server-side.vercel.app/review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = review.filter((odr) => odr._id !== id);
            setReview(remaining);
            toast.success(" successfully deleted");
          }
        });
    }
  };

  console.log("Test", review);
  return (
    <Container>
      <Row className="mx-0 justify-content-center">
        <Col lg="8">
          {review.length <= 0 ? (
            <>
              <h2 className="fw-bold  text-center my-3 p-2">
                {/* Hi..!!{" "}
                  <span className="text-danger">{user.displayName} </span>
                  you have no review */}
                No reviews were added
              </h2>
            </>
          ) : (
            <>
              <Table striped bordered>
                <thead>
                  <tr>
                    <th>Name && Image</th>
                    <th>Review Text</th>
                    <th>Update</th>
                    <th>Delete</th>
                    <Toaster />
                  </tr>
                </thead>

                <tbody>
                  <>
                    {review?.map((review, index) => {
                      return (
                        <tr>
                          <td>
                            <Card.Img
                              variant="top"
                              src={review.userIMg}
                              style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                              }}
                              className="img-fluid text-center"
                            />

                            <p>{review.userName}</p>
                          </td>
                          <td>{review.reviewText}</td>
                          <td>
                            <Nav.Link
                              as={Link}
                              to={`/review/${review._id}`}
                              className="btn btn-primary text-white"
                            >
                              Edit Review
                            </Nav.Link>
                          </td>
                          <td
                            style={{ cursor: "pointer" }}
                            onClick={() => handleDelete(review._id)}
                          >
                            <MdDelete className="fw-bold fs-2 text-danger"></MdDelete>
                          </td>
                        </tr>
                      );
                    })}
                  </>
                </tbody>
              </Table>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MyReview;
