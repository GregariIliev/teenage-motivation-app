import Link from 'next/link';
import styles from '../styles/Login.module.css';

import { useContext } from 'react';
import { UserContext } from '../context/userContext';

export default function Login() {

    const user = useContext(UserContext);

    return (
        <div className='form-container'>
            <form className="form">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                </div>
                <div className="auth-buttons">
                    <button className="btn btn-primary" type="button">Login</button>
                    <button onClick={user.authUserWhitFacebook} className="btn btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                        Sing in whit Facebook
                    </button>
                    <a href="#">Forgot password</a>
                    <Link href='/register'>Sing up</Link>
                </div>
                {user.error
                    ? user.error
                    : null}
            </form>
        </div>
    )
}