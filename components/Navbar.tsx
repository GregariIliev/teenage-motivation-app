import { NextPage } from "next";

import Link from "next/link";

import styles from '../styles/Navbar.module.css';

import { useContext } from "react";
import { UserContext } from "../context/userContext";


const Navbar: NextPage = () => {

    const user = useContext(UserContext);

    const handleUserSingOut = (e: any) => {
        e.preventDefault();
console.log('logout');

        user.userSingOut()
            .then((res: any) => { }).catch((err: any) => { })
    }
    return (
        <nav className={styles['navbar']}>
            <ul className={styles['navbar-ul-navigation']}>
                <li className="li p-0 m-2">
                    <Link href='/tasks'>Today’s Tasks</Link>
                </li>
                <li className="li p-0 m-2">
                    <Link href='/done-tasks'>Done Tasks</Link>
                </li>
                <li className="li p-0 m-2">
                    <Link href='/calendar'>Calendar</Link>
                </li>
                <li className="li p-0 m-2">
                    <Link href='/members'>Members</Link>
                </li>
                <li className="li p-0 m-2">
                    <Link href='/points-collected'>Points Collected</Link>
                </li>
            </ul>
            <ul className={styles['navbar-ul-navigation']}>
                <li className="li p-0 m-2">
                   <Link href={'/register'}>Register</Link>
                </li>
                <li className="li p-0 m-2">
                   <Link href={'/login'}>Login</Link>
                </li>
                <li className="li p-0 m-2">
                   <Link href={'/logout'}>Logout</Link>
                </li>
            </ul>
            <ul className={styles['navbar-ul-username']}>
                <li><span>Welcome Josh!</span></li>
            </ul>
        </nav>
    )
}

export default Navbar;