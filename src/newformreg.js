import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Modal } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './mystyle.css';

import ModalForm from './components/Modalform';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";





function ValidateForm() {

      
  const [person, setPerson] = useState({
    username : "",
    mobileno:"",
    email:"",
    pwd:"",
    cpwd:""
  });



  
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
 
  
  const [error, setError] = useState({
    username : "",
    mobileno:"",
    email:"",
    pwd:"",
    cpwd:"",
    matchPwd:""
   

  });

 
  

  const handleInputs =(e) =>{

    const {value, name} = e.target;

    

    

  

    setPerson(()=>{
        return {
            ...person , 
            [name]:value
        }
    })
  }

  


  const onSubmit = (e) => {
    e.preventDefault();
    
    const isValid = formValidation();
    
    


    }

    

      const formValidation = () => {

        const {username, mobileno , email , pwd , cpwd} = person;
                

       
        let error = {};
        let isValid = true;
        

        

        if(username === ""){
            setError(previousState => {
                return { ...previousState, username : "* Please enter your name"}});
                setShowModal(false);
            }
             if (mobileno === ""){
                setError(previousState => {
                      return { ...previousState, mobileno : "* Please enter contact number"}});
                      setShowModal(false);
                } 
                if (mobileno.length <10 || mobileno.length >10 ){
                    setError(previousState => {
                          return { ...previousState, mobileno : "* Please enter valid number"}});
                          setShowModal(false);
                    } 
                     if (email === ""){
                        setError(previousState => {
                              return { ...previousState, email : "* Please enter email address"}});
                              setShowModal(false);
                        }  if (pwd === ""){
                            setError(previousState => {
                                  return { ...previousState, pwd : "* Please enter Password "}});
                                  setShowModal(false);
                            } if (cpwd === "" ){
                            setError(previousState => {
                                  return { ...previousState, cpwd : "* Please enter Password again"}});
                                  setShowModal(false);
                                  
                            } if (pwd !== cpwd){
                                
                                setError(previousState => {
                                      return { ...previousState, matchPwd : "* Password doesnt match"}});
                                      setShowModal(false);
                                } 

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
                                  
                            
                                if (finaluser) {
                                  
                                  setError(previousState => {
                                        return { ...previousState, sameuser : "*  User is already registered"}});
                                        setShowModal(false);
                                  
                            
                            
                                     
                               }
                            
                                
                           if (username.length!=0 && mobileno.length ==10 && email.length !=0 && pwd.length !=0 && cpwd.length !=0 && pwd == cpwd && !finaluser) 
                           {    
                                 setShowModal(true);
                                 isValid = true;
                                 const number = localStorage.getItem("user")
                                 console.log(number)
                                 if(number){
                                    const data = JSON.parse(number)
                                    console.log("data", data , number) 
                                    localStorage.setItem("user", JSON.stringify([...data , person]));
                                 }
                                    else
                                    {
                                        localStorage.setItem("user", JSON.stringify([person]));
                                    }
                                    navigate("/login");

                                    

                                 }
         }
        
              
          return (

                <>
        <h1> My Form</h1>
        <Container>
             <Form>
            
           
             <Form.Group className="mb-3" controlId="username" >
             <Form.Label>User Name</Form.Label>
             <Form.Control type="text" name = "username" required onChange={handleInputs} 
             
             placeholder='Enter User Name'/>
             <div style={{color:"red"}}>{error.username}</div>
             <div style={{color:"red"}}>{error.sameuser}</div>
             </Form.Group>

             <Form.Group className="mb-3" controlId="mobileno" >
             <Form.Label>Mobile Number</Form.Label>
             <Form.Control type="tel" name = "mobileno" required onChange={handleInputs} 
             
             placeholder = '123-456-7890'/>
             <div style={{color:"red"}}>{error.mobileno}</div>
             </Form.Group>

             <Form.Group className="mb-3" controlId="email"   >
             <Form.Label>Email Address</Form.Label>
             <Form.Control name = "email" type="email" required onChange={handleInputs}
             />             
             <div style={{color:"red"}}>{error.email}</div>
             </Form.Group>

             <Form.Group className="mb-3" controlId="pwd"  >
             <Form.Label>Password</Form.Label>
             <Form.Control type="password" name = "pwd" required onChange={handleInputs}
              />
             <div style={{color:"red"}}>{error.pwd}</div>
             </Form.Group>

             <Form.Group className="mb-3" controlId="cpwd"   >
             <Form.Label>Confirm Password</Form.Label>
             <Form.Control type="password" name= "cpwd" required onChange={handleInputs} 
             />
             <div style={{color:"red"}}>{error.cpwd}</div>
             <div style={{color:"red"}}>{error.matchPwd}</div>
             
             </Form.Group>

             <Button variant="primary" type="submit" onClick={onSubmit}>Register
             </Button>{' '}
             <Button variant="secondary" type="reset">
             Reset
             </Button>
             </Form>
             <Link to ="/Login" variant = "body2">
             <p > Already a User? Log in </p>
             </Link>
             
             { showModal  && <ModalForm/>}
             </Container>
             </>
             )
            }
        
        
        
          
        
             
            export default ValidateForm;