import projectsinfo from '../projects.json'
import git_icon from '../port-img/github.svg'
import view_icon from '../port-img/view.svg'

import React, { useState, useEffect, useRef } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { motion } from 'framer-motion'
import { Scrollup } from '../animatescroll'

function Myprojects() {
  //   const basics = projectsinfo.hT_Cs_Btrp_projects
  //   const javs = projectsinfo.js_projects
  //   const nodes = projectsinfo.node_projects
  // useEffect(()=>{
    Scrollup()

  // },[])
  return (
    <>
      <article className='row p-3' style={{marginTop: '8rem'}}>
        {projectsinfo &&
          projectsinfo.map((proj, index) => {
            return <Projects key={index} {...proj} index={index} />
          })}
      </article>

      {/* <article className='row  px-3' style={{ paddingTop: '8rem' }}>
        {javs &&
          javs.map((jav, index) => {
            return <Projects key={index} {...jav} />
          })}
      </article>
      <article className='row  px-3' style={{ paddingTop: '8rem' }}>
        {nodes &&
          nodes.map((node, index) => {
            return <Projects key={index} {...node} />
          })}
      </article> */}
    </>
  )
}
export default Myprojects

const Projects = ({
  projectimgSrc,
  projectTitle,
  githubrepo,
  projectlink,
  projectfeatures,
  projectsstacks,
  index
}) => {
  const [show, setShow] = useState(false);
  const [showButton, setShowButton] = useState(false);
  let testlength = useRef(null);

  useEffect(() => {
    if (testlength.current) {
      console.log(testlength.current.scrollHeight, testlength.current.clientHeight)
      if (testlength.current.scrollHeight !== testlength.current.clientHeight) {
        setShowButton(true);
      }
      else {
        setShowButton(false)
      }
    }
  }, [])

  const trucateText = {
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box'
  }

  return (
    <>
      <motion.section
        className='col-md-4 pb-5 mb-5 px-md-5'
        initial={{opacity: 0, transform: 'scale(0.2)'}}
        whileInView={{opacity: 1,  transform: 'scale(1)'}}
        transition={{delay: 0.8, duration: .2,type: 'spring'}}
      >
        <div className='w-100'>
          <div className='w-100  rounded-4 position-relative' style={{ height: '300px' }}>
            <div className="position-absolute w-100 h-100 main-nav-hover rounded-3">
              <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                {githubrepo &&
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id="button-tooltip">Github Repo</Tooltip>}
                  >
                    <a
                      className='btn fs-5 bg-blue-grad border-0 text-uppercase text-light m-3 btn-slide'
                      href={githubrepo}
                      target='_blank'
                      data-bs-toggle="tooltip"
                      data-bs-title="Default tooltip"
                    >
                      <img src={git_icon} alt="github_icon" className='' />
                      {/* <i>Github</i> */}
                    </a>
                  </OverlayTrigger>
                }

                {projectlink &&
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id="button-tooltip">Live Preview</Tooltip>}
                  >
                    <a
                      className='btn fs-5 bg-blue-grad border-0 text-uppercase text-light m-3 btn-slide'
                      href={projectlink}
                      target='_blank'
                      data-bs-toggle="tooltip"
                      data-bs-title="Default tooltip"
                    >
                      <img src={view_icon} alt="preview_icon" className='' />
                      {/* <i>Preview</i> */}
                    </a>
                  </OverlayTrigger>
                }

              </div>
            </div>
            <img
              src={projectimgSrc}
              alt=''
              className='w-100 h-100 rounded-3'
              loading='lazy'
            />
          </div>
          <div className='main-na'>
            <p className='mx-auto trans-back text-capitalize fs-3 mt-3'>
              {projectTitle}
            </p>
            {/* <ul className='mx-auto text-light fs-5 text-none'>
              {projectfeatures.map((projectfeature, index) => {
                return <li key={index} className='py-1'>{projectfeature}</li>
              })}
            </ul> */}



            {/* <div className='d-flex justify-content-center align-items-center gap-5 py-3'>
              <a
                className='btn fs-5 bg-blue-grad border-0 text-uppercase text-light'
                href={githubrepo}
                target='_blank'
              >
                Github
              </a>
              <a
                className='btn fs-5 bg-blue-grad border-0 text-uppercase text-light'
                href={projectlink}
                target='_blank'
              >
                Live preview
              </a>
            </div> */}

          </div>

          <div ref={testlength} style={show ? null : trucateText} className='row m-auto rounded-bottom-4 text-uppercase w-100 h-100'>
            {projectsstacks.map((projectsstack, index) => {
              return <div className='col-3 btn text-light bg-dark m-2 k-to py-1 px-2' key={index} style={{ width: 'fit-content' }}># &nbsp;{projectsstack}</div>
            })}
          </div>

          {showButton &&
            <div className='d-flex justify-content-end' onClick={() => { setShow(!show) }} style={{ cursor: 'pointer' }}>
              <i className='trans-back'>
                {show ? "See less..." : "See more..."}
              </i>
            </div>
          }
        </div>
      </motion.section>
    </>
  )
}
