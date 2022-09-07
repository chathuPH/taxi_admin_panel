import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import Branches from "./pages/branches/Branches"
import Categories from "./pages/categories/Categories"
import Vehicles from "./pages/vehicles/Vehicles"
import Drivers from "./pages/drivers/Drivers"
import Reports from "./pages/reports/Reports"
import Bookings from "./pages/bookings/Bookings"

ReactDOM.render(<BrowserRouter>
    <Navbar/>
    <Route exact path="/" component={Dashboard}/>
    <Route exact path="/branches" component={Branches}/>
    <Route exact path="/bookings" component={Bookings}/>
    <Route exact path="/categories" component={Categories}/>
    <Route exact path="/vehicles" component={Vehicles}/>
    <Route exact path="/reports" component={Reports}/>
    <Route exact path="/drivers" component={Drivers}/>
    
    {/* <Footer/> */}
    </BrowserRouter>,document.getElementById("root"));