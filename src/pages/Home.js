import React, { useState, useEffect } from 'react';
import './style.css';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

import Banner from '../assets/images/banner.jpg';
import WomenFashion from '../assets/images/women_fashion.jpg';
import BRB from '../assets/images/brb.png';
import Watch from '../assets/images/watch.png';
import Women from '../assets/images/women.png';
import Men from '../assets/images/men.png';

const Home = () => {
    const [index, setIndex] = useState(0)
    const [category, setCategory] = useState([1, 2, 3, 4, 5, 6])
    const [brands, setBrands] = useState([1, 2, 3, , 4, 5, 6, 7, 8, 9, 10, 11, 12])
    const [products, setProducts] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])


    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        // fetchBrands()
    }, [])

    // fetch brands
    // const fetchBrands = () => {
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //         .then(res => {
    //             setBrands(res.data)
    //         })
    // }


    return (
        <div className="home py-3 py-lg-0">
            <div className="container-fluid">

                {/* Banner */}
                <div className="row">
                    <div className="col-12">
                        <div className="card border-0 shadow-sm banner-card">

                            <Carousel
                                activeIndex={index}
                                onSelect={handleSelect}
                                controls={false}
                                interval={3000}
                            >
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={Banner}
                                        alt="..."
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={Banner}
                                        alt="..."
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={Banner}
                                        alt="..."
                                    />
                                </Carousel.Item>
                            </Carousel>

                        </div>
                    </div>
                </div>

                {/* Categories */}
                <div className="row categories py-3">

                    {category.map((data, i) =>
                        <div className="col-6 col-lg-4" key={i}>
                            <Link to={`category/${data}`}>
                                <div className="card border-0 shadow-sm category-card">
                                    <img src={WomenFashion} className="img-fluid" alt="Category Banner" />
                                </div>
                            </Link>
                        </div>
                    )}

                </div>

                {/* Brands */}
                <div className="row brands mt-4">
                    <div className="col-12 px-2">
                        <h5>Popular Brands</h5>
                    </div>
                    <div className="col-12 px-0">

                        {brands.map((brand, i) =>
                            <div className="brand-card" key={i}>
                                <Link to="/">
                                    <div className="card border-0 shadow-sm">
                                        <img src={BRB} className="img-fluid" alt="..." />
                                    </div>
                                </Link>
                            </div>
                        )}

                    </div>
                </div>


                {/* Products */}
                <div className="row products">
                    <div className="col-12 px-2">
                        <h5 className="text-capitalize">jewellery</h5>
                    </div>
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

                <div className="row products">
                    <div className="col-12 px-2">
                        <h5 className="text-capitalize">women fashion</h5>
                    </div>
                    <div className="col-12 px-0">

                        {products.map((product, i) =>
                            <div className="product-card" key={i}>
                                <Link to={`/product/${product}/${product}`}>
                                    <div className="card border-0 shadow-sm text-center">
                                        <div className="img-box">
                                            <img src={Women} className="img-fluid" alt="..." />
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

                <div className="row products">
                    <div className="col-12 px-2">
                        <h5 className="text-capitalize">men fashion</h5>
                    </div>
                    <div className="col-12 px-0">

                        {products.map((product, i) =>
                            <div className="product-card" key={i}>
                                <Link to={`/product/${product}/${product}`}>
                                    <div className="card border-0 shadow-sm text-center">
                                        <div className="img-box">
                                            <img src={Men} className="img-fluid" alt="..." />
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

export default Home;