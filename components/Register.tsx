import Link from "next/link";

import { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function Register() {

    const user = useContext(UserContext);

    return (
        <div className="form-container">
            <form className="form">
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text-sm" name="email" className="form-control form-control-sm mb-3" />
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control form-control-sm mb-3" />
                </div>

                <div className="auth-buttons">
                    <button onClick={user.registerUserWhitEmailAndPassword} className="btn btn-primary mt-5" type="button">Register</button>
                    <Link className="m" href='/login'>Sing in</Link>
                </div>
            </form>
        </div>
    )
}