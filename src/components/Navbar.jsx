import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import {
    Link
} from "react-router-dom";
import  CartContext from '../context/addtocart/Context';

function CusNavbar() {

    const [state, dispatch] = useContext(CartContext);

    console.log(state);


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold fs-4" to="#">E-commerce</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>

                    </ul>
                    <form className="d-flex" role="search">
                        <Link className="btn btn-outline-success" type="submit" to="/login">
                            <i className="fa fa-sign-in me-1"></i> Login
                        </Link>
                        <Link className="btn btn-outline-success ms-2" type="submit" to="/register">
                            <i className="fa fa-user-plus me-1"></i>Register
                        </Link>
                        <Link className="btn btn-outline-success ms-2" type="submit" to="/cart">
                            <i className="fa fa-shopping-cart me-1"></i>Cart (0)
                        </Link>
                    </form>
                </div>
            </div>
        </nav>
    )
};

export default CusNavbar
