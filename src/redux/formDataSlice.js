import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  neurological: {},
  behavioral: {},
  // add other sections here
};

const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setNeurologicalData: (state, action) => {
      state.neurological = action.payload;
    },
    setBehavioralData: (state, action) => {
      state.behavioral = action.payload;
    },
    // add more section reducers here
  },
});

export const {
  setNeurologicalData,
  setBehavioralData,
} = formDataSlice.actions;

export default formDataSlice.reducer;
