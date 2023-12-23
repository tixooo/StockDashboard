/* eslint-disable no-unused-vars */
import './Login.css'
import Footer from '../../components/Footer/Footer.jsx';
import { useState } from 'react';
import React from 'react';

export default function Login() {

    const [form, setForm] = useState({
        email: '',
        password: '',
    });


    const updateForm = prop => e => {
        setForm({
            ...form,
            [prop]: e.target.value,
        });
    };

    const onLogin = () => {
        if (!form.email) {
            return alert('Please enter email!');
        }

        if (!form.password) {
            return alert('Please enter password!');
        }

    };

    return (
        <div className='login-wrapper'>
            <div className='login'>
                <div className='Form'>
                    <label htmlFor='email'>Email: </label>
                    <input type="email" id="email" value={form.email} onChange={updateForm('email')}></input><br />
                    <label htmlFor='password'>Password: </label>
                    <input type="password" id="password" value={form.password} onChange={updateForm('password')}></input><br /><br />
                    <button onClick={onLogin}>Login</button>
                </div>
            </div>
            <Footer></Footer>
        </div>

    )
}
