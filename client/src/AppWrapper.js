import React from 'react';
import App from './App';
import AuthState from './context/auth/AuthState';
import CustomTourState from './context/tour/CustomTourState';

const AppWrapper = () => {
  return (
    <AuthState>
      <CustomTourState>
        <App />
      </CustomTourState>
    </AuthState>
  );
};

export default AppWrapper;
