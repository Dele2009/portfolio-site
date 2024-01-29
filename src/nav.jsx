import './App.css'
import reactlogo from './assets/react.svg'

function Nav() {


  return (
    <>
      <header className="nav-bar">
        <nav className="nav-bar-inn">
          <div className='pad'>
            <img src={reactlogo} alt="" />
            <ul>
              <li className='active lis'>home</li>
              <li className='lis'>about</li>
              <li className='lis'>contact</li>
              <li className='lis'>feedback</li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );

}

export default Nav
// function Nav() {


//   return (
//     <>
//       <header className="nav-bar">
//         <nav className="nav-bar-inn">
//           <div className='pad'>
//             <img src={reactlogo} alt="" />
//             <ul>
//               <li className='active lis'>home</li>
//               <li className='lis'>about</li>
//               <li className='lis'>contact</li>
//               <li className='lis'>feedback</li>
//             </ul>
//           </div>
//         </nav>
//       </header>
//     </>
//   )
// }

