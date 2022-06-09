import React from 'react';
import LinkButton from "../../components/LinkButton/LinkButton";
import Headers from "../../components/Headers/Headers";
import Card from "../../components/Card/Card";
import LandingSlider from "../../components/LandingSlider/LandingSlider";
import AboutSection from "../../components/AboutSection/AboutSection";
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import InputField from "../../components/InputField/InputField";
import backgroundImg from '../../assets/images/background.jpg';
import webDesignBg from '../../assets/images/webdesign-bg.jpg';
import speaker from '../../assets/icons/speaker.svg';
import gear from '../../assets/icons/gear.svg';
import docs from '../../assets/icons/docs.svg';
import lock from '../../assets/icons/lock.svg';
import personIcon from '../../assets/icons/person.svg';
import emailIcon from '../../assets/icons/email.svg';
import penIcon from '../../assets/icons/pen.svg';

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
                <LinkButton linkButtonStyle={styles.homePageLinkButton} children={'Contact us'}/>
            </section>
            <AboutSection
                sectionTitle={'About us'}
                columnOneText={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'}
                columnTwoText={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'}
            />
            <section className={styles.homePageCardsWrapper}>
                <Card
                    cardWrapperStyle={styles.homePageCard}
                    src={speaker}
                    alt={'speaker'}
                    title={'Startup to Enterprise Solutions'}
                    text={'It is a long established fact that a reader will be...'}
                    buttonText={'Learn more'}
                />
                <Card
                    cardWrapperStyle={styles.homePageCard}
                    src={gear}
                    alt={'gear'}
                    title={'Disruptive Technologies'}
                    text={'It is a long established fact that a reader will be...'}
                    buttonText={'Learn more'}
                />
                <Card
                    cardWrapperStyle={styles.homePageCard}
                    src={docs}
                    alt={'docs'}
                    title={'Automated & Manual Quality Assurance'}
                    text={'It is a long established fact that a reader will be...'}
                    buttonText={'Learn more'}
                />
                <Card
                    cardWrapperStyle={styles.homePageCard}
                    src={lock}
                    alt={'lock'}
                    title={'Privacy Focussed'}
                    text={'It is a long established fact that a reader will be...'}
                    buttonText={'Learn more'}
                />
            </section>
            <LandingSlider />
            <AboutSection
                backgroundImage={`url(${webDesignBg})`}
                headerStyle={styles.webDesignHeaderStyle}
                textStyle={styles.webDesignTextStyle}
                sectionTitle={'web design'}
                columnOneText={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'}
                columnTwoText={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'}
            />
            <section className={styles.homePageInputSectionWrapper}>
                <ContentContainer>
                    <div className={styles.inputWrapper}>
                        <Headers headerStyle={styles.inputHeader} children={'Get in Touch'} />
                        <span className={styles.inputLine} />
                        <div className={styles.inputDescription}>Feel free to drop us a form belong</div>
                        <InputField
                            inputWrapperStyle={styles.inputsWrapperClass}
                            icon={personIcon}
                            iconWidth={'16px'}
                            iconHeight={'16px'}
                            backgroundPositionY={'19px'}
                            inputType={'text'}
                            inputPlaceholder={'Name'}
                        />
                        <InputField
                            inputWrapperStyle={styles.inputsWrapperClass}
                            icon={emailIcon}
                            iconWidth={'17px'}
                            iconHeight={'12px'}
                            backgroundPositionY={'21px'}
                            inputType={'email'}
                            inputPlaceholder={'Your email'}
                        />
                        <InputField
                            inputWrapperStyle={styles.inputsWrapperClass}
                            icon={penIcon}
                            iconWidth={'20px'}
                            iconHeight={'20px'}
                            backgroundPositionY={'17px'}
                            inputType={'text'}
                            inputPlaceholder={'Ask your question'}
                        />
                    </div>
                </ContentContainer>
            </section>
        </>
    );
};

export default HomePage;