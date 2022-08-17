import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

function Inventory() {

    const [details, setDetails] = useState([]);

    // const [item, setItem] = useState([]);
    // const [price, setPrice] = useState([]);

    useEffect(() => {
        axios
            .get("https://62fb40bbabd610251c040f32.mockapi.io/inventory")
            .then(response => {
                console.log('response',response.data)
                setDetails(response.data);
            });
    }, []);


    return (
        <div className="table">
            <h1>Product Dashboard</h1>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Item</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        details?.map((product, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{product.item}</td>
                                    <td>{product.price}</td>

                                </tr>
                            )
                        })
                    }



                </tbody>

            </Table>
        </div>
    )
}




export default Inventory;










