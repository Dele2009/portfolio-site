import webInfo from "../webvalues.json";

const Skill = ({ skill, skillLogo, skillLength }) => {
    return (
        <div className="single-skill">
            <p className="d-flex fs-5 justify-content-between align-items-center">
                <img src={skillLogo} alt={`${skill}-logo`} id={`${skill}-logo`} width={60} height={60} /><span>{skillLength}%</span>
            </p>
            <div className="bg-grey w-100">
                <div className="skill2 bg-blue-grad"
                    style={{
                        width: skillLength + "%",
                    }}></div>
            </div>

        </div>
    )
}

function Skills() {
    const mySkills = webInfo.skillinfo;
    const newskills = mySkills.slice(0, 3);
    const newskills2 = mySkills.slice(3, 6);
    return (
        <>
            <section className="section-h d-flex justify-content-center align-items-center" id="skills-section">
                <div className="col-10">

                    <p className="fs-1 text-center code-style">Skills</p>
                    <div className="skill-con">
                        <div className="d-flex justify-content-center align-items-center flex-lg-row flex-column gap-5 pb-5 ">

                            {
                                newskills.map(newskill => {
                                    return <Skill key={newskill.skill} {...newskill} />
                                })
                            }

                        </div>
                        <div className="d-flex justify-content-center align-items-center flex-lg-row flex-column gap-5 pb-5 ">
                            {
                                newskills2.map(newskill2 => {
                                    return <Skill key={newskill2.skill} {...newskill2} />
                                })
                            }
                        </div>
                    </div>


                </div>
            </section>
        </>

    );
}
export default Skills;