import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

function UserData() {

    const navigate = useNavigate();
    const id = 123;

    const viewdetails = () => {
        navigate(`/userdetails/${id}`);
    }

    return (
        <Fragment>
            <div>
                <button onClick={viewdetails}>view details</button>
            </div>
        </Fragment>
    )
}

export default UserData;