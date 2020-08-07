import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

import Banner from '../assets/images/banner.jpg';
import Watch from '../assets/images/watch.png';

const Category = () => {
    const [products, setProducts] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30])


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
                                    <h4 className="mb-0">category name</h4>
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
                                    <div className="card border-0 shadow-sm text-center">
                                        <div className="img-box">
                                            <img src={Watch} className="img-fluid" alt="..." />
                                        </div>
                                        <div className="content px-2 py-1">
                                            <p className="mb-2">Apple watch bd</p>
                                            <p className="mb-0">Price: 800 TK.</p>
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