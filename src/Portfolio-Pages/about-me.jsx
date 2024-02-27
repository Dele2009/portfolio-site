import React, { useState } from 'react'
import me from '../port-img/about-me.svg'
import { Modal, Button } from 'react-bootstrap'

function Aboutme () {
  const [show, setShow] = useState(false)
  return (
    <section
      className='section-h d-flex align-items-center justify-content-center colp '
      id='about-section'
    >
      <div className='container'>
        <div className=''>
          <h2 className='pb-3 fs-1 code-style text-center'>About me</h2>
        </div>
        <div className='row align-items-center gap-5 justify-content-between'>
          <div className='col-lg-5'>
            <img className='img-fluid' src={me} alt='about-logo' />
          </div>
          <div className='col-lg-5'>
            <h1 className='text-uppercase trans-back'>Personal Details</h1>
            <p className='fs-5'>
              You'll often find me immersed in the world of HTML, CSS, and
              JavaScript, crafting responsive and dynamic web solutions. I'm a
              fan of the latest frontend frameworks, especially React, and love
              staying ahead of the curve with emerging technologies.
            </p>

            {/* modal to this to display more infomation*/}
            <Button
              className='btn border-0 bg-blue-grad text-uppercase text-light'
              onClick={() => setShow(true)}
            >
              View Full Details
            </Button>
            <Modal
              show={show}
              onHide={() => setShow(false)}
              size='xl'
              fullscreen='md-down'
              aria-labelledby='contained-modal-title-vcenter'
              centered
              
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
          </div>
        </div>
      </div>
    </section>
  )
}
export default Aboutme
