import React from 'react';
import Headers from "../Headers/Headers";
import classNames from 'classnames';
import styles from './style.module.css';


const Card = ({ cardWrapperStyle, src, alt, title, text }) => {
    return (
        <div className={classNames(styles.cardWrapper, cardWrapperStyle)}>
            <div className={styles.cardCircle}>
                <img className={styles.cardCircleIcon} src={src} alt={alt} />
            </div>
            <Headers headerStyle={styles.cardTitle} children={title} />
            <div className={styles.cardText}>
                {text}
            </div>
        </div>
    );
};

export default Card;