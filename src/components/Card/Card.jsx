import React, { useState } from 'react';
import Headers from "../Headers/Headers";
import classNames from 'classnames';
import styles from './style.module.css';
import LinkButton from "../LinkButton/LinkButton";


const Card = ({ cardWrapperStyle, src, alt, title, text, buttonText }) => {
    const [showBtn, setShowBtn] = useState(false);

    return (
        <div className={classNames(styles.cardWrapper, cardWrapperStyle)} onMouseOver={() => setShowBtn(true)} onMouseOut={() => setShowBtn(false)}>
            <div className={styles.cardCircle}>
                <img className={styles.cardCircleIcon} src={src} alt={alt} />
            </div>
            <Headers headerStyle={styles.cardTitle} children={title} />
            <div className={styles.cardText}>
                {text}
            </div>
            {showBtn && <LinkButton linkButtonStyle={styles.cardButton} children={buttonText} />}
        </div>
    );
};

export default Card;