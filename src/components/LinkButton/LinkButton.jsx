import React from 'react';
import classNames from 'classnames';
import arrow from '../../assets/icons/arrow.svg';
import './styles.css';

const LinkButton = ({ linkButtonStyle, buttonType, buttonRef, children, linkButtonArrowStyle }) => {
    return (
        <button className={classNames('linkButtonWrapper', linkButtonStyle)} type={buttonType} ref={buttonRef}>
            {children}
            <div className={classNames('linkButtonArrowWrapper', linkButtonArrowStyle)}>
                <img className='linkButtonArrow' src={arrow} alt={"arrow"} />
            </div>
        </button>
    );
};

export default LinkButton;