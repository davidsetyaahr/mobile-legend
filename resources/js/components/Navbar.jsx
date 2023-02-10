import '../../css/Style.scss'

//import React
import React from 'react';

//import Link
import { Link } from '@inertiajs/inertia-react';

export default function Navbar  ({data}) {
    return (
        <nav className="navbar fixed-top nav-top py-0 navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="https://buatlogoonline.com/wp-content/uploads/2022/10/Logo-Mobile-Legends.png" alt="" width="150px"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Prize Pool</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Rules</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Game Day</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="btn btn-primary px-45 py-25 fw-bold btn-circle" href="#">Register</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>    
    )
}