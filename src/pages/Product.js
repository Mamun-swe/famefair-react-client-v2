import React, { useState } from 'react';
import './style.css';
import { Icon } from 'react-icons-kit'
import { Link } from 'react-router-dom'

import { plus } from 'react-icons-kit/ionicons/plus'
import { minus } from 'react-icons-kit/ionicons/minus'
import Men from '../assets/images/men.png'
import Watch from '../assets/images/women.png'

const Product = () => {
    const [pQuantity, setPquantity] = useState(1)
    const [quantity, setQuantity] = useState(11)
    const [products, setProducts] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])


    const isDisabledDecrement = () => {
        if (pQuantity <= 1) {
            return true
        }
        return false
    }

    const inDisabledIncrement = () => {
        if (pQuantity < quantity) {
            return false
        }
        return true
    }

    const decrementProductQnt = () => {
        setPquantity(pQuantity - 1)
        isDisabledDecrement()

    }

    const incrementProductQnt = () => {
        setPquantity(pQuantity + 1)
    }

    return (
        <div className="product py-3 py-lg-0">
            <div className="container-fluid">
                <div className="row mb-3">
                    <div className="col-12">
                        <div className="card shadow-sm border-0">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-12 col-lg-7 p-3 p-lg-4 text-center img-column">
                                        <img src={Men} className="img-fluid product-img" alt="..." />
                                    </div>
                                    <div className="col-12 col-lg-5 p-3 py-lg-4 px-lg-5 info-column">
                                        <h5 className="mb-1">Available Quantity: {quantity}</h5>
                                        <h5 className="mb-4">Price: 500 TK.</h5>

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
                                        <button type="button" className="btn btn-block shadow-none text-dark cart-add-btn">ADD TO CART</button>

                                        {/* Payment Instruction */}
                                        <div className="payments-instruction mt-4">
                                            <div className="methods mb-3">
                                                <h5 className="pb-2 mb-0">Payment Options</h5>
                                                <small>Cash on Delivery (Out Dhaka)</small>
                                            </div>
                                            <div className="methods mb-3">
                                                <h5 className="pb-2 mb-0">Delivery System</h5>
                                                <small> Home Delivery (20-25) Days</small>
                                            </div>
                                        </div>
                                        {/* End Payment Instruction */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Details */}
                <div className="row product-details">
                    <div className="col-12">
                        <div className="card shadow-sm border-0">
                            <div className="card-header p-4 bg-white">
                                <h5 className="mb-0">Product Details</h5>
                            </div>

                            <div className="card-body">
                                <h6 className="mb-4 product-name">Apple Macbook Pro MVVK2 2019 16-inch Retina Display with Touch Bar Core i9-2.3GHz 16GB Ram 1TB SSD Radeon Pro 4GB Graphics - Gray</h6>
                                <p className="mb-0 product-id">PRODUCT ID:
                                    <span className="text-capitalize text-info pl-3">123456</span>
                                </p>
                                <p className="mb-4 product-brand">BRAND:
                                    <span className="text-capitalize text-info pl-3">apple</span>
                                </p>

                                <p className="product-details mb-0">
                                    Features Model: Apple Macbook Pro MVVK2 2.3GHz 8-core 9th-generation Intel Core i9 processor 16GB DDR4 memory 1TB SSD storage AMD Radeon Pro 5500M 4GB Graphics Specification: Basic Information Processor 2.3GHz 8-core 9th-generation Intel Core i9 processor (Turbo Boost up to 4.8GHz) Display 16-inch Retina display with True Tone Memory 16GB 2666MHz DDR4 memory Storage 1TB SSD storage Graphics AMD Radeon Pro 5500M with 4GB of GDDR6 memory Operating System macOS Battery 100Wh Lithium Polymer Battery Maximum Runtime: Up to 11 Hours Special Feature Fingerprint Reader AC Input Power: 100 to 240 VAC, 50 / 60 Hz Input Devices Keyboard 65 (U.S.)/66 (ISO)-Keys including 4 arrow keys in an inverted‑T arrangement Notebook Keyboard,Touch Bar,Touch ID sensor,Ambient light sensor Optical Drive No WebCam 720p HD Camera Network & Wireless Connectivity Wi-Fi 802.11 a/b/g/n Bluetooth v5.0 Ports, Connectors & Slots USB (s) 4x Thunderbolt 3 (Supports Display Port) Physical Specification Dimensions (W x D x H) 35.79 x 1.62 x 24.59cm Weight 2kg Color(s) Gray Warranty Manufacturing Warranty 01 year International Limited Warranty (Terms & Condition Apply As Per Apple)
                                </p>
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

export default Product;