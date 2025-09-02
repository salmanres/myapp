import react, { Fragment, useState } from "react";
import { useForm } from 'react-hook-form';

function ReactHookForm() {

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [userdata, setuserdata] = useState({});

    const handleRegister = (data) => {
        console.log(data);
    };

    return (
        <Fragment>
            <div className="container">
                <div className="row d-flex justify-content-center mt-5">
                    <div className="col-lg-4">
                        <form onSubmit={handleSubmit(handleRegister)}>
                            <input className="form-control mb-3" {...register("username", { required: true })} />
                            {errors.username && <p className="text-danger">username is required</p>}
                            <input className="form-control mb-3" {...register("email", {required:true})} />
                            {errors.email && <p>email is required!</p> }
                            <input type="submit" className="btn btn-warning" />
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ReactHookForm;