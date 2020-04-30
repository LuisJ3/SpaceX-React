import React, { useContext } from "react";
import { useParams } from 'react-router-dom';
import { AppContext } from "../../State";
import Nav from "../../Components/NavBar";
import { render } from "@testing-library/react";

class MissionDetails extends React.Component {
  // const { id } = useParams();
  // const { missions } = useContext(AppContext);
  // const mission = missions.find(c => c.id === parseInt(id, 10));

  state = {
    loading: true,
    capsule: []
  };

  getId(){
    const { id } = useParams();
    return id.toString;
  }

  async componentDidMount() {
    const url = "https://api.spacexdata.com/v3/capsules/C103";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ capsule: data, loading: false });
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

export default MissionDetails;
