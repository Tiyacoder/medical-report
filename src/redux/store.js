import { configureStore } from '@reduxjs/toolkit';
import medicalInfoReducer from './medicalInfoSlice'; 

const store = configureStore({
  reducer: {
    medicalInfo: medicalInfoReducer,
  },
});

export default store;
