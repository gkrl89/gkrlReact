import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { Reducer } from "../empreducers";
import React from "react";
import Emp from "../empdetails"

function FormModal(props) {
  const [data, setData] = useState({
    empid: "",
    empname: "",
    desgn: "",
  });
  const initialState = {
    postData: [],
  };
  // const id= props.formid
  // console.log(id , "id")
  const [update, setUpdate] = useState(false);

  const [postData, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    axios
      .get(
        `https://62fb40bbabd610251c040f32.mockapi.io/Employee/${props.formid}`
      )
      .then((response) => {
        console.log("response", response.data);
        setData(response.data);
      });
  }, [props.formid]);

  const handleChange = (e) => {
    const { value, name } = e.target;

    setData(() => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  const ClickUpdate = (props) => {
    props.SetFormModal(false);
    const id = props.formid;

    axios
      .put(`https://62fb40bbabd610251c040f32.mockapi.io/Employee/` + id, {
        empid: data.empid,
        empname: data.empname,
        desgn: data.desgn,
      })

      .then((response) => {
        setUpdate(Math.random());
        console.log(response, "put");
        dispatch({ type: "edit", payload: response.data });
        <Emp update={update}/>
         
      });
    <Emp update= {update}/>
    console.log(props.formModal, "false")
  };

  const handleClose = () => props.SetFormModal(false);

  return (
    <>
      <div>
        <Modal show={props.formModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <ModalTitle>Product Update Form </ModalTitle>y
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Employee ID: </Form.Label>
              <Form.Control
                type="text"
                name="empid"
                value={data.empid}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Employee Name: </Form.Label>
              <Form.Control
                type="text"
                name="empname"
                value={data.empname}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Designation: </Form.Label>
              <Form.Control
                type="text"
                name="desgn"
                value={data.desgn}
                onChange={handleChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              type="submit"
              onClick={() => {
                ClickUpdate(props);
              }}
            >
              Update
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
export default FormModal;
