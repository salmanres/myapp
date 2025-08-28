import React, { Fragment, useState } from "react";
// import { toast, ToastContainer } from "react-toastify";

function RegisterPage() {

    const [data, setdata] = useState({
        name:"",
        email:"",
        mobile:"",
        password:""
    });
    const [loader, setloader] = useState(true);

    const getdata = (item) => {
        if (data.name == "" || data.mobile == "" || data.email == "" || data.password == "") {
            setloader(true);
        } else {
           setloader(false)
        }
        setdata({
            ...data, //spread operator
            [item.target.name]: item.target.value
        });
        console.log(data);
    };

    const handleRegister = () => {
        if (data.name == "" || data.mobile == "" || data.email == "" || data.password == "") {
            alert('all fields required');
        } else {
            localStorage.setItem('myuserdata', JSON.stringify(data));
            alert('successful registration');
        }
        // toast.success('registration successful');
    };

    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row register-form">
                    <div className="col-lg-5 mt-5 ">
                        <input className="form-control mb-3" type="text" placeholder="enter name" name="name" onInput={getdata} />
                        <input className="form-control mb-3" type="email" placeholder="enter email" name="email" onInput={getdata} />
                        <input className="form-control mb-3" type="number" placeholder="enter mobile" name="mobile" onInput={getdata} />
                        <input className="form-control mb-3" type="password" placeholder="enter password" name="password" onInput={getdata} />
                        <button disabled={loader} className="btn btn-warning w-100" onClick={handleRegister}>Register</button>
                    </div>
                </div>
            </div>
            {/* <ToastContainer/> */}
        </Fragment>
    )
};

export default RegisterPage;