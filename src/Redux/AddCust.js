import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {  CreateCustomer } from "./slices";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function AddCust() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cust, setCust] = useState({
    custid: "",
    custname: "",
    accno: "",
    add: "",
    phone: "",
    mail: "",
  });

  

  const ClickAdd = (e) => {
    e.preventDefault();
    const { custid, custname, accno, add, phone, mail } = cust;
    // dispatch(addCust({custid,custname,accno,add,phone,mail}))
    dispatch(CreateCustomer({ custid, custname, accno, add, phone, mail }))
      .unwrap()
      .then((data) => {
        console.log(data);
        setCust({
          custid: data.id,
          custname: data.custname,
          accno: data.accno,
          add: data.add,
          phone: data.phone,
          mail: data.mail,
        });
      })
      .catch((e) => {
        console.log(e);
      });
      navigate("/CustomerList")
     
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setCust(() => {
      return {
        ...cust,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="Home"></Navbar.Brand>
          <Nav>
          <Nav.Link
                as={Link}
                to={"/"}
                style={{ fontSize: "30px" }}
              >
                Home
              </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/CustomerList"}
              style={{ fontSize: "30px" }}
            >
              Customer Details
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Row>
        <Col className="colD"></Col>
        <Col>
          <Container>
            <h2> Add Customer</h2>
            <Form>
              <Form.Group className="my - 5" controlId="item">
                <Form.Label style={{ fontSize: "20px" }}>
                  {" "}
                  Customer Name:
                </Form.Label>
                <Form.Control
                  type="text"
                  name="custname"
                  value={cust.custname}
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="my - 5" controlId="item">
                <Form.Label style={{ fontSize: "20px" }}>
                  {" "}
                  Account Number :
                </Form.Label>
                <Form.Control
                  type="text"
                  name="accno"
                  value={cust.accno}
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="my - 5" controlId="item">
                <Form.Label style={{ fontSize: "20px" }}> Address :</Form.Label>
                <Form.Control
                  type="text"
                  name="add"
                  value={cust.add}
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="my - 5" controlId="item">
                <Form.Label style={{ fontSize: "20px" }}>
                  {" "}
                  Phone Number :
                </Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={cust.phone}
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="my - 5" controlId="item">
                <Form.Label style={{ fontSize: "20px" }}> Email ID:</Form.Label>
                <Form.Control
                  type="text"
                  name="mail"
                  value={cust.mail}
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={(e) => ClickAdd(e)}
              >
                Add
              </Button>{" "}
              <Button variant="dark" type="submit" onClick={() => navigate("/")}>
                Cancel
              </Button>{" "}
            </Form>
          </Container>
        </Col>
      </Row>
    </div>
  );
}
export default AddCust;
