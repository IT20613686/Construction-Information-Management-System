import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div class="container">
          <Link class="navbar-brand" href="#">
            <img
              src="https://placeholder.pics/svg/150x50/888888/EEE/Logo"
              alt="..."
              height="36"
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <Link class="nav-link navText" aria-current="page" to='/dashboard'>
                  Dashboard
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link navText" href="#">
                  Link
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;