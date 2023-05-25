import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import * as l from './LoginFormElement';
import { useGoogleLogin } from '@react-oauth/google';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function LoginForm() {
  const { login, continueWithGoogle, user, isAuthenticated, loading } =
    useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

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
          navigate('/admin/tours/all');
          break;
        case 'user':
          navigate('/client/home');
          break;
        case 'customer_care':
          navigate('/customer-care/view-all-requests');
          break;

        default:
          break;
      }
    }
  }, [isAuthenticated, user]);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      toast.promise(
        login({ email, password }),
        {
          loading: 'Logging In ...',
          success: (data) => `Logged in successfully `,
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
    } else if (!email && !password) {
      toast.error('Please enter email and password', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '1.7rem',
        },
      });
    } else if (!email) {
      toast.error('Please enter password', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '1.7rem',
        },
      });
    } else if (!password) {
      toast.error('Please enter password', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '1.7rem',
        },
      });
    }

    // toast.promise(
    //   await login({ email, password }),
    //   {
    //     loading: 'Loggin in...',
    //     success: <b>Logged in Success</b>,
    //     error: (err) => `${err.response.data.message.toString()}`,
    //   },
    //   {
    //     style: {
    //       borderRadius: '10px',
    //       background: '#333',
    //       color: '#fff',
    //       fontSize: '1.8rem',
    //     },
    //   }
    // );
  };

  return (
    <l.MainContainer>
      <l.LoginContainer onSubmit={onSubmit}>
        <l.LoginName>Login</l.LoginName>
        <l.LoginDes>Hey, Enter your details to get sign in</l.LoginDes>

        <l.LabelText>
          <l.LabelTextEmail
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="  Enter Email"
          ></l.LabelTextEmail>
        </l.LabelText>
        <l.LabelTextTwo>
          <l.LabelTextPassword
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="  Enter Password"
          ></l.LabelTextPassword>
        </l.LabelTextTwo>
        <l.ForgetText to="/forgot-password">
          Forgot your password ? Click here to reset.
        </l.ForgetText>
        <l.LoginButton>SignIn</l.LoginButton>

        <l.Desc2>----- &nbsp;or sign in with &nbsp; -----</l.Desc2>

        {/* <l.FacebookLoginButton>Continue with Facebook</l.FacebookLoginButton> */}
        <l.GoogleLoginButton onClick={() => googleLogin()}>
          Continue with Google
        </l.GoogleLoginButton>
        <l.Desc3>
          Don’t have an account?{' '}
          <h3>
            <Link to={'/signup'}>Register now</Link>
          </h3>
        </l.Desc3>
      </l.LoginContainer>
    </l.MainContainer>
  );
}
