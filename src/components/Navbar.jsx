import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to={"/"}><img src="/images/logo.PNG" alt="InstaBuy" width="220" /></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeclassname="page" to={"/category/Celulares"}>Celulares</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeclassname="page" to={"/category/Impresoras"}>Impresoras</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeclassname="page" to={"/category/Tablets"}>Tablets</NavLink>
                                    </li>
                                                                       
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar;