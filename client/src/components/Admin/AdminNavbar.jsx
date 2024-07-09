import { Link, NavLink, Navigate, Outlet } from 'react-router-dom';
// import { FaUserAlt, FaMessage } from "react-icons/fa";
// import { FaMessage } from 'react-icons/fa6';
// import { FaUserAlt, FaCode } from 'react-icons/fa';
// import { FaHome } from 'react-icons/fa';
// import { IoIosAddCircle } from 'react-icons/io';
import { useAuth } from '../../store/auth';
import { useState } from 'react';
// import '../layouts/AdminLayout.css'; 

export const AdminNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
//   const [isMobile, setIsMobile] = useState(false); // State to detect mobile view
  


  const toggleNavbar = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setIsOpen(true);
    }
  };

  const closeNavbar = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
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
      <header className="navbar navbar-expand-lg fixed-top">
      <div className="container my-3 bg-custom rounded-5 custom-nav">
        <Link to="/admin" className="navbar-brand">Swastik Metal</Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
        //   aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''} ${isClosing ? 'closing' : ''}`}>
        <ul className="navbar-nav text-white">
            
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/userlist" onClick={closeNavbar}>
                    User List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/products" onClick={closeNavbar}>
                    All Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/orders" onClick={closeNavbar}>
                    All Orders
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/addproduct" onClick={closeNavbar}>
                    Add Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={closeNavbar}>
                    Home
                  </Link>
                </li>
              </ul>
              </div>
              </div>
            </header>
      {/* <Layout/> */}
      <Outlet />
    </>
  );
};
