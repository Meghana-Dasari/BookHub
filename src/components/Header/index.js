import {Component} from 'react'

import {Link, withRouter} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

import {AiFillCloseCircle} from 'react-icons/ai'
import Cookies from 'js-cookie'

import './index.css'

class Header extends Component {
  state = {
    isClick: false,
  }

  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  scrollOption = () => (
    <ul className="options-container">
      <li className="nav-menu-item">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="nav-menu-item">
        <Link to="/shelf" className="nav-link">
          Bookshelves
        </Link>
      </li>
      <button className="logout-desktop-button" type="button">
        Logout
      </button>
      <button
        type="button"
        className="close-button"
        onClick={this.onClickNavbar}
      >
        <AiFillCloseCircle className="close-logo" />
      </button>
    </ul>
  )

  onClickNavbar = () => {
    this.setState(prevState => ({
      isClick: !prevState.isClick,
    }))
  }

  render() {
    const {isClick} = this.state

    return (
      <nav className="nav-header" fixed="true">
        <div className="nav-content">
          <div className="navbar-mobile-logo-main-container">
            <div className="navbar-mobile-logo-container">
              <Link to="/">
                <img
                  src="https://res.cloudinary.com/gowthamithati/image/upload/v1645075756/Group_7731BookHublogo_jermng.png"
                  alt="website logo"
                  className="website-logo"
                />
              </Link>
              <button
                type="button"
                className="nav-bars-button"
                onClick={this.onClickNavbar}
              >
                <FaBars className="nav-bars" />
              </button>
            </div>
            <div className="scroll-options-container">
              {isClick && this.scrollOption()}
            </div>
          </div>
          <div className="navbar-desktop-container">
            <Link to="/" className="nav-link">
              <img
                src="https://res.cloudinary.com/gowthamithati/image/upload/v1645075756/Group_7731BookHublogo_jermng.png"
                alt="website logo"
                className="website-logo"
              />
            </Link>
            <ul className="nav-menu">
              <li className="nav-menu-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link to="/shelf" className="nav-link">
                  Bookshelves
                </Link>
              </li>
              <button
                className="logout-desktop-button"
                onClick={this.onClickLogout}
                type="button"
              >
                Logout
              </button>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Header)
