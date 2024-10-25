import { NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            MIET
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                  Services
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    // <nav>
    //   <ul>
    //     <li>
    //       <NavLink to="/about">About</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/contact">Contact</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/services">Services</NavLink>
    //     </li>
    //   </ul>
    // </nav>
  );
}
