import projectsinfo from '../projects.json'
function Myprojects () {
  const basics = projectsinfo.hT_Cs_Btrp_projects
  const javs = projectsinfo.js_projects
  return (
    <>
      <div className='row px-5 gap-3 '>
        {basics.map((basic, index) => {
          return <Projects key={index} {...basic} />
        })}
      </div>

      <div className='row px-5 gap-3 '  style={{paddingTop:"8rem"}}>
        {javs.map((jav, index) => {
          return <Projects key={index} {...jav} />
        })}
      </div>
    </>
  )
}
export default Myprojects

const Projects = ({
  projectimgSrc,
  projectTitle,
  githubrepo,
  projectlink,
  projectfeatures
}) => {
  return (
    <>
      <div className=' col-lg '>
        <div className='rounded-4 shadow border-1'>
          <div className='w-100 ' style={{ height: '300px' }}>
            <img
              src={projectimgSrc}
              alt='project-pic'
              className='w-100 h-100 rounded-top-4'
            />
          </div>
          <div className='main-nav p-3 rounded-bottom-4'>
            <p className='mx-auto trans-back text-capitalize fs-3'>
              {projectTitle}
            </p>
            <ul className='mx-auto text-light fs-5 text-none'>
              {projectfeatures.map((projectfeature, index) => {
                return <li key={index}>{projectfeature}</li>
              })}
            </ul>
            <div className='d-flex justify-content-center align-items-center gap-5'>
              <a
                className='btn bg-blue-grad border-0 text-uppercase text-light'
                href={githubrepo}
                target='_blank'
              >
                Github
              </a>
              <a
                className='btn bg-blue-grad border-0 text-uppercase text-light'
                href={projectlink}
                target='_blank'
              >
                Live preview
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
