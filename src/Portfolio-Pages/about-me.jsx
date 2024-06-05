import React, { useState, useRef } from 'react'
import me from '../port-img/about-me.svg'
import { Modal, Button } from 'react-bootstrap'
import { motion, useInView } from 'framer-motion'

function Aboutme() {
  const [show, setShow] = useState(false)
  const sectionInView = useRef(null)
  const isInView = useInView(sectionInView)
  return (
    <section
      className='section-h d-flex align-items-center justify-content-center colp vh-lg-100'
      id='about-section'
    >
      <div ref={sectionInView} className='container'>
        <div className=''>
          <h2 className='pb-3 fs-1 code-style text-center'>About me</h2>
        </div>
        <div className='row align-items-center gap-5 justify-content-between'>
          <motion.div className='col-lg-5'
           
           animate={{ x: isInView ? 0 : '-300vw' }}
             transition={{delay: 0.2,duration: 2, type: 'spring'}}
          >
            <img className='img-fluid' src={me} alt='about-logo' />
          </motion.div>
          <motion.div className='col-lg-5'
            animate={{ x: isInView? 0 : '300vw'}}
            transition={{delay: 0.2,duration: 2, type: 'spring'}}
          >
            <h1 className='text-uppercase trans-back'>Personal Details</h1>
            <p className='fs-5'>
              You'll often find me immersed in the world of HTML, CSS, and
              JavaScript, crafting responsive and dynamic web solutions. I'm a
              fan of the latest frontend frameworks, especially React, and love
              staying ahead of the curve with emerging technologies.
            </p>

            {/* modal to this to display more infomation*/}
            <motion.div
              animate={{ x: isInView? 0 : '300vw' }}
              transition={{delay: 0.75,duration: 2, type: 'spring'}}
            >
              <Button
                className='btn border-0 bg-blue-grad text-uppercase text-light'
                onClick={() => setShow(true)}
              >
                View Full Details
              </Button>
            </motion.div>

            <Modal
              show={show}
              onHide={() => setShow(false)}
              size='xl'
              fullscreen='md-down'
              aria-labelledby='contained-modal-title-vcenter'
              centered
              style={{ zIndex: '5000' }}

            >
              <Modal.Header closeButton className='main-nav border-0'>
                <Modal.Title id='contained-modal-title-vcenter'>
                  <code className='text-light'>
                    D.<span className='trans-back drop-shadow'>append(</span>
                    aminu
                    <span className='trans-back drop-shadow'>)</span>
                  </code>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className='pt-5 main-nav text-light d-flex justify-content-center align-items-center flex-column gap-5'>
                <div>
                  <h4 className='fs-3'>
                    🌐 <span className='trans-back'>Web Tech Lover</span>
                  </h4>
                  <p className='fs-5'>
                    I enjoy taking on the difficulties that come with frontend
                    programming, from React power to performance optimization.
                    Discovering the ideal balance between state-of-the-art
                    technology and an impeccable user experience is my passion.
                  </p>
                </div>

                <div>
                  <h4 className='fs-3'>
                    👩‍💻 <span className='trans-back'>Team Player</span>
                  </h4>
                  <p className='fs-5'>
                    I love working in teams. I love coordinating with backend
                    developers, brainstorming with designers, and working
                    closely with UX/UI specialists to turn thoughts into
                    aesthetically pleasing and useful realities.
                  </p>
                </div>

                <div>
                  <h4 className='fs-3'>
                    🌈 <span className='trans-back'>Beauty Meets Function</span>
                  </h4>
                  <p className='fs-5'>
                    For me, coding is an art. I take pride in crafting clean and
                    maintainable code that not only looks good but also ensures
                    a smooth ride for users across devices.
                  </p>
                </div>

                <div>
                  <h4 className='fs-3'>
                    🤝 <span className='trans-back'>Let's Create Together</span>
                  </h4>
                  <p className='fs-5'>
                    I'm currently on the lookout for exciting projects where I
                    can contribute my skills and passion for creating beautiful,
                    high-performance web applications. If you're as thrilled
                    about pushing the boundaries of frontend development as I
                    am, let's connect and explore the amazing things we can
                    build!
                  </p>
                </div>
              </Modal.Body>
            </Modal>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
export default Aboutme
