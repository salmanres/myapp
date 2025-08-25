import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/contact-us');
    }

    return (
        <Fragment>
            <div>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button onClick={handleLogin}>Login</button>
            </div>
        </Fragment>
    )
}

export default LoginPage;