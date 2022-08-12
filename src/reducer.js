import React from "react";
import { useState, useReducer } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



function Reducer(){

    const initialstate = 0 ;
    

    const MyFunc = () => {
       
        const [value , dispatch] = useReducer(reducer, initialstate);
        return (
            <div>
                <h1> Press any value</h1>
                <Button variant = "primary" onClick={()=>dispatch("add")}>ADD</Button>{' '}
                <Button variant = "info"  onClick={()=>dispatch("subtract")}>MINUS</Button>{' '}
                <Button variant = "success"  onClick={()=>dispatch("multiply")}>PRODUCT</Button>{' '}
                <p style = {{fontSize: '20px'},{padding:"2px"}}>Output : {value}</p>
            
            </div>
        )

    } 
    const reducer = (state , action )=> {
        switch  (action){
        case "add":
        return state + 1 ;
        
        case "subtract":
            return state - 1;

            case "multiply":
            return state * 2;

                    default :
            throw new Error("Not a specified action");
            

    }}

    return(
        <>
        {MyFunc()}
        </>
    )

    

    
}
export default Reducer;