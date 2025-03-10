import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { addUser } from '../store/slices/userSlice';
import { emailPattern, passwordPattern, isAdult } from '../utils/validations';

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(addUser(data));
    alert('User added successfully!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username:</label>
        <input
          {...register('username', { required: 'Username is required' })}
        />
        {errors.username && <p>{errors.username.message}</p>}
      </div>

      <div>
        <label>First Name:</label>
        <input
          {...register('firstname', { required: 'First Name is required' })}
        />
        {errors.firstname && <p>{errors.firstname.message}</p>}
      </div>

      <div>
        <label>Last Name:</label>
        <input {...register('lastname')} />
      </div>

      <div>
        <label>Email:</label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: { value: emailPattern, message: 'Invalid email format' },
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

      <div>
        <label>Gender:</label>
        <select {...register('gender')}>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label>Date of Birth:</label>
        <input
          type="date"
          {...register('dob', {
            required: 'Date of Birth is required',
            validate: (value) => {
              if (!value) return 'Date of Birth is required';
              return isAdult(value) || 'You must be at least 18 years old';
            },
          })}
        />
        {errors.dob && <p>{errors.dob.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
