import './style.scss'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { FaSearch } from 'react-icons/fa'
import { FaSignInAlt } from 'react-icons/fa'
import astroLogo from '../../assets/images/logo.svg'

function Header() {
  return (
    <header>
      <Navbar expand="lg" className="navigation">
        <Container>
          <div className="navigation__brand">
            <a href="#">
              <img src={astroLogo} width={200} height={43} alt="Astro" />
            </a>
            <Navbar.Toggle aria-controls="navigation__collapse" />
          </div>
          <Navbar.Collapse id="navigation__collapse">
            <ul className="navigation__list navigation__list--main">
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Home
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link active">
                  Astro
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Customize
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Technology
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Kits
                </a>
              </li>
            </ul>
            <ul className="navigation__list navigation__list--actions">
              <li className="navigation__item">
                <a href="#" className="button-search">
                  <FaSearch className="button-icon"></FaSearch>
                  <span>Search</span>
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="button-login">
                  <span>Login</span>
                  <FaSignInAlt className="button-icon"></FaSignInAlt>
                </a>
              </li>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
