import "./main-slider-component.scss";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PropTypes from 'prop-types';
import { EffectFade, Navigation } from 'swiper/modules';

const MainSliderComponent = ({ slides }) => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={false}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation]}
                className="mySwiper"
            >
                {slides.map((element, index) => (
                    <SwiperSlide key={index}><img src={element.img} alt="slider" /></SwiperSlide>
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