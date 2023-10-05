import "./main-slider-component.scss";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PropTypes from 'prop-types';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { useNavigate } from "react-router-dom";

const MainSliderComponent = ({ slides }) => {
    const navigation = useNavigate();

    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={false}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                {slides.map((element, index) => (
                    <SwiperSlide key={index}><img src={element.img} alt="slider" />
                        <div className="swiper-slide__info">
                            <h1 className="header-first-text-desktop -slider">Все новости республики Марий Эл</h1>
                            <p className="regular-text-desktop -slider">{element.text}</p>
                            <button className="swiper-slide__button" onClick={() => navigation("/news/")}>
                                Перейти
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

MainSliderComponent.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.shape({
        img: PropTypes.string,
        text: PropTypes.string
    }))
}

export default MainSliderComponent;