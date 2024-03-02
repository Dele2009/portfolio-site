import '../App.css'
import Intro from './intro'
import Aboutme from './about-me'
import Skills from './skills'
import webInfo from '../webvalues.json'
import { Link } from 'react-router-dom'
import { Scrollup } from '../mydepens'

import {
  Navigation,
  Scrollbar,
  EffectCoverflow,
  A11y,
  Autoplay,
  FreeMode
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import { motion, useScroll } from 'framer-motion'
import { Slide, Reveal, Fade, Zoom } from 'react-awesome-reveal'

function Homepage () {
  const { scrollYProgress } = useScroll()

  return (
    <>
      <Zoom delay={10}>
        <Intro />
      </Zoom>

      <Zoom delay={10}>
        <Aboutme />
      </Zoom>

      <Zoom delay={10}>
        <Skills />
      </Zoom>

      <Zoom delay={10}>
        <Slider />
      </Zoom>

      <motion.div
        className='progress-scroller main-nav'
        style={{ scaleX: scrollYProgress }}
      />
    </>
  )
}
export default Homepage

export const Slider = () => {
  const sliderdatas = webInfo.projects
  return (
    <>
      <section
        className='section-h d-flex align-items-center justify-content-center'
        id='works-section'
      >
        <div className='w-100'>
          <h1 className='pb-3 fs-1 code-style text-center'>My works</h1>
          <Swiper
            className='contf colp'
            id='car'
            // install Swiper modules
            modules={[
              Navigation,
              Scrollbar,
              EffectCoverflow,
              A11y,
              Autoplay,
              FreeMode
            ]}
            spaceBetween={0}
            loop={true}
            slidesPerView={1}
            centeredSlides={true}
            // effect={'coverflow'}
            // coverflowEffect={{
            //     rotate: 0,
            //     depth: 50,             // added (Depth of the prev and next slides)
            //     stretch: 0,            // added (Space between the slides)
            //     modifier: 1,            // added (Multiply the values of rotate, depth, and stretch)
            //     scale: 1,               // added (Size ratio of the prev and next slides)
            //     slideShadows: false,

            // }}

            breakpoints={{
              992: {
                slidesPerView: 2,
                spaceBetween: 20
              }
            }}
            scrollbar={{ draggable: true }}
            navigation
            pagination={{ clickable: true }}
            // autoplay={{
            //     delay: 2000
            // }}

            onSwiper={swiper => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {sliderdatas.map(sliderdata => {
              return (
                <SwiperSlide className='cont' key={sliderdata.Title}>
                  <Slidersection key={sliderdata.Title} {...sliderdata} />
                </SwiperSlide>
              )
            })}
          </Swiper>
          <div className='link-div-center'>
            <Link
              to='/projects'
              onClick={()=>Scrollup()}
              className=' btn border-0 bg-blue-grad text-uppercase text-light mt-4'
            >
              View more...
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export const Slidersection = ({ image, Title, description, projectlink }) => {
  return (
    <div className='d-flex gap-2 gap-lg-5 justify-content-center align-items-center py-5 py-sm-0 px-3 pro flex-column flex-sm-row main-nav'>
      <div>
        <img src={image} alt='logo' width={250} height={250} />
      </div>
      <div className='h-100 d-flex justify-content-center align-items-center'>
        <div>
          <a
            href={projectlink}
            target='_blank'
            className='trans-back drop-shadow h4'
          >
            {Title}
          </a>
          <p className='fw-medium d-none d-sm-inline-flex text-light'>
            {description}
          </p>
        </div>
      </div>F
    </div>
  )
}
