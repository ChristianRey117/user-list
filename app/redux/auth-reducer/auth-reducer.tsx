import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "./IAuthState";

// init state
const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

// define structure of data
interface LoginPayload {
  username: string;
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      state.isAuthenticated = true;
      state.user = { username: action.payload.username };
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

export const selectIsAuthenticated = (state: { auth: AuthState }) =>
  state.auth.isAuthenticated;
export const selectUser = (state: { auth: AuthState }) => state.auth.user;
