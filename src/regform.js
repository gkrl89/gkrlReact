import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './mystyle.css';






  function ValidateForm() {
 
    // States for registration
    const [name, setName] = useState('');
    const [mobileno, setNum] = useState('');
    const [add, setAdd] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [cpwd, setCpwd] = useState('');
   
    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState();
    const [valid, setValid] = useState(false);

  
   
    // Handling the name change
    const handleName = (e) => {
      setName(e.target.value);
      setSubmitted(false);
    };
  
    const handleNum = (e) => {
      setNum(e.target.value);
      setSubmitted(false);
    };
  
    const handleAdd = (e) => {
      setAdd(e.target.value);
      setSubmitted(false);
    };
   
    // Handling the email change
    const handleEmail = (e) => {
      setEmail(e.target.value);
      setSubmitted(false);
    };
   
    // Handling the password change
    const handlePwd = (e) => {
      setPwd(e.target.value);
      setSubmitted(false);
    };
  
      // Handling the password change
      const handleCpwd = (e) => {
          setCpwd(e.target.value);
          setSubmitted(false);
        };
   
    // Handling the form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name === '' ){
        setValid(true);
     error ["name"] = "Please enter your name";
      
      
      } else {
          
        setValid(false);
      }
      if (mobileno === '' ){
        error ["mobileno"] ="Please enter your Phone number";

        setValid(true);
       
        } else {
          
              
          setValid(false);
        }
        if (add === '' ){
          error ["add"] ="Please enter your address";
          setValid(true);
          
          } else {
           
            
            setValid(false);
          }
          if (email === '' ){
            error ["email"] ="Please enter your Email ID";
            
            setValid(true);
            
            } else {
              
            
              setValid(false);
            }
            if (pwd === '' ){
              error ["pwd"] ="Please enter Password";
              setValid(true);
             
              } else {
                
                
                setValid(false);
              }
              if (cpwd === '' ){
                error ["cpwd"] ="Please enter Password again";
                setValid(true);
              
                } else {
                  setSubmitted(true)    ;
                  setValid(false);
                }
    };
   
    // Showing success message
    const successMessage = () => {
      return (
        <div
          className="success"
          style={{
            display: submitted ? '' : 'none',
          }}>
          <h1>User {name} successfully registered!!</h1>
        </div>
      );
    };
  
   
    // Showing error message if error is true
    // const errorMessage = () => {
    //   return (
    //     <div
    //       className="error"
    //       style={{
    //         display: error ? '' : 'none',
    //       }}>
    //       <h1>Please enter all the fields</h1>
    //     </div>
    //   );
    //     }
    

 

  return (

    <>
   
    
    
    <h1>My Form</h1> 
    
  
  
    
    <Container>

    <div className="messages">
        
        {successMessage()}
       </div>
        
   
     
    <Form>
           
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" onChange={handleName} placeholder='Enter Full Name'/>
       
       
        
        
        
        </Form.Group>
        <Form.Group className="mb-3" controlId="mobileno"  >
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="tel" onChange={handleNum} placeholder='123-456-7890' />
         
        
        </Form.Group>
        <Form.Group className="mb-3" controlId="add" >
        <Form.Label>Address</Form.Label>
        <Form.Control type="address" onChange={handleAdd}/>
        
        </Form.Group>
        <Form.Group className="mb-3" controlId="emailid" >  
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" onChange={handleEmail} placeholder="Enter email" />
        
        
        </Form.Group>
        <Form.Group className="mb-3" controlId="pwd" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  onChange={handlePwd} placeholder="Password" />
        </Form.Group>
        
        
        <Form.Group className="mb-3" controlId="cpwd">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" onChange={handleCpwd} placeholder="Password" />
                </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Button variant="primary"  onClick={handleSubmit} type="submit" >
        Register
        </Button>{' '}
        <Button variant="secondary" type="reset">
        Reset
        </Button>
        </Form>
   
    </Container>
    </>
  );
  }



export default ValidateForm;