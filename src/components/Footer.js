import React from 'react';
import './footer.css'
import Logo from '../assets/static/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer pb-4 pb-lg-0 pt-lg-3">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 px-3">
                        <div className="card shadow-sm border-0">
                            <div className="card-body p-4">
                                <div className="row">

                                    <div className="col-12 col-lg-4 pr-lg-4 pb-4 pb-lg-0">
                                        <Link to="/">
                                            <img src={Logo} className="img-fluid" alt="..." />
                                        </Link>
                                        <p className="mb-0 mt-3">Famefair is a best online shopping mall of bangladesh, started on 2020.</p>
                                    </div>

                                    <div className="col-12 col-lg-4 pr-lg-4 pb-4 pb-lg-0">
                                        <h5 className="mb-3">Product Category</h5>
                                        <Link to="/">Men Fashion</Link>
                                        <Link to="/">women Fashion</Link>
                                        <Link to="/">jewellery</Link>
                                        <Link to="/">kids</Link>
                                        <Link to="/">electroics</Link>
                                    </div>

                                    <div className="col-12 col-lg-4 pr-lg-4">
                                        <h5 className="mb-3">Contact Us</h5>
                                        <p className="mb-0">Address: Dhaka, Ashulia</p>
                                        <p>email: test@gmail.com</p>
                                        <Link to="/">Terms & Condition</Link>
                                        <Link to="/">Privacy policy</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;