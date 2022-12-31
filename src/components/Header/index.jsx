import astroLogo from '../../assets/images/logo.svg'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import { FaSearch } from 'react-icons/fa'
import { FaSignInAlt } from 'react-icons/fa'

import './style.scss'

function Header() {
  return (
    <header>
      <Navbar expand="lg" className="navigation">
        <Container>
          <div className="navigation__brand">
            <a href="#">
              <img src={astroLogo} width={260} height={56} alt="Astro" />
            </a>
            <Navbar.Toggle aria-controls="navigation__collapse" />
          </div>
          <Navbar.Collapse id="navigation__collapse">
            <Nav className="ms-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#" className="active">
                Astro
              </Nav.Link>
              <Nav.Link href="#">Customize</Nav.Link>
              <Nav.Link href="#">Technology</Nav.Link>
              <Nav.Link href="#">Kits</Nav.Link>
            </Nav>
            <Nav className="navigation__actions">
              <Nav.Link href="#" className="button button--search">
                <div className="button__icon">
                  <FaSearch></FaSearch>
                </div>
                <span>Search</span>
              </Nav.Link>
              <Nav.Link href="#" className="button button--login">
                <span>Login</span>
                <div className="button__icon">
                  <FaSignInAlt></FaSignInAlt>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
