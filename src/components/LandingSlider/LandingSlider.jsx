import React from 'react';
import Slider from 'react-slick';
import ContentContainer from '../ContentContainer/ContentContainer';
import SliderContent from '../SliderContent/SliderContent';
import arrow from '../../assets/icons/slider-arrow.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PinImg from '../PinImg/PinImg';
import AnimationInView from '../AnimationContainer/AnimationInView';
import './styles.css';

const LandingSlider = () => {

    const ArrowNext = ({onClick}) => (
        <button className='landingSliderArrowBtnRight' onClick={onClick}>
            <img className='landingSliderArrowNext' src={arrow} alt={"Next"} />
        </button>
    );

    const ArrowPrev = ({onClick}) => (
        <button className='landingSliderArrowBtnLeft' onClick={onClick}>
            <img className='landingSliderArrowPrev' src={arrow} alt={"Prev"} />
        </button>
    );

    const settings = {
        centerMode: false,
        adaptiveHeight: false,
        arrows: true,
        dots: false,
        infinite: true,
        fade: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    return (
        <section className='landingSlider'>
            <div className='landingSliderSvgWrapper'>
                <AnimationInView posY={0} startPosY={-100}>
                    <PinImg />
                </AnimationInView>
                <AnimationInView animDuration={1}  posY={0} startPosY={-100}>
                    <PinImg heightOfEl={'67px'} />
                </AnimationInView>
                <AnimationInView animDuration={1.3}  posY={0} startPosY={-100}>
                    <PinImg heightOfEl={'50px'} />
                </AnimationInView>
                <AnimationInView  posY={0} startPosY={-100}>
                    <PinImg />
                </AnimationInView>
            </div>
            <ContentContainer containerStyle='sliderContainer'>
                <Slider {...settings}>
                    <div>
                        <SliderContent title={"IT CONSULTING SERVICES"} />
                    </div>
                    <div>
                        <SliderContent title={"IT SERVICES"} />
                    </div>
                    <div>
                        <SliderContent title={"IT CONSULTING SERVICES"} />
                    </div>
                </Slider>
            </ContentContainer>
        </section>
    );
};

export default LandingSlider;