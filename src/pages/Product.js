import React, { useState, useEffect } from 'react';
import './style.css';
import { Icon } from 'react-icons-kit'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import api from '../api'

import { plus } from 'react-icons-kit/ionicons/plus'
import { minus } from 'react-icons-kit/ionicons/minus'
import FourOneFourPage from '../components/FourOneFour'
import ReactImageMagnify from 'react-image-magnify'

const Product = (props) => {
    const { id } = useParams()
    const [error, setError] = useState(false)
    const [pQuantity, setPquantity] = useState(1)
    const [quantity, setQuantity] = useState()
    const [productImage, setProductImage] = useState('')
    const [product, setProduct] = useState({})
    const [relatedProducts, setRelatedProducts] = useState([])
    const [cartProducts, setCartProducts] = useState([])

    const isDisabledDecrement = () => {
        if (pQuantity <= 1) {
            return true;
        }
        return false;
    }

    const inDisabledIncrement = () => {
        if (pQuantity < quantity) {
            return false;
        }
        return true;
    }

    const decrementProductQnt = () => {
        setPquantity(pQuantity - 1)
        isDisabledDecrement()

    }

    const incrementProductQnt = () => {
        setPquantity(pQuantity + 1)
    }


    useEffect(() => {
        // fetch single product
        const fetchSingleProduct = async () => {
            await axios.get(`${api}user/product/${id}/show`)
                .then(res => {
                    setProduct(res.data)
                    setQuantity(res.data.quantity)
                    setProductImage(res.data.image)
                    setRelatedProducts(res.data.products)
                })
                .catch(err => {
                    if (err) {
                        if (err.response.status) {
                            setError(true)
                        }
                    }
                })
        }

        fetchSingleProduct()
    }, [id])



    // Add to cart
    const addToCart = () => {
        const newProduct = {
            id: product.id,
            code: product.code,
            name: product.name,
            price: product.price,
            quantity: pQuantity,
            image: product.image
        }
        // setStorageProducts(newProduct)

        const cartItems = cartProducts.slice()
        let alreadyInCart = false
        cartItems.forEach((item) => {
            if (item.id === newProduct.id) {
                alreadyInCart = true
                alert('already in cart')
            }
        })

        if (!alreadyInCart) {
            cartItems.push({ ...newProduct })

        }
        setCartProducts(cartItems)
        // console.log(cartProducts);
    }


    return (
        <div className="product py-3 py-lg-0">
            {error ? (
                <FourOneFourPage />
            ) : (
                    <div className="container-fluid">
                        <div className="row mb-3">
                            <div className="col-12">
                                <div className="card shadow-sm border-0">
                                    <div className="card-body">
                                        <div className="row">

                                            {/* Product Image */}
                                            <div className="col-12 col-lg-6 p-3 p-lg-4 text-center img-column">
                                                <ReactImageMagnify {...{
                                                    smallImage: {
                                                        alt: 'Product',
                                                        src: productImage,
                                                        width: window.innerWidth > 992 ? 410 : 250,
                                                        height: window.innerWidth > 992 ? 500 : 300
                                                    },
                                                    style: { margin: 'auto' },
                                                    imageClassName: 'magnifiySmallImage',
                                                    largeImage: {
                                                        src: productImage,
                                                        width: 1200,
                                                        height: 1800
                                                    },
                                                    enlargedImageContainerStyle: { background: '#fff', zIndex: 9 }
                                                }} />
                                            </div>


                                            {/* PRoduct Details */}
                                            <div className="col-12 col-lg-6 p-3 px-lg-5 py-lg-4 info-column">
                                                <h6 className="mb-2 product-name">{product.name}</h6>
                                                <p className="mb-1">Available Quantity: {quantity}</p>
                                                <p className="mb-3">Price: {product.price} TK.</p>

                                                {/* Quantity Increment Decrement */}
                                                <div className="d-flex mb-3">
                                                    <div>
                                                        <button type="button" className="btn inc-desc-btn rounded-0 shadow-none" onClick={decrementProductQnt} disabled={isDisabledDecrement()}>
                                                            <Icon icon={minus} size={16} />
                                                        </button>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <input type="number" className="form-control rounded-0 shadow-none text-center" readOnly value={pQuantity} />
                                                    </div>
                                                    <div>
                                                        <button type="button" className="btn inc-desc-btn rounded-0 shadow-none" onClick={incrementProductQnt} disabled={inDisabledIncrement()}>
                                                            <Icon icon={plus} size={16} />
                                                        </button>
                                                    </div>
                                                </div>
                                                {/* End Quantity Increment Decrement */}

                                                {/* Add Cart button */}
                                                <button type="button" className="btn btn-block shadow-none text-dark cart-add-btn" onClick={addToCart}>ADD TO CART</button>

                                                <div className="product-details mt-3">
                                                    <p className="mb-0 product-id">PRODUCT CODE:
                                                    <span className="text-capitalize text-info pl-3">{product.code}</span>
                                                    </p>
                                                    <p className="mb-2 product-brand">BRAND:
                                                    <span className="text-capitalize text-info pl-3">{product.brand}</span>
                                                    </p>

                                                    <p className="product-description mb-0">{product.description}</p>

                                                    <p>Cart item: {cartProducts.length}</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Related Products */}
                        <div className="row related-products mt-3">
                            <div className="col-12">
                                <div className="card shadow-sm border-0">
                                    <div className="card-body p-3">
                                        <h5 className="mb-0">Related Products</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row products mt-2">
                            <div className="col-12 px-0">

                                {relatedProducts.map((relatedProduct, i) =>
                                    <div className="product-card" key={i}>
                                        <Link to={`/product/${relatedProduct.product_name}/${relatedProduct.product_id}`}>
                                            <div className="card border-0 shadow-sm text-center">
                                                <div className="img-box">
                                                    <img src={relatedProduct.image} className="img-fluid" alt="..." />
                                                </div>
                                                <div className="content px-2 py-1">
                                                    <p className="mb-2">{relatedProduct.product_name}</p>
                                                    <p className="mb-0">Price: {relatedProduct.price} TK.</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default Product;