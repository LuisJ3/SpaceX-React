import React, { useContext } from "react";
import { useParams } from 'react-router-dom';
import { AppContext } from "../../State";
import { Col, Container, Row } from "react-bootstrap";
import Nav from "../../Components/NavBar";

const MissionDetails = () => {
  const { id } = useParams();
  const { missions } = useContext(AppContext);
  const mission = missions.find(c => c.id === parseInt(id, 10));

  return (
    <>
      <Nav />
      <h1>{mission.name}</h1>
    </>
  );
};

export default MissionDetails;
