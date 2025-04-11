import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-reducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Define los tipos para el estado raíz y el dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
