import React from 'react';
import classNames  from 'classnames';
import './styles.css';

const Headers = ({headerStyle, children}) => {
    return (
        <div className={classNames('headerWrapper', headerStyle)}>
            {children}
        </div>
    );
};

export default Headers;