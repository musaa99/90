import { combineReducers } from '@reduxjs/toolkit';
import { api } from './services/api';
import authReducer from '../store/reducers/auth/reducer';

const rootReducer = combineReducers({
  // add reducers here
  auth: authReducer,
  [api.reducerPath]: api.reducer,
});

export default rootReducer;
