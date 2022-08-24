import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Modal} from "react-bootstrap";
import { useState,useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {Reducer} from "./empreducers";
import axios from "axios";
import { Nav, Navbar } from "react-bootstrap";
import ModalForm from "./components/Modal"

 function AddEmp(){
    const [emp, setEmp] = useState({
        empid: "",
        empname: "",
        desgn: ""    
      });

      const [showModal, setShowModal] = useState(false);


      const initialState = {
        postData: [],
      };

     
      const navigate = useNavigate();

  const [error,setError] = useState();

  const [postData, dispatch] = useReducer(Reducer, initialState);

  const formCancel = (e) => {

   

    e.preventDefault();
      
  console.log("func called");
   navigate('/');

 }


      const handleChange = (e) =>{

        const {value, name} = e.target;

        setEmp(()=>{
            return {
                ...emp , 
                [name]:value
            }
        })
      }
    
      const formAdd = (e) => {

        e.preventDefault();

        console.log( "func called");

        axios
        .post("https://62fb40bbabd610251c040f32.mockapi.io/Employee", emp)
        .then((response) => {
          console.log(response, "2");
          dispatch({ type: "add", payload: response.data });
        })
        .catch((err) => {
          console.log(err);
          setError("Something went wrong")
        });

        setShowModal(true);
  
      setEmp({
        empid: "",
        empname: "",
        desgn: ""         
      });

      
     

    }
  
    return(
        <div>
            <h1> My Company </h1><Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="Home"></Navbar.Brand>
            <Nav>
              <Nav.Link
                as={Link}
                to={"/empdetails"}
                style={{ fontSize: "30px" }}
              >
                Employee Details
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
             <Container>
          <Form>
            <Form.Group className="my - 5" controlId="item">
              <Form.Label style={{ fontSize: "20px" }}> Emp ID:</Form.Label>
              <Form.Control
                type="text"
                name="empid"
                value={emp.empid}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="price">
              <Form.Label style={{ fontSize: "20px" }}> Employee Name:</Form.Label>
              <Form.Control
                type="text"
                name="empname"
                value={emp.empname}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="price">
              <Form.Label style={{ fontSize: "20px" }}> Designation</Form.Label>
              <Form.Control
                type="text"
                name="desgn"
                value={emp.desgn}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={formAdd}>
              Add 
            </Button>{" "}
            <Button variant="dark" type= "submit" onClick={formCancel}>
              Cancel
            </Button>{" "}
          </Form>
          { showModal  && <ModalForm/>}
        </Container>
       

        </div>
    )
}
export default AddEmp