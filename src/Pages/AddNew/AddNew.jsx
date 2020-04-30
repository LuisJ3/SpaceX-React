import React from "react";
import { Container, Row } from "react-bootstrap"
import Nav from "../../Components/NavBar";

const AddNew = () => {
    return (
        <>
        <Nav />
        <Container>
            <Row>
        <h1>Add new capsule</h1>
        </Row>
        <Row>
        <form>
            <label>Name: </label>
            <input type='text'/>
            <br/>
            <label>Serial: </label>
            <input type='text'/>
            <br/>
            <label>Status: </label>
            <select>
                <option>unknown</option>
                <option>retired</option>
                <option>active</option>
                <option>destroyed</option>
            </select>
            <br/>
            <label>Launch Date: </label>
            <input type='date'/>
            <br/>
            <button type='submit'>Submit</button>
        </form>
        </Row>
        </Container>
        </>
    )
}

export default AddNew