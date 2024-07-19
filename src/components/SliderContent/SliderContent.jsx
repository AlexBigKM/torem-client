import React from 'react';
import './styles.css';

const SliderContent = ({ title }) => {
    return (
        <>
        <div className='contentTitle'>{title}</div>
        <div className='contentWrapper'>
            <div className='listWrapper'>
                <div className='listTitle'>It system analysis</div>
                <ul className='list'>
                    <li>Software Analysis</li>
                    <li>Workflow Analysis</li>
                    <li>Performance Analysis</li>
                </ul>
            </div>
            <div className='listWrapper'>
                <div className='listTitle'>STRATEGIC PLANNING</div>
                <ul className='list'>
                    <li>IT Strategy</li>
                    <li>Digital Transformation</li>
                    <li>Product Specifications</li>
                </ul>
            </div>
            <div className='listWrapper'>
                <div className='listTitle'>PERFORMANCE MANAGEMENT</div>
                <ul className='list'>
                    <li>Software Tests </li>
                    <li>System Maintenance</li>
                </ul>
            </div>
        </div>
        </>
    );
};

export default SliderContent;