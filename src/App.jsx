

import './App.css'
import New from './newproduct'
import Nav from './nav'
import image1 from './pexels-francesco-ungaro-143657.jpg';
import image2 from './pexels-k-zoltan-342214.jpg';
import image3 from './pexels-kateryna-babaieva-2853422.jpg';
import image4 from './pexels-vladislav-tsankov-351406.jpg';
import image5 from './pexels-jakub-tabisz-5599041.jpg';
import image6 from '/vite.svg';

function App() {
  const productdetails = [
    {
      image: image1,
      breed: "poodle",
      price: 200,
      yesh: false

    },
    {
      image: image4,
      breed: "German shephard",
      price: 400,
      yesh: true

    },
    {
      image: image5,
      breed: "lackpol",
      price: 800,
      yesh: true

    },
    {
      image: image2,
      breed: "leelo",
      price: 800,
      yesh: false

    },
    {
      image: image3,
      breed: "lagjack",
      price: 100,
      yesh: false

    },
    {
      image: image6,
      breed: "fradool",
      price: 600,
      yesh: true

    }
  ]


  return (
    <>

      <Nav />
      <div className='main-div'>
        <New {...productdetails[0]}/>
        <New {...productdetails[1]}/>
        <New {...productdetails[2]}/>
        <New {...productdetails[3]}/>
        <New {...productdetails[4]}/>
        <New {...productdetails[5]}/>
      </div>

    </>
  )
}

export default App
