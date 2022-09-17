import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <div className="row ">
        <Link
          className="col-sm-6 "
          to="/branches"
          style={{ textDecoration: "none" }}
        >
          <div className="card text-center text-white bg-dark mt-5">
            <div className="card-body" id="link">
              <h5 className="card-title">Branches</h5>
              <p className="card-text">Manage Branches</p>
            </div>
          </div>
        </Link>
        <Link
          className="col-sm-6"
          to="/categories"
          style={{ textDecoration: "none" }}
        >
          <div className="card text-center text-white bg-dark mt-5">
            <div className="card-body" id="link">
              <h5 className="card-title">Categories</h5>
              <p className="card-text">
                Manage Vehicle Categories
              </p>
            </div>
          </div>
        </Link>

        <Link
          className="col-sm-6"
          to="/vehicles"
          style={{ textDecoration: "none" }}
        >
          <div className="card text-center text-white bg-secondary mt-5">
            <div className="card-body" id="link">
              <h5 className="card-title">Vehicles</h5>
              <p className="card-text">Manage Vehicles</p>
            </div>
          </div>
        </Link>

        <Link
          className="col-sm-6"
          to="/drivers"
          style={{ textDecoration: "none" }}
        >
          <div className="card text-center text-white bg-secondary mt-5">
            <div className="card-body" id="link">
              <h5 className="card-title">Drivers</h5>
              <p className="card-text">Manage Drivers</p>
              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </Link>

        <Link
          className="col-sm-6"
          to="/reports"
          style={{ textDecoration: "none" }}
        >
          <div className="card text-center text-white bg-info mt-5">
            <div className="card-body" id="link">
              <h5 className="card-title">Reports</h5>
              <p className="card-text">Generate Reports for Analysis & Decision Making</p>
              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </Link>

        <Link
          className="col-sm-6"
          to="/bookings"
          style={{ textDecoration: "none" }}
        >
          <div className="card text-center text-white bg-danger mt-5">
            <div className="card-body" id="link">
              <h5 className="card-title">Bookings</h5>
              <p className="card-text">Manage Bookings</p>
              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </Link>
      </div>
      <br/>
      <br/>
    </div>
  );
};

export default Dashboard;
