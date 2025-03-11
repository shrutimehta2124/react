import React, { useState } from 'react';
import UserForm from './UserForm';
import LoginForm from './LoginForm';

const FormContainer: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      {!showLogin ? (
        <>
          <h2>User Registration</h2>
          <UserForm />
          <button onClick={() => setShowLogin(true)}>Go to Login</button>
        </>
      ) : (
        <>
          <h2>Login</h2>
          <LoginForm />
          <button onClick={() => setShowLogin(false)}>
            Back to Registration
          </button>
        </>
      )}
    </div>
  );
};

export default FormContainer;
