import { NextPage } from "next";

import Link from "next/link";

import { useContext } from "react";
import { UserContext } from "../context/userContext";

import { userSingOut } from "../firebase/authentication";

import styles from '../styles/Navbar.module.css';

const Navbar: NextPage = () => {

    const { user } = useContext(UserContext);
console.log(user);

    const handleUserSingOut = (e: any) => {
        e.preventDefault();

        userSingOut()
            .then(() => { }).catch(() => { });
    }
    return (
        <nav className={styles['navbar']}>
            <ul className={styles['navbar-ul-navigation']}>
                <li className="li p-0 m-2">
                    <Link href='/'>Today’s Tasks</Link>
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
                {user
                    ?
                    <li className="li p-0 m-2">
                        <a onClick={handleUserSingOut} href="#">Logout</a>
                    </li>
                    :
                    <>
                        <li className="li p-0 m-2">
                            <Link href={'/register'}>Register</Link>
                        </li>
                        <li className="li p-0 m-2">
                            <Link href={'/login'}>Login</Link>
                        </li>
                    </>
                }
            </ul>
            <ul className={styles['navbar-ul-username']}>
                <li><span>Welcome {user?.email}!</span></li>
            </ul>
        </nav>
    )
}

export default Navbar;