import React from 'react';
import { useAuth } from '../AuthProvider/AuthProvider.jsx';

const SignUp = () => {
    const { register } = useAuth();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;
        const email = e.target.elements.email.value;
        const fullName = e.target.elements.fullName.value;
        register(username, password, fullName, email);
    }
    return (
        <>
            <div className="register">
                <h1>Register</h1>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="fullName">Full name</label>
                    <input type="text" name="fullName" placeholder="Full name"/>

                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="Username"/>

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="Password"/>

                    <label htmlFor="repeatPassword">Repeat password</label>
                    <input type="password" name="repeatPassword" placeholder="Repeat password"/>

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Email"/>
                    <button type="submit">Register</button>
                </form>
            </div>
        </>
    )
}

export default SignUp;