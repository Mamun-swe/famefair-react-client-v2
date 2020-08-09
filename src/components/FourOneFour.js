import React from 'react';
import errImg from '../assets/static/400.png';

const FourOneFour = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card shadow-sm border-0">
                            <div className="error-box">
                                <div className="flex-center flex-column">
                                    <img src={errImg} className="img-fluid" alt="..." />
                                    <p className="text-dark mt-3">An user error ocuured</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FourOneFour;