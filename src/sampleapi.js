import React, { useEffect } from "react";
import { useState, useReducer } from "react";
import { Container, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Inventory from "./inventory";

const initialState = {
  postData: [],
};

export function Reducer(state, action) {
  
  switch (action.type) {
    case "add":
      return {
        postData: [...state.postData, action.payload],
      };

    case "edit":
      return {
        postData: [...state.postData, action.payload],
      };
      default:
        return state;
  }
}


function SampleApi() {

  const navigate = useNavigate ;
  const [product, setProduct] = useState({
    item: "",
    price: "",
  });

  const [error,setError] = useState();

  const [postData, dispatch] = useReducer(Reducer, initialState);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setProduct(() => {
      return {
        ...product,
        [name]: value,
      };
    });
  };
 const formAdd = (e) => {

  e.preventDefault();
    
  console.log("func called")
   
    axios
      .post("https://62fb40bbabd610251c040f32.mockapi.io/product", product)
      .then((response) => {
        console.log(response, "2");
        dispatch({ type: "add", payload: response.data });
      })
      .catch((err) => {
        console.log(err);
        setError("Something went wrong")
      });

    setProduct({
      item: "",
      price: "",
    });
  navigate("/inventory.js")
  
}

  return (
    <>
      <div>
        <h1>Inventory</h1>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="Home"></Navbar.Brand>
            <Nav>
              <Nav.Link
                as={Link}
                to={"/inventory"}
                style={{ fontSize: "30px" }}
              >
                Product List
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Container>
          <Form>
            <Form.Group className="my - 5" controlId="item">
              <Form.Label style={{ fontSize: "20px" }}> Item:</Form.Label>
              <Form.Control
                type="text"
                name="item"
                value={product.item}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="price">
              <Form.Label style={{ fontSize: "20px" }}> Price:</Form.Label>
              <Form.Control
                type="text"
                name="price"
                value={product.price}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" onClick= {formAdd}>
              ADD
            </Button>{" "}
          </Form>
        </Container>
      </div>
    </>
  );
}
export default SampleApi;
