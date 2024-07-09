// import { Link } from "react-router-dom";
// import "../components/header.css";
// import { useState, useEffect } from "react";
// import { useAuth } from "../store/auth";
// import { NavLink } from "react-bootstrap";
// import { CiShoppingCart } from "react-icons/ci";

// export const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isClosing, setIsClosing] = useState(false);

//   const { isLoggedIn } = useAuth();

//   const toggleNavbar = () => {
//     if (isOpen) {
//       setIsClosing(true);
//       setTimeout(() => {
//         setIsOpen(false);
//         setIsClosing(false);
//       }, 300);
//     } else {
//       setIsOpen(true);
//     }
//   };

//   const closeNavbar = () => {
//     setIsClosing(true);
//     setTimeout(() => {
//       setIsOpen(false);
//       setIsClosing(false);
//     }, 300);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth > 992 && isOpen) {
//         setIsOpen(false);
//         setIsClosing(false);
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [isOpen]);

//   return (
//     <header className="navbar navbar-expand-lg fixed-top">
//       <div className="container my-3 bg-custom rounded-5 custom-nav">
//         <Link to="/" className="navbar-brand">Swastik Metal</Link>
//         <button 
//           className="navbar-toggler" 
//           type="button" 
//           onClick={toggleNavbar}
//           aria-controls="navbarNav" 
//           aria-expanded={isOpen} 
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''} ${isClosing ? 'closing' : ''}`}>
//           <ul className="navbar-nav text-white">
//             <li className="nav-item">
//               <Link to="/" className="nav-link" onClick={closeNavbar}>Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/productpage" className="nav-link" onClick={closeNavbar}>Products</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/about" className="nav-link" onClick={closeNavbar}>About</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/contact" className="nav-link" onClick={closeNavbar}>Contact</Link>
//             </li>

//             { isLoggedIn ? (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/logout" onClick={closeNavbar}>Logout</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/profile" onClick={closeNavbar}>Profile</Link>
//                 </li>
//                 <li className="nav-item">
//                 <NavLink  className="cartnav-link p-1 rounded-5 " style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}> {/* Style button */}
//                   <CiShoppingCart style={{ fontSize: "1.5rem",}} /> {/* Adjust icon style */}
//                 </NavLink>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/register" onClick={closeNavbar}>Register</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/login" onClick={closeNavbar}>Login</Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </header>
//   );
// };
















// import { Link } from "react-router-dom";
// import "../components/header.css";
// import { useState, useEffect } from "react";
// import { useAuth } from "../store/auth";
// import { CiShoppingCart } from "react-icons/ci";

// export const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isClosing, setIsClosing] = useState(false);

//   const { isLoggedIn } = useAuth();

//   const toggleNavbar = () => {
//     if (isOpen) {
//       setIsClosing(true);
//       setTimeout(() => {
//         setIsOpen(false);
//         setIsClosing(false);
//       }, 300);
//     } else {
//       setIsOpen(true);
//     }
//   };

//   const closeNavbar = () => {
//     setIsClosing(true);
//     setTimeout(() => {
//       setIsOpen(false);
//       setIsClosing(false);
//     }, 300);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth > 992 && isOpen) {
//         setIsOpen(false);
//         setIsClosing(false);
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [isOpen]);

//   return (
// <header className="navbar navbar-expand-lg fixed-top">
//       <div className="container my-3 bg-custom rounded-5 custom-nav">
//         <Link to="/" className="navbar-brand">Swastik Metal</Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           onClick={toggleNavbar}
//           aria-controls="navbarNav"
//           aria-expanded={isOpen}
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''} ${isClosing ? 'closing' : ''}`}>
//           <ul className="navbar-nav text-white">
//             {/* ... existing list items */}
//             {isLoggedIn ? (
//               <>
//                 {/* <li className="nav-item">
//                   <Link className="nav-link" to="/logout" onClick={closeNavbar}>
//                     Logout
//                   </Link>
//                 </li> */}
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/" onClick={closeNavbar}>
//                     Home
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/allproducts" onClick={closeNavbar}>
//                     All Products
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/profile" onClick={closeNavbar}>
//                     Profile
//                   </Link>
//                 </li>
//                 <li className="nav-item d-flex align-items-center">
//                   <Link to="/cart" className="nav-link p-2 rounded-5" onClick={closeNavbar} style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
//                     <CiShoppingCart style={{ fontSize: "1.5rem", marginRight: "5px" }} /> {/* Adjust icon style */}
//                     Cart
//                   </Link>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/register" onClick={closeNavbar}>
//                     Register
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/login" onClick={closeNavbar}>
//                     Login
//                   </Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </header>


//   );
// };
























import { Link } from "react-router-dom";
import "../components/header.css";
import { useState, useEffect } from "react";
import { useAuth } from "../store/auth";
import { CiShoppingCart } from "react-icons/ci";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const { isLoggedIn } = useAuth();

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

  useEffect(() => {
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.navbar-collapse') && !event.target.closest('.navbar-toggler')) {
        closeNavbar();
      }
    });

    return () => {
      document.removeEventListener('click', (event) => {
        if (!event.target.closest('.navbar-collapse') && !event.target.closest('.navbar-toggler')) {
          closeNavbar();
        }
      });
    };
  }, []);

  return (
<header className="navbar navbar-expand-lg fixed-top">
      <div className="container my-3 bg-custom rounded-5 custom-nav">
        <Link to="/" className="navbar-brand">Swastik Metal</Link>
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
            {/* ... existing list items */}
            {isLoggedIn ? (
              <>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/logout" onClick={closeNavbar}>
                    Logout
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={closeNavbar}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/allproducts" onClick={closeNavbar}>
                    All Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile" onClick={closeNavbar}>
                    Profile
                  </Link>
                </li>
                <li className="nav-item d-flex align-items-center">
                  <Link to="/cart" className="nav-link p-2 rounded-5" onClick={closeNavbar} style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                    <CiShoppingCart style={{ fontSize: "1.5rem", marginRight: "5px" }} /> {/* Adjust icon style */}
                    Cart
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/register" onClick={closeNavbar}>
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login" onClick={closeNavbar}>
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>


  );
};