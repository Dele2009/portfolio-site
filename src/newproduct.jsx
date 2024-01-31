import './App.css'
import React, {useState} from 'react';
function New({image,breed,price,yesh}) {
  let [prices,setBreed]=useState("$"+price);
  function changename(){
    prices=price/2;
    setBreed("Discount price-$"+prices);
  }

  return (
    <>
      <div className="card">
        <div className='card-img'>
          <img src={image} />
        </div>
        <div className='card-text'>
          <p>
            <strong>Dog breed:</strong> {breed}
          </p>
          <p>
            <strong>Price:</strong> {prices}
          </p>
          <p>
            <strong>avaliable</strong> {yesh?'yes':'no'}
          </p>

        </div>
        <div className="btn-div">
          <button onClick={changename}>Get discount</button>
        </div>
      </div>
    </>
  )
}

export default New