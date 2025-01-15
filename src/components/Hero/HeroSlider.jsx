import image1 from '../../assets/1.png';
import image2 from '../../assets/2.png';
import image3 from '../../assets/3.png';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCube, EffectFade } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-fade";
import 'swiper/css';

import  "./HeroSlider.css";

const HeroSlider = () => {
    return (
        
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                loop={true}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: false }}
                autoplay={{ delay: 6000, disableOnInteraction: false }}

                className='heroSlider relative w-full h-full'
            >
                <SwiperSlide><img src={image1} className='w-full h-full' alt="" /></SwiperSlide>
                <SwiperSlide><img src={image2} className='w-full h-full' alt="" /></SwiperSlide>
                <SwiperSlide><img src={image3} className='w-full h-full' alt="" /></SwiperSlide>
                

                <div className='absolute text-gray-900 top-1/2 -translate-y-1/2 left-16 z-50 flex flex-col justify-start items-start gap-8'>
                    <p className='text-xl max-w-[500px] font-normal'>Get the best quality of products on the market</p>
                    <h3 className='font-bold text-5xl '>WEAR YOUR PASSION</h3>
                    <button className='bg-gray-950 text-white px-5 py-2 rounded-lg font-semibold hover:bg-gray-900 duration-100 '>Show shop</button>
    
                </div>
        
            </Swiper>

    );
}

export default HeroSlider;