import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ApiPage() {

    const [data, setdata] = useState([]);

    const getdata = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const dd = await response.json();
            setdata(dd);
            console.log(dd);
        } catch (err) {
            console.log(err);
        };
    };

    useEffect(() => {
        getdata();
    }, []);

    return (
        <Fragment>
            <h5 className='bg-warning p-2 text-uppercase text-center'>api page</h5>
            <div className='container-fluid'>
                <div className='row'>
                    {
                        data.length > 0 ? data.map((item) => (
                            <div className='col-lg-6'>
                                <div class="card">
                                    <img src="tm1.avif" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{item.title}</h5>
                                        <p class="card-text">{item.body}</p>
                                        <Link to={`/blogdetails/${item.title}`} className='btn btn-warning w-100'>VIEW DETAILS</Link>
                                    </div>
                                </div>
                            </div>
                        )) : <p>laoding...</p>
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default ApiPage