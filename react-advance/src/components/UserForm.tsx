import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../store/hooks';
import { addUser } from '../store/slices/userSlice';

interface UserFormData {
  name: string;
  email: string;
}

const UserForm = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm<UserFormData>();

  const onSubmit = (data: UserFormData) => {
    dispatch(addUser(data));
    reset(); // Reset form after submission
  };

  return (
    <div>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name:</label>
        <input {...register('name', { required: true })} />
        <br />

        <label>Email:</label>
        <input {...register('email', { required: true })} />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
