// src/pages/BasicInfoModel.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  phone: '',
};

const basicInfoSlice = createSlice({
  name: 'basicInfo',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
  },
});

export const { setName, setEmail, setPhone } = basicInfoSlice.actions;
export default basicInfoSlice.reducer;
