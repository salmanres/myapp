import React, { Fragment, useEffect, useState } from "react";
import axios from 'axios';

function UserDataApi() {

    const [userData, setUserData] = useState([]);

    const getdata = async () => {
        try {
            const response = await axios.get('http://localhost:4500/userdata');
            console.log(response.data);
            setUserData(response.data);
        } catch (err) {
            console.log(err);
        };
    };

    const deletedata = async (id) => {
        try {
            const result = window.confirm('are you sure?');
            if (result == true) {
                const response = await axios.delete(`http://localhost:4500/deleteuser/${id}`);
                alert(response.data);
                getdata();
            }else{
                alert('cancelled!');
            };
        } catch (err) {
            console.log(err);
        };
    };

    useEffect(() => {
        getdata();
    }, []);

    return (
        <Fragment>
            <h1>user data</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">username</th>
                        <th scope="col">email</th>
                        <th scope="col">password</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.length > 0 ? userData.map((item, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                            <td>
                                <button type="button" class="btn btn-warning btn-sm">DETAILS</button>
                                <button type="button" class="btn btn-danger btn-sm mx-2">EDIT</button>
                                <button type="button" class="btn btn-secondary btn-sm" onClick={() => deletedata(item._id)}>DELETE</button>
                            </td>
                        </tr>
                    )) : <p>loading..</p>}
                </tbody>
            </table>
        </Fragment>
    )
}

export default UserDataApi;