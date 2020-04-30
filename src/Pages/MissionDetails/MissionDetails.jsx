import React from "react";
import { withRouter } from 'react-router-dom';
import Nav from "../../Components/NavBar";

class MissionDetails extends React.Component {

  state = {
    capsule: []
  };

  async componentDidMount() {
    const serial = this.props.match.params.id
    const url = "https://api.spacexdata.com/v3/capsules/"+serial;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ capsule: data });
    console.log(this.state.capsule);
  }

render(){
  return (
    <>
      <Nav />
      <h3>Serial: </h3><p>{this.state.capsule.capsule_serial}</p>
      <h3>Id: </h3><p>{this.state.capsule.capsule_id}</p>
      <h3>Status: </h3><p>{this.state.capsule.status}</p>
      <h3>Launch date: </h3><p>{this.state.capsule.original_launch}</p>
    </>
  );
};
};

export default withRouter(MissionDetails);
