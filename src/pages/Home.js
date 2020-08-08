import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import api from '../api';

const Home = () => {
    const [index, setIndex] = useState(0)
    const [banners, setBanners] = useState([])
    const [emptyBanner, setEmptyBanner] = useState(false)

    const [categories, setCategories] = useState([])
    const [emptyCategory, setEmptyCategory] = useState(false)

    const [brands, setBrands] = useState([])
    const [emptyBrand, setEmptyBrand] = useState(false)

    const [categoryWithProducts, setCategoryWithProducts] = useState([])
    const [emptyProduct, setEmptyProduct] = useState(false)


    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        fetchBanner()
        fetchCategory()
        fetchBrands()
        fetchCategoryWithProducts()
    }, [])


    // fetch banner
    const fetchBanner = () => {
        axios.get(`${api}user/banner/index`)
            .then(res => {
                if (res.status === 204) {
                    return setEmptyBanner(true)
                }
                setEmptyBanner(false)
                setBanners(res.data.results)
            })
            .catch(err => {
                if (err) {
                    console.log(err)
                }
            })
    }


    // fetch category
    const fetchCategory = () => {
        axios.get(`${api}user/category/index`)
            .then(res => {
                if (res.status === 204) {
                    return setEmptyCategory(true)
                }
                setEmptyCategory(false)
                setCategories(res.data.results)
            })
            .catch(err => {
                if (err) {
                    console.log(err)
                }
            })
    }

    // fetch brands
    const fetchBrands = () => {
        axios.get(`${api}user/brand/index`)
            .then(res => {
                if (res.status === 204) {
                    return setEmptyBrand(true)
                }
                setEmptyBrand(false)
                setBrands(res.data.results)
            })
            .catch(err => {
                if (err) {
                    console.log(err)
                }
            })
    }

    // fetch products
    const fetchCategoryWithProducts = () => {
        axios.get(`${api}user/category/products`)
            .then(res => {
                if (res.status === 204) {
                    return setEmptyProduct(true)
                }
                setEmptyProduct(false)
                setCategoryWithProducts(res.data.results)
            })
            .catch(err => {
                if (err) {
                    console.log(err)
                }
            })
    }


    return (
        <div className="home py-3 py-lg-0">
            <div className="container-fluid">

                {/* Banner */}
                {emptyBanner ? (
                    null
                ) :
                    <div className="row">
                        <div className="col-12">
                            <div className="card border-0 shadow-sm banner-card">

                                <Carousel
                                    activeIndex={index}
                                    onSelect={handleSelect}
                                    controls={false}
                                    interval={3000}
                                >
                                    {banners.length > 0 && banners.map((banner, i) =>
                                        <Carousel.Item key={i}>
                                            <img
                                                className="d-block w-100"
                                                src={banner.image}
                                                alt="..."
                                            />
                                        </Carousel.Item>
                                    )}
                                </Carousel>

                            </div>
                        </div>
                    </div>
                }

                {/* Categories */}
                {emptyCategory ? (
                    null
                ) :
                    <div className="row categories py-3">

                        {categories.length > 0 && categories.map((category, i) =>
                            <div className="col-6 col-lg-4" key={i}>
                                <Link to={`category/${category.id}/${category.name}`}>
                                    <div className="card border-0 shadow-sm category-card">
                                        <img src={category.image} className="img-fluid" alt="category" />
                                    </div>
                                </Link>
                            </div>
                        )}

                    </div>
                }


                {/* Brands */}
                {emptyBrand ? (
                    null
                ) :
                    <div className="row brands mt-4">
                        <div className="col-12 px-2">
                            <h5>Popular Brands</h5>
                        </div>
                        <div className="col-12 px-0">

                            {brands.length > 0 && brands.map((brand, i) =>
                                <div className="brand-card" key={i}>
                                    <Link to="/">
                                        <div className="card border-0 shadow-sm">
                                            <img src={brand.image} className="img-fluid" alt="..." />
                                        </div>
                                    </Link>
                                </div>
                            )}

                        </div>
                    </div>}


                {/* Products */}
                {emptyProduct ? (
                    null
                ) :
                    <div>
                        {categoryWithProducts.length > 0 && categoryWithProducts.map((cat, i) =>
                            <div className="row products" key={i}>
                                <div className="col-12 px-2">
                                    <div className="d-flex">
                                        <div><h5 className="text-capitalize mt-2">{cat.category_name}</h5></div>
                                        <div className="ml-auto">
                                            <Link to={`category/${cat.category_id}/${cat.category_name}`} type="button" className="btn view-all-btn shadow-sm px-4">view all</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 px-0">

                                    {cat.products.length > 0 && cat.products.map((product) =>
                                        <div className="product-card" key={product.product_id}>
                                            <Link to={`/product/${product.product_name}/${product.product_id}`}>
                                                <div className="card border-0 shadow-sm text-center pt-2">
                                                    <div className="img-box">
                                                        <img src={product.image} className="img-fluid" alt="..." />
                                                    </div>
                                                    <div className="content p-2">
                                                        <p className="mb-2">{product.product_name}</p>
                                                        <p className="mb-0">Price: {product.price} TK.</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )}

                                </div>
                            </div>
                        )}
                    </div>
                }


            </div>
        </div>
    );
};

export default Home;