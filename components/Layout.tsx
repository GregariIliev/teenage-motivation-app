import { PropsWithChildren } from "react";
import Aside from "./Aside";
import Navbar from "./Navbar";

export default function Layout({ children }: PropsWithChildren) {


    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="main">
                {children}
                <Aside />
            </main>
        </>
    )
}