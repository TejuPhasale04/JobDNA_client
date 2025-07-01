import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const Login = ({ onLoginSuccess }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-2xl max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-green-700">🔐 Login to Continue</h2>
        <GoogleOAuthProvider clientId="629588978917-acos6b423qdi9pjhffvbbsgmmth4tahc.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
              onLoginSuccess(credentialResponse); 
            }}
            onError={() => alert('Login Failed')}
          />
        </GoogleOAuthProvider>
      </div>
    </div>
  );
};

export default Login;
