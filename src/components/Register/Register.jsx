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
                    <input type="text" name="fullName" placeholder="Full name"/>
                    <input type="text" name="username" placeholder="Username"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <input type="password" name="repeatPassword" placeholder="Repeat password"/>
                    <input type="email" name="email" placeholder="Email"/>
                    <button type="submit">Register</button>
                </form>
            </div>
        </>
    )
}

export default SignUp;