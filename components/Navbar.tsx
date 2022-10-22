import { NextPage } from "next";

import Link from "next/link";

import styles from '../styles/Navbar.module.css';

const Navbar: NextPage = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ul className="navbar-nav">
                    <li className="p-0 m-2 text-white">
                        <Link href='/'>Home</Link>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <div className="navbar-nav">
                    <ul className="navbar-nav">
                        <li className="p-0 m-2 text-white">
                            <Link href='/register'>Register</Link>
                        </li>
                        <li className="p-0 m-2 text-white">
                            <Link href='/login'>Login</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;