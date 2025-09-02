import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

function UserDataApi() {
    const [data, setData] = useState();

    const getdata = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            console.log(response.data);
            setData(response.data);
        } catch (err) {
            console.log(err);
        };
    };

    useEffect(() => {
        getdata();
    }, []);

    return (
        <Fragment>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">name</th>
                        <th scope="col">email</th>
                        <th scope="col">phone</th>
                        <th scope="col">address</th>
                        <th scope="col">company</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {data && data.map((item) => (
                        <tr>
                            <th scope="row">{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.address.city}  {item.address.street}</td>
                            <td>{item.company.name}</td>
                            <td><button className="btn btn-warning btn-sm">view details</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
}

export default UserDataApi;