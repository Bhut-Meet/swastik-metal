// import React from 'react'

import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
          <section className='header'>
            <div className='container-fluid'>
            <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Products">All Product</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              All Types Of bolt
              </Link>
              <ul className="dropdown-menu dmenu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="#">J-bolt</Link></li>
                <li><Link className="dropdown-item" to="#">U-bolt</Link></li>
                <li><Link className="dropdown-item" to="#">Foundation-bolt</Link></li>
                <li><Link className="dropdown-item" to="#">U-clamp</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="#"></Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Nuts Visor </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Contact Us</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="#">Action</Link></li>
                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" to="#" aria-disabled="true">Disabled</Link>
            </li>
            </ul>
        </div>
      </div>
    </nav>
            </div>
          </section>
        </>
      )
}
