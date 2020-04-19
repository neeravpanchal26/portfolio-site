// Default imports
import React from "react";

// Custom imports
import './loader.css';

const Loader = () => {
    return (
        <div className='myModal'>
            <div className='myModal-content'>
                <div className='center'>Loading...</div>
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
            </div>
        </div>
    )
};

export default Loader;
