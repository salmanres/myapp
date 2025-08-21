import React, { Fragment } from "react";
import Navbar from "./navigation/Navbar";
import Sidebar from "./navigation/Sidebar";
import { Outlet } from "react-router-dom";

function LandingPage() {
    return (
        <Fragment>
            <Navbar />
            <div className="parent-container">
                <Sidebar msg="this is a prop" />
                <Outlet />
            </div>
        </Fragment>
    )
}

// functional component...
// class component .... 

export default LandingPage;