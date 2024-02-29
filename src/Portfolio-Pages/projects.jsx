import projectsinfo from '../projects.json'

function Myprojects () {
  const basics = projectsinfo.hT_Cs_Btrp_projects
  const javs = projectsinfo.js_projects
  return (
    <>
      <div className='row justify-content-center px-3 gap-3 '>
        {basics &&
          basics.map((basic, index) => {
            return <Projects key={index} {...basic} />
          })}
      </div>

      <div className='row justify-content-center px-3 gap-3 ' style={{ paddingTop: '8rem' }}>
        {javs &&
          javs.map((jav, index) => {
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
  projectfeatures,
  projectsstacks
}) => {
  return (
    <>
      <div className=' col-md '>
        <div className='w-100 rounded-4 shadow'>
          <div className='w-100 ' style={{ height: '300px' }}>
            <img
              src={projectimgSrc}
              alt='project-pic'
              className='w-100 h-100 rounded-top-4'
            />
          </div>
          <div className='main-nav p-3'>
            <p className='mx-auto trans-back text-capitalize fs-3'>
              {projectTitle}
            </p>
            <ul className='mx-auto text-light fs-5 text-none'>
              {projectfeatures.map((projectfeature, index) => {
                return <li key={index} className='py-1'>{projectfeature}</li>
              })}
            </ul>
            
           

            <div className='d-flex justify-content-center align-items-center gap-5 py-3'>
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
            </div>
          </div>
          <div className='d-flex justify-content-center rounded-bottom-4 align-items-center gap-3 text-uppercase main-nav-light  py-3 '>
              {projectsstacks.map((projectsstack, index) => {
                return <span className='btn text-light rounded-4  k-to' key={index}>{projectsstack}</span>
              })}
            </div>
        </div>
      </div>
    </>
  )
}
