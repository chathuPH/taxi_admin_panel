import React from "react";
import "../dashboard/Dashboard.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import SalesRpt from "./components/SalesRpt";
import BookingsRpt from "./components/BookingsRpt";
import BranchesRpt from "./components/BranchesRpt";
import DriversRpt from "./components/DriversRpt";

const Reports = () => {
  return (
    <div className="container">
      <br />
      <h2>Reports</h2>
      <br />
      <Tabs defaultActiveKey="sales" id="Reports" className="mb-3" fill>
        <Tab eventKey="sales" title="Sales">
          <SalesRpt />
        </Tab>
        <Tab eventKey="bookings" title="Bookings">
          <BookingsRpt />
        </Tab>
        <Tab eventKey="branches" title="Branches">
          <BranchesRpt />
        </Tab>
        <Tab eventKey="drivers" title="Drivers">
          <DriversRpt />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Reports;
