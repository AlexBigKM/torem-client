import React from 'react';
import backgroundImg from '../../assets/images/background.jpg';
import LinkButton from "../../components/LinkButton/LinkButton";
import Headers from "../../components/Headers/Headers";
import ContentContainer from "../../components/ContentContainer/ContentContainer";

import styles from './style.scss';

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

const HomePage = () => {
    return (
        <>
            <section className={styles.homePageHero} style={sectionStyle}>
                <Headers headerStyle={styles.homePageSmallHeader} children={'Information technology'} />
                <Headers headerStyle={styles.homePageHeader} children={'Torem'} />
                <LinkButton linkButtonStyle={styles.homePageLinkButton}/>
            </section>
            <section className={styles.homePageAboutUs}>
                <ContentContainer>
                    <Headers headerStyle={styles.homePageAboutUsHeader} children={'About us'} />
                    <div className={styles.homePageAboutUsHeader}>About us</div>
                </ContentContainer>
            </section>
        </>
    );
};

export default HomePage;