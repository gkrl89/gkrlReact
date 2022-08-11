import React from "react";
import Table from 'react-bootstrap/Table';

function Dashboard()
{
    // const [user, setUser]= useState({
    //     username:"",
    //     mobileno:"",
    //     email:"",
    //     pwd:""
    // })

    let user_records;
    user_records = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : [];
    console.log(user_records, "user_records");

    // setUser(username)= user_records.map((event) => {
    //             return event.username; })
            
            

    const [user] = user_records.map((event) => {
        return event.username; })
    
    
    const [phone] = user_records.map((event) => {
            return event.mobileno; 
    })

    const [mail] = user_records.map((event) => {
        return event.email; 
})

    const [passwd] = user_records.map((event) => {
        return event.pwd; 
})


    return(
    <div className="table">
        <h1>User Data Dashboard</h1>
    
    <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>User Name</th>
                    <th>Phone Number</th>
                    <th>Email Address</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {   
                user_records.map((event, index)=>{ 
                   return(  
                    <tr key={index}> 
                    <td>{index+1}</td>
                            <td>{event.username}</td>
                            <td>{event.mobileno}</td>
                            <td>{event.email}</td>
                            <td>{event.pwd}</td>
                        </tr>
                    )
                })
            }
            
                    
                
                </tbody>
          
                        </Table>
                        </div>
                        )
            }
    

                        

                        export default Dashboard;

    



   

   


