import { PropsWithChildren } from "react";
import styles from '../styles/Layout.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from "./Navbar";

export default function Layout({ children }: PropsWithChildren) {


    return (
        <>
            <div className={styles.container}>
                {children}
            </div>
        </>
    )
}