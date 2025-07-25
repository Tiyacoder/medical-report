import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basicInfo: {
    heartbeat: '',
    glucoseLevel: '',
    bpSystolic: '',
    bpDiastolic: '',
    bloodTo: '',
    bloodDo: '',
    identificationMark: '',
    generalDevelopment: '',
    weight: '',
    height: ''
  },
  urinalysis: {
    albumin: '',
    sugar: '',
    reaction: ''
  },
  pathologicalInvestigations: {
    hb: '',
    esr: '',
    platelets: '',
    sugarPP: '',
    sugarFasting: '',
    lupidProfile: '',
    bloodUrea: '',
    creatinineLFT: '',
    urineRoutine: '',
    stoolRoutine: ''
  }
};

const medicalInfoSlice = createSlice({
  name: 'medicalInfo',
  initialState,
  reducers: {
    setBasicInfo: (state, action) => {
      state.basicInfo = action.payload;
    },
    setUrinalysis: (state, action) => {
      state.urinalysis = action.payload;
    },
    setPathologicalInvestigations: (state, action) => {
      state.pathologicalInvestigations = action.payload;
    }
  }
});

export const {
  setBasicInfo,
  setUrinalysis,
  setPathologicalInvestigations
} = medicalInfoSlice.actions;

export default medicalInfoSlice.reducer;
