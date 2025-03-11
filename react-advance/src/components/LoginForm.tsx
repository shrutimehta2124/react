import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/LoginForm.css';

const LoginForm: React.FC = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const onSubmit = (values: any) => {
    console.log('Login Data:', values);
    alert('Login Successful!');
  };

  return (
    <div id="login-form-wrapper">
      <div id="login-form-container">
        <h2>Login</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form id="login-form">
            <div className="input-group">
              <label>Email:</label>
              <Field type="email" name="email" className="form-input" />
              <ErrorMessage name="email" component="p" className="error-text" />
            </div>

            <div className="input-group">
              <label>Password:</label>
              <Field type="password" name="password" className="form-input" />
              <ErrorMessage
                name="password"
                component="p"
                className="error-text"
              />
            </div>

            <button type="submit" id="login-btn">
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
