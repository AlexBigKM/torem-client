import React from 'react';
import ContentContainer from "../ContentContainer/ContentContainer";
import Headers from "../Headers/Headers";
import pin from "../../assets/icons/pin.svg";

import styles from './style.module.css';
import classNames from "classnames";

const AboutSection = ({ backgroundImage, headerStyle, textStyle, sectionTitle, columnOneText, columnTwoText }) => {
    const sectionBackground = {
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
    };

    return (
        <section className={styles.homePageAboutUs} style={sectionBackground}>
            <img className={styles.homePageAboutUsImg} src={pin} alt={'Pin'}/>
            <ContentContainer>
                <Headers headerStyle={classNames(styles.homePageAboutUsHeader, headerStyle)} children={sectionTitle} />
                <div className={classNames(styles.homePageAboutUsTextWrapper, textStyle)}>
                    <div className={styles.homePageAboutUsText}>
                        {columnOneText}
                    </div>
                    <div className={styles.homePageAboutUsText}>
                        {columnTwoText}
                    </div>
                </div>
            </ContentContainer>
        </section>
    );
};

export default AboutSection;