import React from 'react'

import { Data } from '../Component/Data'

import "../styles/Testimonial.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
import { Pagination } from "swiper"


function Testimonial() {
  return (

<section className='testimonial continer section' id='testimonial'>
<h2 className='testi'> TESTIMONIAl</h2>
    <h2 className='section_tittle'>My clents review </h2>
    <span className='section__subtitle'></span>
    <Swiper className='testimonial__container' 
    loop={true}
grabCursor={true}
spaceBetween={24}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        576: {
          slidesPerView: 0,
        },
        768: {
          spaceBetween:48 ,

        },
       
      }}
      modules={[Pagination]}>
        {
            Data.map(({id,image,title,describe})=>{
                return(
                   <SwiperSlide className='testimonial__card' key={id}>
                    <img src={image} alt="" className='testimonial__img' />
                    <h3 className='testimonial__name'>{title}</h3>
                    <p className='testimonial__description'>{describe}</p>
                   </SwiperSlide>
                )
            })
        }

    </Swiper>
</section>
    )
}

export default Testimonial