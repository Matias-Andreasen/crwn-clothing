import React, { useState } from 'react';
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

const SignIn = () => {
    const [emailText, setEmailText] = useState("");
    const [passwordText, setPasswordText] = useState("");

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(emailText, passwordText);
            setEmailText("");
            setPasswordText("");
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    value={emailText}
                    required
                    handleChange={e => setEmailText(e.target.value)}
                    label="email"
                />
                <FormInput
                    name="password"
                    type="password"
                    value={passwordText}
                    required
                    handleChange={e => setPasswordText(e.target.value)}
                    label="password"
                />
                <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>Sign in with Google</CustomButton>
                </div>
            </form>
        </div>
    )
};

export default SignIn;