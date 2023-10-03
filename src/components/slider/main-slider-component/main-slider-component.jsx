import "./main-slider-component.scss";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import PropTypes from 'prop-types';

const MainSliderComponent = ({ slides }) => {
    return (
        <>
            <Swiper className="mySwiper">
                {slides.map((element, index) => (
                    <SwiperSlide><img src={element.img} alt="slider" /></SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

MainSliderComponent.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.shape({
        img: PropTypes.string,
    }))
}

export default MainSliderComponent;