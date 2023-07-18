import React from 'react';
import  {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination} from 'swiper/modules';
import { Image } from '@nextui-org/react';
import './Styles/HousePage.css'

export default function HousePageCarousel({data}) {
    return <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
    <Swiper modules={[Navigation, Pagination]} 
    navigation={true}
    pagination={true}
    spaceBetween={4}
    className='sliderFullStyle'
    style={{"--swiper-navigation-color": 'white', "--swiper-pagination-color": 'white'}}
    >
        <SwiperSlide >
            <Image className='imageSliderDisplay' src={data[0]}></Image>
        </SwiperSlide>
        <SwiperSlide >
            <Image className='imageSliderDisplay' src={data[1]}></Image>
        </SwiperSlide>
        <SwiperSlide >
            <Image className='imageSliderDisplay' src={data[2]}></Image>
        </SwiperSlide>
        <SwiperSlide >
            <Image className='imageSliderDisplay' src={data[3]}></Image>
        </SwiperSlide>
        <SwiperSlide >
            <Image className='imageSliderDisplay' src={data[4]}></Image>
        </SwiperSlide>
        <SwiperSlide >
            <Image className='imageSliderDisplay' src={data[5]}></Image>
        </SwiperSlide>
        <SwiperSlide>
            <Image className='imageSliderDisplay' src={data[6]}></Image>
        </SwiperSlide>
    </Swiper>
    </div>
}