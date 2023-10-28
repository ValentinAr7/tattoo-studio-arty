import React from 'react';
// import testimonial data
import { testimonialData } from '../data';
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn } from '../variants';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { IoIosStar } from '../../node_modules/react-icons/io'




<script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>


export const Testimonial = () => {


  const [currentSlide, setCurrentSlide] = useState(0)

  function handleForward(e) {
    setCurrentSlide(currentSlide + 1);

  }

  function handleBack(e) {
    setCurrentSlide(currentSlide - 1);
  }

  return (
    <section id='reviews' className='bg-[#F9F9F9] section relative mt-[40px] pb-0 pt-16 lg:mt-0'>

      {/* Motion effect */}
      <motion.section
        variants={fadeIn('up')}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
        className='pb-[40px] pt-[40px] lg:pb-[40px] lg:pt-0'
      >

        {/* useState attached to buttons to slide between elements */}
        <div className='container mx-auto'>
          <Swiper initialSlide={currentSlide}>
            {testimonialData.map((slide, index) => {
              // destructure slide
              const { quoteImg, message, name, occupation, btnIconRight, btnIconLeft } = slide;

              return (
                <SwiperSlide key={index}>
                  <div className='max-w-[1200px] mx-auto flex flex-col items-center lg:flex-row lg:items-start gap-x-[38px]'>
                    <div className='w-[154px] h-[109px] mb-5'>
                      <img src={quoteImg} alt='' />
                    </div>
                    <div className='flex-1 lg:mt-[54px]'>
                      <div className='text-2xl lg:text-[36px] leading-normal mb-6 lg:mb-12'>
                        {message}
                      </div>

                      <div className='flex items-center text-xl lg:text-2xl font-primary'>
                        <div className='font-semibold'>{name}</div>
                        <span className='mx-4'>|</span>
                        <div className='font-light'>{occupation}</div>



                      </div>
                      <div className='w-8 h-8 mt-4 flex'>
                        <button id='back' className=' w-8 h-8 cursor-pointer ' onClick={handleBack} >{btnIconLeft}</button>
                        <label className='black font-bold cursor-pointer' >Предишен</label>

                        <p className='font-bold px-2'>|</p>

                        <label className='black font-bold cursor-pointer' >Следващ</label>
                        <button id='forward' className=' bg-none cursor-pointer' onClick={handleForward} >{btnIconRight}</button>
                      </div>

                      <div className='flex'>
                        <a href='https://www.google.com/maps/place/TATTOO+ARTY+Studio/@42.7140736,23.2530242,17z/data=!4m18!1m9!3m8!1s0x40aa9b2eb648f3c1:0x1eee948096254a35!2sTATTOO+ARTY+Studio!8m2!3d42.7139948!4d23.2560497!9m1!1b1!16s%2Fg%2F11t6mv3p6x!3m7!1s0x40aa9b2eb648f3c1:0x1eee948096254a35!8m2!3d42.7139948!4d23.2560497!9m1!1b1!16s%2Fg%2F11t6mv3p6x'>
                      <p className=' font-bold mr-3'>Google Reviews</p>
                      <div className='flex'>
                        {Array.from({ length: 5 }, (_, index) => (
                          <IoIosStar key={index} className=' text-yellow-400 font-bold 24px h-full' />
                        ))}
                      </div>
                      </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

              );
            })}
          </Swiper>
        </div>
      </motion.section>
    </section>

  );
};

export default Testimonial;
