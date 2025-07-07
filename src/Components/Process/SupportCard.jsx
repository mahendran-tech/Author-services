import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SupportCard = ({ image, title, description, fullwith, btnurl }) => {
  const navigate = useNavigate();
  const handleClickRedirect = (btnurl) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(btnurl);
  };
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
        <Button
          onClick={() => handleClickRedirect(btnurl)}
          className="support-card-btn"
        >
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SupportCard;
