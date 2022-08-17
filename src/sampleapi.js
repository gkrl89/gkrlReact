import React from "react";
import{useState , useReducer} from React;
import axios from axios;

const initialState=
{
    post:{},
    error:''
}

function reducer (state,action){

}

function SampleApi (){

   

    const[updatedState, dispatch] = useReducer(reducer, initialState);





    return 
    (
        <div></div>
    )

    
}