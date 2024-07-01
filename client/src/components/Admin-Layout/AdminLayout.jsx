import { NavLink, Navigate, Outlet } from 'react-router-dom';
// import { FaUserAlt, FaMessage } from "react-icons/fa";
import { FaMessage } from 'react-icons/fa6';
import { FaUserAlt, FaCode } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { IoIosAddCircle } from 'react-icons/io';
import { useAuth } from '../../store/auth';
import { useState } from 'react';
// import '../layouts/AdminLayout.css'; 

export const AdminLayout = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // State to detect mobile view
  

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust breakpoint for mobile as needed
  };
  window.addEventListener('resize', handleResize);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const closeNav = () => {
    setIsNavOpen(false);
  };

  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (!user.isAdmin) {
    return <Navigate to='/' />;
  }

  return (
    <>
      <header>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
          <div className='container'>
            <NavLink className='navbar-brand' to='/admin' onClick={closeNav}>
              Admin Dashboard
            </NavLink>
            <button
              onClick={toggleNav}
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}
              id='navbarNav'
            >
              <ul className={`navbar-nav ms-auto align-items-center justify-content-center ${isMobile ? 'd-flex flex-wrap' : ''}`}>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link d-flex align-items-center'
                    // to='/admin/users'
                    to='#'
                    onClick={closeNav}
                  >
                    <FaUserAlt /> <span className='icon-text ms-1'>Users</span>
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link d-flex align-items-center'
                    // to='/admin/contacts'
                    to='#'
                    onClick={closeNav}
                  >
                    <FaMessage />{' '}
                    <span className='icon-text ms-1'>Contacts</span>
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link d-flex align-items-center'
                    // to='/admin/AdminServices'
                    to='#'
                    onClick={closeNav}
                  >
                    <IoIosAddCircle />{' '}
                    <span className='icon-text ms-1'>Add Services</span>
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link d-flex align-items-center'
                    to='https://github.com/Bhut-Meet/MERN-2024'
                    onClick={closeNav}
                  >
                    <FaCode />{' '}
                    <span className='icon-text ms-1'>Project Code</span>
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link d-flex align-items-center'
                    to='#'
                    onClick={closeNav}
                  >
                    <FaHome /> <span className='icon-text ms-1'>Home</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* <Layout/> */}
      <Outlet />
    </>
  );
};
