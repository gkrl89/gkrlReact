import axios from "axios";
import React, { useEffect, useState, useReducer ,useContext } from "react";
import Table from "react-bootstrap/Table";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UpdatedForm from "./components/formmodal.js";
import { Reducer } from "./sampleapi.js";
import withHeading from "./withHeading"
import { DataContext } from "./DataContext";

function Inventory(props) {

  const msg = useContext(DataContext);

  const initialState = {
    postData: [],
  };

  const [postData, dispatch] = useReducer(Reducer, initialState);
  const [error,setError] = useState();
  
  

  // const[newVal , setVal] = useState();

  const [updatedValues, setUpdatedValues] = useState({
    id: "",
    item: "",
    price: "",
  });
  const [details, setDetails] = useState([]);
  const [update, setUpdate] = useState([]);

  useEffect(() => {
    axios
      .get("https://62fb40bbabd610251c040f32.mockapi.io/product")
      .then((response) => {
        // console.log('response', response.data)
        setDetails(response.data);
        
      })
      .catch((err) => {
        console.log(err);
        setError("Something went wrong")
      });


      }, [update]); 
    
  // const [showModalform, setShowModalform] = useState(false);
  // const navigate = useNavigate();

  const ClickEdit = (product) => {
    // console.log("function called")

    setUpdatedValues({
      id: product.id,
      item: product.item,
      price: product.price,
    });
    //     console.log("23")
    // //    setShowModalform(true);
    //    console.log("567")
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setUpdatedValues(() => {
      return {
        ...updatedValues,
        [name]: value,
      };
    });
  };

  const ClickUpdate = (id) => {
    axios
      .put(`https://62fb40bbabd610251c040f32.mockapi.io/product/` + id, {
        item: updatedValues.item,
        price: updatedValues.price,
        id: updatedValues.id,
      })

      .then((response) => {
        setUpdate(Math.random());
        console.log(response, "put");
        dispatch({ type: "edit", payload: response.data });
        
      })
      .catch((err) => {
        console.log(err);
        setError("Something went wrong")
      });

  };
  const ClickDelete = (number) => {
    console.log("delete", number);

    axios
      .delete(`https://62fb40bbabd610251c040f32.mockapi.io/product/${number}`)
      .then((response) => {
        console.log("response", response.data);
       })
       .catch((err) => {
        console.log(err);
        setError("Something went wrong")
      });

    setDetails(details.filter((product) => product.id !== number));
  };

  // { showModalform  && <UpdatedForm  />}

  return (
    <>


    {error &&
      <div className="alert alert-warning" style={{textAlign : "center"}} role="alert">
      {error}
    </div>
       
      }
      <div>
        <h1>{props.Heading}</h1>
        <h2>{msg}</h2>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="Home"></Navbar.Brand>
            <Nav>
              <Nav.Link
                as={Link}
                to={"/sampleapi"}
                style={{ fontSize: "30px" }}
              >
                Add Product
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div className="table">
        <h2 style= {{textAlign:"left"}}>Product Dashboard</h2>

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>S.No</th>
              <th>ItemNO</th>
              <th>Item</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {details?.map((product, id) => {
              const number = product.id;
              // console.log(number,"number")
              return (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{product.id}</td>
                  <td>{product.item}</td>
                  <td>{product.price}</td>
                  <td>
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={() => {
                        ClickEdit(product);
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

      <div>
        <Container>
          <h3>Product Update</h3>
          <Form>
            <Form.Group>
              <Form.Label>ItemNO: </Form.Label>
              <Form.Control type="text" value={updatedValues.id} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Item: </Form.Label>
              <Form.Control
                type="text"
                name="item"
                onChange={handleChange}
                value={updatedValues.item}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Price: </Form.Label>
              <Form.Control
                type="text"
                name="price"
                onChange={handleChange}
                value={updatedValues.price}
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={(e) => {
                ClickUpdate(updatedValues.id, e);
              }}
            >
              Update
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
  console.log(updatedValues.id);
}

export default withHeading(Inventory);
