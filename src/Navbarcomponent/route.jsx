import { Outlet } from 'react-router-dom'
import Mainportfolionavbar from './navbarportfolio'

export default function Navroot ({activeLink, HandleLinkClick, Theme, toggleTheme}) {
  return (
    <>
      <Mainportfolionavbar activeLink={activeLink} HandleLinkClick={HandleLinkClick} Theme={Theme} toggleTheme={toggleTheme} />
      <Outlet/>
    </>
  )
}