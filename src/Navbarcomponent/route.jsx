import { Outlet } from 'react-router-dom'
import Mainportfolionavbar from './navbarportfolio'

export default function Navroot ({activeLink, HandleLinkClick}) {
  return (
    <>
      <Mainportfolionavbar activeLink={activeLink} HandleLinkClick={HandleLinkClick} />
      <Outlet/>
    </>
  )
}