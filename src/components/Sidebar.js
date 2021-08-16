import React from "react";
import {Link} from 'react-router-dom';

function Sidebar(){
    return(
        <>
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </Link>
            <hr className="sidebar-divider my-0"/>
            <li className="nav-item active">
                <Link className="nav-link" to="/dashboard">
                    <i className="fas fs-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </Link>
            </li>
            <hr className="sidebar-divider"/>
            <div className="sidebar-heading">
                Interface
            </div>
            <li className="nav-item">
                <Link className="nav-link" to="/users">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Users</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/products">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Products</span>
                </Link>
            </li>
            
            <hr className="sidebar-divider"/>
            
           <div className="text-center d-none d-md-inline">
               <button className="rounded-circle border-0" id="sidebarToggle"></button>
           </div>

        </ul>
        </>
    );
}

export default Sidebar;