import React, { Fragment, useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
import axios from 'axios';

function RegisterPage() {

    const [data, setdata] = useState({
        username: "",
        email: "",
        password: ""
    });

    const getdata = (event) => {
        setdata({
            ...data,
            [event.target.name]:event.target.value
        });
        console.log(data);
    };


    const register = async () => {
        try{
            const response = await axios.post('http://localhost:4500/register', data);
            console.log(response.data);
        }catch(err){
            console.log(err);
        };
    };

    return (
        <Fragment>
            <input type="text" placeholder="enter username" name="username" onInput={getdata} />
            <input type="email" placeholder="enter email" name="email" onInput={getdata} />
            <input type="password" placeholder="enter password" name="password" onInput={getdata}/>
            <button onClick={register}>REGISTER</button>

        </Fragment>
    )
};

export default RegisterPage;