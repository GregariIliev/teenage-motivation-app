import Link from "next/link";

import { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function Register() {

    const { authUser, error } = useContext(UserContext);

    return (
        <div className="form-container">
            <form className="form">
                <div className="mb-4">
                    <h1 className="form-title">Welcome Onboard!</h1>
                    <h2 className="form-title-description">Lets help you in completing your tasks</h2>
                </div>
                <div className="mb-2 w-100">
                    <label htmlFor="full-name" className="form-label">Full Name</label>
                    <input type="text-sm" name="full-name" className="form-control mb-2" required />
                </div>
                <div className="mb-2 w-100">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name="email" className="form-control mb-2" required />
                </div>
                <div className="mb-2 w-100">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control mb-2" required />
                </div>
                <div className="mb-2 w-100">
                    <label htmlFor="repeat-password" className="form-label">Repeat Password</label>
                    <input type="password" name="repeat-password" className="form-control mb-2" required />
                </div>
                {error ? <p className="auth-error">{error.code.split('/')[1]}</p> : null}
                <div className="auth-buttons mt-4">
                    <button onClick={user.registerUserWhitEmailAndPassword} className="btn w-100" type="button">Register</button>
                    <span className="mt-2">Already have an account ? <span className="span-account"><Link href='/login'>Sing in</Link></span></span>

                </div>
            </form>
        </div>
    )
}