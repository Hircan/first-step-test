import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Lazy, Pagination, Navigation } from "swiper";

export default function Banner() {
    return (
        <>
            <Swiper
                lazy={true}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Lazy, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img data-src="/images/icons/Frame 23.svg" className="swiper-lazy" width={"100%"} height={"210px"} />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img data-src="/images/icons/Frame 23.svg" className="swiper-lazy" width={"100%"} height={"210px"} />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img data-src="/images/icons/Frame 23.svg" className="swiper-lazy" width={"100%"} height={"210px"} />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img data-src="/images/icons/Frame 23.svg" className="swiper-lazy" width={"100%"} height={"210px"} />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img data-src="/images/icons/Frame 23.svg" className="swiper-lazy" width={"100%"} height={"210px"} />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
