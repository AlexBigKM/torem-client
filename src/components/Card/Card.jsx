import React, { useState } from 'react';
import Headers from '../Headers/Headers';
import classNames from 'classnames';
import LinkButton from '../LinkButton/LinkButton';
import AnimationInView from '../AnimationContainer/AnimationInView';
import './styles.css';

const Card = ({ cardWrapperStyle, src, alt, title, text, buttonText }) => {
    const [showBtn, setShowBtn] = useState(false);

    return (
        <div className={classNames('cardWrapper', cardWrapperStyle)} onMouseOver={() => setShowBtn(true)} onMouseOut={() => setShowBtn(false)}>
            <div className='cardCircle'>
                <AnimationInView posY={0} startPosY={0}>
                    <img className='cardCircleIcon' src={src} alt={alt} />
                </AnimationInView>
            </div>
            <Headers headerStyle={'cardTitle'} children={title} />
            <div className='cardText'>
                {text}
            </div>
            {showBtn && <LinkButton linkButtonStyle={'cardButtonOnHover'} children={buttonText} />}
            <LinkButton linkButtonStyle={'cardButton'} children={buttonText} />
        </div>
    );
};

export default Card;