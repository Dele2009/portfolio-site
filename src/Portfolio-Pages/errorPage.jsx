import { Link } from "react-router-dom";


function Errormessage() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center flex-column h-100">
                <h1>Ooops 😮😗 this pageis not available</h1>
                <h3>Click <Link to="">here</Link> to get back to homepage 😎🤙</h3>
            </div>
        </>
    );
}
export default Errormessage;