import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Modal } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav} from 'react-bootstrap';
import AddEmp from "./addemp";
import Emp from "./empdetails";

function Employee() {
  const [emp, setEmp] = useState({
    empid: "",
    empname: "",
    desgn: "",
    proj: "",
  });

  return (
    <>
      <div>
        <h1>My Company</h1>

        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="Home"></Navbar.Brand>
            <Nav className="flex-grow-1 justify-content-evenly">
              <Nav.Link as={Link} to={"/empdetails"}>
                Employee Details
              </Nav.Link>
              <Nav.Link as={Link} to={"/addemp"}>
                Add Employee
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <h2 style={{textAlign:"center"}}> Employee Database</h2>
      </div>
    </>
  );
}

export default Employee;
