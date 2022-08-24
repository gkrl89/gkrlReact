import React from "react";
import { Container, Form, FormControl, FormGroup } from "react-bootstrap";
import { Nav, NavLink, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/redcrud.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Customer() {
  return (
    <>
      <Row>
        <Col>
          <h1> Bank of Phillipines </h1>
        </Col>
      </Row>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="Home"></Navbar.Brand>
          <Nav className="flex-grow-1 justify-content-evenly">
            <Nav.Link as={Link} to={"/AddCust"}>
              Add Customer
            </Nav.Link>
            <Nav.Link as={Link} to={"/CustomerList"}>
              Customer Database
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col className="colA"></Col>
        </Row>
      </Container>
    </>
  );
}

export default Customer;
