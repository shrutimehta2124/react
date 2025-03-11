import React, { useState } from 'react';
import UserForm from './UserForm';
import LoginForm from './LoginForm';
import '../styles/FormContainer.css';

const FormContainer: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div id="form-container">
      <div id="form-box">
        <h2>{showLogin ? 'Login' : 'User Registration'}</h2>
        {showLogin ? <LoginForm /> : <UserForm />}

        <button id="toggle-form-btn" onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? 'Back to Registration' : 'Go to Login'}
        </button>
      </div>
    </div>
  );
};

export default FormContainer;
