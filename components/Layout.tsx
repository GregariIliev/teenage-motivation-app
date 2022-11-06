import { PropsWithChildren } from "react";
import { useRouter } from "next/router";
import Aside from "./Aside";
import Navbar from "./Navbar";

export default function Layout({ children }: PropsWithChildren) {

    const router = useRouter();

    return (
        <>
            <header>
                {router.pathname === "/login" || router.pathname === "/register"
                    ? null
                    : <Navbar />}
            </header>
            <main className="main">
                {children}
                {router.pathname === "/login" || router.pathname === "/register"
                    ? null
                    : <Aside />}
            </main>
        </>
    )
}