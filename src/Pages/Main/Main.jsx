import React, { useContext } from "react";
import {useHistory} from 'react-router-dom';
import Nav from "../../Components/NavBar";
import Jumbo from "../../Components/Jumbotron";
import Card from "../../Components/Card";
import { Col, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { AppContext } from "../../State";

const Main = () => {
  
  const { missions } = useContext(AppContext);
  const history = useHistory();

  //Show one per page
//   const { id } = useParams();
//   const mission = missions.find(c => c.id === parseInt(id, 10));

  return (
    <>
      <Nav />
      <Jumbo />
      <Container>
        <Row>
            { missions.map((c, i) => (
          <Col key={i} onClick={() => history.push(`/dashboard/${c.id}`)} lg="4">
            <Card name={c.name} date={c.date} description={c.description} />
          </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default Main;
