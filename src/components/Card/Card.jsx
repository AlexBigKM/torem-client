import React, { useState } from 'react';
import Headers from "../Headers/Headers";
import classNames from 'classnames';
import LinkButton from "../LinkButton/LinkButton";
import AnimationInView from "../AnimationContainer/AnimationInView";

import styles from './style.module.css';

const Card = ({ cardWrapperStyle, src, alt, title, text, buttonText }) => {
    const [showBtn, setShowBtn] = useState(false);

    return (
        <div className={classNames(styles.cardWrapper, cardWrapperStyle)} onMouseOver={() => setShowBtn(true)} onMouseOut={() => setShowBtn(false)}>
            <div className={styles.cardCircle}>
                <AnimationInView posY={0} startPosY={0}>
                    <img className={styles.cardCircleIcon} src={src} alt={alt} />
                </AnimationInView>
            </div>
            <Headers headerStyle={styles.cardTitle} children={title} />
            <div className={styles.cardText}>
                {text}
            </div>
            {showBtn && <LinkButton linkButtonStyle={styles.cardButtonOnHover} children={buttonText} />}
            <LinkButton linkButtonStyle={styles.cardButton} children={buttonText} />
        </div>
    );
};

export default Card;