import React from 'react';
import './styles.css';

const PinImg = ({ heightOfEl }) => {
    return (
        <div className='pinImgWrapper'>
            <div className='pinImgRect' style={{height: `${heightOfEl}`}} />
            <div className='pinImgCircle' />
        </div>
    );
};

export default PinImg;