import React from "react";
import { useState ,useReducer} from "react";
import { Container, Form } from "react-bootstrap";
import {Button} from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom"; 

const initialState = {
    postData : []
}

function reducer (state, action) {

    switch(action.type){
        case "add":
            return {
                 postData : [...state.postData,  action.payload ]
      }   
      
     } 

}



function SampleApi() {





    const [product , setProduct]=useState({
        item:"",
        price:""
    })


const [postData,dispatch] = useReducer (reducer, initialState)


const handleChange =(e) =>{

    const {value, name} = e.target;
     setProduct(()=>{
        return {
            ...product , 
            [name]:value
        }
    })
  }
  console.log(postData, "2")  
  
  const formDelete=(e) =>
  {
    e.preventDefault();
    const deleteData = {product}

  }

  const formAdd= (e) =>
  {
    e.preventDefault();
    const addData = {product}

      
    

    axios.post("https://62fb40bbabd610251c040f32.mockapi.io/inventory",addData)
    .then((response)=>{
        console.log(response,"2")
        dispatch({ type: 'add', payload:response.data})


    } )

    .catch((err)=>{
        console.log(err)
    })
    
    

    

   
    }
  
    return (
    
        <>
        <div>
              <h1>Inventory</h1>
            <Container>
            <Form>
            <Form.Group className="mb-3" controlId="item">
            <Form.Label> Item:</Form.Label>
            <Form.Control type= "text" name= "item" value = {product.item} onChange= {handleChange} >                    
            </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="price">
            <Form.Label> Price</Form.Label>
            <Form.Control type= "text" name="price"  value = {product.price} onChange= {handleChange} >
            </Form.Control>
            </Form.Group>  
            <Button variant= "primary" type = "submit" onClick={formAdd}>ADD</Button>{" "}
            <Button variant= "primary" type = "submit" onClick={formDelete}>ADD</Button>{" "}

            </Form> 
            </Container>  

            <Link to ="/Inventory" variant = "body2">
             <p > Product List </p>
             </Link>

          
                
        </div>
        </>
    )
}
export default SampleApi;

    
