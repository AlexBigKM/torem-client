import React from 'react';
import classNames from 'classnames';
import arrow from '../../assets/icons/arrow.svg';
import styles from './style.module.css';

const LinkButton = ({ linkButtonStyle, buttonType, buttonRef, children, linkButtonArrowStyle }) => {
    return (
        <button className={classNames(styles.linkButtonWrapper, linkButtonStyle)} type={buttonType} ref={buttonRef}>
            {children}
            <div className={classNames(styles.linkButtonArrowWrapper, linkButtonArrowStyle)}>
                <img className={styles.linkButtonArrow} src={arrow} alt={"arrow"} />
            </div>
        </button>
    );
};

export default LinkButton;