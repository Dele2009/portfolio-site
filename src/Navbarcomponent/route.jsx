import { Outlet } from 'react-router-dom'
import Mainportfolionavbar from './navbarportfolio'

export default function Navroot ({activeLink, HandleLinkClick, theme, toggleTheme}) {
  return (
    <>
      <Mainportfolionavbar activeLink={activeLink} HandleLinkClick={HandleLinkClick} theme={theme} toggleTheme={toggleTheme} />
      <Outlet/>
    </>
  )
}