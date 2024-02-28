import { Outlet } from 'react-router-dom'
import Mainportfolionavbar from './navbarportfolio'

export default function Navroot () {
  return (
    <>
      <Mainportfolionavbar />
      <Outlet/>
    </>
  )
}
