import { Link } from "react-router-dom";

export const Header =()=> {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="#" className="navbar-brand" href="#">Swastik Metal</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" >Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/product" className="nav-link" >Products</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link" >About</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link" >Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link" >Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
