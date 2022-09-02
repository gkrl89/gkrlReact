import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Modal } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './mystyle.css';
import Modalform from './components/Modal';





function ValidatedForm( ) {
  const [username, setName] = useState('');
  const [mobileno, setNum] = useState('');
  const [email, setEmail]= useState('');
  const [pwd, setPwd] = useState('');
  const [cpwd, setCpwd] = useState('');
  const [showModal, setShowModal] = useState(false);
  const[msg, setMsg] = useState("");
 
  
  const [error, setError] = useState({
    username : "",
    mobileno:"",
    email:"",
    pwd:"",
    cpwd:"",
    matchPwd:""
   

  });

  


  const onSubmit = (e) => {
    e.preventDefault();
    
    setMsg("Registration Form")


    
    const isValid = formValidation();


    }

    

      const formValidation = () => {
       
        let error = {};
        let isValid = true;
        

        

        if(username.length <= 0){
            setError(previousState => {
                return { ...previousState, username : "* Please enter your name"}});
                setShowModal(false);
            }
            if (mobileno.length <=0){
                setError(previousState => {
                      return { ...previousState, mobileno : "* Please enter contact number"}});
                      setShowModal(false);
                }
                if (mobileno.length <10 || mobileno.length >10 ){
                    setError(previousState => {
                          return { ...previousState, mobileno : "* Please enter valid number"}});
                          setShowModal(false);
                    }
                    if (email.length <=0){
                        setError(previousState => {
                              return { ...previousState, email : "* Please enter email address"}});
                              setShowModal(false);
                        }
                        if (pwd.length <=0){
                            setError(previousState => {
                                  return { ...previousState, pwd : "* Please enter Password "}});
                                  setShowModal(false);
                            }

                        if (cpwd.length <=0){
                            setError(previousState => {
                                  return { ...previousState, cpwd : "* Please enter Password again"}});
                                  setShowModal(false);
                                  
                            }

                            if (pwd !== cpwd){
                                
                                setError(previousState => {
                                      return { ...previousState, matchPwd : "* Password doesnt match"}});
                                      setShowModal(false);
                                }

                            

                            
                           

                
                  

            

         

         if (username.length!=0 && mobileno.length ==10 && email.length !=0 && pwd.length !=0 && cpwd.length !=0 && pwd == cpwd)
          {
            localStorage.setItem("Name", JSON.stringify(username));
            localStorage.setItem("Mobileno", JSON.stringify(mobileno));
            localStorage.setItem("Email", JSON.stringify(email));
            localStorage.setItem("Password", JSON.stringify(pwd));

            console.log("data saved");
           
            
            setShowModal(true);
            isValid = true;

          }
          }
            
            
  console.log("showModal",showModal)
        
              
          return (

                <>
        <h1> My Form</h1>
        <h2 data-testid = 'val'>{msg}</h2>
        <Container>
             <Form>
            
           
             <Form.Group className="mb-3" >
             <Form.Label>User Name</Form.Label>
             <Form.Control type="text" data-testid = "username-input" required onChange={(e)=>{setName(e.target.value)}} placeholder='Enter User Name'/>
             <div style={{color:"red"}}>{error.username}</div>
             </Form.Group>

             <Form.Group className="mb-3" controlId="mobileno"  >
             <Form.Label>Mobile Number</Form.Label>
             <Form.Control type="tel" data-testid = "mobileno-input" required onChange={(e)=>{setNum(e.target.value)}} placeholder = '123-456-7890'/>
             <div style={{color:"red"}}>{error.mobileno}</div>
             </Form.Group>

             <Form.Group className="mb-3" controlId="email"  >
             <Form.Label>Email Address</Form.Label>
             <Form.Control type="email" data-testid = "email-input" required onChange={(e)=>{setEmail(e.target.value)}} />
             <div style={{color:"red"}}>{error.email}</div>
             </Form.Group>

             <Form.Group className="mb-3" controlId="pwd"  >
             <Form.Label>Password</Form.Label>
             <Form.Control type="password" data-testid = "password-input " required onChange={(e)=>{setPwd(e.target.value)}} />
             <div style={{color:"red"}}>{error.pwd}</div>
             </Form.Group>

             <Form.Group className="mb-3" controlId="cpwd"  >
             <Form.Label>Confirm Password</Form.Label>
             <Form.Control type="password" data-testid = "cpassword-input" required onChange={(e)=>{setCpwd(e.target.value)}} />
             <div style={{color:"red"}}>{error.cpwd}</div>
             <div style={{color:"red"}}>{error.matchPwd}</div>
             
             </Form.Group>

             <Button variant="primary" type="submit" data-testid = "submit" onClick={onSubmit}>Register
             </Button>{' '}
             <Button variant="secondary" type="reset">
             Reset
             </Button>
             </Form>
             { showModal  && <Modalform />}
             </Container>
             </>
             )
            }
          
        
             
            export default ValidatedForm;