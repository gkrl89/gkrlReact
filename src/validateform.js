import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Modal } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './mystyle.css';
import Modalform from './components/Modal';
import ModalErrorForm from './components/errormodal.js';
import { Outlet, Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function ValidatedForm() {
  const [username, setName] = useState('');
  const [password, setPwd] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError ]=useState(false);
  const navigate = useNavigate();


  const [error, setError] = useState({
    username: "",
    password: "",
    


  });




  const onSubmit = (e) => {
    e.preventDefault();
    

    const isValid = formValidation();




  }



  const formValidation = () => {
    

    let error = {};
    let isValid = true;
    let newArray = {};

    if (username.length <= 0) {
      setError(previousState => {
        return { ...previousState, username: "* Please enter your name" }
      });
      setShowModal(false);
      setShowError(false);
      


    }
    if (password.length <= 0) {

      setError(previousState => {
        return { ...previousState, password: "* Please enter Password" }
      });
      // isValid = false;
      setShowModal(false);
      setShowError(false);
    }

     if (username.length != 0 && password.length != 0) 
     {
    
    let user_records;
    user_records = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : [];
    console.log(user_records, "user_records");
    const user = user_records.map((event) => {
      return event.username;
    })
    const passwd = user_records.map((event) => {
      return event.pwd;
    })

    const finaluser = user.some((data)=>data === username);
    const finalpass = passwd.some((data)=>data === password);

    

    if (finaluser && finalpass) {
      setShowModal(true);
      navigate("/dashboard");


         
   }
    else {
    
      setShowError(true);

    }

   

    }











  }





  return (

    <>
      <h1> My Form</h1>
      <Container>
        <Form>


          <Form.Group className="mb-3">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" required id="username" onChange={(e) => { setName(e.target.value) }} placeholder='Enter User Name' />
            <div style={{ color: "red" }}>{error.username}</div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password"  >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" id="password" required onChange={(e) => { setPwd(e.target.value) }} />
            <div style={{ color: "red" }}>{error.password}</div>

          </Form.Group>

          <Button variant="primary" type="submit" onClick={onSubmit}>Login
          </Button>{' '}
          <Button variant="secondary" type="reset">
            Reset
          </Button>
        </Form>
        { showModal  && <Modalform />}
        {showError && <ModalErrorForm/>}
        <Link to ="/register" variant = "body2">
             <p > Not a  User? Register </p>
             </Link>
      </Container>

    </>
  )
}



export default ValidatedForm;