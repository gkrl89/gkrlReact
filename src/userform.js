import React, { useReducer } from "react";
import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import {Button} from "react-bootstrap";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";


export default function UserForm(){

    const initialState  = {
        item : "",
        price:"",
        error:false
    }
    
    function reducer(state, action){

        switch(action.type){
            case "add":
            return 
            {
                axios.put('', article)
            }
                              
            
           
             state.error(false);

            
            

            case "delete":
                return
                state.error(false);


            default:
                return state.error(true);
                
        }

    }

    const[updatedState, dispatch] = useReducer(reducer, initialState)

    const formAdd=(e)=> {

        e.preventDefault();

        dispatch({type:"add"})
    }

    const formDelete=(e)=> {

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

