import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { addUser } from '../store/slices/userSlice';
import { addUserToAPI } from '../services/api';
import { emailPattern, passwordPattern, isAdult } from '../utils/validations';
import LoginForm from './LoginForm'; // Import LoginForm

interface FormValues {
  username: string;
  firstname: string;
  lastname?: string;
  email: string;
  password: string;
  gender?: string;
  dob?: string;
}

const UserForm: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false); // State to toggle form

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await addUserToAPI(data);
      dispatch(addUser(data));
      alert('User added successfully!');
    } catch (error) {
      alert('Failed to add user');
    }
  };

  return (
    <div>
      {showLogin ? (
        <LoginForm />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Username:</label>
            <input
              {...register('username', { required: 'Username is required' })}
            />
            {errors.username && <p>{errors.username.message}</p>}
          </div>

          <div>
            <label>Email:</label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: emailPattern,
                  message: 'Invalid email format',
                },
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div>
            <label>Password:</label>
            <input
              type="password"
              {...register('password', {
                required: 'Password is required',
                pattern: {
                  value: passwordPattern,
                  message:
                    'Password must contain 1 uppercase, 1 special character, and be at least 6 characters long',
                },
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          <button type="submit">Submit</button>
        </form>
      )}

      {/* Button to toggle between UserForm and LoginForm */}
      <button onClick={() => setShowLogin((prev) => !prev)}>
        {showLogin ? 'Go to Registration' : 'Go to Login'}
      </button>
    </div>
  );
};

export default UserForm;
