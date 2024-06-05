import webInfo from '../webvalues.json'

const Skill = ({ skill, skillLogo, skillLength }) => {
  return (
    <div className='single-skill main-nav'>
      <div className='d-flex fs-5 justify-content-between align-items-center'>
        <img
          src={skillLogo}
          alt={`${skill}-logo`}
          id={`${skill}-logo`}
          width={60}
          height={60}
        />
        <span className='text-light'>{skillLength}%</span>
      </div>
      <div className='bg-grey w-100 mt-1 '>
        <div
          className='skill2 bg-blue-grad'
          style={{
            width: skillLength + '%'
          }}
        ></div>
      </div>
    </div>
  )
}

function Skills () {
  const mySkills = webInfo.skillinfo
  const newskills = mySkills.slice(0, 3)
  const newskills2 = mySkills.slice(3, 6)
  const newskills3 = mySkills.slice(6, 9)
  return (
    <>
      <section
        className='section-h d-flex justify-content-center align-items-center vh-lg-100'
        id='skills-section'
      >
        <div className='col-10'>
          <p className='fs-1 text-center code-style pb-5'>Skills</p>
          <div className='skill-con'>
            <div className='d-flex justify-content-center align-items-center flex-lg-row flex-column gap-5 pb-5 '>
              {newskills.map(newskill => {
                return <Skill key={newskill.skill} {...newskill} />
              })}
            </div>
            <div className='d-flex justify-content-center align-items-center flex-lg-row flex-column gap-5 pb-5 '>
              {newskills2.map(newskill2 => {
                return <Skill key={newskill2.skill} {...newskill2} />
              })}
            </div>
            <div className='d-flex justify-content-center align-items-center flex-lg-row flex-column gap-5 pb-5 '>
              {newskills3.map(newskill3 => {
                return <Skill key={newskill3.skill} {...newskill3} />
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Skills
