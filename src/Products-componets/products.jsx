import '../App.css';
import '../mybootstrap.css';

import { productTextTrucate } from "../style.jsx"
import React, { useState, useEffect, useRef } from 'react';
function New({ images, title, price, yesh, description }) {

  let [prices, setPrices] = useState("$" + price);
  let [show, setShow] = useState(false);
  let [showButton, setShowButton] = useState(false);


  const changename = () => {

    setPrices("$" + price / 2);
  }
  let testlength = useRef(null);

  useEffect(() => {
    if (testlength.current) {
      console.log(testlength.current.scrollHeight, testlength.current.clientHeight)
      if(testlength.current.scrollHeight !== testlength.current.clientHeight){
        setShowButton(true);
      }
      else{
        setShowButton(false)
      }

      

    }
  },[])



  return (
    <>

      <div className="card-nin">
        <div className='card-img'>
          <img src={images[0]} alt='mylogo' />
        </div>
        <div className='card-text'>
          <p className='m-0' ref={testlength} style={show ? null : productTextTrucate}>
            <strong>{title}</strong>
          </p>
          <div>
            <p className='mt-2' ref={testlength} style={show ? null : productTextTrucate}>
              {description}
            </p>
            <div className='d-flex justify-content-between'>
              <span></span>
              {showButton &&
                < button className=' m-0 p-0 subtle rounded border-0 rg-md-fs bg-transparent' onClick={() => { setShow(!show) }}>
                  {show ? "Read less..." : "Read more..."}
                </button>
              }


            </div>
          </div>


          <p className='m-0'>
            <strong>Avaliability:</strong> {yesh ? '✔' : '🚫'}
          </p>

        </div>
        <div className="d-flex justify-content-between align-items-center btn-div pt-3 ">
          <div className='m-0'>
            <p className='rg-md-fs'>
              <strong>{prices}</strong>
            </p>
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <button onClick={() => changename()} className='rounded py-2 px-4  color-btn '>Get discount</button>
          </div>
        </div>
      </div >
    </>
  );
}

export default New