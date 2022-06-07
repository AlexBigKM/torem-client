import React from 'react';
import Slider from "react-slick";
import ContentContainer from "../ContentContainer/ContentContainer";

import styles from './style.module.css';
import List from "../List/List";

const listItems = () => {
    return (
        <>
            <li>Software Analysis</li>
            <li>Workflow Analysis</li>
            <li>Performance Analysis</li>
        </>
    )
}

const LandingSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        fade: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    return (
        <section className={styles.landingSlider}>
            <ContentContainer>
                <Slider {...settings}>
                    <List children={listItems} />
                </Slider>
            </ContentContainer>
        </section>
    );
};

export default LandingSlider;