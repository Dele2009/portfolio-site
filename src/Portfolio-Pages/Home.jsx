import '../App.css'
import hero from '../port-img/heros.svg'
import Aboutme from './about-me'
import Skills from './skills'
import webInfo from '../webvalues.json'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js';
import { Link } from 'react-router-dom'

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
  const position = useRef(null)

  useEffect(() => {
    const typed = new Typed(position.current, {
      strings: [
        'A Front-end Developer',
        'Have an idea 💡 ?',
        "Let's get to work"
      ],
      typeSpeed: 100,
      backSpeed: 100,
      smartBackspace: true,
      loop: true,
      loopCount: Infinity
    })

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy()
    }
  }, [])
  const Resume = webInfo.Documents.resume

  return (
    <>
      <Zoom delay={10}>
        <section
          className='section-h d-flex align-items-center justify-content-center colp main-bg'
          id='hero-section'
        >
          <div className='container'>
            <div className='row fullscreen d-flex align-items-center gap-5 gap-md-0 justify-content-between flex-lg-row flex-column-reverse'>
              <div className='col-lg col-md mb-md-0 mb-5'>
                <h6 className='fs-4'>Hello, there! 👋</h6>
                <h1 className='fs-2'>I'm Dele Aminu</h1>
                <h1 className='fs-2 trans-back'>
                  <span ref={position} />
                </h1>

                <p className='fs-5'>
                  A creative mind in the realm of web development. With a knack
                  for turning ideas into interactive experiences, I'm on a
                  mission to build a digital world that's both functional and
                  aesthetically pleasing.
                </p>

                <a
                  href={Resume}
                  target='_blank'
                  className=' btn bg-blue-grad border-0 text-uppercase text-light'
                >
                  Download resume
                </a>
              </div>
              <div className='col-lg col-md'>
                <img className='img-fluid' src={hero} alt='' />
              </div>
            </div>
          </div>
        </section>
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
      <section className='section-h d-flex align-items-center justify-content-center' id='works-section'>
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
              to='/'
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

export const Slidersection = ({ image, Title, description }) => {
  return (
    <div className='d-flex gap-2 gap-lg-5 justify-content-center align-items-center py-5 py-sm-0 px-3 pro flex-column flex-sm-row main-nav'>
      <div>
        <img src={image} alt='logo' width={250} height={250} />
      </div>
      <div className='h-100 d-flex justify-content-center align-items-center'>
        <div>
          <h4 className='trans-back drop-shadow'>{Title}</h4>
          <p className='fw-medium d-none d-sm-inline-flex text-light'>{description}</p>
        </div>
      </div>
    </div>
  )
}
