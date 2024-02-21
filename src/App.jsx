// App.js
import './App.css';


// import { Fetchdata1, Fetchdata2, Fetchdata3, Fetchdata4 } from './fetch.js';
import Routeses from "./Navbarcomponent/RouteLayout";
// import React, { useState, useEffect } from 'react';
// import productdetails from "./webvalues.json";

import { Link, Outlet } from "react-router-dom"; // Import BrowserRouter

function App() {
 

  return (
    <div>
      <Routeses />
      <Outlet />
    </div>
  );
}

export default App;
