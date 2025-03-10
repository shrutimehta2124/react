import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import api from '../../services/api';

interface User {
  id?: number;
  username: string;
  firstname: string;
  lastname?: string;
  email: string;
  password: string;
  gender?: string;
  dob?: string;
}

// Async action to add user
export const addUser = createAsyncThunk<User, User>(
  'users/addUser',
  async (userData) => {
    const response = await api.post('/', userData);
    return response.data;
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState: { users: [] as User[], status: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addUser.fulfilled, (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    });
  },
});

export default userSlice.reducer;
