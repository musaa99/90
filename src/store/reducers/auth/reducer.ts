import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from '@/store/sync_storage';

import { AuthState } from './typings';
import { RootState } from '@/store';

const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  resetToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => ({
      ...state,
      user: action.payload.user,
      accessToken: action.payload.token,
      refreshToken: action.payload.refreshToken,
    }),
    tokenReceived: (state, action) => ({
      ...state,
      accessToken: action.payload.token,
      refreshToken: action.payload.refreshToken,
    }),
    setResetToken: (state, action) => ({
      ...state,
      resetToken: action.payload.resetToken,
    }),

    logout: () => {
      sessionStorage.clear();
      return initialState;
    },
  },
});

export const {
  logout,
  setCurrentUser,
  setResetToken,

  tokenReceived,
} = authSlice.actions;

export const selectResetToken = (state: RootState) => state.auth.resetToken;

const persistConfig = {
  key: 'auth',
  storage,
  // whitelist: ['user', 'accessToken'],
};

const authReducer = authSlice.reducer;

export default persistReducer(persistConfig, authReducer);
