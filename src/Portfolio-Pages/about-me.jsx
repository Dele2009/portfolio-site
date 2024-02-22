import me from "../port-img/about-me.svg";


function Aboutme() {
    return (

        <section className="section-h d-flex align-items-center justify-content-center colp " id="about-section">

            <div className="container">
                <div className="">
                    <h2 className="pb-3 fs-1 code-style text-center">About me</h2>
                </div>
                <div className="row align-items-center gap-5 justify-content-between">
                    <div className="col-lg-5">
                        <img className="img-fluid" src={me} alt="about-logo" />
                    </div>
                    <div className="col-lg-5">

                        <h1 className="text-uppercase trans-back">Personal Details</h1>
                        <p className="fs-5">
                            Here, I focus on a range of items and features that we use in life without giving them a second thought. such as Coca Cola. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                        </p>
                         {/* <p>
                                My journey unfolds like a captivating novel, where every line of code tells a story of innovation and problem-solving. It's not about ghosts and futures; it's about crafting solutions that shape the present and lay the foundation for a brighter digital tomorrow.
                            </p> */}

                        {/* Remember to add modal to this to display more infomation*/}
                        <a href="" className=" btn border-0 bg-blue-grad text-uppercase text-light">View Full Details</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Aboutme;