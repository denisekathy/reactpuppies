import React from "react"
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }){
    return(
        <main>
        <h1>AuthPage</h1>
        <SignUpForm setUser={setUser} />
        <h1>Log In</h1>
        <LoginForm setUser={setUser} />
        </main>
    );
}