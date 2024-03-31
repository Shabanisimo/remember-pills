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
    setMedications: (state, action: PayloadAction<IMedication[]>) => {
      state.medications = [...action.payload];
    },
    addMedication: (state, action: PayloadAction<IMedication>) => {
      state.medications.push(action.payload);
    },
    removeMedication: (
      state,
      action: PayloadAction<{medicationId: string}>,
    ) => {
      const {medicationId} = action.payload;
      state.medications = state.medications.filter(
        medication => medication.id !== medicationId,
      );
    },
    updateMedication: (state, action: PayloadAction<IMedication>) => {
      const medicationIndex = state.medications.findIndex(
        medication => medication.id === action.payload.id,
      );
      state.medications[medicationIndex] = action.payload;
    },
    resetMedications: state => {
      state.medications = [];
    },
  },
});

export const {
  addMedication,
  removeMedication,
  updateMedication,
  resetMedications,
} = medicationsSlice.actions;
export default medicationsSlice.reducer;
