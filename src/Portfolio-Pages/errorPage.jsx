import { Link } from "react-router-dom";
import "../404.css"
import errorImage from '../port-img/404.svg'


function Errormessage() {
    return (
        <>
            {/* <div classNameName="d-flex justify-content-center align-items-center flex-column h-100">
                <h1>Ooops 😮😗 this pageis not available</h1>
                <h3>Click <Link to="">here</Link> to get back to homepage 😎🤙</h3>
            </div> */}

            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 align-self-center">
                            <img src={errorImage} alt="404" />
                        </div>
                        <div className="col-md-6 align-self-center">
                            <h1 >404</h1>
                            <h2>UH OH! You're lost.</h2>
                            <p>The page you are looking for does not exist.
                                How you got here is a mystery. But you can click the button below
                                to go back to the homepage.
                            </p>
                            <Link to='/' className="green">Go Back To Homepage</Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
export default Errormessage;