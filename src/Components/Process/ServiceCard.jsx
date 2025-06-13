import React from "react";
import { Card, Button } from "react-bootstrap";

const ServiceCard = ({ icon, title, description }) => {
  return (

    <Card className="custom-service-card  h-100">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div className="custom-icon-box"> <img src={icon} alt="" /> </div>
          <Button variant="light" className="custom-view-btn">View Details</Button>
        </div>
        <h5 className="custom-title  mb-3">{title}</h5>
        <p className="custom-description  mb-0">{description}</p>
      </Card.Body>
    </Card>
  );
  
};

export default ServiceCard;
