import React from 'react';
import classNames  from 'classnames';
import styles from './style.module.css';

const Headers = ({headerStyle, children}) => {
    return (
        <div className={classNames(styles.headerWrapper, headerStyle)}>
            {children}
        </div>
    );
};

export default Headers;