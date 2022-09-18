import React from "react";
import { Link } from "react-router-dom";

const Navbar=()=> {
 
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#009688"}}>
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="navbar-collapse collapse justify-content-between align-items-center w-100"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav mx-auto text-md-center text-left">
                <Link className="nav-link px-4" to="/branches">
                  Branches
                </Link>
                <Link className="nav-link px-4" to="/categories">
                  Categories
                </Link>
                <Link className="nav-link px-4" to="/drivers">
                  Drivers
                </Link>

                <Link
                  className="nav-link px-4 navbar-brand mx-0 d-none d-md-inline text-light"
                  to="/"
                >
                  Admin Panel
                </Link>

                <Link className="nav-link px-4" to="/vehicles">
                  Vehicles
                </Link>
                <Link className="nav-link px-4" to="/reports">
                  Reports
                </Link>
                <Link className="nav-link px-4" to="/bookings">
                  Bookings
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }


export default Navbar;
