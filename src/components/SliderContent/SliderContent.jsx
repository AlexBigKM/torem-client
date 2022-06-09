import React from 'react';

import styles from './style.module.css';

const SliderContent = ({ title }) => {
    return (
        <>
        <div className={styles.contentTitle}>{title}</div>
        <div className={styles.contentWrapper}>
            <div className={styles.listWrapper}>
                <div className={styles.listTitle}>It system analysis</div>
                <ul className={styles.list}>
                    <li>Software Analysis</li>
                    <li>Workflow Analysis</li>
                    <li>Performance Analysis</li>
                </ul>
            </div>
            <div className={styles.listWrapper}>
                <div className={styles.listTitle}>STRATEGIC PLANNING</div>
                <ul className={styles.list}>
                    <li>IT Strategy</li>
                    <li>Digital Transformation</li>
                    <li>Product Specifications</li>
                </ul>
            </div>
            <div className={styles.listWrapper}>
                <div className={styles.listTitle}>PERFORMANCE MANAGEMENT</div>
                <ul className={styles.list}>
                    <li>Software Tests </li>
                    <li>System Maintenance</li>
                </ul>
            </div>
        </div>
        </>
    );
};

export default SliderContent;