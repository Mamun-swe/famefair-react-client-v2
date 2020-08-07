import React from 'react'
import './style.css'
import { Icon } from 'react-icons-kit'
import { Route, NavLink } from 'react-router-dom'

import OrderHistory from './OrderHistory'
import EditProfile from './EditProfile'

import { androidPerson } from 'react-icons-kit/ionicons/androidPerson'
import { mail } from 'react-icons-kit/ikons/mail'
import { map } from 'react-icons-kit/ionicons/map'
import { pin } from 'react-icons-kit/ionicons/pin'
import { iosTelephone } from 'react-icons-kit/ionicons/iosTelephone'


const Index = () => {
    return (
        <div className="account-index py-3 py-lg-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card shadow-sm border-0 biodata">
                            <div className="card-body">
                                <h5 className="text-capitalize mb-2">
                                    <Icon icon={androidPerson} size={25} className="pr-2" />
                                    <span>abdullah al mamun</span>
                                </h5>
                                <p className="mb-1">
                                    <Icon icon={mail} size={17} className="pr-3" />
                                    <span>example@gmail.com</span>
                                </p>
                                <p className="text-capitalize mb-1">
                                    <Icon icon={map} size={17} className="pr-3" />
                                    <span>Town/City</span>
                                </p>
                                <p className="text-capitalize mb-1">
                                    <Icon icon={pin} size={17} className="pr-3" />
                                    <span>address</span>
                                </p>
                                <p className="mb-0">
                                    <Icon icon={iosTelephone} size={17} className="pr-3" />
                                    <span>Phone number</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Page Links */}
                <div className="row pt-3 page-links">
                    <div className="col-4 pr-1">
                        <NavLink to="/account/" activeClassName="is-active" className="btn btn-block shadow-sm">
                            Order History
                        </NavLink>
                    </div>
                    <div className="col-4 px-1">
                        <NavLink to="/account/edit-profile" activeClassName="is-active" className="btn btn-block shadow-sm">
                            edit profile
                        </NavLink>
                    </div>
                    <div className="col-4 pl-1">
                        <NavLink to="/account/edit-profile" activeClassName="is-active" className="btn btn-block shadow-sm">
                            change password
                        </NavLink>
                    </div>
                </div>

                {/* Route Pages */}
                <div className="row">
                    <div className="col-12">
                        <Route exact path="/account/" component={OrderHistory} />
                        <Route path="/account/edit-profile" component={EditProfile} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;