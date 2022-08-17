import React, { useReducer } from "react";
import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import {Button} from "react-bootstrap";
import axios from "axios";



export default function UserForm(){

    const product  = {
        item : "",
        price:"",
        
    }
    
    function reducer(state, action){

        switch(action.type){
            case "add":
            return 
            {
               
            }
                              
            case "delete":
                return
                


            default:
                return state
                
        }

    }

    const[updatedState, dispatch] = useReducer(reducer, product)

    const formAdd=(e)=> {

        e.preventDefault();

        const postData= {product} 
        console.log(postData)
        axios.post("https://62fb40bbabd610251c040f32.mockapi.io/inventory" , postData)
    .then((res) => {
        console.log(res)
    })

    .catch ((err) =>{
        console.log(err)
    })



        
    } 
    const formDelete =(e)=> {

        e.preventDefault();

        dispatch({type:"delete"})
    }




    return(
        <div>
            <h1>Inventory</h1>
            <Container>
            <Form.Group className="mb-3" controlId="item">
            <Form.Label> Item:</Form.Label>
            <Form.Control type= "text" value = {updatedState.item} onChange = {(e) => ({type: "ITEM", value: e.target.value})} >                    
            </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="price">
            <Form.Label> Price</Form.Label>
            <Form.Control type= "text"  value = {updatedState.price} onChange = {(e) => ({type: "PRICE", value: e.target.value})} ></Form.Control>
            </Form.Group>  
            <Button variant= "primary" type = "submit" onClick= {(e)=> formAdd}>ADD</Button>{" "}
            <Button variant= "primary" type = "submit" onClick= {(e)=> formDelete}>DELETE</Button>        
            </Container>        
        </div>
    )
}


