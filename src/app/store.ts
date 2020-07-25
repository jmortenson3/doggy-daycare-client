import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth/authSlice';
import locationContextReducer from '../features/locationContext/locationContextSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    context: locationContextReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
