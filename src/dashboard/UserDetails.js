import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

function UserDetails(){

    const {id} = useParams();
    
    return(
        <Fragment>
            <h1>parameter is - {id}</h1>
            
        </Fragment>
    )
}

export default UserDetails;