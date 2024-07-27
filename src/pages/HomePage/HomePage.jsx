import React from 'react';
import LandingHero from '../../components/LandingHero/LandingHero';
import Headers from '../../components/Headers/Headers';
import Card from '../../components/Card/Card';
import LandingSlider from '../../components/LandingSlider/LandingSlider';
import AboutSection from '../../components/AboutSection/AboutSection';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import webDesignBg from '../../assets/images/webdesign-bg.jpg';
import speaker from '../../assets/icons/speaker.svg';
import gear from '../../assets/icons/gear.svg';
import docs from '../../assets/icons/docs.svg';
import lock from '../../assets/icons/lock.svg';
import AnimationInView from '../../components/AnimationContainer/AnimationInView';
import FormComponent from '../../components/FormComponent/FormComponent';
import ContactCard from '../../components/ContactCard/ContactCard';
import './styles.css';

const HomePage = ({ contactsRef }) => {

    const renderCardText = (firstText, list = [], secondText) => {
        if (firstText && list && !secondText) {
            return (
                <div>{firstText}</div>
            )
        }

        if (firstText && list.length > 0 && secondText) {
            return (
                <>
                    <div>{firstText}</div>
                    <ul className="cardList">
                        {list.map((item) => (
                            <li>{item}</li>
                        ))}
                    </ul>
                    <div>{secondText}</div>
                </>
            )
        }
    };

    const sectionCards = [
        {
            title: 'Startup to Enterprise Solutions',
            text: renderCardText('We use specific and agile approaches to help Start-Ups transition into successful enterprises. Our Research and Development services assist in determining the most suitable technologies, libraries, and solutions for each unique case.'),
            buttonText: 'Learn more',
            alt: 'speaker',
            icon: speaker,
        },
        {
            title: 'Disruptive Technologies',
            text: renderCardText('We focus on a select range of programming languages, allowing us to gain deep experience, knowledge, and expertise in a specific stack. This approach enables us to deliver high-quality services tailored to different industries and in multiple ways. Our stack comprises Node.JS, Express.JS, Rabbit MQ, React.JS, Sequelize, Appolo Graphql and Material UI.'),
            buttonText: 'Learn more',
            alt: 'gear',
            icon: gear,
        },
        {
            title: 'Automated & Manual Quality Assurance',
            text: renderCardText('Software testing is an essential component of our development process. All software and applications are meticulously examined through a combination of manual and automated tests. Our testing specialists employ cutting-edge and innovative methodologies to ensure the delivery of high-quality results.'),
            buttonText: 'Learn more',
            alt: 'docs',
            icon: docs,
        },
        {
            title: 'Privacy Focussed',
            text: renderCardText(
                'One of our core values it\'s Privacy focus. We do realize that it\'s very sensitive and specific point, so we protect all our client\'s data:',
                    ['Information privacy', 'Communication privacy', 'Individual privacy'],
                'This commitment extends to ensuring the confidentiality, integrity, and availability of client information throughout our engagement. We implement state-of-the-art security measures, including encryption, secure access controls, and regular security audits, to safeguard against unauthorized access and data breaches.'
                ),
            buttonText: 'Learn more',
            alt: 'lock',
            icon: lock,
        },
    ];

    return (
        <>
            <LandingHero />
            <AboutSection
                sectionTitle={'About us'}
                columnOneText={'We are a software development team based in Ukraine, with experience that extends beyond our borders. Our expertise includes Automotive, Real Estate, SaaS, E-commerce and Blockchain development.'}
                columnTwoText={'We provide comprehensive software development services, from product planning to ongoing support. We have a passion for working with both Start-Ups and large companies worldwide. Our wide-ranging experience in various industries can be valuable and beneficial for your specific idea.'}
            />
            <section className='homePageCardsWrapper'>
                {sectionCards.map((card, index) => (
                    <Card
                        key={index}
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
                columnOneText={'It is widely acknowledged that every project begins with an idea. Yet, the crucial next step is invariably the design. Design embodies the concept, product, and essence of your project. To say it plainly, design is equally as critical as web development.'}
                columnTwoText={'Our team customizes our web design services to meet the distinct requirements of your company. This customization allows every aspect of our services to align with your company\'s products, services, and objectives. The outcome is a website that not only resonates with your brand but is also cherished by your visitors.'}
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