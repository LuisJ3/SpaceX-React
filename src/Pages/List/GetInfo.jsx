import React, { Component } from "react";
import Nav from "../../Components/NavBar";
import Jumbo from "../../Components/Jumbotron";
import Card from "../../Components/Card";
import { Col, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";

class GetInfo extends Component {
  state = {
    loading: true,
    capsule: [],
  };

  async componentDidMount() {
    const url = "https://api.spacexdata.com/v3/capsules";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ capsule: data, loading: false });
    console.log(this.state.capsule);
  }

  render() {
    return (
      <div>
        <Nav />
        <Jumbo />
        <Container>
          <Row>
            {this.state.capsule.map((c, i) => (
              <Col key={i} lg="4">
                <Card
                  name={c.capsule_id}
                  date={c.capsule_serial}
                  description={c.details}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default GetInfo;
