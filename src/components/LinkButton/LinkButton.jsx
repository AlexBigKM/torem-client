import React from 'react';
import classNames from 'classnames';
import arrow from '../../assets/icons/arrow.svg';
import styles from './style.module.css';

const LinkButton = ({ linkButtonStyle, children }) => {
    return (
        <div className={classNames(styles.linkButtonWrapper, linkButtonStyle)}>
            {children}
            <div className={styles.linkButtonArrowWrapper}>
                <img className={styles.linkButtonArrow} src={arrow} alt={"arrow"} />
            </div>
        </div>
    );
};

export default LinkButton;