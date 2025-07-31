import { configureStore } from '@reduxjs/toolkit';
import formDataReducer from './formDataSlice';

const storeForm = configureStore({
  reducer: {
    formData: formDataReducer,
  },
});

export default storeForm;
