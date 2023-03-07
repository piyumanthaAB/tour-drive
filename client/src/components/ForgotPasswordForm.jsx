import React from 'react';
import * as l from './ForgotPasswordElement';


export default function ForgotPasswordForm() {
  return (
    <l.MainContainer>
      <l.LoginContainer>
        <l.LoginName>Forgot Password</l.LoginName>
        <l.DesContainer>
        
            <l.LoginDes>
        Enter your TOURDRIVE username, or the email address that you used to register. We'll send you an email with your username and a link to reset your password.
        </l.LoginDes>
        </l.DesContainer>
        
         
         <l.LabelText>
          <l.LabelTextEmail placeholder='  Enter Email address or Username'></l.LabelTextEmail>
         </l.LabelText>
         <l.LoginButton selected={true}>Send</l.LoginButton>
         
         <l.Desc3>If you still need help, contact </l.Desc3>
         <l.Desc3><h3>TOURDRIVEsupport</h3></l.Desc3>
         {/* <l.ForgetText>
         If you still need help, contact <h3>TOURDRIVE support</h3>
         </l.ForgetText> */}
         
         
         

      </l.LoginContainer>

    </l.MainContainer>
  )
}