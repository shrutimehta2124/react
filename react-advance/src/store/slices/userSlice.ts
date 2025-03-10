import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch BASE_URL from .env
const BASE_URL = import.meta.env.VITE_BASE_URL;

// Define UserFormData type (you can adjust the type based on the actual data structure)
interface UserFormData {
  name: string;
  email: string;
}

// Define the shape of the state
interface UserState {
  users: UserFormData[];
  loading: boolean;
  error: string | null;
}

// Async action to add user
export const addUser = createAsyncThunk<UserFormData, UserFormData>(
  'user/addUser',
  async (userData) => {
    const response = await axios.post(`${BASE_URL}/users`, userData);
    return response.data;
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    loading: false,
    error: null,
  } as UserState, // Type the initial state
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        addUser.fulfilled,
        (state, action: PayloadAction<UserFormData>) => {
          state.loading = false;
          state.users.push(action.payload); // Add the new user to the state
        },
      )
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Something went wrong'; // Provide a fallback error message
      });
  },
});

export default userSlice.reducer;
