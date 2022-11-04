import { FirebaseError } from "firebase/app";
import Link from "next/link";
import router from "next/router";

import { BaseSyntheticEvent, useState } from "react";
import { registerWhitEmailAndPassword } from "../firebase/authentication";
import { addToCollection } from "../firebase/db";

export default function Register() {

    const [error, setError] = useState<FirebaseError>();

    const registerUserWhitEmailAndPassword = (e: BaseSyntheticEvent) => {
        e.preventDefault();

        const form = new FormData(e.target);

        const fullName = form.get('full-name')?.toString();
        const email = form.get('email')?.toString();
        const password = form.get('password')?.toString();
        const repeatPassword = form.get('repeat-password')?.toString();


        if (!fullName || !email || !password || !repeatPassword) {
            setError(new FirebaseError('auth/empty fields', 'Empty fields!'));
            return
        }

        if (password !== repeatPassword) {
            setError(new FirebaseError('auth/passwords not match', 'passwords not match'));
            return
        }

        registerWhitEmailAndPassword(email, password)
            .then(async (user) => {
                if (user) {
                    await addToCollection("users", user.user, fullName);
                    router.push('/login');
                }
            }).catch(err => {
                setError(err);
            })


    }

    return (
        <div className="form-container">
            <form onSubmit={registerUserWhitEmailAndPassword} className="form">
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
                    <input className="btn w-100" type="submit" value="Register" />
                    <span className="mt-2">Already have an account ? <span className="span-account"><Link href='/login'>Sing in</Link></span></span>
                </div>
            </form>
        </div>
    )
}