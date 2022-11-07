import { PropsWithChildren, useContext } from "react";
import { UserContext } from "../context/userContext";
import Aside from "./Aside";
import Navbar from "./Navbar";

export default function Layout({ children }: PropsWithChildren) {

    const user = useContext(UserContext);

    return (
        <>
            <header>
                {user ? <Navbar /> : null}
            </header>
            <main className="main">
                {children}
                {user ? <Aside /> : null}
            </main>
        </>
    )
}