import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UserDetails() {
    const { id } = useParams();
    console.log(id);
    const [user, setuser] = useState([{
        username:"",
        email:"",
        password:""
    }]);

    const [newdata, setnewdata] = useState();

    const navigate = useNavigate();

    const getdata = async () => {
        try{
            const response = await axios.get(`http://localhost:4500/userbyid/${id}`);
            console.log(response.data);
            setuser(response.data);
        }catch(err){
            console.log(err);
        };
    };

    const userdata = (event) => {
        setnewdata({
            ...newdata,
            [event.target.name] : event.target.value
        });
        console.log(newdata);
    };

    const update = async () => {
        try{
            const response = await axios.put(`http://localhost:4500/updatebyid/${id}`, newdata);
            alert(response.data);
            navigate('/userdataapi');
        }catch(err){
            console.log(err);
        };
    };

    useEffect(()=>{
        getdata();
    },[]);

    return (
        <Fragment>

            

            <input type="text" name="username" defaultValue={user && user[0].username} onInput={userdata}/>
            <input type="email" name="email" defaultValue={user && user[0].email} onInput={userdata}/>
            <input type="password" name="password" defaultValue={user && user[0].password} onInput={userdata}/>
            <button onClick={update}>update</button>

        </Fragment>
    )
}

export default UserDetails;