import React from 'react';
import Headers from '../Headers/Headers';
import LinkButton from '../LinkButton/LinkButton';
import AnimationContainer from '../AnimationContainer/AnimationContainer';
import backgroundImg from '../../assets/images/background.jpg';
import './styles.css';

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
        <section className='homePageHero' style={sectionStyle}>
            <AnimationContainer motionClassName='homePageHeaderMotionWrapper' yPos={-200} xPos={0}>
                <Headers headerStyle='homePageSmallHeader' children={'Information technology'} />
                <Headers headerStyle='homePageHeader' children={'Torem'} />
            </AnimationContainer>
            <LinkButton linkButtonStyle='homePageLinkButton' children={'Contact us'}/>
        </section>
    );
};

export default LandingHero;