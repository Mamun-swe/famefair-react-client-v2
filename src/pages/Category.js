import React, { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import api from '../api';

import Banner from '../assets/images/banner.jpg';

const Category = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`${api}user/products/category/${props.match.params.id}`)
            .then(res => {
                setProducts(res.data.results)
            })
            .catch(err => {
                if (err) {
                    console.log(err.response)
                }
            })
    }, [])

    return (
        <div className="category py-3 py-lg-0">
            <div className="container-fluid">

                {/* Banner */}
                <div className="row">
                    <div className="col-12">
                        <div className="card shadow-sm border-0 banner-card">
                            <img src={Banner} className="img-fluid" alt="Category Banner" />
                            <div className="overlay">
                                <div className="flex-center flex-column text-center">
                                    <h4 className="mb-0">{props.match.params.name}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Products */}
                <div className="row products mt-3">
                    <div className="col-12 px-0">

                        {products.map((product, i) =>
                            <div className="product-card" key={i}>
                                <Link to={`/product/${product}/${product}`}>
                                    <div className="card border-0 shadow-sm text-center pt-2">
                                        <div className="img-box">
                                            <img src={product.image} className="img-fluid" alt="..." />
                                        </div>
                                        <div className="content p-2">
                                            <p className="mb-2">{product.name}</p>
                                            <p className="mb-0">Price: {product.price} TK.</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )}

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Category;