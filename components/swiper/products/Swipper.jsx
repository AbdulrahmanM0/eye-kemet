"use client"
import React, { useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';

const TRACK_WIDTH = 300; 
const DRAG_WIDTH  = 100; 
const MAX_OFFSET  = TRACK_WIDTH - DRAG_WIDTH; 

export default function Swipper({ content = [] }) {
  const [dragOffset, setDragOffset] = useState(0);

  const handleProgress = useCallback((_swiper, progress) => {
    setDragOffset(Math.round(progress * MAX_OFFSET));
  }, []);

  return (
    <div className="flex flex-col">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={0}
        onProgress={handleProgress}
        breakpoints={{
          0:    { slidesPerView: 1, spaceBetween: 0},
          640:  { slidesPerView: 2, spaceBetween: 0 },
          1024: { slidesPerView: 4, spaceBetween: 0},
        }}
        className="mySwiper text-balance w-full"
      >
        {content.map((item, index) => (
          <SwiperSlide key={index}>
            {item}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* scrollbar */}
      <div className="hidden sm:flex justify-center mt-clamp-64">
        <div
          className="relative h-[2px] bg-white/20"
          style={{ width: TRACK_WIDTH }}
        >
          <div
            className="absolute top-0 h-full bg-gold100 transition-transform duration-150 ease-out"
            style={{
              width: DRAG_WIDTH,
              transform: `translateX(${dragOffset}px)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}