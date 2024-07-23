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

    const animationElement = [
        {
            positionY: 0,
            startPositionY: -100,
        },
        {
            duration: 1,
            positionY: 0,
            startPositionY: -100,
            elementHeight: '67px',
        },
        {
            duration: 1.3,
            positionY: 0,
            startPositionY: -100,
            elementHeight: '50px',
        },
        {
            positionY: 0,
            startPositionY: -100,
        },
    ];

    const sliderContent = [
        {
            title: 'IT CONSULTING SERVICES',
        },
        {
            title: 'IT SERVICES',
        },
        {
            title: 'IT CONSULTING SERVICES',
        },
    ];

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
                {animationElement.map((el, index) => (
                    <AnimationInView key={index} animDuration={el.duration} posY={el.positionY} startPosY={el.startPositionY}>
                        <PinImg heightOfEl={el.elementHeight} />
                    </AnimationInView>
                ))}
            </div>
            <ContentContainer containerStyle='sliderContainer'>
                <Slider {...settings}>
                    {sliderContent.map((item, index) => (
                        <div key={index}>
                            <SliderContent title={item.title} />
                        </div>
                    ))}
                </Slider>
            </ContentContainer>
        </section>
    );
};

export default LandingSlider;