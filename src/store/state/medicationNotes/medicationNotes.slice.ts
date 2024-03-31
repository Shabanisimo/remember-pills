import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IMedicationNote} from '../../../models/medicationNotes';

export interface MedicationsNotesState {
  medicationNotes: {[key: string]: IMedicationNote[]};
}

const initialState: MedicationsNotesState = {
  medicationNotes: {},
};

const medicationNotesSlice = createSlice({
  name: 'medicationNotes',
  initialState,
  reducers: {
    addMedicationNote: (
      state,
      action: PayloadAction<{id: string; note: IMedicationNote}>,
    ) => {
      const {id, note} = action.payload;
      if (!state.medicationNotes[id]) {
        state.medicationNotes[id] = [];
      }
      state.medicationNotes[id].push(note);
    },
    removeMedicationNotes: (
      state,
      action: PayloadAction<{medicationId: string}>,
    ) => {
      const {medicationId} = action.payload;

      let nextMedicationNotes = state.medicationNotes;
      if (nextMedicationNotes[medicationId]) {
        delete nextMedicationNotes[medicationId];
      }
      state.medicationNotes = nextMedicationNotes;
    },
    resetMedicationNotes: state => {
      state.medicationNotes = {};
    },
  },
});

export const {addMedicationNote, removeMedicationNotes, resetMedicationNotes} =
  medicationNotesSlice.actions;
export default medicationNotesSlice.reducer;
