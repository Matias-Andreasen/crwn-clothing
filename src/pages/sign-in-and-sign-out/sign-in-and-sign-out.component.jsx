import React from 'react';
import './sign-in-and-sign-out.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'


const SignInAndSignOut = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn >SIGN IN</SignIn>
            <SignUp >SIGN UP</SignUp>
        </div>
    )
};

export default SignInAndSignOut