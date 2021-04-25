import React from 'react'
import SignIn from "../../components/sign-in/sign-in.components"
import SignUp from "../../components/sign-out/sign-up.components"
import "./sign-in-and-sign-up.style.scss"
const SignInAndSignUpPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp/>
        </div>
    )
}

export default SignInAndSignUpPage
