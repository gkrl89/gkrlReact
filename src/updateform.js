import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from "react-bootstrap";
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


function UpdateForm(){

    const [data , setData] = useState();
    const [ino , setIno] = useState();
    const [item , setItem] = useState();
    const [price , setPrice] = useState();

    useEffect(() => {
        axios
            .get(`https://62fb40bbabd610251c040f32.mockapi.io/product/`)
            .then(response => {
                console.log('response',response.data)
                setData(response.data)
                setItem(response[0].data.item);
                setPrice(response[0].data.price);
                setIno(response[0].data.id);

            });
    }, []);

    const UpdateInfo = () =>{
    data.map((product, id)=> {
        const number = product.id ; 
        console.log(number,"number")})
    }

   

   
    
    
   


    return(
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
                    <Form.Group className="mb - 5" controlId="item">
                            <Form.Label style={{ fontSize: "20px" }}> ItemNO:</Form.Label>
                            <Form.Control type="text" name="id" value = {ino} disabled >
                            </Form.Control>
                            </Form.Group>
                        <Form.Group className="mb - 5" controlId="item">
                            <Form.Label style={{ fontSize: "20px" }}> Item:</Form.Label>
                            <Form.Control type="text" name="item" value = {item}   >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="price">
                            <Form.Label style={{ fontSize: "20px" }} > Price:</Form.Label>
                            <Form.Control type="text" name="price" value = {price} >
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit">Update</Button>{" "}
                    </Form>
                </Container>
        </div>
        </>
    )
}

export default UpdateForm;