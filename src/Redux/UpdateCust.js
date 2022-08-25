import React from "react";
import { Container , Button ,Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link , useNavigate } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import {useSelector , useDispatch} from "react-redux"
import CustService from "./services";
import { updateCustomer } from "./slices";
function UpdateCust () {

        const dispatch = useDispatch();
        const params = useParams();
        const navigate = useNavigate();


        const [newdata, setNewData] = useState({
          custid: "",
          custname: "",
          accno: "",
          add: "",
          phone: "",
          mail: "",
        });
   

    const getCust = id => {
        CustService.get(id)
          .then(response => {
            setNewData(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };
    //  console.log(params.id);
      useEffect(() => {
        getCust(params.id);
      }, [params.id]);

    const handleChange = (e) => {
        
        const { value, name } = e.target;

        setNewData(() => {
          return {
            ...newdata,
            [name]: value,
          };
        });
      };

      const ClickUpdate = (e) => {

        e.preventDefault();

         
           dispatch(updateCustomer({ id: newdata.custid, data: newdata }))
          .unwrap()
          .then(response => {
            console.log(response);
            
            navigate("/CustomerList");
          })
          .catch(e => {
            console.log(e);
          });
      };

    
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
            <h2> Update Customer Details</h2>
            <Form>
              <Form.Group className="my - 5" controlId="item">
                <Form.Label style={{ fontSize: "20px" }}>
                  {" "}
                  Customer Name:
                </Form.Label>
                <Form.Control
                  type="text"
                  name="custname"
                  value={newdata.custname}
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
                  value={newdata.accno}
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="my - 5" controlId="item">
                <Form.Label style={{ fontSize: "20px" }}> Address :</Form.Label>
                <Form.Control
                  type="text"
                  name="add"
                  value={newdata.add}
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
                  value={newdata.phone}
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="my - 5" controlId="item">
                <Form.Label style={{ fontSize: "20px" }}> Email ID:</Form.Label>
                <Form.Control
                  type="text"
                  name="mail"
                  value={newdata.mail}
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={ClickUpdate}              >
                Update
              </Button>{" "}
              <Button variant="dark" type="submit"  onClick={() => navigate("/CustomerList")} >
                Cancel 
              </Button>{" "}
            </Form>
          </Container>
        </Col>
      </Row>
    </div>
    </>

             )

}
export default UpdateCust;