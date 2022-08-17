import React from 'react'  
import { Container, Navbar, Nav} from 'react-bootstrap';
import {Link  } from "react-router-dom";
 
class About extends React.Component {  
  render() {  
    return (
        <>
        <h1> My Company </h1>
  

    
        <div>
            
            
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="Home"></Navbar.Brand>
          <Nav className="flex-grow-1 justify-content-evenly">
            
            <Nav.Link as= {Link} to ={"/careers"}>Careers</Nav.Link>
            <Nav.Link as= {Link} to ={"/Contact"}>Contact</Nav.Link>
            <Nav.Link  as= {Link} to ={"/register"}>Register</Nav.Link>
            <Nav.Link as= {Link} to ={"/login"}>Login</Nav.Link>
            <Nav.Link as= {Link} to ={"/reducer"}>reducer</Nav.Link>
            <Nav.Link as= {Link} to ={"/todo"}>TodoApp</Nav.Link>
            {/* <Nav.Link as= {Link} to ={"/userform"}>UserForm</Nav.Link> */}
            
          </Nav>
          
         
          
        </Container>
        </Navbar>
        
      </div>
      </>
    )
  }  
}  
export default About;