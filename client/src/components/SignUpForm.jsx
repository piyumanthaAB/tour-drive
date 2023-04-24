import React, { useEffect, useState } from 'react';
import * as l1 from './SignUpFormElement';
import useAuth from './../hooks/useAuth';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

export default function SignUpForm() {
  const { signup, continueWithGoogle, user, isAuthenticated, loading } =
    useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const googleLogin = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      console.log({ codeResponse });
      const googleAccessToken = codeResponse.access_token;
      continueWithGoogle({ googleAccessToken });
    },
  });

  useEffect(() => {
    if (isAuthenticated && user && !loading) {
      switch (user?.role) {
        case 'admin':
          navigate('/admin');
          break;
        case 'user':
          navigate('/me');
          break;

        default:
          break;
      }
    }
  }, [isAuthenticated, user]);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (email && password && confirmPassword) {
      signup({ email, password, confirmPassword });
    }
  };

  return (
    <l1.MainContainer>
      <l1.SignUpContainer onSubmit={onSubmit}>
        <l1.SignName>Sign Up</l1.SignName>
        <l1.Decs1>Select your profile type.</l1.Decs1>

        <l1.LabelText>
          <l1.LabelTextEmail
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="  Enter Email"
          ></l1.LabelTextEmail>
        </l1.LabelText>
        <l1.LabelTextTwo>
          <l1.LabelTextPassword
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="  Enter New Password"
          ></l1.LabelTextPassword>
        </l1.LabelTextTwo>
        <l1.LabelTextThree>
          <l1.LabelTextPassword
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder=" Re Enter Password"
          ></l1.LabelTextPassword>
        </l1.LabelTextThree>
        <l1.SignButton>SignUp</l1.SignButton>
        <l1.Desc2>-----or sign in with-----</l1.Desc2>

        <l1.FacebookLoginButton>Continue with Facebook</l1.FacebookLoginButton>
        <l1.GoogleLoginButton onClick={() => googleLogin()}>
          Continue with Google
        </l1.GoogleLoginButton>
      </l1.SignUpContainer>
    </l1.MainContainer>
  );
}
