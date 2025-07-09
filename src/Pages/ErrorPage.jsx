import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { homeimage } from "../assets/assets"; // Adjust the import path as needed

const ErrorPage = () => {
  const navigate = useNavigate();

  const style = {
    maxWidth: "500px",
    objectFit: "contain",
  };

  return (
    <Container
      fluid
      className="vh-100 d-flex align-items-center justify-content-center bg-light"
    >
      <Row className="text-center">
        <Col>
          <img
            src={homeimage.error_img} // Adjust path if needed
            alt="404 Not Found"
            className="img-fluid mb-4"
            style={style}
          />
          <h2 className="mb-3" style={{ color: "#232afb" }}>
            Oops! Page Not Found
          </h2>
          <p className="mb-4">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button variant="primary" onClick={() => navigate("/")}>
            Go Back Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;
