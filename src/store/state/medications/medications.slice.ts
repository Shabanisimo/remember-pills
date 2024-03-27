import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IMedication} from '../../../models';

export interface MedicationsState {
  medications: IMedication[];
}

const initialState: MedicationsState = {
  medications: [],
};

const medicationsSlice = createSlice({
  name: 'medications',
  initialState,
  reducers: {
    addMedication: (state, action: PayloadAction<IMedication>) => {
      state.medications.push(action.payload);
    },
    resetMedications: state => {
      state.medications = [];
    },
  },
});

export const {addMedication} = medicationsSlice.actions;
export default medicationsSlice.reducer;
