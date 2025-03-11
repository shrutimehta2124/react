import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addUserToAPI } from '../services/api';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slices/userSlice';
import '../styles/UserForm.css';

const UserForm: React.FC = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      file: null as File | null,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      file: Yup.mixed().required('File is required'),
    }),
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('email', values.email);
        if (values.file) {
          formData.append('file', values.file);
        }

        const user = await addUserToAPI(formData);
        dispatch(addUser(user));

        alert('User added successfully!');
      } catch (error) {
        alert('Failed to add user');
      }
    },
  });

  return (
    <div id="user-form-wrapper">
      <div id="user-form-container">
        <h2>Register</h2>
        <form id="user-form" onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="name"
            className="form-input"
            placeholder="Enter name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="error-text">{formik.errors.name}</div>
          )}

          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error-text">{formik.errors.email}</div>
          )}

          <input
            type="file"
            name="file"
            className="form-input"
            onChange={(event) => {
              if (event.currentTarget.files) {
                formik.setFieldValue('file', event.currentTarget.files[0]);
              }
            }}
          />
          {formik.touched.file && formik.errors.file && (
            <div className="error-text">{formik.errors.file}</div>
          )}

          <button type="submit" id="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
