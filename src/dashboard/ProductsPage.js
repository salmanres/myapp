import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

function ProductsPage() {

    const [data, setdata] = useState(
        [
            { "id": 1, "name": "Wireless Mouse", "category": "Electronics", "price": 799, "stock": 120, "img": "https://images.unsplash.com/photo-1605296867304-46d5465a13f1" },
            { "id": 2, "name": "Bluetooth Speaker", "category": "Electronics", "price": 1499, "stock": 75, "img": "https://images.unsplash.com/photo-1605296867304-46d5465a13f1" },
            { "id": 3, "name": "Yoga Mat", "category": "Fitness", "price": 599, "stock": 200, "img": "https://images.unsplash.com/photo-1605296867304-46d5465a13f1" },
            { "id": 4, "name": "Water Bottle", "category": "Fitness", "price": 299, "stock": 350, "img": "https://images.unsplash.com/photo-1605296867304-46d5465a13f1" },
            { "id": 5, "name": "Desk Lamp", "category": "Home Decor", "price": 899, "stock": 60, "img": "https://images.unsplash.com/photo-1605296867304-46d5465a13f1" },
            { "id": 6, "name": "Notebook", "category": "Stationery", "price": 99, "stock": 500, "img": "https://images.unsplash.com/photo-1605296867304-46d5465a13f1" },
            { "id": 7, "name": "Running Shoes", "category": "Footwear", "price": 2499, "stock": 40, "img": "https://images.unsplash.com/photo-1605296867304-46d5465a13f1" },
            { "id": 8, "name": "Smartphone Stand", "category": "Accessories", "price": 199, "stock": 150, "img": "https://images.unsplash.com/photo-1605296867304-46d5465a13f1" },
            { "id": 9, "name": "Scented Candle", "category": "Home Decor", "price": 349, "stock": 80, "img": "https://images.unsplash.com/photo-1605296867304-46d5465a13f1" },
            { "id": 10, "name": "USB-C Cable", "category": "Electronics", "price": 299, "stock": 220, "img": "https://images.unsplash.com/photo-1605296867304-46d5465a13f1" },
            { "id": 11, "name": "Laptop Sleeve", "category": "Accessories", "price": 699, "stock": 90, "img": "https://images.unsplash.com/photo-1605296867304-46d5465a13f1" },
            { "id": 12, "name": "Wall Clock", "category": "Home Decor", "price": 499, "stock": 110, "img": "https://images.unsplash.com/photo-1605296867304-46d5465a13f1" },
            { "id": 13, "name": "Resistance Bands", "category": "Fitness", "price": 399, "stock": 180, "img": "https://images.unsplash.com/photo-1605296867304-46d5465a13f1" },
            { "id": 14, "name": "Sketchbook", "category": "Stationery", "price": 149, "stock": 300, "img": "https://images.unsplash.com/photo-1605296867304-46d5465a13f1" },
            { "id": 15, "name": "Travel Backpack", "category": "Accessories", "price": 1599, "stock": 70, "img": "https://images.unsplash.com/photo-1605296867304-46d5465a13f1" }
        ]
    )

    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-8 col-sm-12 col-12 mydiv">

                    </div>
                    <div className="col-lg-6 col-md-4 col-sm-12 col-12 mydiv2">

                    </div>
                </div>
                <div className="row">
                    <h1 className="bg-warning myheading text-center mt-5 my-5">MY PRODUCTS</h1>
                </div>
                <div className="row">
                    {data.length > 0 ?
                        data.map((item) => (
                            <div className="col-lg-3">
                                <div class="card shadow mb-3 mt-3">
                                    <img src={item.img} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{item.name}</h5>
                                        <p>{item.category}</p>
                                        <h3>Price: {item.price}/-</h3>
                                        <h6>only {item.stock} items left!</h6>
                                        <Link to="/" class="btn btn-primary">Add to cart</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                        : <h6>loading...</h6>}
                </div>
            </div>
        </Fragment>
    )
};

export default ProductsPage;