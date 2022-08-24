import React from "react";
import {useEffect, useState, useCallback} from "react"; 
import { retrieveCustomer } from "./slices";
import {useSelector,useDispatch} from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Button , Container } from "react-bootstrap";

function CustomerList(){

    const cust = useSelector(state => state.cust);

    const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(retrieveCustomer());
  }, [dispatch])

  useEffect(() => {
    initFetch()
  }, [initFetch])

    return(
        <>
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
                to={"/AddCust"}
                style={{ fontSize: "30px" }}
              >
                Add Customer
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div className="table">
        <h2 style= {{textAlign:"left"}}>Product Dashboard</h2>

        <Table striped bordered hover >
          <thead>
            <tr>
              <th>S.No</th>
              <th>Customer Name</th>
              <th>Account Number</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Mail</th>
              </tr>
          </thead>
          <tbody>
            {cust?.map((cust, id) => {
              const number = cust.id;
              // console.log(number,"number")
              return (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{cust.custname}</td>
                  <td>{cust.accno}</td>
                  <td>{cust.add}</td>
                  <td>{cust.phone}</td>
                  <td>{cust.mail}</td>
                  <td>
                    <Button
                      variant="primary"
                      type="submit"
                      >
                      Edit
                    </Button>{" "}
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      type="submit"
                      >
                      Delete
                    </Button>{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>

        </>
    )
}
export default CustomerList;