import React from 'react';

import styles from './style.module.css';

const PinImg = ({ heightOfEl }) => {
    return (
        <div className={styles.pinImgWrapper}>
            <div className={styles.pinImgRect} style={{height: `${heightOfEl}`}} />
            <div className={styles.pinImgCircle} />
        </div>
    );
};

export default PinImg;