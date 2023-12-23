import React from 'react';
import { useAuth } from '../AuthProvider/AuthProvider.jsx';

const SignIn = () => {
    const { login } = useAuth();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;
        login(username, password);
    }
    return (
<>
    <div className="login">
        <h1>Login</h1>
        <form onSubmit={handleFormSubmit}>
        <input type="text" name="username" placeholder="Username"/>
        <input type="password" name="password" placeholder="Password"/>
        <button type="submit">Login</button>
        </form>
    </div>
</>
    )
}

export default SignIn;