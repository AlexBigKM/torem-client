import React from 'react';
import classNames from 'classnames';
import './styles.css';

const ContentContainer = ({ containerStyle, children }) => {
    return (
        <div className={classNames('container', containerStyle)}>
            {children}
        </div>
    );
};

export default ContentContainer;