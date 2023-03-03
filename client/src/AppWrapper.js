import React from 'react'
import App from './App'
import AuthState from './context/auth/AuthState'

const AppWrapper = () => {
  return (
      <AuthState>
          <App/>
    </AuthState>
  )
}

export default AppWrapper