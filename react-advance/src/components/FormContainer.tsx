import React, { useState } from 'react';
import UserForm from './UserForm';
import LoginForm from './LoginForm';
import '../styles/FormContainer.css';

const FormContainer: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="form-container">
      {!showLogin ? (
        <>
          <h2>User Registration</h2>
          <UserForm setShowLogin={setShowLogin} /> {/* Pass setShowLogin */}
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
