import React from 'react';
import * as l from './LoginFormElement';


export default function LoginForm() {
  return (
    <l.MainContainer>
      <l.LoginContainer>
        <l.LoginName>Login</l.LoginName>
        <l.LoginDes>
        Hey, Enter your details to get sign in 
        </l.LoginDes>
         
         <l.LabelText>
          <l.LabelTextEmail placeholder='  Enter Email'></l.LabelTextEmail>
         </l.LabelText>
         <l.LabelTextTwo>
          <l.LabelTextPassword  type='password' placeholder='  Enter Password'></l.LabelTextPassword>
         </l.LabelTextTwo>
         <l.ForgetText>
          Forgot your password ?
         </l.ForgetText>
         <l.LoginButton>SignIn</l.LoginButton>

         <l.Desc2>-----or sign in with------</l.Desc2>

         <l.FacebookLoginButton>Continue with Facebook</l.FacebookLoginButton>
         <l.GoogleLoginButton>Continue with Google</l.GoogleLoginButton>
         <l.Desc3>Don’t have an account? <h3>Register now</h3></l.Desc3>
      </l.LoginContainer>

    </l.MainContainer>
  )
}
