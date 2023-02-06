import React from 'react'
import * as l1 from './SignUpFormElement';


export default function SignUpForm() {
  return (
    <l1.MainContainer>
        <l1.SignUpContainer>
            <l1.SignName>Sign Up</l1.SignName>
            <l1.Decs1>Select your profile type.</l1.Decs1>
            <l1.LabelText>
              <l1.LabelTextEmail placeholder='  Enter Email'></l1.LabelTextEmail>
            </l1.LabelText>
            <l1.LabelTextTwo>
              <l1.LabelTextPassword  type='password' placeholder='  Enter New Password'></l1.LabelTextPassword>
            </l1.LabelTextTwo>
            <l1.LabelTextThree>
              <l1.LabelTextPassword  type='password' placeholder=' Re Enter Password'></l1.LabelTextPassword>
            </l1.LabelTextThree>
            <l1.SignButton>SignIn</l1.SignButton>
            <l1.Desc2>-----or sign in with-----</l1.Desc2>

            <l1.FacebookLoginButton>Continue with Facebook</l1.FacebookLoginButton>
            <l1.GoogleLoginButton>Continue with Google</l1.GoogleLoginButton>
            </l1.SignUpContainer>
    </l1.MainContainer>
  )
}
