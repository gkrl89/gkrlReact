import { render } from "@testing-library/react";
import { useState , useEffect} from "react";

function Person() {
    const [age, setAge] = useState(3);
    const [year , setYear] = useState(2020);
        


    useEffect(() => {
        setYear(() => year + 1 );
      }, [age])



      return (
        <>
        <h1>Student Age</h1>
        <button onClick={() => setAge((c) => c + 1)}>AgeCalc</button>
        
          <p> Thio Age is  {age} on Year : {year}</p>
        </>
      );
    }


    








export default Person;