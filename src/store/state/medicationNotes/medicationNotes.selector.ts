import {createSelector} from '@reduxjs/toolkit';

import {AppState} from '../../app-state';
import {sertMedicationNotesByDate} from '../../../utils/sort';

const eventsSelector = (state: AppState) => state.medicationNotes;

export const getNoteByMedicationId = (id: string) =>
  createSelector(eventsSelector, state => {
    return sertMedicationNotesByDate(state.medicationNotes[id]) || [];
  });
