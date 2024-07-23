import React from 'react';
import classNames from 'classnames';
import LandingHero from '../../components/LandingHero/LandingHero';
import Headers from '../../components/Headers/Headers';
import Card from '../../components/Card/Card';
import LandingSlider from '../../components/LandingSlider/LandingSlider';
import AboutSection from '../../components/AboutSection/AboutSection';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import infoCardBg from '../../assets/images/infocard-bg.jpg';
import webDesignBg from '../../assets/images/webdesign-bg.jpg';
import speaker from '../../assets/icons/speaker.svg';
import gear from '../../assets/icons/gear.svg';
import docs from '../../assets/icons/docs.svg';
import lock from '../../assets/icons/lock.svg';
import pinsIcon from '../../assets/icons/pins.svg';
import location from '../../assets/icons/location.svg';
import aEmail from '../../assets/icons/a-email.svg';
import phone from '../../assets/icons/phone.svg';
import instagram from '../../assets/icons/instagram.svg';
import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/twitter.svg';
import AnimationInView from '../../components/AnimationContainer/AnimationInView';
import FormComponent from '../../components/FormComponent/FormComponent';
import ContactCard from '../../components/ContactCard/ContactCard';
import './styles.css';

const HomePage = ({ contactsRef }) => {

    const sectionCards = [
        {
            title: 'Startup to Enterprise Solutions',
            text: 'It is a long established fact that a reader will be...',
            buttonText: 'Learn more',
            alt: 'speaker',
            icon: speaker,
            style: 'homePageCard',
        },
        {
            title: 'Disruptive Technologies',
            text: 'It is a long established fact that a reader will be...',
            buttonText: 'Learn more',
            alt: 'gear',
            icon: gear,
            style: 'homePageCard',
        },
        {
            title: 'Automated & Manual Quality Assurance',
            text: 'It is a long established fact that a reader will be...',
            buttonText: 'Learn more',
            alt: 'docs',
            icon: docs,
            style: 'homePageCard',
        },
        {
            title: 'Privacy Focussed',
            text: 'It is a long established fact that a reader will be...',
            buttonText: 'Learn more',
            alt: 'lock',
            icon: lock,
            style: 'homePageCard',
        },
    ];

    return (
        <>
            <LandingHero />
            <AboutSection
                sectionTitle={'About us'}
                columnOneText={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'}
                columnTwoText={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'}
            />
            <section className='homePageCardsWrapper'>
                {sectionCards.map((card, index) => (
                    <Card
                        key={index}
                        cardWrapperStyle={card.style}
                        src={card.icon}
                        alt={card.alt}
                        title={card.title}
                        text={card.text}
                        buttonText={card.buttonText}
                    />
                ))}
            </section>
            <LandingSlider />
            <AboutSection
                backgroundImage={`url(${webDesignBg})`}
                headerStyle='webDesignHeaderStyle'
                textStyle='webDesignTextStyle'
                sectionTitle={'web design'}
                columnOneText={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'}
                columnTwoText={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'}
            />
            <section className='homePageInputSectionWrapper' ref={contactsRef}>
                <ContentContainer containerStyle={'homePageInputContainer'}>
                        <div className='inputsWrapper'>
                            <Headers headerStyle='inputHeader' children={'Get in Touch'} />
                            <span className='inputsWrapperLine' />
                            <div className='inputDescription'>Feel free to drop us a form belong</div>
                            <FormComponent />
                            <AnimationInView inViewClassName='animateCardWrapper' posY={0} startPosY={0}>
                                <ContactCard />
                            </AnimationInView>
                        </div>
                </ContentContainer>
            </section>
        </>
    );
};

export default HomePage;