import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
import logo from "../../Images/spacex.png"

const NavBar = () => (

    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/dashboard"><Image src={logo} height='30'/></Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/dashboard">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <Nav.Link href="/Add">Add New</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
  );

export default NavBar;
