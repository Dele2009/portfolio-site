import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import hero from '../port-img/heros.svg';
import webInfo from '../webvalues.json';
import { motion, useInView } from 'framer-motion'
import Lottie from 'lottie-react'
import animeData from '../lottieHome.json'



function Intro() {
  const position = useRef(null)
  const refs= useRef(null)
  const isInView = useInView(refs)

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
      <section
        className='section-h d-flex align-items-center justify-content-center colp main-bg vh-lg-100'
        id='hero-section'
      >
        <div className='container' ref={refs}>
          <div className='row fullscreen d-flex align-items-center gap-5 gap-md-3 justify-content-between flex-lg-row flex-column-reverse'>
            <motion.div className='col-lg col-md mb-md-0 mb-5'
              // initial={{ x: '-300vw' }}
              animate={{ x: isInView? 0 : '-300vw'}}
              transition={{delay: 0.9,duration: 2,}}
            >
              <h6 className='fs-4 home-text'>Hello, there! 👋</h6>
              <h1 className='fs-2 home-text'>I'm Dele Aminu</h1>
              <h1 className='trans-back hero-font'
              >
                <span ref={position} />
              </h1>

              <p className='fs-5 home-text'>
                A creative mind in the realm of web development. With a knack
                for turning ideas into interactive experiences, I'm on a mission
                to build a digital world that's both functional and
                aesthetically pleasing.
              </p>

              <motion.div
                // initial={{ x: '-300vw' }}
                animate={{ x: isInView? 0 : '-300vw' }}
                transition={{delay: 1.5,duration: 2,}}
              >
                <a

                  href={Resume}
                  target='_blank'
                  className=' btn bg-blue-grad border-0 text-uppercase text-light'
                >
                  Download resume
                </a>
              </motion.div>

            </motion.div>
            <motion.div className='col-lg col-md'
            //  initial={{ y: '-300vh' }}
             animate={{ y: isInView ? 0 : '-300vh' }}
             transition={{delay: 0.2,duration: 2,}}
            >
              <Lottie animationData={animeData}/>
              {/* <img className='img-fluid' src={hero} alt='' /> */}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Intro;
