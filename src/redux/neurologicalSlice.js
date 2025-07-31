// redux/neurologicalSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  assessment: {
    superficialReflexes: '',
    deepReflexes: '',
    peripheralCirculation: '',
    vibrationalSyndromes: ''
  },
  disturbances: {
    speechDefect: '',
    emotionalChanges: '',
    tremor: '',
    behaviourDisturbance: ''
  }
};

const neurologicalSlice = createSlice({
  name: 'neurological',
  initialState,
  reducers: {
    setAssessment(state, action) {
      state.assessment = { ...state.assessment, ...action.payload };
    },
    setDisturbances(state, action) {
      state.disturbances = { ...state.disturbances, ...action.payload };
    }
  }
});

export const { setAssessment, setDisturbances } = neurologicalSlice.actions;
export default neurologicalSlice.reducer;
