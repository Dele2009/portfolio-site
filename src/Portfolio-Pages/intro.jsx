import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import hero from '../port-img/heros.svg';
import webInfo from '../webvalues.json';
import { motion } from 'framer-motion'



function Intro() {
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
      <section
        className='section-h d-flex align-items-center justify-content-center colp main-bg'
        id='hero-section'
      >
        <div className='container'>
          <div className='row fullscreen d-flex align-items-center gap-5 gap-md-3 justify-content-between flex-lg-row flex-column-reverse'>
            <motion.div className='col-lg col-md mb-md-0 mb-5'
              initial={{ x: '-300vw' }}
              animate={{ x: 0 }}
              transition={{delay: 1,duration: 2, type: 'spring'}}
            >
              <h6 className='fs-4'>Hello, there! 👋</h6>
              <h1 className='fs-2'>I'm Dele Aminu</h1>
              <h1 className='fs-2 trans-back'>
                <span ref={position} />
              </h1>

              <p className='fs-5'>
                A creative mind in the realm of web development. With a knack
                for turning ideas into interactive experiences, I'm on a mission
                to build a digital world that's both functional and
                aesthetically pleasing.
              </p>

              <motion.div
                initial={{ x: '-300vw' }}
                animate={{ x: 0 }}
                transition={{delay: 1.5,duration: 2, type: 'spring'}}
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
             initial={{ y: '-300vh' }}
             animate={{ y: 0 }}
             transition={{delay: 1,duration: 2, type: 'spring'}}
            >
              <img className='img-fluid' src={hero} alt='' />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Intro;
