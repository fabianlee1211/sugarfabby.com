import React from 'react'
import Button from '../../atoms/Button'
import logo from '../../../assets/images/my-logo.svg'
import './styles.scss'

const Navbar = () => {
  return (
    <nav className="Navbar">
      <img className="Navbar__Logo" src={logo} alt="fabian-logo" />
      <ul className="Navbar__NavItems">
        <li className="Navbar__NavItem">Projects</li>
        <li className="Navbar__NavItem">About Me</li>
        <Button>Email Me</Button>
      </ul>
    </nav>
  )
}

export default Navbar