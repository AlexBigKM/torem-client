import React from 'react';
import backgroundImg from '../../assets/images/background.jpg';
import pin from '../../assets/icons/pin.svg';
import speaker from '../../assets/icons/speaker.svg';
import gear from '../../assets/icons/gear.svg';
import docs from '../../assets/icons/docs.svg';
import lock from '../../assets/icons/lock.svg';
import LinkButton from "../../components/LinkButton/LinkButton";
import Headers from "../../components/Headers/Headers";
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import Card from "../../components/Card/Card";

import styles from './style.module.css';

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
                <img className={styles.homePageAboutUsImg} src={pin} alt={'Pin'}/>
                <ContentContainer>
                    <Headers headerStyle={styles.homePageAboutUsHeader} children={'About us'} />
                    <div className={styles.homePageAboutUsTextWrapper}>
                        <div className={styles.homePageAboutUsText}>
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters
                        </div>
                        <div className={styles.homePageAboutUsText}>
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters
                        </div>
                    </div>
                </ContentContainer>
            </section>
            <section className={styles.homePageCardsWrapper}>
                <Card
                    cardWrapperStyle={styles.homePageCard}
                    src={speaker}
                    alt={'speaker'}
                    title={'Startup to Enterprise Solutions'}
                    text={'It is a long established fact that a reader will be...'}
                />
                <Card
                    cardWrapperStyle={styles.homePageCard}
                    src={gear}
                    alt={'gear'}
                    title={'Disruptive Technologies'}
                    text={'It is a long established fact that a reader will be...'}
                />
                <Card
                    cardWrapperStyle={styles.homePageCard}
                    src={docs}
                    alt={'docs'}
                    title={'Automated & Manual Quality Assurance'}
                    text={'It is a long established fact that a reader will be...'}
                />
                <Card
                    cardWrapperStyle={styles.homePageCard}
                    src={lock}
                    alt={'lock'}
                    title={'Privacy Focussed'}
                    text={'It is a long established fact that a reader will be...'}
                />
            </section>
        </>
    );
};

export default HomePage;