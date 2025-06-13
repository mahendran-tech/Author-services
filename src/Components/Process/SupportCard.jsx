import React from "react";
import { Card, Button } from "react-bootstrap";

const SupportCard = ({ image, title, description }) => {
  return (
    <Card className="support-custom-card h-100">
      <Card.Img variant="top" src={image} className="support-card-img" />
      <Card.Body className="support-card-body">
        <Card.Title className="support-card-title">{title}</Card.Title>
        <Card.Text className="support-card-text">{description}</Card.Text>
        <Button variant="light" className="support-card-btn">View Details</Button>
      </Card.Body>
    </Card>
  );
};

export default SupportCard;
