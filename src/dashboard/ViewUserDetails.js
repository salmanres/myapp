import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ViewUserDetails() {

    const { id } = useParams();
    console.log(id);
    const [data, setdata] = useState();
    const navigate = useNavigate();

    const getuserdata = async () => {
        try {
            const response = await axios.get(`http://localhost:4500/userbyid/${id}`);
            console.log(response.data);
            setdata(response.data);
        } catch (e) {
            console.log(e);
        };
    };

    useEffect(() => {
        getuserdata();
    }, []);

    return (
        <Fragment>
            <button className="btn btn-secondary" onClick={()=>navigate(-1)}>back</button>
            <h2>username : {data && data[0].username}</h2>
            <h2>email : {data && data[0].email}</h2>
            <h2>password : {data && data[0].password}</h2>
        </Fragment>
    )
};

export default ViewUserDetails;