'use client'

import { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'


import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import '@/app/ui/carousel.css'


function Slider({ item }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          '--swiper-navigation-size': '20px',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper2'
      >
        <SwiperSlide>
          <img src={item.img_1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item.img_2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item.img_3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item.img_4} />
        </SwiperSlide>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img src={item.img_1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item.img_2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item.img_3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item.img_4} />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider