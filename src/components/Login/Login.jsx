import React from 'react';
import { useAuth } from '../AuthProvider/AuthProvider.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
const SignIn = () => {
    const { login } = useAuth();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;
        const email = e.target.elements.email.value;
        const fullName = e.target.elements.fullName.value;
        login(username, password, fullName, email);
    }
    return (
        <>
            <div className="login">
                <h1>Login</h1>
                <form onSubmit={handleFormSubmit}>
<label htmlFor="fullName">Full name</label>
                    <input type="text" name="fullName" placeholder="Full name"/>

                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="Username"/>

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="Password"/>

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Email"/>

                    <button type="button" className="btn btn-primary">Login</button>
                </form>
            </div>
        </>
    )
}

export default SignIn;