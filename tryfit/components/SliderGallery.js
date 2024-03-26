



import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=' flex flex-col font-aventa items-center bg-white/15 rounded-2xl backdrop-blur-sm'>
            <img src="/images/Branch_Manager.png" /> 
            <h2 className='text-white text-4xl mt-6'>Mr Grish</h2>
            <h2 className='text-btn_hover text-3xl pb-6'>Branch Manager</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' flex flex-col font-aventa items-center bg-white/15 rounded-2xl backdrop-blur-sm'>
            <img src="/images/Branch_Manager.png" /> 
            <h2 className='text-white text-4xl mt-6'>Mr Grish</h2>
            <h2 className='text-btn_hover text-3xl pb-6'>Branch Manager</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' flex flex-col font-aventa items-center bg-white/15 rounded-2xl backdrop-blur-sm'>
            <img src="/images/Branch_Manager.png" /> 
            <h2 className='text-white text-4xl mt-6'>Mr Grish</h2>
            <h2 className='text-btn_hover text-3xl pb-6'>Branch Manager</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' flex flex-col font-aventa items-center bg-white/15 rounded-2xl backdrop-blur-sm'>
            <img src="/images/Branch_Manager.png" /> 
            <h2 className='text-white text-4xl mt-6'>Mr Grish</h2>
            <h2 className='text-btn_hover text-3xl pb-6'>Branch Manager</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' flex flex-col font-aventa items-center bg-white/15 rounded-2xl backdrop-blur-sm'>
            <img src="/images/Branch_Manager.png" /> 
            <h2 className='text-white text-4xl mt-6'>Mr Grish</h2>
            <h2 className='text-btn_hover text-3xl pb-6'>Branch Manager</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' flex flex-col font-aventa items-center bg-white/15 rounded-2xl backdrop-blur-sm'>
            <img src="/images/Branch_Manager.png" /> 
            <h2 className='text-white text-4xl mt-6'>Mr Grish</h2>
            <h2 className='text-btn_hover text-3xl pb-6'>Branch Manager</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
