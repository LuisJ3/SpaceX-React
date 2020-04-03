import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const Jumbo = () => (
  <Jumbotron>
    <h1>Space X Dashboard</h1>
    <p>
      This is a simple hero unit, a simple jumbotron-style component for calling
      extra attention to featured content or information.
    </p>
    <p>
      <Button variant="primary">Learn more</Button>
    </p>
  </Jumbotron>
);

export default Jumbo;