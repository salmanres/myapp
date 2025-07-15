import React, { Fragment, useEffect, useState } from 'react'
import LoginPage from './LoginPage'

function RegisterPage() {

    let [data, setData] = useState({});
    let [flag, setFlag] = useState(true);

    const getdata = (event) => {
        setFlag(!flag);
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
        console.log(data);
    }

    const register = () => {
        console.log('registerd');
    };

    useEffect(() => {
        register();
    }, [flag]);

    return (
        <Fragment>
            <h1>register</h1>
            <input type='text' placeholder='enter name' name='username' onInput={getdata} />
            <input type='email' placeholder='enter email' name='email' onInput={getdata} />
            <input type='number' placeholder='enter contact' name='contact' onInput={getdata} />
            <input type='password' placeholder='enter password' name='password' onInput={getdata} />
            <button onClick={register}>register</button>

            <h1>{data.username}</h1>
            <h1>{data.email}</h1>
            <h1>{data.contact}</h1>
            <h1>{data.password}</h1>
        </Fragment>
    )
}

export default RegisterPage