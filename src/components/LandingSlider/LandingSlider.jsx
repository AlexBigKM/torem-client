import React from 'react';
import Slider from 'react-slick';
import ContentContainer from "../ContentContainer/ContentContainer";
import List from '../List/List';
import arrow from '../../assets/icons/slider-arrow.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './style.module.css';

const slides = {
    listOne: {
        1: 'Software Analysis',
        2: 'Workflow Analysis',
        3: 'Performance Analysis',
    },
    listTwo: {
        1: 'IT Strategy',
        2: 'Digital Transformation',
        3: 'Product Specifications',
    },
}


const listTwo = [
    'IT Strategy',
    'Digital Transformation',
    'Product Specifications',
]

const listThree = [
    'Software Tests',
    'System Maintenance',
]

const LandingSlider = () => {

    const ArrowNext = ({onClick}) => (
        <button className={styles.landingSliderArrowBtnRight} onClick={onClick}>
            <img className={styles.landingSliderArrowNext} src={arrow} alt={"Next"} />
        </button>
    );

    const ArrowPrev = ({onClick}) => (
        <button className={styles.landingSliderArrowBtnLeft} onClick={onClick}>
            <img className={styles.landingSliderArrowPrev} src={arrow} alt={"Prev"} />
        </button>
    );

    const settings = {
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
        // autoplay: true,
        // autoplaySpeed: 4000,
    };

    return (
        <section className={styles.landingSlider}>
            <ContentContainer>
                <Slider {...settings}>
                    <div>
                        <div>
                            <h3>List1</h3>
                            <ul>
                                <li>One</li>
                                <li>One</li>
                                <li>One</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>List2</h3>
                            <ul>
                                <li>Two</li>
                                <li>Two</li>
                                <li>Two</li>
                            </ul>
                        </div>
                    </div>
                    {/*<div>*/}
                    {/*    <List title={'It system analysis'} items={listOne} />*/}
                    {/*    <List title={'STRATEGIC PLANNING'} items={listTwo} />*/}
                    {/*    <List title={'PERFORMANCE MANAGEMENT'} items={listThree} />*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <List title={'It system analysis'} items={listOne} />*/}
                    {/*    <List title={'STRATEGIC PLANNING'} items={listTwo} />*/}
                    {/*    <List title={'PERFORMANCE MANAGEMENT'} items={listThree} />*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <List title={'It system analysis'} items={listOne} />*/}
                    {/*    <List title={'STRATEGIC PLANNING'} items={listTwo} />*/}
                    {/*    <List title={'PERFORMANCE MANAGEMENT'} items={listThree} />*/}
                    {/*</div>*/}
                </Slider>
            </ContentContainer>
        </section>
    );
};

export default LandingSlider;