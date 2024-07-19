import React from 'react';
import ContentContainer from '../ContentContainer/ContentContainer';
import Headers from '../Headers/Headers';
import pin from '../../assets/icons/pin.svg';
import classNames from 'classnames';
import './styles.css';

const AboutSection = ({ backgroundImage, headerStyle, textStyle, sectionTitle, columnOneText, columnTwoText }) => {
    const sectionBackground = {
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
    };

    return (
        <section className='homePageAboutUs' style={sectionBackground}>
            <img className='homePageAboutUsImg' src={pin} alt={'Pin'}/>
            <ContentContainer>
                <Headers headerStyle={classNames('homePageAboutUsHeader', headerStyle)} children={sectionTitle} />
                <div className={classNames('homePageAboutUsTextWrapper', textStyle)}>
                    <div className='homePageAboutUsText'>
                        {columnOneText}
                    </div>
                    <div className='homePageAboutUsText'>
                        {columnTwoText}
                    </div>
                </div>
            </ContentContainer>
        </section>
    );
};

export default AboutSection;