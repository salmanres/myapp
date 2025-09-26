import axios from "axios";
import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {

   const [data, setdata] = useState();

   const getdata = (event) => {
    setdata({
        ...data,
        [event.target.name]:event.target.value
    });
    console.log(data);
   };

   const handlelogin = async () => {
    try{
        const response = await axios.post('http://localhost:4500/login', data);
        alert(response.data);
    }catch(e){
        console.log(e);
    };
   };

    return (
        <Fragment>
            <div>
                <input type="text" placeholder="username" name="username" onInput={getdata} />
                <input type="password" placeholder="password" name="password" onInput={getdata} />
                <button onClick={handlelogin}>Login</button>
            </div>
        </Fragment>
    )
}

export default LoginPage;