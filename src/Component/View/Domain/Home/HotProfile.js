import React, { useRef, useState } from "react";
import { H4 } from "../../Common/Typography";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Lazy } from "swiper";
import HotpeedCard from "./HotpeedCard";
import profileData from "./profileData";

export default function HotProfile() {
    return (
        <>
            <H4>멘티의 첫걸음으로!</H4>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {profileData.map((userProfile) => (
                    <SwiperSlide key={userProfile.id} style={{ width: "152px" }}>
                        <HotpeedCard image={userProfile.image} title={userProfile.title} subject={userProfile.subject} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
