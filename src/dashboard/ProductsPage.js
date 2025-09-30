import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from 'axios';

function ProductsPage() {

    const [data, setdata] = useState();
    const [key, setKey] = useState();

    const pdata = async () => {
        try {
            const response = await axios.get('http://localhost:4500/products');
            console.log(response.data);
            setdata(response.data);
        } catch (err) {
            console.log(err);
        };
    };

    const search = async () => {
        console.log(key);
        const response = await axios.get(`http://localhost:4500/searchproduct/${key}`);
        console.log(response.data);
        setdata(response.data);
    }

    useEffect(() => {
        pdata();
    }, []);

    return (
        <Fragment>
            <input type="text" className="m-5 p-2" placeholder="search here" onInput={(event)=>setKey(event.target.value)} />
            <button className="p-2" onClick={search}>search</button>
            <div className="container-fluid">
                <div className="row">
                    {data && data.map((item) => (
                        <div className="col-lg-3">
                            <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{item.category}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
};

export default ProductsPage;