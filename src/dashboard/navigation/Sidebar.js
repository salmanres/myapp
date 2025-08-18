import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";


function Sidebar() {
    return (
        <Fragment>
            <div className="sidebar">
                <ul>
                    <li><Link to="/"><FaHome />   HOME</Link></li>
                    <li> <Link to="/contact-us"><MdContactPhone />   CONTACT US</Link></li>
                </ul>
            </div>
        </Fragment>
    )
}

export default Sidebar;