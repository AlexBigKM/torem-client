import React from 'react';
import classNames from "classnames";
import './styles.css';

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
        <div className={classNames('inputWrapper', inputWrapperStyle)}>
            <span className='inputLine'/>
            <input className='input' type={inputType} placeholder={inputPlaceholder} style={inputStyle}/>
        </div>

    );
};

export default InputField;