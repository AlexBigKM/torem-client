import React from 'react';
import classNames from "classnames";
import LandingHero from "../../components/LandingHero/LandingHero";
import LinkButton from "../../components/LinkButton/LinkButton";
import Headers from "../../components/Headers/Headers";
import Card from "../../components/Card/Card";
import LandingSlider from "../../components/LandingSlider/LandingSlider";
import AboutSection from "../../components/AboutSection/AboutSection";
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import InputField from "../../components/InputField/InputField";
import infoCardBg from '../../assets/images/infocard-bg.jpg';
import webDesignBg from '../../assets/images/webdesign-bg.jpg';
import speaker from '../../assets/icons/speaker.svg';
import gear from '../../assets/icons/gear.svg';
import docs from '../../assets/icons/docs.svg';
import lock from '../../assets/icons/lock.svg';
import personIcon from '../../assets/icons/person.svg';
import emailIcon from '../../assets/icons/email.svg';
import penIcon from '../../assets/icons/pen.svg';
import pinsIcon from '../../assets/icons/pins.svg';
import location from '../../assets/icons/location.svg';
import aEmail from '../../assets/icons/a-email.svg';
import phone from '../../assets/icons/phone.svg';
import instagram from '../../assets/icons/instagram.svg';
import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/twitter.svg';

import styles from './style.module.css';
import AnimationContainer from "../../components/AnimationContainer/AnimationContainer";
import AnimationInView from "../../components/AnimationContainer/AnimationInView";

const HomePage = () => {
    return (
        <>
            <LandingHero />
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
                            <form>
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
                                <div className={styles.formTextAreaWrapper}>
                                    <span className={styles.textAreaLine} />
                                    <textarea
                                        className={styles.formTextArea}
                                        style={{
                                            background: `url(${penIcon}) no-repeat scroll 20px 20px`,
                                            backgroundPosition: '22px center',
                                            backgroundPositionY: '16px',
                                        }}
                                        name="textarea"
                                        rows="2"
                                        col="2"
                                        placeholder="Ask your question"
                                    />
                                </div>
                                <LinkButton
                                    children={'Send a message'}
                                    linkButtonStyle={styles.formButton}
                                />
                            </form>
                            <AnimationInView inViewClassName={styles.animateCardWrapper}>
                            <div
                                className={styles.infoCard}
                                style={{
                                    backgroundImage: `url(${infoCardBg})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center center',
                                }}
                            >
                                <div className={styles.infoCardImgWrapper}>
                                    <img className={styles.infoCardImg} src={pinsIcon} alt="Pins" />
                                </div>
                                <div className={styles.infoCardContentWrapper}>
                                    <div className={styles.infoCardContent}>
                                        <img className={styles.infoCardContentImgLoc} src={location} alt="Location" />
                                        <ul className={styles.infoCardContentList}>
                                            <li>Torem</li>
                                            <li>Kennedyplein 200 5611ZT, Eindhoven</li>
                                            <li>The Netherlands</li>
                                        </ul>
                                    </div>
                                    <div className={classNames(styles.infoCardContent, styles.infoCardContentListAlign)}>
                                        <img className={styles.infoCardContentImgEmail} src={aEmail} alt="Email" />
                                        <ul className={styles.infoCardContentList}>
                                            <li>Torem@gmail.com</li>
                                        </ul>
                                    </div>
                                    <div className={classNames(styles.infoCardContent, styles.infoCardContentListAlign)}>
                                        <img className={styles.infoCardContentImgPhone} src={phone} alt="Phone" />
                                        <ul className={styles.infoCardContentList}>
                                            <li>+31 34 595 498</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={styles.infoCardContentSocialsWrapper}>
                                    <img className={styles.infoCardContentSocial} src={instagram} alt="Instagram" />
                                    <img className={styles.infoCardContentSocial} src={facebook} alt="Facebook" />
                                    <img className={styles.infoCardContentSocial} src={twitter} alt="Twitter" />
                                </div>
                            </div>
                            </AnimationInView>
                        </div>
                </ContentContainer>
            </section>
        </>
    );
};

export default HomePage;