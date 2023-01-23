import React from 'react'
import * as l1 from './SignUpFormElement';


export default function SignUpForm() {
  return (
    <l1.MainContainer>
        <l1.SignUpContainer>
            <l1.SignName>Sign Up</l1.SignName>
            <l1.Decs1>Select your profile type.</l1.Decs1>
            <l1.Container1>
                <l1.Container1LeftTop>Tourist</l1.Container1LeftTop>
                <l1.Container1LeftBottom>if you are not from SriLanka</l1.Container1LeftBottom>
                <l1.Container1Right></l1.Container1Right>
            </l1.Container1>

            <l1.Container2>
                <l1.Container2LeftTop>Local</l1.Container2LeftTop>
                <l1.Container2LeftBottom>if You are from SriLanka</l1.Container2LeftBottom>
                <l1.Container2Right></l1.Container2Right>
            </l1.Container2>
        </l1.SignUpContainer>
    </l1.MainContainer>
  )
}
