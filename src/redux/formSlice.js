import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basicInfo: {},
  pathological: {},
  urinalysis: {},
  // Add others if needed
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setBasicInfo: (state, action) => {
      state.basicInfo = action.payload;
    },
    setPathological: (state, action) => {
      state.pathological = action.payload;
    },
    setUrinalysis: (state, action) => {
      state.urinalysis = action.payload;
    },
  },
});

export const { setBasicInfo, setPathological, setUrinalysis } = formSlice.actions;
export default formSlice.reducer;
