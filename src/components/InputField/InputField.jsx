import React from 'react';
import classNames from "classnames";

import styles from './style.module.css';

const InputField = ({
                        inputWrapperStyle,
                        backgroundPositionY,
                        iconHeight,
                        iconWidth,
                        inputHeight,
                        inputType,
                        icon,
                        inputPlaceholder
                    }) => {
    const inputStyle = {
        height: inputHeight,
        background: `url(${icon}) no-repeat scroll ${iconWidth} ${iconHeight}`,
        backgroundPosition: '22px center',
        backgroundPositionY: backgroundPositionY,
    }

    return (
        <div className={classNames(styles.inputWrapper, inputWrapperStyle)}>
            <span className={styles.inputLine}/>
            <input className={styles.input} type={inputType} placeholder={inputPlaceholder} style={inputStyle}/>
        </div>

    );
};

export default InputField;