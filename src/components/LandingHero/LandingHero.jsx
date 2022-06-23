import React from 'react';
import Headers from "../Headers/Headers";
import LinkButton from "../LinkButton/LinkButton";
import AnimationContainer from "../AnimationContainer/AnimationContainer";
import backgroundImg from "../../assets/images/background.jpg";

import styles from "./style.module.css";

const sectionStyle = {
    height: "100vh",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
};

const LandingHero = () => {
    return (
        <section className={styles.homePageHero} style={sectionStyle}>
            <AnimationContainer motionClassName={styles.homePageHeaderMotionWrapper} yPos={-200} xPos={0}>
                <Headers headerStyle={styles.homePageSmallHeader} children={'Information technology'} />
                <Headers headerStyle={styles.homePageHeader} children={'Torem'} />
            </AnimationContainer>
            <LinkButton linkButtonStyle={styles.homePageLinkButton} children={'Contact us'}/>
        </section>
    );
};

export default LandingHero;