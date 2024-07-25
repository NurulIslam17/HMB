import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <div className="container">
          <Link className="navbar-brand" to="/">
            <strong>HMS</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>


              <li className="nav-item active">
                <Link className="nav-link" to="/my-booking">
                  My Booking
                </Link>
              </li>

              <li className="nav-item active">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>

              <li className="nav-item active">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>

              <li className="nav-item active">
                <Link className="nav-link" to="/dashboard">
                  <strong>User</strong>
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
