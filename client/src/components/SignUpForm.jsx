import React, { useEffect, useState } from 'react';
import * as l1 from './SignUpFormElement';
import useAuth from './../hooks/useAuth';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

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

  const responseFacebook = (response) => {
    console.log(response);
    // Handle the Facebook login response here
  };

  useEffect(() => {
    if (isAuthenticated && user && !loading) {
      switch (user?.role) {
        case 'admin':
          navigate('/admin');
          break;
        case 'user':
          navigate('/client/home');
          break;

        default:
          break;
      }
    }
  }, [isAuthenticated, user]);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Password and Password Confirm doesn't match", {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '2rem',
        },
      });
      setPassword('');
      setConfirmPassword('');
    } else if (!email || !password || !confirmPassword) {
      // signup({ email, password, confirmPassword });
      toast.error('Please fill Eamil, Password and Password Confirm', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '2rem',
        },
      });
    } else {
      toast.promise(
        signup({ email, password, confirmPassword }),
        {
          loading: 'Signing Up ...',
          success: (data) => `Signed Up successfully `,
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

        {/* <l1.FacebookLoginButton
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Continue with Facebook
        </l1.FacebookLoginButton> */}
        {/* <div>
          <FacebookLogin
            appId={`${process.env.REACT_FACEBOOK_APP_ID}`}
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
          />
        </div> */}
        <l1.GoogleLoginButton
          onClick={(e) => {
            e.preventDefault();
            googleLogin();
          }}
        >
          Continue with Google
        </l1.GoogleLoginButton>
      </l1.SignUpContainer>
    </l1.MainContainer>
  );
}
