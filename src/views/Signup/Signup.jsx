/* eslint-disable no-unused-vars */
import './Signup.css'
import { useState } from 'react';
import React from 'react';

export default function Signup() {

    const [form, setForm] = useState({
        email: '',
        password: '',
        handle: '',
    });

    const updateForm = prop => e => {
        setForm({
            ...form,
            [prop]: e.target.value,
        });
    };

    const onRegister = () => {
        if (!form.email) {
            return alert('Please enter email!')
        }

        if (form.password.length < 7) {
            return alert('Password should be at least 7 characters long!')
        }

        if (form.handle.length < 2) {
            return alert('Handle should be at least 2 characters long!')
        }
    }

    return (
        <div className='signup'>
            <div className='Form'>
                <label htmlFor='email'>Email: </label>
                <input type="email" id="email" value={form.email} onChange={updateForm('email')}></input><br />
                <label htmlFor='handle'>Handle: </label>
                @<input type="text" id="handle" value={form.handle} onChange={updateForm('handle')}></input><br />
                <label htmlFor='password'>Password: </label>
                <input type="password" id="password" value={form.password} onChange={updateForm('password')}></input><br /><br />
                <button onClick={onRegister}>Sign Up</button>
            </div>
        </div>
    )
}
