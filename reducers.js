import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // initial state here
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      // update state for successful login
    },
    loginFailure(state, action) {
      // update state for failed login
    },
    logout(state, action) {
      // update state for logout
    },
  },
});

export const { loginSuccess, loginFailure, logout } = slice.actions;

export default slice.reducer;