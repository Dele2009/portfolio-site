import projectsinfo from '../projects.json'

function Myprojects () {
  const basics = projectsinfo.hT_Cs_Btrp_projects
  const javs = projectsinfo.js_projects
  return (
    <>
      <div className='row px-3 gap-3 '>
        {basics &&
          basics.map((basic, index) => {
            return <Projects key={index} {...basic} />
          })}
      </div>

      <div className='row px-3 gap-3 ' style={{ paddingTop: '8rem' }}>
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
      <div className=' col-lg '>
        <div className='w-100 rounded-4 shadow'>
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
            
            <div className='d-flex justify-content-center align-items-center gap-3 mt-3 text-uppercase  py-3 '>
              {projectsstacks.map((projectsstack, index) => {
                return <span className='btn text-light bg-dark ' key={index}>{projectsstack}</span>
              })}
            </div>

            <div className='d-flex justify-content-center align-items-center gap-5 stacks pt-3'>
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
