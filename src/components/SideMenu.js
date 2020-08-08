import React, { useState, useEffect } from 'react'
import './sidemenu.css'
import { Icon } from 'react-icons-kit'
import { Link } from 'react-router-dom'
import axios from 'axios'
import api from '../api'

import Logo from '../assets/static/logo.png'
import { ic_shopping_cart } from 'react-icons-kit/md/ic_shopping_cart'
import { person } from 'react-icons-kit/ionicons/person'
import { ic_search } from 'react-icons-kit/md/ic_search'
import { menu } from 'react-icons-kit/iconic/menu'
import { thinRight } from 'react-icons-kit/entypo/thinRight'

const SideMenu = () => {

    const [categories, setCategories] = useState([])
    const [emptyCategory, setEmptyCategory] = useState(false)

    // Mobile Menu Bar
    const handleMobileMenu = () => {
        console.log("okkk");
    }


    useEffect(() => {
        fetchCategory()
    }, [])

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

    return (
        <div className="side-menu">
            {/* Menu */}
            <div className="menu">
                <div className="menu-content">

                    {/* Menu Header */}
                    <div className="header text-center">
                        <div className="d-flex mb-2 mb-lg-3">
                            <div>
                                <Link to="/">
                                    <img src={Logo} className="img-fluid" alt="Company logo" />
                                </Link>
                            </div>
                            <div className="ml-auto">
                                <button type="button" className="btn btn-white shadow-none p-0 p-lg-1 mr-3 mr-lg-2">
                                    <Icon icon={ic_shopping_cart} size={28} />
                                </button>
                                <Link to="/account" type="button" className="btn btn-white shadow-none p-0 p-lg-1 mr-3 mr-lg-0">
                                    <Icon icon={person} size={30} />
                                </Link>
                                <button type="button" className="btn btn-white shadow-none p-0 p-lg-1 mr-2 mr-lg-0 d-lg-none" onClick={handleMobileMenu}>
                                    <Icon icon={menu} size={22} />
                                </button>
                            </div>
                        </div>

                        <form>
                            <div className="input-group search-box">
                                <input type="text" className="form-control shadow-none" placeholder="Search for" />
                                <div className="input-group-prepend">
                                    <div className="input-group-text p-0 border-0">
                                        <button type="submit" className="btn shadow-none border-0">
                                            <Icon icon={ic_search} size={24} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>

                    {/* Menu Body */}
                    <div className="body p-3">

                        {/* Categories */}
                        {emptyCategory ? (
                            null
                        ) :
                            <div>
                                {categories.length > 0 && categories.map((category, i) =>
                                    <Link to={`/category/${category.id}/${category.name}`} key={i}>
                                        <div className="d-flex">
                                            <div><p>{category.name}</p></div>
                                            <div className="ml-auto"><Icon icon={thinRight} size={14} /></div>
                                        </div>
                                    </Link>
                                )}
                            </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideMenu;