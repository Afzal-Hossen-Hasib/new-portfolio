import React from 'react';
import './Floating.css'

const Floating = ({image}) => {
    return (
        <div className='floating'>
            <img src={image} alt="" />
            <span>WEB <br /> DEVELOPER</span>
        </div>
    );
};

export default Floating;