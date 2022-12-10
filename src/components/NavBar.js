import React from 'react';
import "./NavBar.css";
import { NavLink, Link } from 'react-router-dom';

function NavBar() {
  return (
    <header>
      <div class='menubar'>
        <Link to='/' style={{ color: '#ea4e3a', textDecoration: 'none' }}>
          <div class='logo'>
            {/* <img src={logo} alt='logo' /> */}
            <h1>Travelling Adventure</h1>
          </div>
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink
                exact
                to='/'
                className={({ isActive }) =>
                  isActive ? 'link active' : 'link'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to='/houses'
                className={({ isActive }) =>
                  isActive ? 'link active' : 'link'
                }
              >
                Houses
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to='/reviews'
                className={({ isActive }) =>
                  isActive ? 'link active' : 'link'
                }
              >
                Reviews
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/contactUs'
                exact
                className={({ isActive }) =>
                  isActive ? 'link active' : 'link'
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
        <Link to='/login' id='menu-login-link'>
          <button type='button' id='menu-login-button'>
            LOG IN
          </button>
        </Link>
      </div>
    </header>
  );
  }
  
  export default NavBar;