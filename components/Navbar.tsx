import { NextPage } from "next";

import Link from "next/link";

import styles from '../styles/Navbar.module.css';

import { useContext } from "react";
import { UserContext } from "../context/userContext";


const Navbar: NextPage = () => {

    const user = useContext(UserContext);

    const handleUserSingOut = (e: any) => {
        e.preventDefault();

        user.userSingOut()
            .then((res: any) => { }).catch((err: any) => { })
    }
    return (
        <nav className={styles['navbar']}>
            <ul className={styles['navbar-navigation']}>
                <li className="li p-0 m-2 text-white">
                    <Link href='/tasks'>Today’s Tasks</Link>
                </li>
                <li className="li p-0 m-2 text-white">
                    <Link href='/done-tasks'>Done Tasks</Link>
                </li>
                <li className="li p-0 m-2 text-white">
                    <Link href='/calendar'>Calendar</Link>
                </li>
                <li className="li p-0 m-2 text-white">
                    <Link href='/members'>Members</Link>
                </li>
                <li className="li p-0 m-2 text-white">
                    <Link href='/points-collected'>Points Collected</Link>
                </li>
            </ul>
            <ul className={styles['navbar-username']}>
                <li><span>Welcome Josh!</span></li>
            </ul>
        </nav>
    )
}

export default Navbar;