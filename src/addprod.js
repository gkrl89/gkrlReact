import React from "react";
import { useState, useReducer } from "react";
import { Container, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Inventory from "./inventory";


function AddProd(){

    const [product, setProduct] = useState({
    item: "",
    price: ""
})

const handleChange = (e) => {

    const { value, name } = e.target;
    setProduct(() => {
        return {
            ...product,
            [name]: value
        }
    })
}
  
< Inventory dispatch />

return (

    <>
        <div>

            <h1>Inventory</h1>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="Home"></Navbar.Brand>
                    <Nav>
                        <Nav.Link as={Link} to={"/inventory"} style={{ fontSize: "30px" }} >Product List</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>


            <Container>
                <Form>
                    <Form.Group className="my - 5" controlId="item">
                        <Form.Label style={{ fontSize: "20px" }}> Item:</Form.Label>
                        <Form.Control type="text" name="item" value={product.item} onChange={handleChange} >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="price">
                        <Form.Label style={{ fontSize: "20px" }} > Price:</Form.Label>
                        <Form.Control type="text" name="price" value={product.price} onChange={handleChange} >
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={formAdd}>ADD</Button>{" "}
                </Form>
            </Container>
        </div>
    </>
)
}
export default AddProd;


