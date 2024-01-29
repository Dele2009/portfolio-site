

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


  return (
    <>
      
      <Nav />
      <div className='main-div'>
        <New
          image={image1}
          breed="poodle"
          price="$200"
          yesh={false}
        />
        <New
          image={image4}
          breed="German shephard"
          price="$300"
          yesh={false}
        />
        <New
          image={image5}
          breed="lackpol"
          price="$400"
          yesh={false}
        />

        <New
          image={image2}
          breed="lackpol"
          price="$400"
          yesh={true}
        />
        <New
          image={image3}
          breed="lackpol"
          price="$400"
          yesh={false}
        />
        <New
          image={image6}
          breed="lackpol"
          price="$400"
          yesh={true}
        />
      </div>

    </>
  )
}

export default App
