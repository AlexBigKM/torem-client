import React from 'react';
import classNames from 'classnames';
import styles from './style.module.css';

const ContentContainer = ({ containerStyle, children }) => {
    return (
        <div className={classNames(styles.container, containerStyle)}>
            {children}
        </div>
    );
};

export default ContentContainer;