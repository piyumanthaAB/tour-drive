import React, { useState } from 'react';
import * as l from './ForgotPasswordElement';
import TextField from './shared/Form Elements/TextField';
import submitForm from '../hooks/submitForm';
import { toast } from 'react-hot-toast';


export default function ForgotPasswordForm() {

  const[email,setEmail]=useState('');

  const onSubmit=async e=>{
    e.preventDefault();
// alert(email)

toast.promise(
  submitForm('/api/v1/auth/forgotPassword',{email},'post',{}),
  {
    loading: 'Sending email...',
    success: (data) => `Email sent successfully `,
    error: (err) => {
      if (!err.response.data.message) {
        return 'Something went wrong. Try again.';
      }
      return `${err?.response?.data?.message?.toString()}`;
    },
  },
  {
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
      fontSize: '1.7rem',
    },
  }
);



  }

  return (
    <l.MainContainer>
      <l.LoginContainer onSubmit={onSubmit}>
        <l.LoginName>Forgot Password</l.LoginName>
        <l.DesContainer>
        
            <l.LoginDes>
        Enter your TOURDRIVE username, or the email address that you used to register. We'll send you an email with your username and a link to reset your password.
        </l.LoginDes>
        </l.DesContainer>
        
         
         <l.EmailInputContainer>

          <TextField value={email} setValue={setEmail} placeholder='  Enter Email address or Username'/>
         </l.EmailInputContainer>
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