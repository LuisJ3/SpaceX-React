import React from "react";
import { Card } from "react-bootstrap";

const card = ({name, date, description}) => (
  <Card style={{ width: "18rem" }}>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
      <Card.Text>
        {description}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default card;
