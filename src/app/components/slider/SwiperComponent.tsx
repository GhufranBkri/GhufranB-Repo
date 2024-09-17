"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// You might need to create a separate CSS module or use a CSS-in-JS solution
// import styles from './Swiper.module.css';

interface SlideContent {
    imageSrc: string;
    title: string;
    description: string;
}

const SwiperComponent: React.FC = () => {
    const swiperParams: SwiperOptions = {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + ' custom-bullet"></span>';
            },
        },
        modules: [EffectCoverflow, Pagination],
    };

    const slides: SlideContent[] = [
        { imageSrc: 'https://swiperjs.com/demos/images/nature-1.jpg', title: 'Mountain View', description: 'A breathtaking mountain landscape' },
        { imageSrc: 'https://swiperjs.com/demos/images/nature-2.jpg', title: 'Serene Lake', description: 'Calm waters reflecting the sky' },
        { imageSrc: 'https://swiperjs.com/demos/images/nature-3.jpg', title: 'Forest Path', description: 'A winding trail through lush greenery' },
        { imageSrc: 'https://swiperjs.com/demos/images/nature-4.jpg', title: 'Desert Dunes', description: 'Golden sands stretching to the horizon' },
        { imageSrc: 'https://swiperjs.com/demos/images/nature-5.jpg', title: 'Ocean Sunset', description: 'Vibrant colors paint the evening sky' },
        { imageSrc: 'https://swiperjs.com/demos/images/nature-6.jpg', title: 'Snowy Peaks', description: 'Majestic mountains capped with snow' },
        { imageSrc: 'https://swiperjs.com/demos/images/nature-7.jpg', title: 'Tropical Beach', description: 'Crystal clear waters and white sand' },
        { imageSrc: 'https://swiperjs.com/demos/images/nature-8.jpg', title: 'Autumn Colors', description: 'A forest ablaze with fall foliage' },
        { imageSrc: 'https://swiperjs.com/demos/images/nature-9.jpg', title: 'Misty Valley', description: 'A foggy landscape at dawn' },
    ];

    return (
        <>
            <style jsx global>{`
                .custom-bullet {
                    width: 12px !important;
                    height: 12px !important;
                    text-align: center;
                    line-height: 20px;
                    margin-top: 20px;
                    font-size: 12px;
                    color: #000;
                    opacity: 0.25;
                    background: #999999 !important;
                }
                .custom-bullet:hover {
                    opacity: 0.7;
                }
                .swiper-pagination-bullet-active {
                    opacity: 1;
                    background: #1E90FF !important;
                }
            `}</style>
            <Swiper {...swiperParams}>
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={slide.imageSrc} alt={slide.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black to-transparent">
                                <h2 className="text-white text-2xl font-bold mb-2">{slide.title}</h2>
                                <p className="text-white text-sm mb-4">{slide.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default SwiperComponent;