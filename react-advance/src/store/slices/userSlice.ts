import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  username: string;
  firstname: string;
  lastname?: string;
  email: string;
  password: string;
  gender?: string;
  dob?: string;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
