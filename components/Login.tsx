import { FirebaseError } from 'firebase/app';
import Link from 'next/link';
import router from 'next/router';

import { BaseSyntheticEvent, useState } from 'react';
import { facebookAuth, loginInWithEmailAndPassword } from '../firebase/authentication';
import { getUserCollectionById } from '../firebase/db';

import useUser from '../hooks/useUser';

export default function Login() {

    const [error, setError] = useState<FirebaseError>();
    const { updateUserStateData } = useUser();

    const loginUserWhitEmailAndPassword = (e: BaseSyntheticEvent) => {
        e.preventDefault();

        const form = new FormData(e.target);

        const email = form.get('email')?.toString();
        const password = form.get('password')?.toString();

        if (!email || !password) {
            setError(new FirebaseError('auth/empty fields', 'Empty fields!'));
            return
        }

        loginInWithEmailAndPassword(email, password)
            .then(async (user) => {
                if (user) {
                    const usersSnapshot = await getUserCollectionById(user.user.uid);

                    if (usersSnapshot) {
                        usersSnapshot.forEach((u) => {
                            updateUserStateData(u.data());
                        })
                    }
                    router.push('/');
                }
            }).catch(err => {
                setError(err);
            })

    }

    const authUserWhitFacebook = (e: BaseSyntheticEvent) => {
        e.preventDefault();

        facebookAuth()
            .then((user) => {
                if (user) {
                    router.push('/');
                }
            })
            .catch((error) => {
                setError(error);
            });
    }

    return (
        <div className='form-container'>
            <form onSubmit={loginUserWhitEmailAndPassword} className="form">
                <div className='mb-4'>
                    <h1 className='form-title'>Welcome Back!</h1>
                </div>
                <div className="mb-3 w-100">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3 w-100">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" required />
                </div>
                {error ? <p className='auth-error'>{error?.code.split('/')[1]}</p> : null}
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                </div> */}
                <div className="auth-buttons mt-4 w-100">
                    <input className="btn w-100" type="submit" value="Login" />
                    <button onClick={authUserWhitFacebook} className="btn w-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                        Sing in whit Facebook
                    </button>
                </div>
                <span className='mt-2'>Don’t have an account ?<span className='span-account'><Link href='/register'>Sing up</Link></span></span>
            </form>
        </div>
    )
}