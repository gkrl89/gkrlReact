import { render } from "@testing-library/react";
import { useState } from "react";

function Person() {
    const [person, setPerson] = useState({
        name: "Thio",
        age: "3",
        year: 2020
    });

    const updateAge = () => {
        setPerson(previousState => {
            return { ...previousState, age: "5" , year:2022 }
          });
        
    }





    return (
        <>
            <h1>Student History</h1>
            <p>
                My Student {person.name} is {person.age} years old on {person.year}.
            </p>
            <button onClick={updateAge}>Now</button>
        </>


    )







}

export default Person;