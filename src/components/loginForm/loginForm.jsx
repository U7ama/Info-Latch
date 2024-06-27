"use client"

import React from 'react';
import { useFormState } from "react-dom";
import styles from "./login.module.css"
import Link from 'next/link';
import { login } from '@/lib/action';

const LoginForm = () => {
    const [state, formAction] = useFormState(login,undefined);

  return (
    <form action={formAction} className={styles.form}>
        <input  className=' px-6 py-5 focus:outline-0 border-b '  type="text" name="Username" id="username" placeholder='username' />
        <input className=' px-6 py-5 focus:outline-0 border-b ' type="password" name="Password" id="password" placeholder='password' />
       <div>
       <button className=' py-3 px-8 bg-tirtry rounded-full text-white font-semibold'>Login</button>
       </div>
        {state?.error}
      
    </form>
  )
}

export default LoginForm
