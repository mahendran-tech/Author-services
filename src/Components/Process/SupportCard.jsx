import React from "react";
import { Card, Button } from "react-bootstrap";

const SupportCard = ({ image, title, description, fullwith }) => {
  return (
    <Card
      className={`${
        fullwith
          ? "d-flex flex-row support-custom-card"
          : "support-custom-card h-100"
      }`}
    >
      <Card.Img
        variant="top"
        src={image}
        className={`${fullwith ? "" : "support-card-img"}`}
        style={fullwith ? { width: "40%" } : {}}
      />
      <Card.Body className="support-card-body">
        <Card.Title className="support-card-title">{title}</Card.Title>
        <Card.Text className="support-card-text">{description}</Card.Text>
        <Button className="support-card-btn">View Details</Button>
      </Card.Body>
    </Card>
  );
};

export default SupportCard;
