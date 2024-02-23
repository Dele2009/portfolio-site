import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Mainroute from "./Navbarcomponent/Mainrouter";
import App from "./App.jsx";
import Mainportfolionavbar from "./Navbarcomponent/navbarportfolio";

import Homepage from "./Portfolio-Pages/Home";
import "./App.css"
import Errormessage from './Products-componets/errorPage';
import { Page, Page2, Page3, Page4,Page5 } from "./Products-componets/page";



function Portfolio() {
   

    
    return (
        
        <div className="body-port">
          
                <Router>

                    <Routes>
                        <Route path="/" element={<Mainportfolionavbar />}>
                            <Route path="" element={<Homepage />} />
                        </Route>
                        <Route path="*" element={<Errormessage />} />

                        <Route path="/products" element={<App/>} >
                            <Route
                                path="/products"
                                element={<Page2 />}
                            />
                            <Route
                                path="/products/page2"
                                element={<Page3 />}
                            />
                            <Route
                                path="/products/page3"
                                element={<Page4 />}
                            />
                            <Route
                                path="/products/page4"
                                element={<Page5 />}
                            />

                        </Route>
                    </Routes>
                </Router>
           

               
            
        </div>

        
    );
}

export default Portfolio;
