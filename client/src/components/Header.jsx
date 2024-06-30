import { Link } from "react-router-dom";
import "../components/header.css";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleNavbar = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 300); // This should match the transition duration in CSS
    } else {
      setIsOpen(true);
    }
  };

  const closeNavbar = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300); // This should match the transition duration in CSS
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992 && isOpen) {
        setIsOpen(false);
        setIsClosing(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <header className="navbar navbar-expand-lg fixed-top">
      <div className="container my-3 bg-custom rounded-5 custom-nav">
        <Link to="#" className="navbar-brand">Swastik Metal</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleNavbar}
          aria-controls="navbarNav" 
          aria-expanded={isOpen} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''} ${isClosing ? 'closing' : ''}`}>
          <ul className="navbar-nav text-white">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeNavbar}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/product" className="nav-link" onClick={closeNavbar}>Products</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link" onClick={closeNavbar}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link" onClick={closeNavbar}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link" onClick={closeNavbar}>Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link" onClick={closeNavbar}>Register</Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link" onClick={closeNavbar}>Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};