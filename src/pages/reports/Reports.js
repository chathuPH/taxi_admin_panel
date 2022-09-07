import React from "react";
import { Link } from "react-router-dom";
import "../dashboard/Dashboard.scss";

const Reports = () => {
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
              <h5 className="card-title">Sales Report</h5>
            </div>
          </div>
        </Link>
        <Link
          className="col-sm-6"
          to="/windrows"
          style={{ textDecoration: "none" }}
        >
          <div className="card text-center text-white bg-dark mt-5">
            <div className="card-body" id="link">
              <h5 className="card-title">Bookings Report</h5>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Reports;
