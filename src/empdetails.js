import React from "react";
import { Button, Table } from "react-bootstrap";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useEffect, useState, useReducer } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Reducer } from "./empreducers";
import FormModal from "./components/formmodal";

export default function Emp(props) {
  const initialState = {
    postData: [],
  };
  const [formModal, SetFormModal] = useState(false);
  const [postData, dispatch] = useReducer(Reducer, initialState);
  const [error, setError] = useState();
  const[update, setUpdate]=useState();

  const [updatedValues, setUpdatedValues] = useState({
    empid: "",
    empname: "",
    desgn: "",
  });
  const [details, setDetails] = useState([]);
  const [number, setNumber] = useState();

  const random = props.update

  useEffect(() => {
    axios
      .get("https://62fb40bbabd610251c040f32.mockapi.io/Employee")
      .then((response) => {
        console.log('response', response.data)
        setDetails(response.data);
      })
      .catch((err) => {
        console.log(err);
        setError("Something went wrong");
      });
  }, [random]);

  const ClickEdit = (number) => {
    SetFormModal(true);
    setNumber(number);
    console.log(number, "number");
  };

  const ClickDelete = (number) => {
    console.log("delete", number);

    axios
      .delete(`https://62fb40bbabd610251c040f32.mockapi.io/Employee/${number}`)
      .then((response) => {
        console.log("response", response.data);
      })
      .catch((err) => {
        console.log(err);
        setError("Something went wrong");
      });

    setDetails(details.filter((emp) => emp.id !== number));
  };

  

  return (
    <>
      {error && (
        <div
          className="alert alert-warning"
          style={{ textAlign: "center" }}
          role="alert"
        >
          {error}
        </div>
      )}
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="Home"></Navbar.Brand>
            <Nav>
              <Nav.Link as={Link} to={"/addemp"} style={{ fontSize: "30px" }}>
                Add Employee Information
              </Nav.Link>
            </Nav>
            
            <FormModal
              formid={number}
              formModal={formModal}
              SetFormModal={SetFormModal}
                         />
          </Container>
        </Navbar>
      </div>
      <div className="table">
        <h1>Employee Details</h1>

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Designation</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {details?.map((emp, id) => {
              const number = emp.id;
              // console.log(number,"number")
              return (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{emp.empid}</td>
                  <td>{emp.empname}</td>
                  <td>{emp.desgn}</td>
                  <td>
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={() => {
                        ClickEdit(number);
                      }}
                    >
                      Edit
                    </Button>{" "}
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      type="submit"
                      onClick={() => {
                        ClickDelete(number);
                      }}
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
  );
}
