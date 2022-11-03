import { NextPage } from "next";
import { useRouter } from "next/router";

import Link from "next/link";

import { useContext } from "react";
import { UserContext } from "../context/userContext";

import styles from '../styles/Navbar.module.css';


const Navbar: NextPage = () => {

    const user = useContext(UserContext);
    const router = useRouter();

    const handleUserSingOut = (e: any) => {
        e.preventDefault();

        user.userSingOut()
            .then((res: any) => {
                router.replace('/login');
            }).catch((err: any) => {
                console.log(err);
            })
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
                    <a onClick={handleUserSingOut} href="#">Logout</a>
                </li>
            </ul>
            <ul className={styles['navbar-ul-username']}>
                <li><span>Welcome Josh!</span></li>
            </ul>
        </nav>
    )
}

export default Navbar;