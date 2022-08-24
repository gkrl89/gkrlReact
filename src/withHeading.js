import React from "react";


const withHeading = WrappedComponent =>{

    function WithHeading (){

    

    return(
        < WrappedComponent Heading=  "My Product Database"/>
       
    )
    }
    return WithHeading
}

export default withHeading;